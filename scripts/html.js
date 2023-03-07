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
    <article>Phone Number</article>
    <article>Email</article>
    <article>Street Address</article>
    
    </div>
    

    
    `
}