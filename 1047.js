var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');
var tempo = lines[0].split(" ").map((tempo)=> parseInt(tempo));
var horainicial = tempo[0];
var minutoinicial = tempo[1];
var horafinal = tempo[2];
var minutofinal = tempo[3];
var tempoinicial = horainicial*60 + minutoinicial;
var tempofinal = horafinal*60 + minutofinal;

if(tempofinal <= tempoinicial) {
    tempofinal = tempofinal + 60*24;
}
var resultado = tempofinal - tempoinicial;

//console.log(resultado);

var resulthora = horafinal - horainicial;
var resultminuto = minutofinal - minutoinicial;


console.log("O JOGO DUROU " + Math.floor(resultado / 60).toFixed(0) + " HORA(S) E " + (resultado % 60) + " MINUTO(S)");
