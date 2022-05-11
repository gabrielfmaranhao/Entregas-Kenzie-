let produts = [
    {
        nome:"Banana",
        preco:8.99
    },
    {
        nome:"Maçã",
        preco:5.99
    },
    {   nome:"Pêra",
        preco:7.99
    },
    {
        nome:"Uva",
        preco:8.99
    }
]


const buttonFinalizar = document.createElement("button");
buttonFinalizar.innerText = "Finalizar";

let soma = 0;


const body = document.querySelector("body");



const main = document.createElement("main");
body.appendChild(main)

const titulo = document.createElement('h1');
titulo.innerText ="Mercadinho kenzie"
main.appendChild(titulo)

const produtsDetails = document.createElement("ul");
main.appendChild(produtsDetails);

function interaçãoComLi(produts){
    produts.forEach((produto) => {
    const produtoLi = document.createElement("li");

    produtoLi.innerText = `${produto.nome} ${produto.preco}`;

    const button     = document.createElement("button");
    button.id = `${produto.nome}`;
    produtoLi.appendChild(button);

    

    button.innerText="Adicionar ao total";

    produtsDetails.appendChild(produtoLi)
    button.addEventListener("click",test)
    function test(){
        soma=soma+produto.preco
        atualizacao();
        }
    
    });
    
}
interaçãoComLi(produts)

const total = document.createElement("li");
total.innerText = `TOTAL ${soma}`;
function atualizacao(){
    total.innerText = `TOTAL ${soma.toFixed(2)}`;
}
produtsDetails.appendChild(total);












