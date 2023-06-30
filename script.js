const dropdownBtn = document.getElementById('btn')
const dropdownMenu = document.getElementsByClassName('dropdown')
const navRegioes = document.getElementById('nav')
const aRegioes = document.querySelectorAll('.a-regioes')
const titleRegiao = document.getElementById('title-regioes')
const regioes = document.getElementById('regioes')
const listaRegioes = document.getElementById('listaRegioes')
const regioesBottom = document.getElementById('regioes-bottom')
const ulListaCidades = document.getElementById('ul-lista-cidades')
const menuBurguer = document.getElementById('burguer')
const menuBurguerContainer = document.getElementById('menu-burguer')

const regiaoCentral = [
  'Aclimação',
  'Brás',
  'Consolação',
  'Liberdade',
  'República',
  'Sé',
  'Aclimação',
  'Brás',
  'Consolação',
  'Liberdade',
  'República',
  'Sé',
  'Aclimação',
  'Brás',
  'Consolação',
  'Liberdade',
  'República',
]

const regiaoTeste = [
  'Pimentas',
  '1234',
  'dfdfdf',
  'Libervdvdvdade',
  'Repúbladvadvica',
  'Sadvadvadvé',
]

const openMenu = () => {
  menuBurguer.addEventListener('click', () => {
    if (menuBurguerContainer.style.display === 'none') {
      menuBurguerContainer.style.display = 'flex'
    } else {
      menuBurguerContainer.style.display = 'none'
    }
  })
}
openMenu()

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

// Get the regioes container element
let regioesContainer = document.getElementById('ul-lista-regioes')

// Loop through the buttons and add the active class to the current/clicked button
for (let i = 0; i < aRegioes.length; i++) {
  aRegioes[i].addEventListener('click', function () {
    let current = document.getElementsByClassName('ativo')
    current[0].className = current[0].className.replace(' ativo', '')
    this.className += ' ativo'
    const cidades = cidadesMostradas(this.children[0].id)
    renderizarCidades(cidades)
  })
}

const cidadesMostradas = (regiao) => {
  switch (regiao) {
    case 'central':
      return regiaoCentral
    case 'norte':
      return regiaoTeste
    default:
      return regiaoCentral
  }
}

function removeAllChildNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

const renderizarCidades = (cidades = regiaoCentral) => {
  // Remove all child nodes from list of cities before rendering new ones
  removeAllChildNodes(ulListaCidades)
  cidades.map((cidade) => {
    let cidadeLi = document.createElement('li')
    cidadeLi.innerText = cidade
    ulListaCidades.appendChild(cidadeLi)
  })
}
renderizarCidades()
