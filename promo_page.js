import {change_prev_hash} from "./hash_change.js";
import add_promo_details_page from "./promo_detail_page.js";
import {clear_and_add_frame} from "./common_add_on_page.js";

export default function add_promo_on_page(promo){
    clear_and_add_frame(true);

    let main = document.getElementById("clear");

    let promo_grid = document.createElement("div");
    promo_grid.className = "col";

    main.appendChild(promo_grid);

    for(let i = 0; i< promo.length; i++){
        let elem = document.createElement("div");
        elem.id = String(i);
        elem.onclick = function() {add_promo_details_page(i, promo)};
        elem.className = "row col-sm";

        let left_part = document.createElement("div");
        left_part.className = "col-lg-5 hidden_promo"

        let pr_image = document.createElement("img");
        pr_image.className = "promo_image";
        pr_image.src = String(promo[i].pr_image);
        left_part.appendChild(pr_image);

        let right_part = document.createElement("div");
        right_part.className = "col-lg-5 "

        let name = document.createElement("p");
        name.textContent = promo[i].name;
        name.className = "font-weight-lighter"
        name.style.fontSize = "30px";
        right_part.appendChild(name);

        let descr = document.createElement("p");
        descr.textContent =  promo[i].details;
        right_part.appendChild(descr);

        elem.appendChild(left_part);
        elem.appendChild(right_part);
        promo_grid.appendChild(elem);
    }

    change_prev_hash("#promo");
    location.hash = "promo";
}

export {add_promo_on_page};