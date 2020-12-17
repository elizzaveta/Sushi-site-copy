import {button_remove_from_cart, count_cost} from "./cart.js";
import {products_json} from "./fetch_data.js";
import {grid_product_elem, clear_and_add_frame} from "./common_add_on_page.js";
import {hide_loader,show_loader} from "./loader.js";

function send_order(name, phone, email, adress, date){
    clear_and_add_frame(false);
    show_loader();


    let order = {
        name: name,
        phone: phone,
        email: email,
        address: adress,
        date: date,
        cart: localStorage.getItem("cart")
    }
    post(order).catch((error) => {
            console.log(error);
        });


    hide_loader();
    display_order_details_page(name, phone, email, adress, date);
    clear_cart();
}

function post(order){
    return fetch(`https://my-json-server.typicode.com/elizzaveta/Sushi-site/products`, {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(order)
    }).then(response => {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response.json()
    })
        .catch(error => {
            console.log(error);
        });
}

function display_order_details_page(name, phone, email, adress, date) {
    clear_and_add_frame(false);

    let main = document.getElementById("clear");

    main.style.padding = "45px";

    let header = document.createElement("h2");
    header.textContent = "Ваш заказ:";
    header.className = "text-center font-weight-light";
    main.appendChild(header)

    let p1 = document.createElement("p");
    p1.className = "lead";
    p1.textContent = "Имя: "+name;
    let p2 = document.createElement("p");
    p2.className = "lead";
    p2.textContent = "Номер телефона: "+phone;
    let p3 = document.createElement("p");
    p3.className = "lead";
    p3.textContent = "Email: "+email;
    let p4 = document.createElement("p");
    p4.className = "lead ";
    p4.textContent = "Адрес доставки: "+adress;
    let p5 = document.createElement("p");
    p5.className = "lead";
    p5.textContent = "Дата и время доставки: "+date;

    main.appendChild(p1);
    main.appendChild(p2);
    main.appendChild(p3);
    main.appendChild(p4);
    main.appendChild(p5);

    let split = document.createElement("div");
    split.className= "line";

    main.appendChild(split);


    display_check_order_products();

    let sum = document.createElement("p");
    sum.id = "sum";
    sum.textContent = "Стоимость заказа: "+count_cost(products_json.json)+" грн.";
    sum.className = "lead";
    main.appendChild(sum);


}

function display_check_order_products(){
    let main = document.getElementById("clear");

    let prod_array = localStorage.getItem("cart");
    prod_array = JSON.parse(prod_array);

    for(let i = 0; i< prod_array.length;i++) {
        let elem = document.createElement("p");
        elem.className = "lead";

        elem.textContent = products_json.json[Number(prod_array[i].id)].product_name + " : " + prod_array[i].count + " шт.";

        main.appendChild(elem);
    }

}

function clear_cart(){
    localStorage.clear();

    let display_number = document.getElementById("cart");
    display_number.textContent = "0";
}




export {send_order};