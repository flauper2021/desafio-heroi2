let victories = 10;
let defeats = 1;

let winningBalance = calculationVictories(victories, defeats);
let level;

function calculationVictories(a, b){
    let result = a - b
    return result
}

if(winningBalance <= 10){
    level = "ferro"
}else if(winningBalance <= 20){
    level = "bronze"
}else if(winningBalance <= 50){
    level = "prata"
}else if(winningBalance <= 80){
    level = "ouro"
}else if(winningBalance <= 90){
    level = "diamante"
}else if(winningBalance <= 100){
    level = "lendário"
}else if(winningBalance >= 101){
    level = "imortal"
}

console.log("O herói tem o saldo de " + 
winningBalance + " vitórias, e esta no ranker do nivel " + level +"!")