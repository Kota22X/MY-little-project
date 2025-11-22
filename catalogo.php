<?php
// Load database
require_once "config.php";

// Fetch all games
$stmt = $pdo->prepare("SELECT * FROM games ORDER BY id DESC");
$stmt->execute();
$games = $stmt->fetchAll(PDO::FETCH_ASSOC);
?>
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Catálogo - Games World</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>

<header>
    <h1>Catálogo de Jogos</h1>
    <button id="toggle-theme" title="Alternar tema">🌙</button>
</header>

<nav>
    <a href="index.html">Home</a> |
    <b>Catálogo</b> |
    <a href="sac.html">SAC</a> |
    <a href="equipe.html">Equipe</a>
</nav>

<main>
    <h2>Lista de Jogos</h2>
    <p>Confira abaixo alguns dos jogos mais populares do mundo gamer:</p>

    <table border="1" cellpadding="10" cellspacing="0">
        <thead>
            <tr>
                <th>Capa</th>
                <th>Nome</th>
                <th>Gênero</th>
                <th>Ano de Lançamento</th>
            </tr>
        </thead>
        <tbody>
            <?php foreach ($games as $g): ?>
                <tr>
                    <td><img src="<?= $g['capa'] ?>" width="90"></td>
                    <td><?= $g['nome'] ?></td>
                    <td><?= $g['genero'] ?></td>
                    <td><?= $g['ano'] ?></td>
                </tr>
            <?php endforeach; ?>
        </tbody>
    </table>
</main>

<footer>
    <p>© 2025 Games World. Todos os direitos reservados.</p>
</footer>

<script>
    const toggleButton = document.getElementById('toggle-theme');
    const body = document.body;

    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        body.classList.add('light-mode');
        toggleButton.textContent = '☀️';
    }

    // Toggle theme on button click
    toggleButton.addEventListener('click', () => {
        body.classList.toggle('light-mode');
        if(body.classList.contains('light-mode')) {
            toggleButton.textContent = '☀️';
            localStorage.setItem('theme', 'light');
        } else {
            toggleButton.textContent = '🌙';
            localStorage.setItem('theme', 'dark');
        }
    });
</script>


</body>
</html>
