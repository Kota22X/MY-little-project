<?php
include "config.php";

$stmt = $pdo->prepare(
"UPDATE games SET nome=:n, genero=:g, ano=:a, capa=:c WHERE id=:id"
);

$stmt->execute([
 ':n'=>$_POST['nome'],
 ':g'=>$_POST['genero'],
 ':a'=>$_POST['ano'],
 ':c'=>$_POST['capa'],
 ':id'=>$_POST['id']
]);

echo "<script>alert('Jogo atualizado!'); window.location='catalogo.php';</script>";
?>
