// Ctrl + K + C (SELECIONADO) - Comenta o código

// const fila = ["Luiz", "Ana", "Roberta"];
// let contagem = 1;

// function atenderClientes() {
//     while (fila.length > 0) {
//         verificarVazio();
//         let nome = fila.shift();
//         console.log("Atendendo " + contagem + "º cliente: " + nome);
//         contagem++;
//     }
// }

// function verificarVazio() {
//     if (fila.length == 0) {
//         console.log("Fila Vazia");
//     } else {
//         console.log("Fila Atual: " + fila);
//     }
// }

// atenderClientes();

let fila = [];

function adicionarCliente() {
    let nome = prompt("Digite o nome do cliente:");

    if (nome) {
        let confirma = confirm(`Deseja adicionar o cliente ${nome}?`)
        if (confirma) {
            fila.push(nome);
        }
    } else {
        alert("[ERRO] Nenhum nome inserido")
    }
}

function atenderCliente() {
    if (fila.length > 0) {
        let nome = fila.shift();
        alert(`Cliente ${nome} atendido!`)
    } else {
        alert("[ERRO] Fila vazia")
    }
}




