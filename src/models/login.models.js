import { Api } from "../controller/Api.controller.js"

export default class DoomLogin {
    constructor () {

    }
    createLoginDom () {
        
        const body = document.querySelector("body")

        const divContaner   = document.createElement("div")
        const divLanding    = document.createElement("div")
        const divBoxMessage = document.createElement("div")
        const h1            = document.createElement("h1")
        h1.innerText    = "KenzieHabit"
        const h2Box         = document.createElement("h2")
        h2Box.innerText = "If you are going to use a  of Lorem Imsum"
        const span          = document.createElement("span")
        span.innerText  = "passage"
        const p             = document.createElement("div")
        p.innerText     = "you need to be sure there isn't anything"
        const divForm       = document.createElement("div")
        const h2Form        = document.createElement("h2")
        h2Form.innerText= "Login"
        const form          = document.createElement("form")
        form.method = "post"
        form.name   = "loginForm"
        const divInsideForm1 = document.createElement("div")
        const divInsideForm2 = document.createElement("div")
        const labelUsername = document.createElement("label")
        labelUsername.for = "username"
        labelUsername.innerText = "Usuário"
        const inputUsername = document.createElement("input")
        inputUsername.type  = "text"
        inputUsername.name = "username"
        inputUsername.id   = "username"
        inputUsername.placeholder = "julia@silva"
        const labelPassword = document.createElement("label")
        const inputPassword = document.createElement("input")
        inputUsername.type  = "password"
        inputUsername.name = "password"
        inputUsername.id   = "password"
        inputUsername.placeholder = "Digitar minha senha"
        const button   = document.createElement("button")
        button.type = "button"
        button.innerText = "Entrar"
        const imgBtn = document.createElement("img")
        imgBtn.src = "./src/assets/icons8-entrar-60.png"
        imgBtn.alt = "Imagem botão login"

        button.addEventListener("click", {  
            
        })

        divContaner.classList.add("container")
        divLanding.classList.add("container__landing")
        divBoxMessage.classList.add("container__landing--welcomeMessageBox")
        h1.classList.add("container__landing--welcomeTitle")
        h2Box.classList.add("container__landing--welcomeSubTitle")
        p.classList.add("container__landing--welcomeAdvice")
        divForm.classList.add("container__landing--welcomeFormBox")
        h2Form.classList.add("container__landing--welcomeFormTitle")
        form.classList.add("container__landing--welcomeForm")
        labelUsername.classList.add("container__landing--formLabel")
        inputUsername.classList.add("container__landing--formInput")
        labelUsername.classList.add("container__landing--formLabel")
        labelUsername.classList.add("container__landing--formInput")
        

        body.appendChild(divContaner)
        divContaner.appendChild(divLanding)
        divLanding.append(divBoxMessage, divForm)
        divBoxMessage.append(h1, h2Box, p)
        h2Box.appendChild(span)
        divForm.append(h2Form, form)
        form.append(divInsideForm1, divInsideForm2, button)
        button.appendChild(imgBtn)
        divInsideForm1.append(labelUsername, inputUsername)
        divInsideForm2.append(labelPassword, inputPassword)

        return divContaner
    }
}