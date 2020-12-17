import {main_page} from "./fetch.js";

let products_json;
let categories_json;
let promo_json;
let recommended_json;

class Data{
    constructor(data){
        this.json = data;
    }
}

function get_products(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/products')
        .then(status)
        .then(json)
        .then(function(data) {
            products_json = new Data(data);
        })
        .then(function (){
        get_categories();
    });
}
function get_categories(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/categories')
        .then(status)
        .then(json)
        .then(function(data) {
            categories_json = new Data(data);
        })
        .then(function (){
            get_promo();
        });
}
function get_promo(){
    fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/promo')
        .then(status)
        .then(json)
        .then(function(data) {
            promo_json = new Data(data);
        })
        .then(function (){
            get_recommended();
        });

}
function get_recommended(){
        fetch('https://my-json-server.typicode.com/elizzaveta/Sushi-site/recomendations')
            .then(status)
            .then(json)
            .then(function(data) {
                recommended_json = new Data(data);
            })
             .then(function (){
                 main_page();
             });
}

function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response)
    } else {
        return Promise.reject(new Error(response.statusText))
    }
}
function json(response) {
    return response.json()
}

get_products();



export {products_json, categories_json, promo_json, recommended_json};