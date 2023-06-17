let frutas = [];
let laticinios = [];
let doces = [];
let congelados = [];
let comida = "";
let categoria = "";

let adicionar = "sim";
while(adicionar != "não") {
    adicionar = prompt("Quer adicionar uma comida na lista? 'sim' ou 'não'.");
    while(adicionar != "sim" && adicionar != "não") {
        alert(`Entrada inválida!`);
        adicionar = prompt("Quer adicionar uma comida na lista? 'sim' ou 'não'.");
    }

    if (adicionar === "não") {
        break;
    }

    comida = prompt("Qual comida você quer na lista?");
    categoria = prompt("Qual a categoria dessa comida: 'frutas', 'laticínios', 'doces' ou 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if(categoria === 'laticínios'){
        laticinios.push(comida);
    } else if(categoria === 'doces'){
        doces.push(comida);
    } else if(categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Essa categoria não foi configurada.")
    }
}
alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Doces: ${doces}\n Congelados: ${congelados}`);
