import { CiderFalls } from "./html.js"
import { parkClick } from "./parkClick.js"
import { servicesClick } from "./servicesClick.js"
parkClick()
servicesClick()

const mainContainer = document.querySelector("#container")

const renderAllHTML = () => {
    mainContainer.innerHTML = CiderFalls()
}

renderAllHTML()