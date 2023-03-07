import { getGuests, getSections } from "./database.js"

const guests = getGuests()
const sections = getSections()
//event listener which counts the total number of guests in each section of the park
document.addEventListener(
    'click',
    (clickEvent) => {
        let itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("sectionClick")) {
            let [, sectionId] = itemClicked.id.split("--")
            let selectedSection = null
            for (let section of sections) {
                if (section.id === parseInt(sectionId)) {
                    selectedSection = section
                }
            }
            let guestListArray = []
            for (let guest of guests) {
                if (guest.sectionId === selectedSection.id) {
                    guestList.push(guest.fullName)
                }
            }
            let guestList = guestListArray.join('\n')
            window.alert(guestList)
        }
    }
)