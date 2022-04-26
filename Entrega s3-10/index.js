function positions(firstPlace, secondPlace, lastPlace) {
    let colocacao = [firstPlace,secondPlace,lastPlace]
    let competidores =["Rafael","Manoel","Daniel"];
     if("Rafael" == firstPlace && "Manoel" == secondPlace && "Daniel" == lastPlace){
        return "1- Colocado " + competidores[0] + " ,2- Colocado "+ competidores[2] +" ,3- Colocado "+competidores[1]+"."
    }
    if("Manoel" == firstPlace && "Rafael" == secondPlace && "Daniel" == lastPlace){
        return "1- Colocado " + competidores[1] + " ,2- Colocado" + competidores[2] +" ,3- Colocado "+competidores[0]+"."
    }
    if("Rafael" == firstPlace && "Daniel" == secondPlace && "Manoel" == lastPlace){
        return "1- Colocado " + competidores[2] + " ,2- Colocado "+ competidores[0] + " ,3- Colocado "+competidores[1]+"."
    }
    if("Manoel" == firstPlace && "Daniel" == secondPlace && "Rafael" == lastPlace){
        return "1- Colocado " + competidores[2] + " ,2- Colocado "+ competidores[1] + " ,3- Colocado "+competidores[0]+"."
    }
    if("Daniel" == firstPlace && "Rafael" == secondPlace && "Manoel" == lastPlace){
        return "1- Colocado " + competidores[2] + " ,2- Colocado "+ competidores[0] + " ,3- Colocado "+competidores[1]+"."
    }
    if("Daniel" == firstPlace && "Manoel" == secondPlace && "Rafael" == lastPlace){
        return "1- Colocado " + competidores[2] + " ,2- Colocado "+ competidores[1] + " ,3- Colocado "+competidores[0]+"."
    }
 
}
console.log(positions("Rafael","Manoel","Daniel"))
console.log(positions("Manoel","Rafael","Daniel"))
console.log(positions("Rafael","Daniel","Manoel"))
console.log(positions("Manoel","Daniel","Rafael"))
console.log(positions("Daniel","Rafael","Manoel"))
console.log(positions("Daniel","Manoel","Rafael"))