const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")

const btnTry = document.querySelector('#btnTry')
const btnReset = document.querySelector('#btnReset')

let randomNumber = Math.round(Math.random() * 10)
let xAttempts = 1

// eventos - tirar responsabilidade de chamar a função do HTML
btnTry.addEventListener("click", handleTryClick)
btnReset.addEventListener("click", handleResetClick)
document.addEventListener('keydown', handleEnterReset)

// funcções callback
function handleTryClick(event) {
  const inputNumber = document.querySelector("#inputNumber")
  event.preventDefault()
  if (inputNumber.value == "" || inputNumber.value < 0 || inputNumber.value > 10) {
    document.querySelector('.msgEmptyInput').classList.remove("hide")
    document.querySelector(".msgTryAgain").classList.add("hide")
    inputNumber.value = ""
  } else {
    if (Number(inputNumber.value) == randomNumber) {
      toggleScreen()
      screen2.querySelector("h2").innerText = `Acertou em ${xAttempts} tentativas`
    }
    inputNumber.value = ""
    document.querySelector(".msgTryAgain").classList.remove("hide")
    document.querySelector('.msgEmptyInput').classList.add("hide")
    xAttempts++
  }
}
function handleResetClick() {
  toggleScreen()
  xAttempts = 1
  document.querySelector(".msgTryAgain").classList.add("hide")
  randomNumber = Math.round(Math.random() * 10)
}
function handleEnterReset(event) {
  if (event.key === 'Enter' && screen1.classList.contains('hide')) {
    handleResetClick()
  }
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}
