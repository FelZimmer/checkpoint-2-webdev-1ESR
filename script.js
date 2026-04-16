//Questão 1 – Condicional If
let tarefaConcluida = true;

if (tarefaConcluida) {
    console.log("A tarefa está concluída!");
} else {
    console.log("A tarefa não foi concluída.");
}
// Questão 2 – Condicional If/Else If/Else
let prioridade = 2;

if (prioridade === 1) {
    console.log("Prioridade Baixa");

} else if (prioridade === 2) {
    console.log("Prioridade Média");

} else if (prioridade === 3) {
    console.log("Prioridade Alta");
}

//  Questão 3 – Switch Case
let diaSemana = new Date().getDay(); 
switch (diaSemana) {
    case 0:
        console.log("Domingo");
        break;
    case 1:
        console.log("Segunda-feira");
        break;
    case 2:
        console.log("Terça-feira");
        break;
    case 3:
        console.log("Quarta-feira");
        break;
    case 4:
        console.log("Quinta-feira");
        break;
    case 5:
        console.log("Sexta-feira");
        break;
    case 6:
        console.log("Sábado");
        break;
}

// Questão 4 – Loop For
for (let i = 0; i < 10; i++) {
    console.log(i);
}
