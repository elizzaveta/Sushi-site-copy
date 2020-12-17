import add_recommendations_on_page from "./main_add_recommendations.js";
import add_products_on_page from "./products_page.js";
import add_category_on_page from "./category_page.js"
import add_product_details_page from "./product_detail_page.js";
import add_promo_on_page from "./promo_page.js";
import {products_json,categories_json, promo_json, recommended_json} from "./fetch_data.js";
import {display_cart_page} from "./cart_page.js";
import {hide_loader} from "./loader.js";

function main_page(){
    hide_loader();
    add_recommendations_on_page(recommended_json.json,products_json.json);
    let ls_array = JSON.parse(localStorage.getItem("cart"));
    if(ls_array !== null){
        let numb = 0;
        for(let i = 0; i<ls_array.length;i++){
            numb+=Number(ls_array[i].count);
        }
        document.getElementById("cart").textContent = numb;
    }
}
function display_products_data(){
    add_products_on_page( categories_json.json, products_json.json);
}
function display_category_data(id){
    add_category_on_page(id,categories_json.json,products_json.json);
}
function display_product_detail_data(id){
    add_product_details_page(id, products_json.json);
}
function display_promo_data(){
    add_promo_on_page(promo_json.json);
}


function load_first(){
    document.getElementById("a_catalog").onclick = function() {display_products_data()};
    document.getElementById("MySushi").onclick =  function() {main_page()};
    document.getElementById("a_promo").onclick = function() {display_promo_data()};
    document.getElementById("cart").onclick = function() {display_cart_page(products_json.json)};
    document.getElementById("cart2").onclick = function() {display_cart_page(products_json.json)};

}

load_first();



export {display_category_data, display_product_detail_data, main_page, display_promo_data};

