const dropdownBtn = document.getElementById('btn')
const dropdownMenu = document.getElementsByClassName('dropdown')

const toggleDropdown = function () {
  console.log(dropdownMenu)
  dropdownMenu[0].classList.toggle('show')
}

dropdownBtn.addEventListener('click', function (e) {
  e.stopPropagation()
  toggleDropdown()
})
