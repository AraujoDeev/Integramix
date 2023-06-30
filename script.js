const dropdownBtn = document.getElementById('btn')
const dropdownMenu = document.getElementsByClassName('dropdown')
const navRegioes = document.getElementById('nav')
const aRegioes = document.querySelectorAll('.a-regioes')
const titleRegiao = document.getElementById('title-regioes')
const regioes = document.getElementById('regioes')
const listaRegioes = document.getElementById('listaRegioes')
const regioesBottom = document.getElementById('regioes-bottom')

const regiaoCentral = [
  'Aclimação',
  'Brás',
  'Consolação',
  'Liberdade',
  'República',
  'Sé',
]

const toggleRegioesBottom = () => {
  regioesBottom.classList.toggle('bottom-regioes-show')
}

const toggleRegiao = () => {
  regioes.classList.toggle('regioes-show')
}

titleRegiao.addEventListener('click', () => {
  toggleRegioesBottom()
  toggleRegiao()
})

const toggleDropdown = function () {
  console.log(dropdownMenu)
  dropdownMenu[0].classList.toggle('show')
}

dropdownBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  toggleDropdown()
})
