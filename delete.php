<?php
include "config.php";
$id = $_GET['id'];

$stmt = $pdo->prepare("DELETE FROM games WHERE id=:id");
$stmt->execute([':id' => $id]);

echo "<script>alert('Jogo removido!'); window.location='catalogo.php';</script>";
?>
