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

const imgProduct = document.querySelector("#product-detail-img");
const priceProduct = document.querySelector("#product-detail-price");

const numberCart = document.querySelector(".navbar-shopping-cart div")

navbar_email.addEventListener("click", function(){VisibleDesktopMenu()})
burger_img.addEventListener("click", toggleVisibleMobileMenu)
car_img.addEventListener("click", function(){toggleVisibleCartDetail()})
close_img.addEventListener("click", closeProductDetail)
close_menu_mobile_img.addEventListener("click", invisibleMobileMenu)


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

function invisibleMobileMenu(){
    body.classList.remove("no-scroll")
    mobile_menu.classList.remove("mobile-menu_show")
}

function toggleVisibleCartDetail() {
    product_detail.classList.add("invisible")
    desktop_menu.classList.add("invisible")
    mobile_menu.classList.add("invisible")

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

function VisibleProductDetail(event){

    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    mobile_menu.classList.add("invisible")

    imgProduct.setAttribute("src", event.target.src);
    priceProduct.innerText = event.target.nextElementSibling.innerText; 
    product_detail.classList.remove("invisible")
}

function closeProductDetail(){
    // (desktop_menu.classList.contains("invisible"))
    product_detail.classList.add("invisible")
}

function increaseCounter(event){
    numberCart.innerText = Number(numberCart.innerText) + 1
    console.log(event.target.tagName + "uwu")

}



// Creando la lista de productos
const productList = [
    {
        name: 'Traje elegante rojo',
        price: 3200,
        image: 'img/ropa1.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Pantalón aesthetic',
        price: 1200,
        image: 'img/ropa2.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Tacones fantasía',
        price: 2000,
        image: 'img/ropa3.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Suéter amarillo',
        price: 1500,
        image: 'img/ropa4.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Vestido morado de gala',
        price: 300,
        image: 'img/ropa5.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Tennis Montain Bike',
        price: 2200,
        image: 'img/ropa6.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 800,
        image: 'img/ropa7.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa8.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa9.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa10.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa11.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa12.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa13.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa14.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa15.jpg',
        type: "Clothes",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/ropa16.jpg',
        type: "Clothes",
        description: ""
    },

    //    ---------------------------
    {
        name: 'Traje elegante rojo',
        price: 3200,
        image: 'img/tecnologia1.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Pantalón aesthetic',
        price: 1200,
        image: 'img/tecnologia2.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Tacones fantasía',
        price: 2000,
        image: 'img/tecnologia3.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Suéter amarillo',
        price: 1500,
        image: 'img/tecnologia4.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Vestido morado de gala',
        price: 300,
        image: 'img/tecnologia5.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Tennis Montain Bike',
        price: 2200,
        image: 'img/tecnologia6.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 800,
        image: 'img/tecnologia7.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/tecnologia8.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/tecnologia9.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'Sunglasses',
        price: 600,
        image: 'img/tecnologia10.jpg',
        type: "Tecnology",
        description: ""
    },
    {
        name: 'uuw',
        price: 600,
        image: 'img/tecnologia11.jpg',
        type: "Tecnology",
        description: ""
    },

    //    ---------------------------
    {
        name: 'Traje elegante rojo',
        price: 3200,
        image: 'img/mueble1.jpg',
        type: "Furnitures",
        description: ""
    },
    {
        name: 'Pantalón aesthetic',
        price: 1200,
        image: 'img/mueble2.jpg',
        type: "Furnitures",
        description: ""
    },
    {
        name: 'Tacones fantasía',
        price: 2000,
        image: 'img/mueble3.jpg',
        type: "Furnitures",
        description: ""
    },
    {
        name: 'Suéter amarillo',
        price: 1500,
        image: 'img/mueble4.jpg',
        type: "Furnitures",
        description: ""
    },
    {
        name: 'Vestido morado de gala',
        price: 300,
        image: 'img/mueble5.jpg',
        type: "Furnitures",
        description: ""
    },

    //    ---------------------------
    {
        name: 'Traje elegante rojo',
        price: 3200,
        image: 'img/random1.jpg',
        type: "Others",
        description: ""
    },
    {
        name: 'Pantalón aesthetic',
        price: 1200,
        image: 'img/random2.jpg',
        type: "Others",
        description: ""
    },
    {
        name: 'Tacones fantasía',
        price: 2000,
        image: 'img/random3.webp',
        type: "Others",
        description: ""
    },
    {
        name: 'Suéter amarillo',
        price: 1500,
        image: 'img/random4.webp',
        type: "Others",
        description: ""
    },
    {
        name: 'Vestido morado de gala',
        price: 300,
        image: 'img/random5.jpg',
        type: "Others",
        description: ""
    },
    {
        name: 'Vestido morado de gala',
        price: 300,
        image: 'img/random6.jpg',
        type: "Others",
        description: ""
    },
]

console.log(productList)

renderProductList(productList)


//crea los productos en el menu
// renderProductList()
// function renderProductList(){
//     let html = ""

//     productList.forEach( product => { 
//         html += `
//             <div class="product-card">
//                 <img id="product-img" src="${product.image}" alt="${product.name}">
//                 <div class="product-info">
//                     <div>
//                         <p>$ ${product.price}</p>
//                         <p>${product.name}</p>
//                     </div>
//                     <figure>
//                         <img src="./icons/bt_add_to_cart.svg" alt="boton del carrito">
//                     </figure>
//                 </div>
//             </div>
//         `
//         console.log("Efee")
//         let productImg = document.querySelector("#product-img")
//         productImg.addEventListener("click", VisibleProductDetail);
//     });
//     const cards_container = document.querySelector(".cards-container")
//     cards_container.innerHTML = html

    
//     // const productImg = document.querySelector("#product-img")

//     // Hacer visible el ProductDetail y mostrar datos
//     // productImg.addEventListener("click", VisibleProductDetail);
// }

//muestra el aside con la info del producto seleccionado
// const openProductInfo = (product)=>{ 
//     const aside = document.querySelector('.product-detail');
//     const productImg = document.querySelector('#product-detail-img');
//     const productPrice = document.querySelector('#product-detail-price');
//     const productName= document.querySelector('#product-detail-name');
    
//     aside.classList.remove('invisible');
//     productImg.setAttribute('src',product.img);
//     productPrice.textContent= product.price;
//     productName.textContent= product.name;


// }

// const add = document.querySelector(".product-card figure img")



// --------------------------------------

const sectionDesktop = document.querySelectorAll(".navbar-left ul li a")
const cards_container = document.querySelector(".cards-container")
sectionDesktop[0].addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    renderProductList(productList)
})
sectionDesktop[1].addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const clothesSection = productList.filter(product => {
        return product.type == "Clothes"
    })
    renderProductList(clothesSection)
})
sectionDesktop[2].addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const tecnologySection = productList.filter(product => {
        return product.type == "Tecnology"
    })
    renderProductList(tecnologySection)
})
sectionDesktop[3].addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const furnituresSection = productList.filter(product => {
        return product.type == "Furnitures"
    })
    renderProductList(furnituresSection)
})
sectionDesktop[4].addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const OthersSection = productList.filter(product => {
        return product.type == "Others"
    })
    renderProductList(OthersSection)
})


