var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');
var notas = lines[0].split(" ").map((nota)=> parseFloat(nota));
var media = (notas[0]*2 + notas[1]*3 + notas[2]*4 + notas[3]*1) / 10;

console.log("Media: " + media.toFixed(1));

if (media >= 7) {
    console.log("Aluno aprovado.");
} else if (media < 5 ) {
    console.log("Aluno reprovado.");
} else {
    console.log("Aluno em exame.");
    var notaexame = parseFloat(lines[1]);
    var resultado = (media + notaexame) / 2;

    console.log("Nota do exame: " + notaexame.toFixed(1));

    if(resultado > 5.0) {

    console.log("Aluno aprovado.");

} else {
    console.log("Aluno reprovado.");
}

console.log("Media final: " + resultado.toFixed(1)); 
}




