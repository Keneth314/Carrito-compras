const navbar_email = document.querySelector("li.navbar-email")
const desktop_menu = document.querySelector("div.desktop-menu")
const burger_img = document.querySelector("img.menu")
const mobile_menu = document.querySelector("div.mobile-menu")
const car_img = document.querySelector("li.navbar-shopping-cart")
const product_detail = document.querySelector("aside.product-detail")
const body = document.querySelector("body")


navbar_email.addEventListener("click", function(){toggleVisibleDesktopMenu()})
burger_img.addEventListener("click", toggleVisibleMobileMenu)
car_img.addEventListener("click", function(){toggleVisibleProductDetail()})



// -----------FUNCIONES-----------------
function toggleVisibleDesktopMenu(){
    product_detail.classList.add("invisible")
    desktop_menu.classList.toggle("invisible")
}


function toggleVisibleMobileMenu(){
    mobile_menu.classList.remove("invisible")
    product_detail.classList.add("invisible")
    if(mobile_menu.classList.contains("mobile-menu_show") === false){
        mobile_menu.classList.add("mobile-menu_show")
    }
    else{
        mobile_menu.classList.toggle("mobile-menu_hide")
    }
    // Reinicio de ProductDetail
    product_detail.classList.remove("product-detail_show")
    product_detail.classList.remove("product-detail_hide")
}

function toggleVisibleProductDetail() {
    
    mobile_menu.classList.add("invisible")
    desktop_menu.classList.add("invisible")
    if(screen.width <= 768){
        if(product_detail.classList.contains("product-detail_show") === false){
            product_detail.classList.remove("invisible")
            product_detail.classList.remove("product-detail_hide")
            product_detail.classList.toggle("product-detail_show")

        }
        else{
            product_detail.classList.remove("product-detail_show")
            product_detail.classList.toggle("product-detail_hide")
        }
        // Reinicio de menu_mobile
        mobile_menu.classList.remove("mobile-menu_show")
        mobile_menu.classList.remove("mobile-menu_hide")
    }
    else{
        
        product_detail.classList.remove("product-detail_hide")
        product_detail.classList.remove("product-detail_show")
        product_detail.classList.toggle("invisible")  
    }
    console.log(screen.width)
    
}

