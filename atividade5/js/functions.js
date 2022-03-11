botaoClicado = false
visualizarRanking = async () => {   
    dados = await fetch("../dadosRanking.json");
    console.log(dados);
    conteudo = await dados.json()
    if(botaoClicado == true) {
        var element = document.getElementById("cabecalho");
        element.remove();

        filtrarNivel.forEach(el => {
            element2 = document.getElementById("corpo");
            element2.remove(); })
        
    }

    tabela = document.getElementById("tabUsers")
    
    nivel = document.getElementById("nivel").value

    filtrarNivel = conteudo.users.filter(element => element.level == nivel)
    
    //filtrarNivel.sort((a,b) => { return a.score < b.score })

    filtrarNivel.sort((a, b) => { return ((a.score > b.score) ? -1 : ((a.score < b.score) ? 1 : 0)) });

    filtrarNivel.map(element => delete element.level)
    
    linha1 = document.createElement("tr")
    linha1.setAttribute("id", "cabecalho")
    nomesCabelho = ["Usuário", "Pontuação"]
    for (item in nomesCabelho) {
        coluna1 = document.createElement("th")
        coluna1.innerHTML = nomesCabelho[item];
        linha1.appendChild(coluna1);
        this.tabela.appendChild(linha1);
    }
    linha1.appendChild(coluna1);
    this.tabela.appendChild(linha1);

    filtrarNivel.forEach(user => {
        linha = document.createElement("tr")
        linha.setAttribute("id", "corpo")
        for (item in user) {
            coluna = document.createElement("td");
            coluna.innerHTML = user[item];
            linha.appendChild(coluna);
        }
        linha.appendChild(coluna);
        this.tabela.appendChild(linha);
    
    })

    botaoClicado = true
}

