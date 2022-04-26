//Preparação para entregar a atividade.



//.1-Escreva uma função chamada snapCrackle que leva um parâmetro denominado maxValue. OK 
//.2-Esta função deve fazer um loop de 1 até maxValue. OK
//.3-Retornar uma string com as seguintes condições. OK
//.4-Se o número for ímpar, no lugar dele, retornar "Snap" no final da string. OK
//.5-Se o número for múltiplo de 5, no lugar dele, retornar "Crackle" no final da string. OK
//.6-Se o número for tanto ímpar quanto múltiplo de 5, no lugar dele, retornar "SnapCrackle" no final da string.
//.7-Se número não for nem ímpar e nem múltiplo de 5, concatenar o próprio número no final da string.
//.8-seus itens devem ser separados sempre por vírgula e espaço.
//.9-Esta função deve retornar a string obtida.


//.transformar o parâmetro(numero) em um array. 

function snapCrackle(maxValue){


let resultado = []  

for(let i  = 1; i <= maxValue; i++){
   
    if(i %2 !== 0 && i%5 == 0){
        resultado.push("SnapCrackle")
    }
    else if(i %5 == 0){
        resultado.push("crackle")
    }
    else if(i %2 !== 0){
        resultado.push("Snap")
    }
    else{
        resultado.push(i)
    }
       
        
    
}
let strResultado = resultado.join(",")
return strResultado
}
console.log(snapCrackle(5))

