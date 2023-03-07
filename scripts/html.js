import { Guests } from "./guests.js"
import { SectionsAndServices } from "./services.js"

export const CiderFalls = () => {
    return `
    <div class ="top">
    <img src="https://freedesignfile.com/upload/2016/08/Green-park-logo-vectors-set-04.jpg">
   
    <div class ="header">
        <article class ="head">Welcome to Cider Falls</article>
    </div>
    
    </div>
    <div class ="services">
    Services: &nbsp <section id ="service--1">Rafting, &nbsp</section>
    <section id ="service--2">Canoeing, &nbsp </section>
    <section id ="service--3">Fishing, &nbsp</section>
    <section id ="service--4">Hiking, &nbsp</section>
    <section id ="service--5">Picnicking, &nbsp</section>
    <section id ="service--6">Rock Climbing, &nbsp</section>
    <section id ="service--7">Lodging, &nbsp</section>
    <section id ="service--8">Parking, &nbsp</section>
    <section id ="service--9">Information, &nbsp</section>
    <section id ="service--10">Zip Lines</section>
    
    </div>
    <div class ="main">
        <article class="allParks">
        <div class ="topParks">
            <section class="parks">
                ${SectionsAndServices(1)}
                </section>
            <section class="parks">
                ${SectionsAndServices(2)}
                 </section>
                <section class="parks">
                ${SectionsAndServices(3)}
                </section>
            </div>
            <div class ="bottomParks">
                <section class="parks">
                ${SectionsAndServices(4)}
                </section>
                <section class="parks">
                ${SectionsAndServices(5)}
                </section>
                <section class="parks">
                ${SectionsAndServices(6)}
                </section>
            </div>
         </article>
         <div class ="people">
         <h2>Guest List</h2>
            ${Guests()}
         </div>
         </div>
    <div class ="footer">
    <article>Phone Number: (518) 824-6000</article>
    <article>Email: CiderFalls@Gmail.com</article>
    <article>Street Address: 89 Cider Falls Drive, Queensbury, NY 12804</article>
    
    </div>
    

    
    `
}