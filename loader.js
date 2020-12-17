function hide_loader(){
    let loader = document.getElementById("loader");
    loader.style.visibility = "hidden";

    document.getElementById("v_header").style.visibility = "visible";
    document.getElementById("insert_before_me").style.visibility = "visible";
}

function show_loader(){
    let loader = document.getElementById("loader");
    loader.style.visibility = "visible";

    document.getElementById("v_header").style.visibility = "hidden";
    document.getElementById("insert_before_me").style.visibility = "hidden";
}


export {hide_loader, show_loader};