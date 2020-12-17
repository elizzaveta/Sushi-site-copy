import {change_prev_hash} from "./hash_change.js";
import {grid_product_elem, clear_and_add_frame} from "./common_add_on_page.js";
import {display_promo_data} from "./fetch.js";

export default function add_recommendations_on_page(recommended_data, products_data){
    clear_and_add_frame(false);

    let main = document.getElementById("clear");

    // let promo = document.createElement("div");
    // promo.className = "p-5 d-flex justify-content-center";
    // promo.style.background = "rgb(228, 242, 244)";
    // main.appendChild(promo);

    let div_promo = document.createElement("div");
    div_promo.className = "bg-light";
    div_promo.style.padding ="20px";
    main.appendChild(div_promo);

    let sl_div = document.createElement("div");
    sl_div.className = "pointer m_slider";
    sl_div.onclick = function() {display_promo_data()};
    div_promo.appendChild(sl_div);

    let pr_image = document.createElement("img");
    pr_image.src = "img_promo/slider_promo.jpg";
    pr_image.className = "m_slide";
    sl_div.id = "m_slide";
    sl_div.appendChild(pr_image);

    let text_and_line = document.createElement("div");
    text_and_line.className = "row"

    let text = document.createElement("div");
    text.textContent = "Рекомендованное:";
    text.className = "font-weight-light p-4";
    text.style.fontSize = "30px";
    main.appendChild(text);

    let grid_block = document.createElement("div");
    grid_block.className = "row";
    grid_block.style.padding = "20px"
    main.appendChild(grid_block);

    for(let i = 0; i<recommended_data.length;i++){
        grid_product_elem(products_data, Number(recommended_data[i]), grid_block );
    }

    change_prev_hash("#main")
    location.hash = "main";
}



export {add_recommendations_on_page};