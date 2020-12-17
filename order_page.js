import {change_prev_hash} from "./hash_change.js";
import {send_order} from "./check_order.js";
import {clear_and_add_frame} from "./common_add_on_page.js";

function display_order_page(){
    clear_and_add_frame(false);

    let main = document.getElementById("clear");

    let form_name = document.createElement("form");
    form_name.className = "forms form-group row-5";

    let label1 = document.createElement("label");
    label1.textContent = "Имя: ";

    let input1 = document.createElement("input");
    input1.className = "form-control mb-1 mr-sm-2";
    input1.placeholder = "Ваше имя";
    input1.required = true;
    input1.minLength = 2;

    let label2 = document.createElement("label");
    label2.textContent = "Телефон: ";

    let input2 = document.createElement("input");
    input2.className = "form-control  mb-1 mr-sm-2";
    input2.placeholder = "0501234455";
    input2.required = true;
    input2.pattern = "[0-9]{10}";
    //input2.pattern = "([0-9]{9})||(+380[0-9]{9})||(380[0-9]{9})";

    let label3 = document.createElement("label");
    label3.textContent = "Email: ";

    let input3 = document.createElement("input");
    input3.className = "form-control  mb-1 mr-sm-2";
    input3.placeholder = "your_email@example.com";
    input3.required = true;
    input3.pattern = "[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}";

    let label4 = document.createElement("label");
    label4.textContent = "Адрес: ";

    let input4 = document.createElement("input");
    input4.className = "form-control mb-1 mr-sm-2";
    input4.placeholder = "Адрес доставки";
    input4.required = true;
    input4.minLength = 8;

    let label5 = document.createElement("label");
    label5.textContent = "Дата и время: ";

    let input5 = document.createElement("input");
    input5.type = "datetime-local"
    input5.className = "form-control  mb-1 mr-sm-2";
    input5.required = true;
    // input5.min = String(new Date());

    form_name.appendChild(label1);
    form_name.appendChild(input1);
    form_name.appendChild(label2);
    form_name.appendChild(input2);
    form_name.appendChild(label3);
    form_name.appendChild(input3);

    form_name.appendChild(label4);
    form_name.appendChild(input4);
    form_name.appendChild(label5);
    form_name.appendChild(input5);

    let order_button = document.createElement("button")
    order_button.type = "submit";
    order_button.className = "btn btn-success btn-block";
    order_button.textContent = "Заказать";
    order_button.onclick = function (){  send_order(input1.value, input2.value,input3.value,input4.value,input5.value)  };
    form_name.appendChild(order_button);

    main.appendChild(form_name);

    change_prev_hash("#make_order");
    location.hash = "make_order";

}


export {display_order_page};