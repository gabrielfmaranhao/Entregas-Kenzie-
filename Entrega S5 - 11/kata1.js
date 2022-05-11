function calculateSalary(fixo,vendas){
    let resultado = 0;

    if(vendas <= 1200){
        resultado = fixo + vendas * 3/100
        return resultado
    }
    else{
        resultado = fixo + vendas * 5/100
         return resultado 
    }

    
}
let test = calculateSalary(1000,1500)
console.log(test)



