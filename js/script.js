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
  if (navBar.classList.contains('show')) {
   navBar.classList.remove('show')
   toogleBlurBody()
   openIcon.style.display = 'inline-block'
   closeIcon.style.display = 'none'
  }
 })
}
/* end active links */

/* toogle menu mobile*/
const navBar = document.querySelector('nav');
const toogleBlurBody = () => {
 const blurBox = document.querySelector('#blur')
 if (blurBox.classList.contains('body-blur-box')) {

  blurBox.style.display = 'none'
  blurBox.classList.remove('body-blur-box')
  return
 }
 blurBox.style.display = 'block'
 blurBox.classList.add('body-blur-box')
 return
}

const toggleBtnMenu = document.querySelectorAll('.toggle-menu img')

const [openIcon, closeIcon] = [...toggleBtnMenu]

toggleBtnMenu.forEach(btn => {
 btn.addEventListener('click', function (e) {
  e.stopPropagation()
  this.style.display = 'none';
  if (this.dataset.action == 'open-menu') {
   closeIcon.style.display = 'inline-block'
   navBar.classList.toggle('show')
   toogleBlurBody()
  } else {
   openIcon.style.display = 'inline-block'
   navBar.classList.toggle('show')
   toogleBlurBody()
  }


 })
})



/* end toogle menu mobile*/ 