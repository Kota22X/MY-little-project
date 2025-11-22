<?php
include "config.php";

$stmt = $pdo->prepare("INSERT INTO games (nome, genero, ano, capa)
VALUES (:n, :g, :a, :c)");

$stmt->execute([
    ':n' => $_POST['nome'],
    ':g' => $_POST['genero'],
    ':a' => $_POST['ano'],
    ':c' => $_POST['capa']
]);

echo "<script>alert('Jogo adicionado!'); window.location='catalogo.php';</script>";
?>
