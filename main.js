function numero1MaiorNumero2(n1, n2) {
  return parseInt(n1) > parseInt(n2)
}

const form = document.getElementById('formComparacao')
const campoA = document.getElementById('campoA')
const campoB = document.getElementById('campoB')

form.addEventListener('submit', function(e) {
  e.preventDefault()
  const mensagemValidacao = document.getElementById('mensagemValidacao')

  if (numero1MaiorNumero2(campoB.value, campoA.value)) {
    mensagemValidacao.innerHTML = 'Sucesso: O campo B é maior que o campo A'
    mensagemValidacao.style.color = 'green'
  } else {
    mensagemValidacao.innerHTML = 'Falha: O campo B deve ser maior que o campo A'
    mensagemValidacao.style.color = 'red'
  }
})