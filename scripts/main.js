import { CiderFalls } from "./html.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CiderFalls()
}

renderAllHTML()