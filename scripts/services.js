import { getServices, getSections, getSectionServices } from "./database.js"

const services = getServices()
const sections = getSections()
const sectionServices = getSectionServices()

const matchingSectionServices = (section, sectionServices) => {
    let matchedSectionServices =  []
    for (const sectionService of sectionServices){
        if (section.id === sectionService.sectionId){
            matchedSectionServices.push(sectionService)
        }
    }
    return matchedSectionServices
}

const matchingServices = (matchedSectionServices, services) => {
    let matchedServices = "<ul>"
    for (const matchedSectionService of matchedSectionServices){
        for (const service of services){
            if (matchedSectionService.serviceId === service.id){
                //possible bug
                matchedServices += `<li>${service.name}</li>`
            }
        }
    }
    return matchedServices
}

export const SectionsAndServices = (idNumber) => {
    let html = ""
    for (const section of sections) {
        if (section.id === idNumber){
            html += `<h2>${section.name}</h2>`
            const matchedSectionServices = matchingSectionServices(section, sectionServices)
            const matchedServices = matchingServices(matchedSectionServices, services)
            html += matchedServices
        }
    }
    

    html += "</ul>"
    return html
}