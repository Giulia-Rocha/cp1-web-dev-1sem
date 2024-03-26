//EX01

/*
//VARIAVEL COM VALOR UNDEFINED
let nome;
console.log(nome);


//VARIAVEL COM VALOR VAZIO
let vazio = '';
console.log(vazio);


//VARIAVEL COM VALOR
let valor = "10";
console.log(valor);
*/

//EX02

/*
//OPERADOR !
let a = 10;
let b = 5;
let c = 5;
console.log(a != b); 
console.log(b != c);


//OPERADOR ==
let d = 15;
let e = 15;
let f = 10;
console.log(d == e);
console.log(e == f);


//OEPRADOR >=
let g = 14;
let h = 10;
console.log(g >= h);
console.log(h >= g);
*/

//EX03


/*
let peso = parseFloat(prompt("Digite o seu peso:"));
let altura = parseFloat(prompt("Digite a sua altura:"))

let imc = peso / (altura * altura)

let calculo;
if (imc < 18.5) {
    calculo = "abaixo do peso";
} else if (imc >= 18.5 && imc <= 24,9) {
    calculo = "com o peso ideal"
} else {
    calculo = "acima do peso"
}

alert("seu IMC é " + imc.toFixed(2) + " voce esta " + calculo + ".")

*/

//EX04


/*
let idade = parseInt(prompt("Digite sua idade:"))

if (idade <= 12) {
    alert("voce é crianca")
} else if (idade >= 13 && idade <= 18) {
    alert("voce é adolescente")
} else if (idade >= 19 && idade <= 60) {
    alert("voce é adulto")
} else {
    alert("Voce é idoso")
}
*/

//EX05



/*
let usuario = prompt("Digite o nome de usuario:");
let senha = prompt("Digite sua senha:");

if (usuario == "admin" && senha == "1234") {
    alert("Cadastro realizado")
} else {
    alert("Cadastro nao aceito")
}
*/