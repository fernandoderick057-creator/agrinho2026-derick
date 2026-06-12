/* =========================
VARIÁVEIS
========================= */

let nivelNatureza = 0;

let jaPlantou = false;
let jaQuiz = false;
let jaTema = false;
let jaFinal = false;
let jaAgua = false;

let total = 0;
let escuro = false;

/* =========================
ÁUDIOS
========================= */

let musica = new Audio("sons/musica.mp3");
let passaros = new Audio("sons/passaros.mp3");
let coruja = new Audio("sons/coruja.mp3");
let agua = new Audio("sons/agua.mp3");
let sinos = new Audio("sons/sinos.mp3");

musica.loop = true;
passaros.loop = true;
coruja.loop = true;
agua.loop = true;
sinos.loop = true;

musica.volume = 0.12;
passaros.volume = 0.00;
coruja.volume = 0.00;
agua.volume = 0.00;
sinos.volume = 0.00;

/* =========================
BARRA
========================= */

function subirNatureza(){

if(nivelNatureza < 5){
nivelNatureza++;
}

for(let i=1;i<=5;i++){
document.getElementById("n"+i).style.background="#222";
}

if(nivelNatureza>=1){n1.style.background="red";}
if(nivelNatureza>=2){n2.style.background="orange";}
if(nivelNatureza>=3){n3.style.background="yellow";}
if(nivelNatureza>=4){n4.style.background="#66ff66";}
if(nivelNatureza>=5){n5.style.background="#00cc00";}

atualizarSons();

}

/* =========================
SONS POR NÍVEL
========================= */

function atualizarSons(){

if(nivelNatureza >= 1){
musica.play();
}

if(nivelNatureza >= 2){

if(escuro == false){
passaros.play();
passaros.volume = 0.18;
}else{
coruja.play();
coruja.volume = 0.18;
}

}

if(nivelNatureza >= 3){
agua.play();
agua.volume = 0.18;
}

if(nivelNatureza >= 4){
sinos.play();
sinos.volume = 0.10;
}

if(nivelNatureza >= 5){

musica.volume = 0.16;
agua.volume = 0.22;
sinos.volume = 0.12;

if(escuro == false){
passaros.volume = 0.22;
}else{
coruja.volume = 0.22;
}

}

}

/* =========================
ÁRVORE
========================= */

function plantarArvore(){

total++;
contador.innerText = total;

/* sobe a barra apenas na primeira vez */

if(jaPlantou == false){
subirNatureza();
jaPlantou = true;
}

mensagem.innerText =
"🌿 Você ajudou o planeta!";

for(let i=0;i<8;i++){

let folha = document.createElement("div");

folha.classList.add("folha");

folha.innerText="🍃";

folha.style.left=Math.random()*90+"%";

areaArvore.appendChild(folha);

setTimeout(function(){
folha.remove();
},2000);

}

}

function contarArvore(){

if(jaPlantou == false){
subirNatureza();
jaPlantou = true;
}

}

/* =========================
QUIZ
========================= */

function resposta(tipo){

if(tipo == "certo"){

resultado.innerText =
"✅ Correto! O reflorestamento ajuda a recuperar áreas degradadas, melhora a qualidade do ar e oferece abrigo para diversos animais.";

resultado.style.color = "green";

if(jaQuiz == false){
subirNatureza();
jaQuiz = true;
}

}else{

resultado.innerText =
"❌ Errado! As queimadas causam danos ao solo, à fauna e à flora, além de contribuírem para a poluição atmosférica.";

resultado.style.color = "red";

}

}

/* =========================
MODO NOITE
========================= */

function modoNoite(){

let secoes = document.querySelectorAll("section");
let cards = document.querySelectorAll(".card");
let cardsFlip = document.querySelectorAll(".card-frente");

if(escuro == false){

 for(let i=0;i<cardsFlip.length;i++){
cardsFlip[i].style.background="#1a1a1a";
cardsFlip[i].style.color="white";
}   

document.body.style.background="#000";
document.body.style.color="white";

for(let i=0;i<secoes.length;i++){
secoes[i].style.background="#111";
secoes[i].style.color="white";
}

for(let i=0;i<cards.length;i++){
cards[i].style.background="#1a1a1a";
cards[i].style.color="white";
}

botaoTema.innerText="☀️ Modo Dia";

escuro = true;

/* troca pássaro por coruja */

passaros.pause();
passaros.currentTime = 0;

if(nivelNatureza >= 2){
coruja.play();
coruja.volume = 0.18;
}

if(jaTema == false){
subirNatureza();
jaTema = true;
}

}else{

for(let i=0;i<cardsFlip.length;i++){
cardsFlip[i].style.background="white";
cardsFlip[i].style.color="#222";
}

document.body.style.background="#f4fff2";
document.body.style.color="#222";

for(let i=0;i<secoes.length;i++){
secoes[i].style.background="";
secoes[i].style.color="#222";
}

for(let i=0;i<cards.length;i++){
cards[i].style.background="white";
cards[i].style.color="#222";
}

areaArvore.style.background="#f1f8e9";
quiz.style.background="#e8f5e9";

botaoTema.innerText="🌙 Modo Noite";

escuro = false;

/* troca coruja por pássaro */

coruja.pause();
coruja.currentTime = 0;

if(nivelNatureza >= 2){
passaros.play();
passaros.volume = 0.18;
}

}

}

/* =========================
BOTÃO FINAL
========================= */

function botaoFinalClique(){

if(jaFinal == false){

subirNatureza();

botaoFinal.innerText =
"✅ Compromisso Assumido";

botaoFinal.style.background =
"#2e7d32";

jaFinal = true;

}

}

/* =========================
ÁGUA
========================= */

function fecharTorneira(){

if(jaAgua == false){

subirNatureza();

torneira.innerText = "🚰";

resultadoAgua.innerText =
"✅ Água economizada!";

resultadoAgua.style.color =
"#0288d1";

botaoAgua.innerText =
"✅ Torneira Fechada";

botaoAgua.style.background =
"#2e7d32";

jaAgua = true;

}

}