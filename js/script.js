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