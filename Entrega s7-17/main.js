const produtos =[
    {
        nome:"Banana",
        preco:9.99,
        categoria:"frutas",
        image:"./imagens/800px-Banana.png",
        imgDescricao:"Banana"
    },
    {
        nome:"Melancia",
        preco:9.99,
        categoria:"frutas",
        image:"./imagens/melancia.jpg",
        imgDescricao:"melancia"
    },
    {
        nome:"Uva",
        preco:9.99,
        categoria:"frutas",
        image:undefined,
        imgDescricao:"Uva"
    },
    {
        nome:"Coca-cola",
        preco:9.99,
        categoria:"bebidas",
        image:"./imagens/coca.jpg",
        imgDescricao:"Coca-cola"
    },
    {
        nome:"Suco",
        preco:9.99,
        categoria:"bebidas",
        image:undefined,
        imgDescricao:"Suco"
    },
    {
        nome:"Cerveja",
        preco:9.99,
        categoria:"bebidas",
        image:"./imagens/cerveja.jpg",
        imgDescricao:"Cerveja"
    },
    {
        nome:"Sabão",
        preco:9.99,
        categoria:"higiene",
        image:undefined,
        imgDescricao:"Sabão"
    },
    {
        nome:"Detergente",
        preco:9.99,
        categoria:"higiene",
        image:"./imagens/detergente.jpg",
        imgDescricao:"Detergente"
    },
    {
        nome:"Sabonete",
        preco:9.99,
        categoria:"higiene",
        image:"./imagens/sabonete.jpg",
        imgDescricao:"Sabonete"
    },
    {
        nome:"Pêra",
        preco:9.99,
        categoria:"frutas",
        image:undefined,
        imgDescricao:"Pêra"
    },
    {
        nome:"Agua",
        preco:5.99,
        categoria:"bebidas",
        image:undefined,
        imgDescricao:"Agua"
    },
    {
        nome:"Condicionador",
        preco:4.99,
        categoria:"higiene",
        image:undefined,
        imgDescricao:"Condicionador"
    }
]
for(let i =0;i<produtos.length;i++){
    if(produtos[i].image == undefined){
        produtos[i].image = "./imagens/produto-sem-imagem.png"
    }
}
const body   = document.body;
const main   = document.createElement("main");
body.appendChild(main);

const h1     =document.createElement("h1");
h1.innerText = "Mercadinho Kenzie";
h1.id        = "titulo";
main.appendChild(h1);

const sectionFrutas        = document.createElement("section");
sectionFrutas.className    = "sessaoprodutos";
sectionFrutas.id           = "frutas";
main.appendChild(sectionFrutas);

const sectionBebidas       = document.createElement("section");
sectionBebidas.className   = "sessaoprodutos";
sectionBebidas.id          = "bebidas";
main.appendChild(sectionBebidas); 

const sectionHigiene       = document.createElement("section");
sectionHigiene.className   = "sessaoprodutos";
sectionHigiene.id          = "higiene" ;
main.appendChild(sectionHigiene);

const sections = document.getElementsByTagName("section");



function CriarUl(sessao){
    for(let i =0;i<sessao.length;i++){
        const ul = document.createElement("ul");
        ul.id=`ul${i}`
        sections[i].appendChild(ul);
    
        
    }    
}
CriarUl(sections)

const ul0 = document.getElementById("ul0");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("ul2")


function criarLi(produtos){
    for(let i = 0;i<produtos.length;i++){
        
        if(produtos[i].categoria =="frutas"){
            const produtoli      = document.createElement("li");
            produtoli.className  = "produto";
            const produtomain    = document.createElement("main");
            produtomain.className= "produto-main";
            const h1             = document.createElement("h1");
            h1.innerText         =`${produtos[i].nome}`;
            h1.className         ="produto-title"
            const h5             = document.createElement("h5");
            h5.innerText         =`${produtos[i].categoria}`;
            h5.className         = "produto-category";
            const strongPreco    = document.createElement("strong");
            strongPreco.innerText=`${produtos[i].preco}`;
            strongPreco.className= "produto-price"
            const img            = document.createElement("img");
            img.className        = "produto-img"
            img.src              = `${produtos[i].image}`;
            img.alt              = `${produtos[i].imgDescricao}`;
            produtoli.appendChild(img)
            produtoli.appendChild(produtomain)
            produtomain.appendChild(h1)
            produtomain.appendChild(h5)
            produtomain.appendChild(strongPreco)
            ul0.appendChild(produtoli)
        }
        if(produtos[i].categoria =="bebidas"){
            const produtoli      = document.createElement("li");
            produtoli.className  = "produto";
            const produtomain    = document.createElement("main");
            produtomain.className= "produto-main";
            const h1             = document.createElement("h1");
            h1.innerText         =`${produtos[i].nome}`;
            h1.className         ="produto-title"
            const h5             = document.createElement("h5");
            h5.innerText         =`${produtos[i].categoria}`;
            h5.className         = "produto-category";
            const strongPreco    = document.createElement("strong");
            strongPreco.innerText=`${produtos[i].preco}`;
            strongPreco.className= "produto-price"
            const img            = document.createElement("img");
            img.className        = "produto-img"
            img.src              = `${produtos[i].image}`;
            img.alt              = `${produtos[i].imgDescricao}`;
            produtoli.appendChild(img)
            produtoli.appendChild(produtomain)
            produtomain.appendChild(h1)
            produtomain.appendChild(h5)
            produtomain.appendChild(strongPreco)
            ul1.appendChild(produtoli)
        }
        if(produtos[i].categoria =="higiene"){
            const produtoli      = document.createElement("li");
            produtoli.className  = "produto";
            const produtomain    = document.createElement("main");
            produtomain.className= "produto-main";
            const h1             = document.createElement("h1");
            h1.innerText         =`${produtos[i].nome}`;
            h1.className         ="produto-title"
            const h5             = document.createElement("h5");
            h5.innerText         =`${produtos[i].categoria}`;
            h5.className         = "produto-category";
            const strongPreco    = document.createElement("strong");
            strongPreco.innerText=`${produtos[i].preco}`;
            strongPreco.className= "produto-price"
            const img            = document.createElement("img");
            img.className        = "produto-img"
            img.src              = `${produtos[i].image}`;
            img.alt              = `${produtos[i].imgDescricao}`;
            produtoli.appendChild(img)
            produtoli.appendChild(produtomain)
            produtomain.appendChild(h1)
            produtomain.appendChild(h5)
            produtomain.appendChild(strongPreco)
            ul2.appendChild(produtoli)
        }
    }
}
criarLi(produtos)






 

    
 

    
