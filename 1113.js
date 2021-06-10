var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

for (i = 0; i < lines.length - 1; i++) {
    let valores = lines[i].split(" ");
    if (parseInt(valores[1]) < parseInt(valores[0])) {
        console.log("Decrescente");
    } else if (parseInt(valores [1]) > parseInt(valores[0])) {
        console.log("Crescente");
    }
}
