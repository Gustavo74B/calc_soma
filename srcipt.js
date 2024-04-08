const input1 = document.querySelector("#num1")
const input2 = document.querySelector("#num2")

const result = document.querySelector("p")

const botao = document.querySelector("button")
botao.addEventListener("click", calcular)

function calcular() {
    console.log(input1)
    const n1 = Number(input1.value)
    const n2 = Number(input2.value)

    result.innerHTML = `Resultado: ${n1 + n2}`
}