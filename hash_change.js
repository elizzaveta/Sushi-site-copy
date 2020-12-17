import add_product_details_page from "./product_detail_page.js";
import add_category_on_page from "./category_page.js";
import add_products_on_page from "./products_page.js";
import add_recommendations_on_page from "./main_add_recommendations.js";
import add_promo_on_page from "./promo_page.js";
import {products_json,categories_json, recommended_json, promo_json} from "./fetch_data.js";
import add_promo_details_page from "./promo_detail_page.js";
import {display_cart_page} from "./cart_page.js";
import {display_order_page} from "./order_page.js";

window.addEventListener('hashchange', hashchange);
let prev_hash = "";

function change_prev_hash(new_hash){
    prev_hash = new_hash;
}

function hashchange(){
    if(location.hash !== prev_hash){
        let pos_of_slash = find_last(location.hash);
        if(pos_of_slash!== -1) {
            let path = location.hash.substring(pos_of_slash + 1, location.hash.length);
            manage_hash_load_page(location.hash);
        }else{
            switch (location.hash){
                case "#catalog": add_products_on_page(categories_json.json, products_json.json); break;
                case "#main": add_recommendations_on_page(recommended_json.json,products_json.json); break;
                case "#promo": add_promo_on_page(promo_json.json); break;
                case "#cart": display_cart_page(products_json.json); break;
                case "#make_order":
                    if(((JSON.parse(localStorage.getItem("cart"))) !== null)
                        && (JSON.parse(localStorage.getItem("cart")).length !== 0))
                    {
                        display_order_page();
                    }
                    break;
                default: add_recommendations_on_page(recommended_json.json,products_json.json); break;
            }
        }
    }
}

function find_last(hash){
    let pos = -1;
    let return_pos = -1;
    while (((pos = hash.indexOf("/", pos + 1)) !== -1) && pos!== hash.length ) {
        return_pos = pos;
    }
    return return_pos;
}

function all_slashes(hash){
    let pos = -1;
    let return_pos = [];
    while (((pos = hash.indexOf("/", pos + 1)) !== -1) && pos!== hash.length ) {
        return_pos.push(pos);
    }
    return return_pos;
}

function manage_hash_load_page(url) {
    let slashes_pos = all_slashes(url);
    if (slashes_pos.length === 1) {
        //проверка на то, не ввели ли неправильный хеш!!

        let first = url.substring(1, slashes_pos[0]);
        let second = url.substring(slashes_pos[0] + 1, url.length);

        let source;

        switch (first) {
            case "products":
                source = products_json.json;
                break;
            case "catalog":
                source = categories_json.json;
                break;
            case "promo":
                source = promo_json.json;
                break;
        }

        let not_correct = true;

        for (let i = 0; i < source.length; i++) {
            console.log(source[i].url + " !== " + String(second))
            if (source[i].url === String(second)) {
                not_correct = false;
                switch (String(first)) {
                    case "products":
                        add_product_details_page(i, products_json.json);
                        break;
                    case "catalog":
                        add_category_on_page(String(i + 1), categories_json.json, products_json.json);
                        break;
                    case "promo":
                        add_promo_details_page(i, promo_json.json);
                        break;
                }

            }
        }

        if(not_correct){
            add_recommendations_on_page(recommended_json.json,products_json.json);
        }

    }
}

export {change_prev_hash};
