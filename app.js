//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let amigos = []

function adicionarAmigo() {
    let amigo = document.getElementById("amigo").value;

    if(amigo === "") {
        alert("Por favor, insira um nome");
        return;
    }

    amigos.push(amigo);

    document.getElementById("amigo").value = "";

    atualizarAmigos();
}

function atualizarAmigos() {
    let lista = document.getElementById("listaAmigos");
    
    lista.innerHTML = "";

    for(let i = 0; i < amigos.length; i++) {
        let item = document.createElement("li");
        item.textContent = amigos[i];
        lista.appendChild(item);
    }
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Nenhum amigo disponível para o sorteio.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    let amigoSorteado = amigos[indiceAleatorio];

    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}