<?php
// Kontaktformular (src/app/kontakt/KontaktContent.tsx) — erwartet JSON.
require __DIR__ . '/_mail.php';

require_post();

$data = json_decode(file_get_contents('php://input'), true);
if (!is_array($data)) {
    respond(400, ['error' => 'Ungültige Anfrage.']);
}

$name = field_line($data, 'name');
$email = field_line($data, 'email');
$telefon = field_line($data, 'telefon', 50);
$firma = field_line($data, 'firma');
$nachricht = field_text($data, 'nachricht');
$datenschutz = !empty($data['datenschutz']);

if ($name === '' || $email === '' || $nachricht === '' || !$datenschutz) {
    respond(400, ['error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
}
if (!is_valid_email($email)) {
    respond(400, ['error' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
}

$body = "Neue Kontaktanfrage über www.raedlog.de\n\n"
    . "Name:    $name\n"
    . "E-Mail:  $email\n"
    . 'Telefon: ' . ($telefon !== '' ? $telefon : '–') . "\n"
    . 'Firma:   ' . ($firma !== '' ? $firma : '–') . "\n\n"
    . "Nachricht:\n$nachricht\n\n"
    . "Datenschutzerklärung akzeptiert: ja\n";

// Eingabedaten werden bewusst nicht geloggt (Datenschutz).
if (!send_mail("Kontaktanfrage von $name", $body, $email, $name)) {
    respond(500, ['error' => 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.']);
}

respond(200, ['success' => true, 'message' => 'Ihre Nachricht wurde erfolgreich gesendet.']);
