let menuCloseButton = document.getElementById("close_button");
let menuOpenButton = document.getElementById("nav_button");
let menu = document.getElementById("menu");
menuOpenButton.onclick = function(){

    menu.classList.add("menu_open");
}

menuCloseButton.onclick = function(){
    menu.classList.remove("menu_open");
}

var a = document.querySelectorAll(".rp_hrf");

function closeMenu(){
     menu.classList.remove("menu_open");
}

                                                                                // Modal Script
let proceed = document.getElementById("proceed");
let modal = document.getElementById("modal");

proceed.onclick = function(){
modal.style.display ="flex";
}

let formCancelButton = document.getElementById("form_cancel_button");

formCancelButton.onclick = function(){
    modal.style.display = "none";                                               // modal closes
    document.getElementById("form_lifesycle").reset();                          // the form is cleared

}

// text button in property page javascript

let propTextButton = document.querySelector(".pr_ow_btn");
let text = " Read more <svg xmlns='http://www.w3.org/2000/svg' width='20.25' height='13.5' viewBox='0 0 20.25 13.5'> <path id='Path_881' data-name='Path 881' d='M10.125-10.687a4.679,4.679,0,0,0-1.1.176,2.3,2.3,0,0,1,.255.949A1.969,1.969,0,0,1,7.312-7.594a2.3,2.3,0,0,1-.949-.255A4.712,4.712,0,0,0,6.21-6.76a3.929,3.929,0,0,0,3.927,3.927A3.929,3.929,0,0,0,14.064-6.76a3.929,3.929,0,0,0-3.927-3.927Zm10,3.424a11.276,11.276,0,0,0-10-6.237,11.278,11.278,0,0,0-10,6.237A1.349,1.349,0,0,0,0-6.75a1.349,1.349,0,0,0,.122.513A11.276,11.276,0,0,0,10.125,0a11.278,11.278,0,0,0,10-6.237,1.349,1.349,0,0,0,.122-.513A1.349,1.349,0,0,0,20.128-7.263Zm-10,5.576A9.564,9.564,0,0,1,1.76-6.75a9.563,9.563,0,0,1,8.365-5.062A9.563,9.563,0,0,1,18.49-6.75,9.563,9.563,0,0,1,10.125-1.687Z' transform='translate(0 13.5)' fill='#777' /> </svg>";
let text2 = "Read less <svg xmlns='http://www.w3.org/2000/svg' width='20.25' height='13.5' viewBox='0 0 20.25 13.5'> <path id='Path_881' data-name='Path 881' d='M10.125-10.687a4.679,4.679,0,0,0-1.1.176,2.3,2.3,0,0,1,.255.949A1.969,1.969,0,0,1,7.312-7.594a2.3,2.3,0,0,1-.949-.255A4.712,4.712,0,0,0,6.21-6.76a3.929,3.929,0,0,0,3.927,3.927A3.929,3.929,0,0,0,14.064-6.76a3.929,3.929,0,0,0-3.927-3.927Zm10,3.424a11.276,11.276,0,0,0-10-6.237,11.278,11.278,0,0,0-10,6.237A1.349,1.349,0,0,0,0-6.75a1.349,1.349,0,0,0,.122.513A11.276,11.276,0,0,0,10.125,0a11.278,11.278,0,0,0,10-6.237,1.349,1.349,0,0,0,.122-.513A1.349,1.349,0,0,0,20.128-7.263Zm-10,5.576A9.564,9.564,0,0,1,1.76-6.75a9.563,9.563,0,0,1,8.365-5.062A9.563,9.563,0,0,1,18.49-6.75,9.563,9.563,0,0,1,10.125-1.687Z' transform='translate(0 13.5)' fill='#777' /> </svg>"
propTextButton.onclick = function(){
    let textBox = document.querySelector(".pr_ow_text");
    document.querySelector(".pr_ow_text_hidden").classList.toggle("showTextBt"); // Show hidden text

    document.querySelector(".pr_ow_text").classList.toggle("showText");         // Removes the fade effect

    if(textBox.classList == "pr_ow_text showText"){                             // If the button is clicked, showText class is added
        
        propTextButton.innerHTML = text2;                                       // Prints Read less to the button

    }
    else{
        propTextButton.innerHTML = text;                                             // Prints Read more to the button
        window.location.href ="#property_page"                                     
    }
}


// text button in marketing plan page javascript

let mpPropTextButton = document.querySelector(".mp_h_button");
mpPropTextButton.onclick = function(){
    let textBox = document.querySelector(".mp_h_text");
    document.querySelector(".mp_h_text_hidden").classList.toggle("showTextBt"); // Show hidden text

    document.querySelector(".mp_h_text").classList.toggle("showText");         // Removes the fade effect

    if(textBox.classList == "mp_h_text showText"){                             // If the button is clicked, showText class is added
        
        mpPropTextButton.innerHTML = text2;                                       // Prints Read less to the button

    }
    else{
        mpPropTextButton.innerHTML = text;                                        // Prints Read more to the button
        window.location.href = "#marketing_plan_page"
    }
}
