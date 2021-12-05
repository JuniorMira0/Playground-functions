// Desafio 1
function compareTrue(n1, n2) {
  if (n1 === true && n2 === true) {
    return true;
  } else {
    return false;
  }
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

// Desafio 4
function concatName(n) {
  return n[n.length - 1] + ", " + n[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = (wins * 3) + ties;
  return points;
}
console.log(footballPoints(2, 1));

// Desafio 6
function highestCount(numbers) {
  let num = numbers[0];
  for (let i = 0; i < numbers.length; i += 1) {
    if (num < numbers[i]) {
      num = numbers[i];
    } else {
      num = num;
    }
  }
  let rep = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (num === numbers[i]) {
      rep += 1;
    }
  }
  return rep;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let position1 = Math.abs(mouse - cat1);
  let position2 = Math.abs(mouse - cat2);
  if (position1 === position2) {
    return "os gatos trombam e o rato foge"
  } else if (position1 < position2) {
    return 'cat1'
  } else {
    return 'cat2'
  }
}
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for(let i = 0; i < arrayNumbers.length; i +=1){
    if(arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0){
      result.push('fizzBuzz')
    } else if (arrayNumbers[i] % 3 === 0){
      result.push('fizz')
    } else if (arrayNumbers[i] % 5 === 0){
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  }return result;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
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