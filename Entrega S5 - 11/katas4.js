// calculateAge()
// Crie uma função que receba o ano de nascimento de uma pessoa
// e o ano atual, calcule e retorne:

// a idade dessa pessoa em anos
// a idade dessa pessoa em meses
// a idade dessa pessoa em dias
// a idade dessa pessoa em semanas

function calculateAge(nascimento,atual){
    let anos = atual - nascimento
    let meses = anos * 12;
    let dias = anos * 365;
    let semanas = anos *52;

    return `Você tem ${anos} anos de vida ou ${meses} meses de vida ou ${dias} dias de vida ou ${semanas} semanas de vida.`
}
