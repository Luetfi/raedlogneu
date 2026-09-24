<?php
// Bewerbungsformular (src/app/karriere/KarriereContent.tsx) — multipart/form-data
// mit optionalem Lebenslauf.
require __DIR__ . '/_mail.php';

require_post();

$vorname = field_line($_POST, 'vorname', 100);
$nachname = field_line($_POST, 'nachname', 100);
$email = field_line($_POST, 'email');
$telefon = field_line($_POST, 'telefon', 50);
$nachricht = field_text($_POST, 'nachricht');
$datenschutz = !empty($_POST['datenschutz']);

if ($vorname === '' || $nachname === '' || $email === '' || $nachricht === '' || !$datenschutz) {
    respond(400, ['error' => 'Bitte füllen Sie alle Pflichtfelder aus.']);
}
if (!is_valid_email($email)) {
    respond(400, ['error' => 'Bitte geben Sie eine gültige E-Mail-Adresse ein.']);
}

$attachment = null;
$file = isset($_FILES['lebenslauf']) ? $_FILES['lebenslauf'] : null;
if ($file && $file['error'] !== UPLOAD_ERR_NO_FILE) {
    $maxSize = 5 * 1024 * 1024;
    if ($file['error'] === UPLOAD_ERR_INI_SIZE || $file['error'] === UPLOAD_ERR_FORM_SIZE
        || ($file['error'] === UPLOAD_ERR_OK && $file['size'] > $maxSize)) {
        respond(400, ['error' => 'Die Datei darf maximal 5 MB groß sein.']);
    }
    if ($file['error'] !== UPLOAD_ERR_OK || !is_uploaded_file($file['tmp_name'])) {
        respond(400, ['error' => 'Die Datei konnte nicht hochgeladen werden.']);
    }

    // Endung pruefen; der vom Browser gemeldete MIME-Typ ist nicht vertrauenswuerdig.
    $types = [
        'pdf' => 'application/pdf',
        'doc' => 'application/msword',
        'docx' => 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    ];
    $ext = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
    if (!isset($types[$ext])) {
        respond(400, ['error' => 'Bitte laden Sie eine PDF- oder Word-Datei hoch.']);
    }

    $attachment = [
        'name' => 'Lebenslauf_' . preg_replace('/[^A-Za-z0-9_-]+/', '_', "{$vorname}_{$nachname}") . '.' . $ext,
        'type' => $types[$ext],
        'content' => file_get_contents($file['tmp_name']),
    ];
}

$name = "$vorname $nachname";
$body = "Neue Initiativbewerbung über www.raedlog.de\n\n"
    . "Name:    $name\n"
    . "E-Mail:  $email\n"
    . 'Telefon: ' . ($telefon !== '' ? $telefon : '–') . "\n\n"
    . "Nachricht:\n$nachricht\n\n"
    . 'Lebenslauf: ' . ($attachment ? 'im Anhang' : 'nicht beigefügt') . "\n"
    . "Datenschutzerklärung akzeptiert: ja\n";

// Bewerbungsdaten werden bewusst nicht geloggt (Datenschutz).
if (!send_mail("Bewerbung von $name", $body, $email, $name, $attachment)) {
    respond(500, ['error' => 'Ein Fehler ist aufgetreten. Bitte versuchen Sie es später erneut.']);
}

respond(200, ['success' => true, 'message' => 'Ihre Bewerbung wurde erfolgreich gesendet.']);
