let numberOne = Number(prompt('Informe o primeiro número: '))
let numberTwo = Number(prompt('Informe o segundo número: '))
alert(`A soma dos números é igual a ${numberOne + numberTwo}\n
      A subrtração dos números é igual a ${numberOne - numberTwo}\n 
      A multiplicação dos números é igual a ${numberOne * numberTwo}\n
      A divisão dos números é igual a ${parseInt(numberOne / numberTwo)}\n
      O resto entre os números é igual a ${numberOne % numberTwo}`)

if ((numberOne + numberTwo) % 2 == 0) {
  alert('A soma entre os número é par')
} else {
  alert('A soma entre os dois número é ímpar')
}

if (numberOne == numberTwo) {
  alert('Os números escolhidos são iguas')
} else {
  alert('Os números escolhidos são diferentes')
}
