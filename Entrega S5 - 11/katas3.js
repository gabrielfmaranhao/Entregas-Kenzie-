// calculateStock()
// Dada a quantidade de estoque de uma loja de produtos. 
//Crie uma função que receba como parâmetro:

// a quantidade atual em estoque
// a quantidade máxima em estoque
// a quantidade mínima em estoque de um produto
// E então faça com que a sua função:

// calcule a quantidade média dos produtos. ((quantidade média = quantidade máxima + quantidade mínima)/2)
// se a quantidade em estoque for maior ou igual à quantidade média, retorne a mensagem: 'Não efetuar compra'
// senão retorne: 'Efetuar compra'

function estoque(atual,maxima,minima){
    let media = (maxima + minima)/2
    if(atual>=media){
        return 'Não efetuar compra'
    }
    else{
        return "Efetuar compra"
    }
}
