/* Tarefa
calculateSalary()
Sabendo que o vendedor de uma loja, recebe uma comissão de 3% sobre o total das vendas que realizar até R$ 1.200,00.
 E mais 5% sobre o que ultrapassar este valor.

Crie uma função que:

Receba o salário fixo e o valor das vendas efetuadas pelo vendedor;
E então calcule e retorne o seu salário total.*/

//.Recebe 3% sobre o total das vendas que realizar até 1200
//.recebe 5% quando ultrapassa esse valor.

function calculateSalary(fixo,vendas){
let resultado = 0
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

