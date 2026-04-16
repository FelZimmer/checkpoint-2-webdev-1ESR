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

//Questão 5 – Loop While
soma = 0;
i = 0;

while (i <= 5) {
    soma += i;
    i++;
   
}
 console.log(soma)

 // Questão 6 – Loop do/while
 let contador = 3;
 do{ 
    console.log(contador)
    contador--;
 }while(contador >=1)
console.log("FIM!!")

//Questão 7 – Verificador de Idade

function verificarIdade(idade) {
    if(idade<18){
        return "Menor de idade"
    }
    else if(idade >= 18 && idade < 60) { 
        return "Maior de idade"
    }
    else if(idade >= 60 ){ 
        return "Idoso"
    }
    
}



console.log(verificarIdade(17));
console.log(verificarIdade(20));
console.log(verificarIdade(69));

// Questão 8 – Acesso ao Sistema

let temSenhaCorreta  = true;
let temBiometriaAutenticada = true;

let acessoPermitido = false;

if(temSenhaCorreta || temBiometriaAutenticada){
    acessoPermitido = true;
    
}

console.log(`Tem acesso perimitido: ${acessoPermitido}`);
console.log(`Tem acesso negado: ${!acessoPermitido}`);

// Questão 9 – Manipulação de Strings
let tarefas = "Lavar,Comer,Estudar,Licao";
let tarefasArray = tarefas.split(",");
console.log(tarefasArray);
let tarefaFormatada = tarefasArray.join(" | ");
console.log(tarefaFormatada);
console.log(tarefasArray.includes("Estudar"));






