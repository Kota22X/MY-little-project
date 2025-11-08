document.addEventListener("DOMContentLoaded", async () => {
    const tabela = document.querySelector("table tbody");

    try {
        // Carrega o arquivo JSON
        const resposta = await fetch("dados.json");
        if (!resposta.ok) throw new Error("Erro ao carregar o arquivo de dados.");
        const jogos = await resposta.json();

        // Limpa o corpo da tabela (caso tenha algo dentro)
        tabela.innerHTML = "";

        // Cria uma linha para cada jogo
        jogos.forEach(jogo => {
            const linha = document.createElement("tr");
            linha.innerHTML = `
                <td><img src="${jogo.capa}" alt="${jogo.nome}" width="120"></td>
                <td>${jogo.nome}</td>
                <td>${jogo.genero}</td>
                <td>${jogo.ano}</td>
            `;
            tabela.appendChild(linha);
        });

    } catch (erro) {
        console.error("Erro:", erro);
        tabela.innerHTML = `<tr><td colspan="4" style="color:red;text-align:center;">Erro ao carregar os dados do catálogo.</td></tr>`;
    }
});
