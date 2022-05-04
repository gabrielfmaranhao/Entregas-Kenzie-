//.kata1
function add(n1,n2){
    return n1 + n2 ;
}
//.kata2
function multiply(num1,num2){
    let resultado = 0;
    for(let i = 1;i<=num2;i=add(i,1)){
    resultado = add(num1,resultado);
    }
    return resultado
}
//.kata3
function power(x,n){
    let resultado = 1 ;
    for(let i =0;i<n;i=add(i,1)){
    resultado =  multiply(x,resultado)
    }
    return resultado
}
//.kata4
function factorial(z){
    let resultado = 1;
    for(let i = 1;i<=z;i=add(i,1)){
        resultado = multiply(i,resultado)

    }
return resultado
}









