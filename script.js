const navbar_email = document.querySelector("li.navbar-email")
const desktop_menu = document.querySelector("div.desktop-menu")
const burger_img = document.querySelector("img.menu")
const mobile_menu = document.querySelector("div.mobile-menu")

navbar_email.addEventListener("click", visibleNavBarEmail)
burger_img.addEventListener("click", visibleBurgerImg)








// -----------FUNCIONES-----------------
function visibleNavBarEmail(){
    desktop_menu.classList.toggle("invisible")
}
function visibleBurgerImg(){
    if(mobile_menu.classList.contains("animation-show") === false){
        mobile_menu.classList.toggle("animation-show");
    }
    else{
        mobile_menu.classList.toggle("animation-hide");
    }
    // mobile_menu.classList.toggle("animation-mostrar")
}


menuEmail.addEventListener("click", function(){toggleDesktopMenu(desktopMenu)});
hamburguesa.addEventListener("click", function(){toggleDesktopMenu(menuMobile)});

function toggleDesktopMenu(elemento){
    
    elemento.classList.toggle("inactive");
}


