let buttonMain = document.querySelector("#Main")
let buttonAboutMe = document.querySelector("#About-Me")
let buttonContact = document.querySelector("#Contact")
let homePage = document.querySelector("#homePage")
let schoolPage = document.querySelector("#schoolPage")
let contactPage = document.querySelector("#contactPage")

homePage.style.display = "flex"
schoolPage.style.display = "none"
contactPage.style.display = "none"

buttonMain.onclick = function(event) {
    event.preventDefault()
    homePage.style.display = "flex"
    schoolPage.style.display = "none"
    contactPage.style.display = "none"
}

buttonAboutMe.onclick = function(event) {
    event.preventDefault()
    homePage.style.display = "none"
    schoolPage.style.display = "flex"
    contactPage.style.display = "none"
}

buttonContact.onclick = function(event) {
    event.preventDefault()
    homePage.style.display = "none"
    schoolPage.style.display = "none"
    contactPage.style.display = "flex"
}