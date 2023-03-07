import { getServices, getSectionServices, getSections } from "./database.js";

const services = getServices()
const sectionServices = getSectionServices()
const sections = getSections()

export const servicesClick = () => {
    document.addEventListener(
        "click",
        (clickEvent) => {
            const itemClicked = clickEvent.target
            if (itemClicked.id.startsWith("service")) {
                const [, servicePrimaryKey] = itemClicked.id.split("--")

                let currentService = null
                for (const service of services) {
                    if (parseInt(servicePrimaryKey) === service.id) {
                        currentService = service
                    }
                }

                let matchingSectionServices = []
                for (const sectionService of sectionServices) {
                    if (sectionService.serviceId === currentService.id) {
                        matchingSectionServices.push(sectionService)
                    }
                }

                let sectionList = []
                for (const matchingSectionService of matchingSectionServices) {
                    for (const section of sections) {
                        if (matchingSectionService.sectionId === section.id) {
                            sectionList.push(`${section.name}`)
                        }
                    }
                }
                const joinedSectionList = sectionList.join("\n")
                window.alert(`${joinedSectionList}`)
            }
        }
    )
}