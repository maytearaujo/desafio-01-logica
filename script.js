console.log("Ano novo está chegando!!");

let cantora = "Mariah Carey";
let idadeCantora = 54;
let anoAtual = 2023;
let anoNascimentoCantora = anoAtual - idadeCantora;

let resumo =  `A cantora ${cantora} nasceu no ano de ${anoNascimentoCantora} e está com ${idadeCantora} anos de idade`;
 
console.log(resumo);

const nascimento = '27 de março de 1969';
console.log("Data de nascimento da cantora Mariah Carey: " + nascimento );

let quartaFeira = false;
console.log(typeof(quartaFeira));

idade = 40;

if (idade >= 18){
    console.log("Você é maior de idade, poderá curtir o show do Roberto Carlos com participação especial de Mariah Carey.")
}else{
    console.log("Sinto muito, mas assistirá da tv globo")
}

mesAniversario = "Dezembro";

if(mesAniversario == "Agosto" || mesAniversario == "Dezembro" || mesAniversario == "JUNHO"){
    console.log("Uma ou mais opções estão corretas. O mês escolhido foi o mês de " + mesAniversario)
}else{
    console.log("  Algo de errado não está certo, o mês digitado foi o mês de " + mesAniversario)
}