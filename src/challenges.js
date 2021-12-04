// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
}
// Desafio 2
function calcArea(base, altura) {
  let area = (base * altura) / 2;
  return area;
}

// Desafio 3
function splitSentence(a) {
  let result = a.split(' ');
  return result;
}
splitSentence();

// Desafio 4
function concatName(n) {
  return n[n.length - 1] + ", " + n[0];
}
concatName();

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(array) {
  let HighNumber = Math.max.apply(Math, array);
  let cont = 0;

  for (let i = 0; i < array.length; i+=1){
    if (HighNumber === array[i]){
      cont +=1
    }
  }
  return cont;
}
console.log(highestCount([0,0,0]));

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};