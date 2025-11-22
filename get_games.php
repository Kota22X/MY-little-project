<?php
include "config.php";

$stmt = $pdo->prepare("SELECT * FROM games ORDER BY id DESC");
$stmt->execute();

$games = $stmt->fetchAll(PDO::FETCH_ASSOC);

header('Content-Type: application/json');
echo json_encode($games);
?>
