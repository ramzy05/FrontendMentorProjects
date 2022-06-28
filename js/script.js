const navLinks = document.querySelectorAll('nav li a');
/* active links */
navLinks.forEach(link => {
 link.addEventListener('click', function () {
  if (!link.classList.contains('active')) link.classList.add('active')
  removeActive(this)
 })
})
const removeActive = actualLink => {
 navLinks.forEach(link => {
  if (link !== actualLink && link.classList.contains('active')) link.classList.remove('active')
 })
}
/* end active links */

/* toogle menu mobile*/


const toggleBtnMenu = document.querySelectorAll('.toggle-menu img')

const [openIcon, closeIcon] = [...toggleBtnMenu]

toggleBtnMenu.forEach(btn => {
 btn.addEventListener('click', function (e) {
  e.stopPropagation()
  this.style.display = 'none';
  if (this.dataset.action == 'open-menu') {
   closeIcon.style.display = 'inline-block'
  } else {
   openIcon.style.display = 'inline-block'
  }


 })
})

/* end toogle menu mobile*/ 