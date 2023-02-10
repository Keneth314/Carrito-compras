const navbar_email = document.querySelector("li.navbar-email")
const desktop_menu = document.querySelector("div.desktop-menu")
const burger_img = document.querySelector("img.menu")
const mobile_menu = document.querySelector("div.mobile-menu")
const car_img = document.querySelector("li.navbar-shopping-cart")
const cart_detail = document.querySelector("aside.cart-detail")
const product_detail = document.querySelector("aside.product-detail")
const close_img = document.querySelector(".product-detail-close")
const body = document.querySelector("body")

navbar_email.addEventListener("click", function(){toggleVisibleDesktopMenu()})
burger_img.addEventListener("click", toggleVisibleMobileMenu)
car_img.addEventListener("click", function(){toggleVisibleCartDetail()})
close_img.addEventListener("click", closeProductDetail)


// -----------FUNCIONES-----------------
function toggleVisibleDesktopMenu(){
    product_detail.classList.add("invisible")
    cart_detail.classList.add("invisible")
    desktop_menu.classList.toggle("invisible")
}

function toggleVisibleMobileMenu(){
    mobile_menu.classList.remove("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    if(mobile_menu.classList.contains("mobile-menu_show") === false){
        mobile_menu.classList.add("mobile-menu_show")
    }
    else{
        mobile_menu.classList.toggle("mobile-menu_hide")
    }
    // Reinicio de ProductDetail
    cart_detail.classList.remove("cart-detail_show")
    cart_detail.classList.remove("cart-detail_hide")
}

function toggleVisibleCartDetail() {
    product_detail.classList.add("invisible")
    desktop_menu.classList.add("invisible")
    if(screen.width <= 768){
        if(cart_detail.classList.contains("cart-detail_show") === false){
            cart_detail.classList.remove("invisible")
            cart_detail.classList.remove("cart-detail_hide")
            cart_detail.classList.toggle("cart-detail_show")

        }
        else{
            cart_detail.classList.remove("cart-detail_show")
            cart_detail.classList.toggle("cart-detail_hide")
        }
        // Reinicio de menu_mobile
        mobile_menu.classList.remove("mobile-menu_show")
        mobile_menu.classList.remove("mobile-menu_hide")
    }
    else{
        mobile_menu.classList.add("invisible")
        cart_detail.classList.remove("cart-detail_hide")
        cart_detail.classList.remove("cart-detail_show")
        cart_detail.classList.toggle("invisible")  
    }
    console.log(screen.width)
    
}

function VisibleProductDetail(image){
    // const product_detail_img = document.querySelector("aside.product-detail #product-detail-img")
    // product_detail_img.setAttribute("src", image)
    console.log("Show Producto Detail")
    cart_detail.classList.add("invisible")
    desktop_menu.classList.add("invisible")
    mobile_menu.classList.add("invisible")
    product_detail.classList.remove("invisible")
}

function closeProductDetail(){
    // (desktop_menu.classList.contains("invisible"))
    product_detail.classList.add("invisible")
}


// Creando la lista de productos
const productList = [];

productList.push ({
    name:'Bike',
    price: 12700,
    image: 'https://fastly.picsum.photos/id/63/300/200.jpg?hmac=fIasgHoSbyiqE83FdjmxzRR2vjfUKDNktGG8MNuO_4Q'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1200,
    image: 'https://fastly.picsum.photos/id/1041/300/200.jpg?hmac=6ezBGCQFpwkQX8Q2X5IwixcAgYYpqAT-d_4rMaG-bu4'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1600,
    image: 'https://fastly.picsum.photos/id/650/300/200.jpg?hmac=nuRnzrByBYKU6fsTl1xwz3MIpNrNjb0PjLJA5ypiOqU'
});
productList.push ({
    name:'Bicycle helmet',
    price: 1500,
    image: 'https://fastly.picsum.photos/id/1081/300/200.jpg?hmac=fbKeKxgZkfNvHihq19otFEq3XIIskrkKx0agOvAsFlI'
});
productList.push ({
    name:'Seat',
    price: 300,
    image: 'https://fastly.picsum.photos/id/735/300/200.jpg?hmac=POPDKxfv7tiKB212bnTjx60t4vzSUAWxwjHeIimVHWg'
});
productList.push ({
    name:'Tennis Montain Bike',
    price: 2200,
    image: 'https://fastly.picsum.photos/id/821/300/200.jpg?hmac=6IKXckQtVXfIh7pRXj7cxezrxH-zM2WAkCAcn2EGZao'
});
productList.push ({
    name:'Sunglasses',
    price: 800,
    image: 'https://fastly.picsum.photos/id/430/300/200.jpg?hmac=MFV20dJJadnnbIqXebEtuv2S-6-zEEMQXzkP7UK3HKU'
});
productList.push ({
    name:'Sunglasses',
    price: 600,
    image: 'https://fastly.picsum.photos/id/253/300/200.jpg?hmac=75Xcyfr-AhlvQYL85fVhv4SQ6xUrW1TiRnOzpAnlc1k'
});
productList.push ({
    name:'Bicycle seat bag',
    price: 876,
    image: 'https://fastly.picsum.photos/id/59/300/200.jpg?hmac=NDge9tf7z_Kc8h3nccPRWXtXqV7kAjM93CMqRNN-3wU'
}); 

for(product of productList){
    const cards_container = document.querySelector(".cards-container")

    const product_card = document.createElement("div")
    product_card.classList.add("product-card")
    
    const productImg = document.createElement("img")
    productImg.setAttribute("src", product.image)

    // const product_card_img = document.querySelectorAll("div.product-card img")


    productImg.addEventListener("click", function(){VisibleProductDetail(product.image)})

    const product_info = document.createElement("div")
    product_info.classList.add("product-info")
    
    const product_div = document.createElement("div")
    
    const productPrice = document.createElement("p")
    productPrice.innerText = "$ " + product.price
    const productName = document.createElement("p")
    productName.innerText = product.name
    
    const productFigure = document.createElement("figure")
    
    const cartImg = document.createElement("img")
    cartImg.setAttribute("src", "./icons/bt_add_to_cart.svg")
    
    cards_container.appendChild(product_card);
    product_card.append(productImg, product_info);
    product_info.append(product_div, productFigure);
    product_div.append(productPrice, productName);
    productFigure.append(cartImg); 
    
}






