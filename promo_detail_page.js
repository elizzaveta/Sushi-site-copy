import {change_prev_hash} from "./hash_change.js";
import {clear_and_add_frame} from "./common_add_on_page.js";

export default function add_promo_details_page(id, promo){
    clear_and_add_frame(false);
    let main = document.getElementById("clear");

    let name = document.createElement("h3");
    name.textContent = promo[id].name;
    name.className = "font-weight-lighter text-center"
    main.appendChild(name);

    let image_div = document.createElement("div");
    image_div.className = "d-flex justify-content-center"
    let pr_image = document.createElement("img");
    pr_image.src = String(promo[id].pr_image);
    pr_image.style.margin = "auto auto"
    pr_image.className = "w-75";
    image_div.appendChild(pr_image);
    main.appendChild(image_div);


    let details = document.createElement("p");
    details.className = "lead p-4";
    details.textContent = promo[id].more_details;
    main.appendChild(details);

    change_prev_hash("#promo/"+promo[id].url);
    location.hash = "promo/"+promo[id].url;
}


function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

export {add_promo_details_page}