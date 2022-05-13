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

const section = document.getElementsByTagName("section");


function CriarUl(sessao){
    for(let i =0;i<sessao.length;i++){
        const ul = document.createElement("ul");
        ul.id=`ul${i}`
        section[i].appendChild(ul);
    
        
    }    
}
CriarUl(section)

const ul0 = document.getElementById("ul0");
const ul1 = document.getElementById("ul1");
const ul2 = document.getElementById("ul2")


function criarLi(produtos){
    for(let i = 0;i<produtos.length;i++){
        
        if(produtos[i].categoria =="frutas"){
            const produtoli = document.createElement("li");
            const h2        = document.createElement("h2");
            h2.innerText    =`${produtos[i].nome}`;
            const p         =document.createElement("p");
            p.innerText     =`${produtos[i].categoria}`
            const preco     = document.createElement("p");
            preco.innerText=`${produtos[i].preco}`;
            const img       = document.createElement("img");
            img.src         = `${produtos[i].image}`
            img.alt         = `${produtos[i].imgDescricao}`
            produtoli.appendChild(img)
            produtoli.appendChild(h2)
            produtoli.appendChild(p)
            produtoli.appendChild(preco)
            ul0.appendChild(produtoli)
        }
        if(produtos[i].categoria =="bebidas"){
            const produtoli = document.createElement("li");
            const h2        = document.createElement("h2");
            h2.innerText    =`${produtos[i].nome}`;
            const p         =document.createElement("p");
            p.innerText     =`${produtos[i].categoria}`
            const preco     = document.createElement("p");
            preco.innerText=`${produtos[i].preco}`;
            const img       = document.createElement("img");
            img.src         = `${produtos[i].image}`
            img.alt         = `${produtos[i].imgDescricao}`
            produtoli.appendChild(img)
            produtoli.appendChild(h2)
            produtoli.appendChild(p)
            produtoli.appendChild(preco)
            ul1.appendChild(produtoli)
        }
        if(produtos[i].categoria =="higiene"){
            const produtoli = document.createElement("li");
            const h2        = document.createElement("h2");
            h2.innerText    =`${produtos[i].nome}`;
            const p         =document.createElement("p");
            p.innerText     =`${produtos[i].categoria}`
            const preco     = document.createElement("p");
            preco.innerText=`${produtos[i].preco}`;
            const img       = document.createElement("img");
            img.src         = `${produtos[i].image}`
            img.alt         = `${produtos[i].imgDescricao}`
            produtoli.appendChild(img)
            produtoli.appendChild(h2)
            produtoli.appendChild(p)
            produtoli.appendChild(preco)
            ul2.appendChild(produtoli)
        }
    }
}
criarLi(produtos)






 

    
 

    
