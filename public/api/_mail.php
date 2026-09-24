<?php
// Gemeinsame Helfer fuer contact.php und karriere.php.
// Direkter Aufruf ist per api/.htaccess gesperrt.
// Bewusst PHP-7.2-kompatibel (all-inkl-Standard fuer den Ordner).

// PHP-Warnungen (z. B. von mail()) duerfen die JSON-Antwort nicht zerstoeren.
ini_set('display_errors', '0');

// Empfaenger der Formular-Mails.
const MAIL_TO = 'hoffmann@raedlog.de';
// Absender muss eine Adresse einer bei all-inkl gehosteten Domain sein,
// sonst landen die Mails im Spam. Antworten gehen per Reply-To an den Nutzer.
const MAIL_FROM = 'hoffmann@raedlog.de';
const MAIL_FROM_NAME = 'RÄDLOG Website';

function respond($status, array $body)
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    header('Cache-Control: no-store');
    echo json_encode($body, JSON_UNESCAPED_UNICODE);
    exit;
}

function require_post()
{
    if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
        header('Allow: POST');
        respond(405, ['error' => 'Methode nicht erlaubt.']);
    }
}

// Einzeiliges Feld: Zeilenumbrueche entfernen (verhindert Header-Injection).
function field_line(array $src, $key, $maxLen = 200)
{
    $value = isset($src[$key]) && is_string($src[$key]) ? $src[$key] : '';
    return truncate(trim(preg_replace('/[\r\n\t]+/', ' ', $value)), $maxLen);
}

function field_text(array $src, $key, $maxLen = 5000)
{
    $value = isset($src[$key]) && is_string($src[$key]) ? $src[$key] : '';
    return truncate(trim($value), $maxLen);
}

// UTF-8-sicher kuerzen, ohne von der mbstring-Erweiterung abzuhaengen.
function truncate($value, $maxLen)
{
    return preg_match('/^.{0,' . (int) $maxLen . '}/us', $value, $m) ? $m[0] : '';
}

function is_valid_email($email)
{
    return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
}

function encode_header($text)
{
    return '=?UTF-8?B?' . base64_encode($text) . '?=';
}

/**
 * Verschickt eine Text-Mail, optional mit einem Anhang
 * (['name' => ..., 'type' => ..., 'content' => binaer]).
 */
function send_mail($subject, $body, $replyToEmail, $replyToName, $attachment = null)
{
    $headers = [
        'From: ' . encode_header(MAIL_FROM_NAME) . ' <' . MAIL_FROM . '>',
        'Reply-To: ' . encode_header($replyToName) . ' <' . $replyToEmail . '>',
        'MIME-Version: 1.0',
    ];

    if ($attachment === null) {
        $headers[] = 'Content-Type: text/plain; charset=UTF-8';
        $headers[] = 'Content-Transfer-Encoding: base64';
        $message = chunk_split(base64_encode($body));
    } else {
        $boundary = 'b' . bin2hex(random_bytes(12));
        $headers[] = 'Content-Type: multipart/mixed; boundary="' . $boundary . '"';
        $filename = encode_header($attachment['name']);
        $message = "--$boundary\r\n"
            . "Content-Type: text/plain; charset=UTF-8\r\n"
            . "Content-Transfer-Encoding: base64\r\n\r\n"
            . chunk_split(base64_encode($body))
            . "--$boundary\r\n"
            . 'Content-Type: ' . $attachment['type'] . '; name="' . $filename . "\"\r\n"
            . "Content-Transfer-Encoding: base64\r\n"
            . 'Content-Disposition: attachment; filename="' . $filename . "\"\r\n\r\n"
            . chunk_split(base64_encode($attachment['content']))
            . "--$boundary--\r\n";
    }

    return mail(MAIL_TO, encode_header($subject), $message, implode("\r\n", $headers), '-f' . MAIL_FROM);
}
