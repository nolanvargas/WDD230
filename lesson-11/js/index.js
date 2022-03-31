const hambutton = document.querySelector('.ham');
const mainnav = document.querySelector('.navigation');
const string = document.lastModified;
const year = new Date().getFullYear();
const day = new Date().getDay();
const prestonPancakes = document.querySelector('#prestonPancakes');

hambutton.addEventListener('click', () => {mainnav.classList.toggle('responsive')}, false);
window.onresize = () => {if (window.innerWidth > 760) mainnav.classList.remove('responsive')};
document.querySelector("#footerB").innerHTML = `Last Updated: ${string}`;
document.querySelector("#footerA").innerHTML = `&copy; ${year} | RN Weather | Nolan Thomas Vargas`;

console.log(prestonPancakes.style.display)

if (day != 5) { prestonPancakes.style.display = "none" }
else { prestonPancakes.style.display = "flex" }