const notas = [7.7, 5.2, 8.9, 3.6, 7.1, 9.0]
// Sem callBack
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// Com callBack
notasBaixas2 = notas.filter(function (nota){
    return nota < 7
})
console.log(notasBaixas2)

// Utilizando a função arrow.
const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)
