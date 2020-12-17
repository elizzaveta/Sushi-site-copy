import {clear_and_add_frame} from "./common_add_on_page.js";
import {change_prev_hash} from "./hash_change.js";
import {button_remove_from_cart, count_cost, button_plus_item,button_minus_item} from "./cart.js";
import {display_order_page} from "./order_page.js";

function display_cart_page(products){
    clear_and_add_frame(false);
    let main = document.getElementById("clear");
    main.className = "bg-light";
    main.style.padding="10px";

    let head = document.createElement("h2");
    head.textContent = "Корзина";
    head.style.textAlign="center";
    head.className = "font-weight-light";

    main.appendChild(head);

    let get_cart_array = localStorage.getItem("cart");
    get_cart_array = JSON.parse(get_cart_array);


    if(get_cart_array !== null && get_cart_array.length!==0){
        display_cart_products(get_cart_array, products);

        let d = document.createElement("div");
        d.id = "make_order";
        main.appendChild(d);

        let sum = document.createElement("p");
        sum.id = "sum";
        sum.textContent = "Стоимость заказа: "+count_cost(products)+" грн.";
        sum.className = "lead p-4 text-center";
        d.appendChild(sum);

        let order_button = document.createElement("button")
        order_button.type = "button";
        order_button.className = "pulse_button btn btn-success btn-block";
        order_button.textContent = "Оформить заказ";
        order_button.onclick = function (){  display_order_page()  };
        d.appendChild(order_button);
    }else{
        let massage = document.createElement("h4");
        massage.className = "font-weight-light text-center";
        massage.textContent = "Вы еще ничего не добавили.";
        main.appendChild(massage);
    }

    change_prev_hash("#cart");
    location.hash = "cart";

}

function display_cart_products(prod_array, products){
    let main = document.getElementById("clear");

    for(let i = 0; i< prod_array.length;i++){
        let elem = document.createElement("div");
        elem.className = "row bg-white";
        elem.id = "elem_cart"+prod_array[i].id;
        elem.style.margin = "35px";

        let left_part = document.createElement("div");
        left_part.className = "col-lg-3";

        let pr_image = document.createElement("img");
        pr_image.src = String(products[Number(prod_array[i].id)].pr_image);
        pr_image.className = "w-75";
        left_part.appendChild(pr_image);

        let right_part = document.createElement("div");

        let name = document.createElement("div");
        name.className = "font-weight-light";
        name.style.fontSize = "20px";
        name.textContent = products[Number(prod_array[i].id)].product_name;
        right_part.appendChild(name);

        let count = document.createElement("div");
        count.className = "row"
        count.style.marginLeft = "0px";
        let count_numb = document.createElement("p");
        count_numb.textContent = "Количество: "+prod_array[i].count;
        count_numb.id = "count"+prod_array[i].id;
        count.appendChild(count_numb);

        let btn_group = document.createElement("div");
        btn_group.className = "btn-group btn-group-sm"
        btn_group.style.marginLeft = "5px";
        btn_group.role = "group"
        let button_min = document.createElement("button");
        let button_plus = document.createElement("button");
        button_min.type = "button";
        button_plus.type = "button";
        button_min.className = "btn btn-outline-success"
        button_plus.className = "btn btn-outline-success"
        button_min.textContent = "-";
        button_plus.textContent="+";
        button_min.onclick = function (){
            button_minus_item(prod_array[i].id);
            update_sum(products);
        };
        button_plus.onclick = function (){
            button_plus_item(prod_array[i].id)
            update_sum(products);
        };

        btn_group.appendChild(button_min);
        btn_group.appendChild(button_plus);

        count.appendChild(btn_group);

        right_part.appendChild(count);

        let button = document.createElement("button");
        button.type = "button";
        button.className = "btn btn-outline-danger";
        button.textContent = "Удалить";
        right_part.appendChild(button);
        button.onclick = function (){ button_remove_from_cart(prod_array[i].id)};

        elem.appendChild(left_part);
        elem.appendChild(right_part);

        main.appendChild(elem);

    }
}

function update_sum(products){
    let sum = document.getElementById("sum");
    sum.textContent = "Стоимость заказа: "+count_cost(products)+" грн.";


}


export {display_cart_page};