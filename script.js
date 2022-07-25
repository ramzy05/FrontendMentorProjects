const email = document.querySelector("#email");
const errorBox = document.querySelector(".error-box");



function checkEmail() {
 let regExp = /^\w+[\.\w]*@[\w]+\.[a-z]{3}$/g;
 if (!email.value.match(regExp)) {
  if (!(errorBox.classList.contains('show'))) errorBox.classList.add('show')
 } else {
  if ((errorBox.classList.contains('show'))) errorBox.classList.remove('show')
 }
 if (email.value === '') {
  if ((errorBox.classList.contains('show'))) errorBox.classList.remove('show')
 }
}

let prevScrollpos = window.pageYOffset;
window.onscroll = function () {
 let currentScrollPos = window.pageYOffset;
 if (prevScrollpos > currentScrollPos) {
  document.querySelector("header").style.top = "0";
 } else {
  document.querySelector("header").style.top = "-200px";
 }
 prevScrollpos = currentScrollPos;
}