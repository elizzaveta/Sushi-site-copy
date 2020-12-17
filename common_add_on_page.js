import {display_category_data, display_product_detail_data} from "./fetch.js";
import {button_add_to_cart} from "./cart.js";
import add_products_on_page from "./products_page.js";
import {products_json,categories_json} from "./fetch_data.js";

function insertAfter(referenceNode, newNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

function grid_product_elem(products, prod_id, append_to_this){

    let pr_image = document.createElement("img");
    pr_image.src = String(products[prod_id].pr_image);
    pr_image.className = "pointer w-100 ";
    pr_image.onclick = function() {display_product_detail_data(prod_id)};//string??

    let product_element = document.createElement("div");
    product_element.className = "col-lg-3 col-md-3 bg-white";

    let product_name = document.createElement("div");
    product_name.className = "pointer font-weight-light";
    product_name.style.fontSize = "20px";
    product_name.textContent=products[prod_id].product_name;
    product_name.onclick = function() {display_product_detail_data(prod_id)};//string??

    product_element.appendChild(pr_image);
    product_element.appendChild(product_name);

    let price = document.createElement("div");
    price.textContent = products[prod_id].price + " грн.";
    product_element.appendChild(price);

    let button_add = document.createElement("button");
    button_add.type = "button";
    button_add.className = "btn btn-outline-success";
    button_add.textContent = "В корзину";
    button_add.onclick = function (){ button_add_to_cart(prod_id)};

    product_element.appendChild(button_add);

    append_to_this.appendChild(product_element);
}


function clear_and_add_frame(if_row){
    document.getElementById("clear").remove();
    $('html,body').scrollTop(0);

    let b = document.getElementById("insert_before_me");

    let main = document.createElement("div");
    main.id = "clear";
    main.style.paddingLeft = "45px";
    main.style.paddingRight = "45px";
    if(if_row)  main.className = "row";
    insertAfter(b,main);
}

function add_menu(categories){
    let main = document.getElementById("clear");

    let left_part = document.createElement("div");
    left_part.className = "col-md-2 col-lg-2 row-sm"

    let menu = document.createElement("div");
    menu.className = "stickyMenu d-flex sticky-top bg-light flex-column align-content-around";
    left_part.appendChild(menu);

    let menu_name = document.createElement("div");
    menu_name.style.marginTop = "50px";
    menu_name.textContent = "Меню";
    menu_name.onclick = function() {add_products_on_page(categories_json.json, products_json.json)};
    menu_name.className = "box pointer p-md-4 p-lg-4 lead-sm";
    menu.appendChild(menu_name);


    for(let i = 0; i<categories.length; i++){

        let cat_menu = document.createElement("div");
        cat_menu.textContent = categories[i].name;
        cat_menu.onclick = function() {display_category_data(String(i+1))};
        cat_menu.className = "box pointer p-md-4 p-lg-4";
        menu.appendChild(cat_menu);
    }

    main.appendChild(left_part);


}

export {grid_product_elem, clear_and_add_frame, add_menu};