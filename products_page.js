import {display_category_data, display_product_detail_data} from "./fetch.js";
import {change_prev_hash} from "./hash_change.js";
import {grid_product_elem, clear_and_add_frame, add_menu} from "./common_add_on_page.js";

export default function add_products_on_page(categories, products){
    clear_and_add_frame(true);
    let main = document.getElementById("clear");
    main.className = "row"

    add_menu(categories);

    let right_part = document.createElement("div");
    right_part.className = "col-lg-9 col-md-9"
    main.appendChild(right_part);

    let cat_id_names = [];
    for(let i = 0; i<categories.length; i++){
        let cat_block = document.createElement("div");
        right_part.appendChild(cat_block);

        let cat_name = document.createElement("h3");
        cat_name.className = "pointer shadow-none p-3 text-uppercase mb-5 bg-light rounded font-weight-lighter text-center";
        cat_name.id = String(i);
        cat_name.onclick = function() {display_category_data(String(i+1))};
        cat_name.textContent = categories[i].name;

        cat_block.appendChild(cat_name);

        let prod_grid = document.createElement("div");
        prod_grid.className = "row";
        prod_grid.id = "category"+(i+1);
        cat_id_names.push("category"+(i+1));

        cat_block.appendChild(prod_grid);

    }
    for(let i = 0; i<products.length; i++){
        let category_numb = products[i].category_id;
        let parent_block = document.getElementById(cat_id_names[Number(category_numb)-1]);

        grid_product_elem(products, i,parent_block);

    }

    change_prev_hash("#catalog")
    location.hash = "catalog";
}



export {add_products_on_page}