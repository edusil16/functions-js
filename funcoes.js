function Carro(velocidadeMaxima = 200, delta = 5){
    //Atributo privado

    let velocidadeAtual = 0

    // metodo publico
    this.acelerar = function (){
        if(velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }

    // metodo publico
    this.getVelocidadeatual = function (){
        return velocidadeAtual
    }

}

const uno = new Carro
uno.acelerar()
console.log(uno.getVelocidadeatual())

const ferrarri = new Carro(350, 20)
ferrarri.acelerar()
ferrarri.acelerar()
ferrarri.acelerar()
console.log(ferrarri.getVelocidadeatual())

console.log(typeof Carro)
console.log(typeof ferrarri)