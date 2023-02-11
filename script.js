const navbar_email = document.querySelector("li.navbar-email")
const desktop_menu = document.querySelector("div.desktop-menu")
const burger_img = document.querySelector("img.menu")
const mobile_menu = document.querySelector("div.mobile-menu")
const car_img = document.querySelector("li.navbar-shopping-cart")
const cart_detail = document.querySelector("aside.cart-detail")
const product_detail = document.querySelector("aside.product-detail")
const close_img = document.querySelector(".product-detail-close")
const close_menu_mobile_img = document.querySelector("div.mobile-menu img")
const body = document.querySelector("body")

const imagen = document.querySelector("#product-detail-img");
const priceProduct = document.querySelector("#product-detail-price");

navbar_email.addEventListener("click", function(){VisibleDesktopMenu()})
burger_img.addEventListener("click", toggleVisibleMobileMenu)
car_img.addEventListener("click", function(){toggleVisibleCartDetail()})
close_img.addEventListener("click", closeProductDetail)
close_menu_mobile_img.addEventListener("click", InvisibleMobileMenu)


// -----------FUNCIONES-----------------
function VisibleDesktopMenu(){
    product_detail.classList.add("invisible")
    cart_detail.classList.add("invisible")
    desktop_menu.classList.toggle("invisible")
}

function toggleVisibleMobileMenu(){
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")

    // Reiniciar cart_detail
    cart_detail.classList.remove("cart-detail_show")

    mobile_menu.classList.remove("invisible")
    body.classList.add("no-scroll")
    // mobile_menu.classList.add("vertical-scroll")
    // mobile_menu.classList.toggle("mobile-menu_show")
    mobile_menu.classList.add("mobile-menu_show")

}

function InvisibleMobileMenu(){
    body.classList.remove("no-scroll")
    mobile_menu.classList.remove("mobile-menu_show")
}

function toggleVisibleCartDetail() {
    product_detail.classList.add("invisible")
    desktop_menu.classList.add("invisible")
    mobile_menu.classList.add("invisible")

    // Reiniciar mobile_menu
    // mobile_menu.classList.remove("mobile-menu_show")

    if(screen.width <= 768){
        cart_detail.classList.remove("invisible")
        // function uwu(){
        // }
        // setTimeout(uwu, 200)
        // body.classList.toggle("no-scroll")
        cart_detail.classList.toggle("cart-detail_show")
        // (body.classList.contains("no-scroll") === false) ? body.classList.add("no-scroll") : body.classList.remove("no-scroll");
    }
    else{
        mobile_menu.classList.add("invisible")
        cart_detail.classList.remove("cart-detail_show")
        cart_detail.classList.toggle("invisible")  
    }
    // console.log(screen.width)
}

// function VisibleProductDetail(img, price, name){
//     product_detail.classList.remove("invisible")
//     console.log({img, price, name})

//     const product_detail_img = document.querySelector("product-detail #product-detail-img")
//     const product_detail_price = document.querySelector("product-detail #product-detail-price")
//     const product_detail_name = document.querySelector("product-detail #product-detail-name")



//     product_detail_img.src = "https://fastly.picsum.photos/id/1041/300/200.jpg?hmac=6ezBGCQFpwkQX8Q2X5IwixcAgYYpqAT-d_4rMaG-bu4"
//     product_detail_price.innerText = price
//     product_detail_name.innerText = name
//     console.log({product_detail_img, product_detail_price, product_detail_name})



//     cart_detail.classList.add("invisible")
//     desktop_menu.classList.add("invisible")
//     mobile_menu.classList.add("invisible")
    

// }

function VisibleProductDetail(event){
    console.log("MOSTRANDO!!!")
    product_detail.classList.remove("invisible")
    imagen.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText; 

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

    // Hacer visible el ProductDetail y le envio sus 
    productImg.addEventListener("click", VisibleProductDetail);


    // creo los elementos restantes
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
    
    // Creo HTML
    cards_container.appendChild(product_card);
    product_card.append(productImg, product_info);
    product_info.append(product_div, productFigure);
    product_div.append(productPrice, productName);
    productFigure.append(cartImg); 
    
}


