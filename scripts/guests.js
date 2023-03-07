import { getGuests } from "./database.js"

const guests = getGuests()

export const Guests = () => {
    let html = "<ul>"

    for (const guest of guests){
        html += `<li>
            ${guest.fullName}
        </li>`
    }

    html += "</ul>"
    return html
}