const sectionMobile = document.querySelectorAll(".mobile-menu ul li a")
sectionMobile[1].addEventListener("click", function(){
    invisibleMobileMenu()
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    renderProductList(productList)
})
sectionMobile[2].addEventListener("click", function(){
    invisibleMobileMenu()
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const clothesSection = productList.filter(product => {
        return product.type == "Clothes"
    })
    renderProductList(clothesSection)
})
sectionMobile[3].addEventListener("click", function(){
    invisibleMobileMenu()
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const tecnologySection = productList.filter(product => {
        return product.type == "Tecnology"
    })
    renderProductList(tecnologySection)
})
sectionMobile[4].addEventListener("click", function(){
    invisibleMobileMenu()
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const furnituresSection = productList.filter(product => {
        return product.type == "Furnitures"
    })
    renderProductList(furnituresSection)
})
sectionMobile[5].addEventListener("click", function(){
    invisibleMobileMenu()
    desktop_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    cards_container.innerHTML = ""
    const OthersSection = productList.filter(product => {
        return product.type == "Others"
    })
    renderProductList(OthersSection)
})


function renderProductList(productsList){
    for(product of productsList){
        const cards_container = document.querySelector(".cards-container")
    
        const product_card = document.createElement("div")
        product_card.classList.add("product-card")
        
        const productImg = document.createElement("img")
        productImg.setAttribute("src", product.image)
    
        // const product_card_img = document.querySelectorAll("div.product-card img")
    
        // Hacer visible el ProductDetail y mostrar datos
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
        
        // Aumentar el contador del carrito
        cartImg.addEventListener("click", () => {increaseCounter(element)})
        // Agregar el producto al carrito
    
    
    
        // Creo HTML
        cards_container.appendChild(product_card);
        product_card.append(productImg, product_info);
        product_info.append(product_div, productFigure);
        product_div.append(productPrice, productName);
        productFigure.append(cartImg); 
        
    }
}