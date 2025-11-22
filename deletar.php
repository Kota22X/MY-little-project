<?php
$id = $_GET['id'];
echo "
<script>
if (confirm('Tem certeza que deseja deletar?')) {
    window.location='delete.php?id=$id';
} else {
    window.location='catalogo.php';
}
</script>
";
