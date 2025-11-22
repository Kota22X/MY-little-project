<?php
include "config.php";
$id = $_GET['id'];

$stmt = $pdo->prepare("SELECT * FROM games WHERE id = :id");
$stmt->execute([':id'=>$id]);
$g = $stmt->fetch();
?>

<form action="update.php" method="POST">
    <input type="hidden" name="id" value="<?= $g['id'] ?>">

    Nome: <input name="nome" value="<?= $g['nome'] ?>"><br>
    Gênero: <input name="genero" value="<?= $g['genero'] ?>"><br>
    Ano: <input name="ano" value="<?= $g['ano'] ?>"><br>
    Capa: <input name="capa" value="<?= $g['capa'] ?>"><br>

    <button type="submit">Salvar</button>
</form>
