var string = document.lastModified;
var year = new Date().getFullYear()
document.querySelector("#footerB").innerHTML = `Last Updated: ${string}`;
document.querySelector("#footerA").innerHTML = 
    `&copy; ${year} | Nolan Thomas Vargas | Idaho | <a href="https://www.byui.edu/online" style="color: #B1E4FB">BYUI Online Learning</a>`