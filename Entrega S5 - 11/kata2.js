function cashMachine(saque,fixo,vendas){
let salário = 0;
let notas = [50,100];

let saqueErrado = "Saque não permitido."

    if(vendas <= 1200){
        salário = fixo + vendas * 3/100
        
    }
    else{
        salário = fixo + vendas * 5/100
        }
let sobrou = salário - saque       
    if(saque<100){
        return `${saqueErrado}, Só é possivel sacar 100,200,300,400 ou 500.`
    }
    if(saque == 100){
        return `Você pode sacar 2 notas de ${notas[0]} ou 1 nota de ${notas[1]},seu salário é de ${salário},e sobrou ${sobrou}.`
    }
    if(saque == 200){
        return `Você pode sacar 4 notas de ${notas[0]} ou 1 nota de ${notas[1]} e 2 notas de ${notas[0]},seu salário é de ${salário},e sobrou ${sobrou}.`
    }
    if(saque == 300){
        return `Você pode sacar 4 notas de ${notas[0]} e 1 nota de ${notas[1]} ou 2 notas de ${notas[0]} e 2 notas de ${notas[1]} ou 3 notas de ${notas[1]} ,seu salário é de ${salário},e sobrou ${sobrou}.`
    }
    if(saque == 400){
        return `Você pode sacar 4 notas de ${notas[0]} e 2 notas de ${notas[1]} ou 2 notas de ${notas[0]} e 3 notas de ${notas[1]} ou 4 notas de ${notas[1]} ,seu salário é de ${salário},e sobrou ${sobrou}.`
    }

if(saque == 500){
        return `Você pode sacar 4 notas de ${notas[0]} e 3 notas de ${notas[1]} ou 2 notas de ${notas[0]} e 4 notas de ${notas[1]},seu salário é de ${salário},e sobrou ${sobrou}.`
    }
    else{
        return `${saqueErrado} e seu salário é de ${salário}.` 
    }




}

