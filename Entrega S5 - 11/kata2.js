/*cashMachine()
Cria uma função que receba um inteiro que representa o valor de um saque em reais (R$). 
E então apresente a composição desse valor, pelas notas existentes. Sempre opte primeiro, por notas de maior valor.

Crie uma função que:

Recebe como parâmetro:
valor do saque;
valor do salário fixo;
valor das vendas feitas pelo vendedor;
Deve Calcular:
A quantidade de notas de cada valor necessária para o saque. Exemplo: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50;
O restante do seu salário após o saque.
Retorne os resultado dos dois calculos em formato de string. Exemplo: Notas sacadas: 2 notas de R$200, 1 nota de R$100, 1 nota de R$50, Saldo Atual: R$500
*/


//.1.possibilidades
//.
    
    

function cashMachine(saque,fixo,vendas){
    let salário = 0
    if(vendas <= 1200){
        salário = fixo + vendas * 3/100
        
    }
    else{
        salário = fixo + vendas * 5/100
        }
let notas = [2,5,10,20,50,100,200]


}
