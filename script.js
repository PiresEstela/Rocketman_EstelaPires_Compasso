//Mini-projeto 1 : Trocando Valores de Variáveis

let a = 'lilás';
let b = 'magenta';

let c = a;
a = b;
b = c;

console.log(a);
console.log(b);

//Mini-projeto 2 : Máximo Entre dois Valores

let ValorMaior = max(8,15);

console.log(ValorMaior);

function max(numero1,numero2) 
{ if(numero1 > numero2)return numero1;else return numero2;}

//Mini-projeto 3 : FizzBuzz

//Divisivel por 8 => Fizz
//Divisivel por 4=> Buzz
//Não é divisivel por 4 e 8 => entrada
//Não é um número=> 'Não é um número'

const resultado = fizzbuzz(16);
console.log(resultado);

function fizzbuzz(entrada){ 
    if ( typeof entrada !== 'number')
    return 'Não é um número';
    if ((entrada % 4 === 0) && (entrada % 8 === 0))
    return 'FizzBuzz';
    if (entrada % 4 === 0)
    return 'Fizz';
    if (entrada % 8 === 0)
    return 'Buzz';

    return entrada;
}

// Mini-projeto 4 : Medidor de Velocidade

//Velocidade máxima de ate 70
//a cada 5km acima do limite voce ganha 1 ponto
//Math.floor()
//caso pontos maior que 12 => 'carteira suspensa'


verificarVelocidade(130);

function verificarVelocidade(velocidade) {
    const velocidadeMaxima = 70;
    const kmPorPonto = 5;
    if (velocidade <= velocidadeMaxima)
        console.log ('ok')
    else {
        const pontos = Math.floor(((velocidade -velocidadeMaxima ) / kmPorPonto));
        if(pontos >= 12)
          console.log ('carteira suspensa');
        else
          console.log('pontos',pontos)

    }

}

//Mini-projeto 5 : valor par e ímpar

// Receber uma quantidade de valores para avaliar
// Função exibe se cada valor é par ou ímpar

exibirTipo (5);
function exibirTipo(limite) {
    for (let i = 0; i <= limite; i++) {
        if ( i % 2 === 0)
            console.log(i,'PAR');
            else
            console.log(i,'IMPAR');
    }
}

//Mini-projeto 6 : Encontre o String

//Criar um método para ler propriedades de um objeto e
// exibir somente as propriedades do tipo string que estão nesse objeto

const filme = {
    título : 'Vingadores',
    ano : 2018,
    diretor : 'Russo',
    personagem : 'Viúva Negra'
}
exibirPropriedades(filme);
function exibirPropriedades(obj){
    for (prop in obj)
    if(typeof obj[prop]=== 'string')
    console.log (prop,obj[prop])  
}

//Mini-projeto 7 : Múltiplos de 3 e 5

//Criar função somar que retorna a
//soma de todos os múltiplos de 3 e 5

//Múltiplos de 3
//3,6,9
//Multiplos de  5
//5 e 10

//Somando os multiplos
//armazenar os multiplos de 3
//armazenar os multiplos de 5
//somar os dois


somar(10);
function somar(limite) {
 let multiplosDe3 = 0;
 let multiplosDe5 = 0;
for(i =0;i <= limite;i++){
    if(i % 3 === 0)
    multiplosDe3 += i;
    if(i % 5 === 0)
    multiplosDe5 += i;
}
console.log(multiplosDe3 + multiplosDe5);
}

//Mini-projeto 8 : Média de nota escolar
//obter a média a partir de um array

//0-59: F
//60-69: D
//70-79: C
//80-89: B
//90-100: A

const array = [70,70,80];
//73.33

console.log(mediaDoAluno(array));

function mediaDoAluno(notas) {
   const media = calcularMedia(notas);

    if (media < 59) return 'F';
    if (media < 69) return 'D';
    if (media < 79) return 'C';
    if (media < 89) return 'B';
    return 'A'  

}

function calcularMedia(array) { 
     let soma = 0;
     for (let valor of array) {
    soma += valor;  
    }
    return soma/(array.lenght);
}

//Mini-projeto 9: Contador de asteriscos
//Criar uma função que exibe a quantidade de *
//que aquela linha possui
exibirAsteriscos (10);

function exibirAsteriscos(linhas) {
    let padrao = '';
    for (let linha = 1; linha <= linhas; linha++){
        padrao += '*';
        console.log(padrao);
    }
     
}

//Mini-projeto 10 : Números primos
//Criar funçao para mostrar os números primos

//Primos
//Compostos

exibirNumerosPrimos(15);

function exibirNumerosPrimos(limite){
    for (let numero = 2; numero <= limite; numero++){
        if (NumeroPrimo(numero)) console.log(numero);
    }
}

function NumeroPrimo(numero) {
    for (let divisor = 2; divisor < numero; divisor++){
        if (numero % divisor === 0) {
            return false;
        }

    }
    return true;
}    

//Mini-projeto 11: Montador de endereço
//Javascript - Objeto Endereço

//Criar um objeto endereço que contem:
// Rua
//Cidade
//CEP
//exibirEndereço(endereço)

let endereço = {
    rua: 'a',
    cidade: 'b',
    cep: 'c',
};

function exibirEndereço(endereço){
    for (let chave in endereço)
    console.log(chave, endereço[chave]);
}
    exibirEndereço(endereço);

//Mini-projeto 12 : Encontre a igualdade 

function Endereco(rua,cidade,cep){
    this.rua = rua,
    this.cidade = cidade,
    this.cep = cep
}
const endereco1 = new Endereco('a','b','c');
const endereco2 = new Endereco('a','b','c');

function saoIguais(endereco1,endereco2){
    //comparar se as propriedades são iguais
    return endereco1.rua === endereco2.rua &&
           endereco1.cidade === endereco2.cidade &&
           endereco1.cep ===endereco2.cep
}

console.log(saoIguais(endereco1,endereco2));

function temEnderecoMemoriaIguais(endereço1,endereço2){
    //compara se a referência aponta para o mesmo local na memoria
    return endereco1 === endereco2;
}

console.log(temEnderecoMemoriaIguais(endereco1,endereco2));

//Mini-projeto 13: Montador de postagem de blog
//Javascript: Objeto postagem de blog que vai conter as seguintes propriedades
//postagem
/*
titulo
mensagem
autor
visualizações
comentarios
(autor,mensagem)
estaAoVivo
*/

let postagem = {
    titulo: 'a',
    mensagem: 'b',
    autor: 'c',
    visualizacoes: 10,
    comentarios : [
        { autor: 'a',mensagem: 'b'},
        { autor: 'a', mensagem: 'b'}
    ],
    estaAoVivo : true
}

console.log(postagem);

//Miniprojeto: Faixa de preço
//criar um array de objetos de faixa de preço para que ele possa ser usado
//em um site igual ao mercado livre

//Primeira opção
let faixas = [
    {tooltip: 'até R$700', mimino: 0, maximo: 700},
    {tooltip: 'até R$700 a R$1000', minimo: 700, maximo: 1000},
    {tooltip: 'R$1000 ou mais', minimo: 1000, maximo: 9999999}
    
];

//Segunda opção(Factory Function)
function criarFaixaDePreco(tooltip,minimo,maximo){
    return {
        tooltip,
        minimo,
        maximo
    }
}
let faixas2 = [
    criarFaixaDePreco('a',1,100),
    criarFaixaDePreco('b',100,1000),
    criarFaixaDePreco('c', 1000,10000)
]
console.log(faixas);
console.log(faixas2)
