var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');
let hora = lines[0]
let velocidade = lines[1]
let resultado = (hora*velocidade) / 12

console.log(resultado.toFixed(3))