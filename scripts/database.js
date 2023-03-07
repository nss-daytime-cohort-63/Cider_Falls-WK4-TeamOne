const database = {
    guests: [
        {id: 1, fullName: 'John Doe', sectionId: 2},
        {id: 2, fullName: 'Jane Doe', sectionId: 5},
        {id: 3, fullName: 'Will Smith', sectionId: 4},
        {id: 4, fullName: 'Ava Smith', sectionId: 1},
        {id: 5, fullName: 'Terry Terry', sectionId: 3},
        {id: 6, fullName: 'Mary Terry', sectionId: 6},
        {id: 7, fullName: 'Bill Jones', sectionId: 4},
        {id: 8, fullName: 'Xiao Ming', sectionId: 2},
        {id: 9, fullName: 'Johann Schmidt', sectionId: 1},
        {id: 10, fullName: 'Jessica Jones', sectionId: 5},
        {id: 11, fullName: 'Sylvester Stalone', sectionId: 3},
        {id: 12, fullName: 'Smoke the Bear', sectionId: 4}
    ],
    sections: [
        {id: 1, name: 'Chamfort River'},
        {id: 2, name: 'Lost Wolf Hiking Trail'},
        {id: 3, name: 'Lodge'},
        {id: 4, name: 'Gander River'},
        {id: 5, name: 'Campgrounds'},
        {id: 6, name: 'Pine Bluffs Trails'}
    ],
    services: [
        {id: 1, name: 'Rafting'},
        {id: 2, name: 'Canoeing'},
        {id: 3, name: 'Fishing'},
        {id: 4, name: 'Hiking'},
        {id: 5, name: 'Picnicking'},
        {id: 6, name: 'Rock Climbing'},
        {id: 7, name: 'Lodging'},
        {id: 8, name: 'Parking'},
        {id: 9, name: 'Information'},
        {id: 10, name: 'Zip Lines'}
    ],
    sectionServices: [
        {id: 1, sectionId: 1, serviceId: 1},
        {id: 2, sectionId: 1, serviceId: 2},
        {id: 3, sectionId: 1, serviceId: 3},
        {id: 4, sectionId: 2, serviceId: 4},
        {id: 5, sectionId: 2, serviceId: 5},
        {id: 6, sectionId: 2, serviceId: 6},
        {id: 7, sectionId: 3, serviceId: 7},
        {id: 8, sectionId: 3, serviceId: 8},
        {id: 9, sectionId: 3, serviceId: 9},
        {id: 10, sectionId: 3, serviceId: 5},
        {id: 11, sectionId: 4, serviceId: 3},
        {id: 12, sectionId: 4, serviceId: 4},
        {id: 13, sectionId: 5, serviceId: 9},
        {id: 14, sectionId: 5, serviceId: 7},
        {id: 15, sectionId: 5, serviceId: 8},
        {id: 16, sectionId: 6, serviceId: 4},
        {id: 17, sectionId: 6, serviceId: 5},
        {id: 18, sectionId: 6, serviceId: 10}
    ]
}

//export functions
export const getGuests = () => {
    return database.guests.map(guest => ({...guest}))
}

export const getSections = () => {
    return database.sections.map(section => ({...section}))
}

export const getServices = () => {
    return database.services.map(service => ({...service}))
}

export const getSectionServices = () => {
    return database.sectionServices.map(sectionService => ({...sectionService}))
}
