var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');
let nota = [];
let contador = 0;
let media;
for (i=0; i < lines.length; i++) {
    
    lines[i] = parseFloat(lines[i]);
    if(lines[i] > 0 && lines[i] <= 10) {
        contador++;
        
        nota.push(lines[i]);
        if(contador === 2) {
            media = (nota[0] + nota[1]) / 2;
            console.log("media = " + media.toFixed(2));
            break;
        }
    } else {
        console.log("nota invalida");
    }
}