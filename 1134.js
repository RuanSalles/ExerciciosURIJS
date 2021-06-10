var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');
let gasolina = 0;
let alcool = 0;
let diesel = 0;
for (i=0; i < lines.length; i++) {
    lines[i] = parseInt(lines[i]);
    
    switch (lines[i]) {
        case 1 :
        alcool++;
        break
        case 2 :
        gasolina++;
        break;
        case 3 :
        diesel++
        break;
        case 4:
        console.log("MUITO OBRIGADO");
        console.log('Alcool: ' + alcool);
        console.log('Gasolina: ' + gasolina);
        console.log('Diesel: ' + diesel);
        break;
    }
}