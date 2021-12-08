// Desafio 10
function techList(array, name) {
  if(array.length === 0){
    return 'Vazio!'
  }
  const orderList = array.sort().map((elementArray) => ({ tech: elementArray, name }));
  return orderList;
}
// Na primeira condições verificamos se o array está vazio para retornar uma string 'Vazio!'
// 


// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};
