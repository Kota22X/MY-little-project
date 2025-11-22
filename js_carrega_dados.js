fetch("get_games.php")
  .then(r => r.json())
  .then(dados => {
    const lista = document.getElementById("lista-games");
    lista.innerHTML = "";

    dados.forEach(game => {
      lista.innerHTML += `
        <div class="card">
          <img src="${game.capa}" class="capa">
          <h2>${game.nome}</h2>
          <p>${game.genero}</p>
          <p>${game.ano}</p>

          <a href="editar.php?id=${game.id}" class="btn">Editar</a>
          <a href="deletar.php?id=${game.id}" class="btn btn-red">Deletar</a>
        </div>
      `;
    });
  });
