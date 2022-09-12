let coxinha = prompt("Deseja comer mais coxinha?").toUpperCase()

let conta = 0

let valorCoxinha = 2.5

while(coxinha !== "N"){
    coxinha = prompt("Deseja comer mais coxinha?").toUpperCase()
    conta += valorCoxinha
}
console.log(conta)

