import {change_prev_hash} from "./hash_change.js";
import {grid_product_elem, clear_and_add_frame, add_menu} from "./common_add_on_page.js";

export default function add_category_on_page(cat_id, categories, products){
    clear_and_add_frame(true);

    let main = document.getElementById("clear");

    add_menu(categories);

    let right_part = document.createElement("div");
    right_part.className = "col-lg-9"
    main.appendChild(right_part);

    let cat_name = document.createElement("h3");
    cat_name.className = "shadow-none p-3 text-uppercase mb-5 bg-light rounded font-weight-lighter text-center";
    cat_name.textContent = categories[Number(cat_id)-1].name;
    right_part.appendChild(cat_name);


    let prod_grid = document.createElement("div");
    prod_grid.className = "row";
    prod_grid.id = "category"+cat_id;

    right_part.appendChild(prod_grid);

    for(let i = 0; i<products.length; i++){
        console.log(products[i].category_id+" !== "+cat_id);
        if(String(products[i].category_id)=== cat_id){
            let category_numb = products[i].category_id;

            grid_product_elem(products,i,prod_grid);

        }
    }
    change_prev_hash("#catalog/"+ categories[Number(cat_id)-1].url)
    location.hash = "catalog/"+ categories[Number(cat_id)-1].url;

}


export {add_category_on_page}