//.kata1
function add(n1,n2){
    return n1 + n2 ;
}

//.kata2
function multiply(num1,num2){
    let resultado = 0;
    for(let i = 0;i<=num2;i++){
        resultado = add(num1,num1*num2 - num1)
    }
    return resultado
}

//.kata3
function power(x,n){
    let resultado = ;
    for(let i =0;i<n;i++){
    resultado = resultado + x**n
    }
    console.log(resultado)

}
let test = power(5,3)
console.log(test)



