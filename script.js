const navbar_email = document.querySelector("li.navbar-email")
const desktop_menu = document.querySelector("div.desktop-menu")
const burger_img = document.querySelector("img.menu")
const mobile_menu = document.querySelector("div.mobile-menu")
const car_img = document.querySelector("li.navbar-shopping-cart")
const myOrdersMobile = document.querySelector("#my-orders-mobile")
const myOrdersDesktop = document.querySelector("#my-orders-desktop")
const cart_detail = document.querySelector("aside.cart-detail")
const product_detail = document.querySelector("aside.product-detail")
const close_img = document.querySelector(".product-detail-close")
const close_menu_mobile_img = document.querySelector("div.mobile-menu img")
const body = document.querySelector("body")

const imgProduct = document.querySelector("#product-detail-img");
const nameProduct = document.querySelector("#product-detail-name");
const priceProduct = document.querySelector("#product-detail-price");
const contentProduct = document.querySelector("#product-detail-content");

const numberCart = document.querySelector(".navbar-shopping-cart div")
const products_shopping_cart = document.querySelector("#container-shopping-cart")

navbar_email.addEventListener("click", function () { VisibleDesktopMenu() })
burger_img.addEventListener("click", toggleVisibleMobileMenu)
car_img.addEventListener("click", function () { toggleVisibleCartDetail() })
myOrdersMobile.addEventListener("click", function () { toggleVisibleCartDetail() })
myOrdersDesktop.addEventListener("click", function () { toggleVisibleCartDetail() })
close_img.addEventListener("click", closeProductDetail)
close_menu_mobile_img.addEventListener("click", invisibleMobileMenu)


// -----------FUNCIONES-----------------
function VisibleDesktopMenu() {
  product_detail.classList.add("invisible")
  cart_detail.classList.add("invisible")
  desktop_menu.classList.toggle("invisible")
}

function toggleVisibleMobileMenu() {
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

function invisibleMobileMenu() {
  body.classList.remove("no-scroll")
  mobile_menu.classList.remove("mobile-menu_show")
}

function toggleVisibleCartDetail() {
  product_detail.classList.add("invisible")
  desktop_menu.classList.add("invisible")
  mobile_menu.classList.add("invisible")

  if (screen.width <= 768) {
    body.classList.remove("no-scroll")
    cart_detail.classList.toggle("invisible")
    cart_detail.classList.toggle("cart-detail_show")
  }
  else {
    mobile_menu.classList.add("invisible")
    cart_detail.classList.remove("cart-detail_show")
    cart_detail.classList.toggle("invisible")
  }
}

function VisibleProductDetail(event) {
  desktop_menu.classList.add("invisible")
  cart_detail.classList.add("invisible")
  mobile_menu.classList.add("invisible")

  const productInfo = event.target.nextElementSibling

  imgProduct.setAttribute("src", event.target.src);
  priceProduct.innerText = productInfo.querySelector("div p:nth-child(1)").innerText
  nameProduct.innerText = productInfo.querySelector("div p:nth-child(2)").innerText

  let selectedProduct = productList.find(function (product) {
    return (product.name === nameProduct.innerText)
  })

  if (!selectedProduct.description) {
    selectedProduct.description = "Lo siento a??n no tenemos su descripci??n :("
  }

  contentProduct.innerText = selectedProduct.description

  product_detail.classList.remove("invisible")
}

function closeProductDetail() {
  // (desktop_menu.classList.contains("invisible"))
  product_detail.classList.add("invisible")
}

function increaseCounter(event) {

  const div = event.target.parentElement.closest("div")
  // console.log(div)
  const price = div.querySelector("div p:nth-child(1)").innerText
  const name = div.querySelector("div p:nth-child(2)").innerText
  const img = div.parentElement.querySelector("img").src

  let html = `
        <div class="shopping-cart">
            <figure>
                <img src="${img}" alt="bike">
            </figure>
            <p>${name}</p>
            <p id="productPrice">${price}</p>
            <img src="./icons/icon_close.png" alt="close" id="delete-img">
        </div>
    `
  products_shopping_cart.innerHTML += html

  numberCart.innerText = Number(numberCart.innerText) + 1

  const delete_product_img = document.querySelectorAll(".shopping-cart #delete-img")
  // console.log("???? ~ file: script.js:156 ~ increaseCounter ~ delete_product_img", delete_product_img)

  deleteProduct(delete_product_img)

  const cantidad = document.querySelectorAll("#productPrice")
  sumProducts(cantidad)

  messageEmptyCart()
}

function sumProducts(cantidad) {
  let sum = 0
  cantidad.forEach(precio => {
    let aux = Number(precio.innerText.replace("$ ", ""))
    sum += aux
  })

  const total = document.querySelector("#total")
  total.innerText = "$ " + sum.toFixed(2)

}
function deleteProduct(array) {
  array.forEach(elemento => {
    elemento.addEventListener("click", function (event) {
      const uwu = event.target
      const container = uwu.parentElement
      container.remove()
      const cantidad = document.querySelectorAll("#productPrice")
      numberCart.innerText = Number(numberCart.innerText) - 1
      sumProducts(cantidad)
      messageEmptyCart()
    })
  })
}
function messageEmptyCart() {
  let products = products_shopping_cart.querySelectorAll("div.shopping-cart")

  if (products.length >= 1) {
    products_shopping_cart.querySelector(".message-no-cart").classList.add("invisible")
    products_shopping_cart.classList.remove("layout-initial")
    if(products.length > 3){
      products_shopping_cart.classList.add("layout-img-cart")
    }
    else{
      products_shopping_cart.classList.remove("layout-img-cart")
    }
  }
  else {
    products_shopping_cart.classList.remove("layout-img-cart")
    products_shopping_cart.classList.add("layout-initial")
    products_shopping_cart.querySelector(".message-no-cart").classList.remove("invisible")
  }
}

// Creando la lista de productos
const productList = [
  {
    name: 'Pel??cula Mi vecino Totoro',
    price: 10.99,
    image: 'img/random6.jpg',
    type: 'Others',
    description: 'Mi vecino Totoro es una pel??cula animada cl??sica de Studio Ghibli. Esta pel??cula presenta una historia conmovedora y personajes adorables que seguro que te robar??n el coraz??n. Si eres fan??tico del anime o las pel??culas animadas, esta pel??cula es imprescindible en tu colecci??n.'
  },
  {
    name: 'Headphones Beats Studio Rosa',
    price: 179.99,
    image: 'img/tecnologia19.jpg',
    type: 'Tecnology',
    description: 'Estos aud??fonos inal??mbricos de alta calidad te brindan una experiencia musical ??nica y envolvente. Con una bater??a de larga duraci??n y cancelaci??n de ruido, podr??s disfrutar de tus canciones favoritas con un sonido cristalino y claro.'
  },
  {
    name: 'A million to one',
    price: 12.99,
    image: 'img/random9.jpg',
    description: 'Basada en hechos reales, esta pel??cula cuenta la historia de Chris Norton, un joven deportista que qued?? paralizado del cuello para abajo tras un accidente en un partido de f??tbol americano. A pesar de las dificultades, Chris encuentra el amor y juntos trabajan para cumplir un objetivo aparentemente imposible: caminar juntos en el d??a de su boda.',
    type: 'Others'
  },
  {
    name: 'Pel??cula Spiderman far from home',
    price: 20.99,
    image: 'img/random4.webp',
    description: 'Esta pel??cula de Spiderman sigue las aventuras de Peter Parker mientras viaja por Europa. Con efectos especiales impresionantes y una trama emocionante, esta pel??cula es perfecta para cualquier fan??tico de los superh??roes.',
    type: 'Others'
  },
  {
    name: 'Headphones Marshall',
    price: 149.99,
    image: 'img/tecnologia20.jpg',
    type: 'Tecnology',
    description: 'Experimenta un sonido aut??ntico y potente con estos auriculares Marshall. Con un dise??o cl??sico y elegante, estos aud??fonos te brindan un sonido n??tido y equilibrado. Con un micr??fono integrado y controles de reproducci??n, podr??s tomar llamadas y controlar tu m??sica sin problemas.'
  },
  {
    name: 'Alicia en el pa??s de las Maravillas',
    price: 10.99,
    image: 'img/random11.jpg',
    description: 'La cl??sica novela de Lewis Carroll cuenta la historia de Alicia, una ni??a que cae por un agujero en el suelo y llega a un mundo m??gico y surrealista. All??, se encuentra con personajes extra??os y vive aventuras que desaf??an la l??gica y la raz??n.',
    type: 'Others'
  },
  {
    name: 'Pel??cula Pulp fiction',
    price: 15.99,
    image: 'img/random3.webp',
    description: 'Pulp Fiction es una pel??cula ic??nica del cine de los a??os 90. Dirigida por Quentin Tarantino, esta pel??cula presenta una trama compleja y personajes inolvidables. Si eres fan??tico del cine, esta pel??cula es imprescindible en tu colecci??n.',
    type: 'Others'
  },
  {
    name: 'Sof?? blanco Basement Home',
    price: 2000.99,
    image: 'img/mueble3.jpg',
    description: 'Este sof?? blanco es perfecto para hogares modernos y minimalistas. El color claro es f??cil de combinar con otros colores y la construcci??n de alta calidad asegura que ser?? duradero. Viene con cojines c??modos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sof?? Wholesale Couch negro',
    price: 1800.99,
    image: 'img/mueble4.jpg',
    description: 'Este sof?? negro es perfecto para hogares modernos y minimalistas. El color oscuro es f??cil de combinar con otros colores y la construcci??n de alta calidad asegura que ser?? duradero. Viene con cojines c??modos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sof?? Premium',
    price: 2500.99,
    image: 'img/mueble5.jpg',
    description: 'Este sof?? de alta calidad es perfecto para hogares modernos y elegantes. El dise??o limpio y sofisticado lo convierte en un mueble de declaraci??n. Viene con cojines c??modos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sof?? gris con doble forro',
    price: 800.99,
    image: 'img/mueble2.jpg',
    description: 'Dale un toque de elegancia y comodidad a tu hogar con el Sof?? gris con doble forro. Con un dise??o moderno y sofisticado, es ideal para cualquier espacio.',
    type: 'Furnitures'
  },
  {
    name: 'La teor??a del todo',
    price: 15.99,
    image: 'img/random7.jpg',
    description: 'Basada en la vida del f??sico brit??nico Stephen Hawking, esta pel??cula narra su historia de amor con Jane, desde que se conocieron en la Universidad de Cambridge hasta el ??xito internacional de Hawking como cient??fico, todo esto mientras lucha contra la enfermedad que lo dej?? en una silla de ruedas.',
    type: 'Others'
  },
  {
    name: 'Samsung Galaxy S20',
    price: 500.99,
    image: 'img/tecnologia5.jpg',
    type: 'Tecnology',
    description: 'Este smartphone Samsung Galaxy S20 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas, una c??mara trasera triple de 64 MP + 12 MP + 12 MP y una c??mara frontal de 10 MP. Tambi??n cuenta con una bater??a de 4000 mAh y 128 GB de almacenamiento interno.'
  },
  {
    name: 'Sof?? de verano',
    price: 500.99,
    image: 'img/mueble1.jpg',
    description: 'Disfruta del verano en la comodidad de tu hogar con el Sof?? de verano. Su dise??o fresco y atractivo lo convierten en una pieza ideal para cualquier espacio.',
    type: 'Furnitures'
  },
  {
    name: 'Smartwatch Huawei Watch',
    price: 30.99,
    image: 'img/tecnologia28.jpg',
    description: 'Con un dise??o elegante y una gran variedad de funciones, el Smartwatch Huawei Watch te acompa??ar?? en tu d??a a d??a. Recibe notificaciones, monitorea tu actividad f??sica y mucho m??s.',
    type: 'Tecnology'
  },
  {
    name: 'Vestido margarita con tiras',
    price: 29.99,
    image: 'img/ropa2.jpg',
    type: 'Clothes',
    description: 'Vestido de verano en tonos blanco y amarillo, con estampado de margaritas y tiras ajustables en los hombros. Ideal para un d??a soleado. '
  },
  {
    name: 'Mouse INPHC',
    price: 15.99,
    image: 'img/tecnologia14.jpg',
    type: 'Tecnology',
    description: 'Es un rat??n inal??mbrico econ??mico con un dise??o compacto y ergon??mico. Con una conexi??n inal??mbrica estable y un sensor ??ptico de alta precisi??n, este mouse es una excelente opci??n para usuarios de PC y Mac que buscan una alternativa asequible.'
  },
  {
    name: 'Polo blanco marca Legendary',
    price: 45.99,
    image: 'img/ropa14.jpg',
    type: 'Clothes',
    description: 'Una polo en color blanco de la marca Legendary, confeccionada en tela de alta calidad y con un dise??o cl??sico y elegante.'
  },
  {
    name: 'Sof?? blanco Basement gray',
    price: 400.99,
    image: 'img/mueble11.jpg',
    description: 'Este sof?? moderno y elegante es perfecto para cualquier sala de estar. Su dise??o minimalista en tonos grises y blancos combina perfectamente con cualquier decoraci??n y le da un toque de sofisticaci??n a su hogar.',
    type: 'Furnitures'
  },
  {
    name: 'Camisa jean celeste',
    price: 35.99,
    image: 'img/ropa1.jpg',
    type: 'Clothes',
    description: 'Una camisa de tela jean en color celeste, con botones al frente y bolsillos en el pecho. Perfecta para un estilo casual pero elegante.'
  },
  {
    name: 'C??mara MINOLTA X-900',
    price: 400.99,
    image: 'img/tecnologia10.jpg',
    type: 'Tecnology',
    description: 'Es una c??mara r??flex de 35mm que ofrece una gran calidad de imagen y caracter??sticas avanzadas. Con un sistema de enfoque autom??tico r??pido y preciso, y un obturador de alta velocidad, esta c??mara es ideal para fotograf??as de acci??n y deportes.'
  },
  {
    name: 'Smartwatch Samsung',
    price: 250.99,
    image: 'img/tecnologia24.jpg',
    description: 'Controla tu d??a a d??a con estilo y comodidad con el Smartwatch Samsung. Recibe notificaciones, controla la reproducci??n de m??sica, monitorea tu ritmo card??aco y m??s.',
    type: 'Tecnology'
  },
  {
    name: 'Pack Home Office Apple Pro',
    price: 4000.99,
    image: 'img/tecnologia17.jpg',
    type: 'Tecnology',
    description: 'Es una soluci??n premium todo en uno para usuarios de Mac que buscan lo mejor en calidad y dise??o. Incluye un teclado, aud??fonos, libreta y un mouse, todo dise??ado espec??ficamente para Mac.Con una calidad de construcci??n excepcional y caracter??sticas avanzadas, este paquete es ideal para usuarios de Mac que buscan una soluci??n completa para su espacio de trabajo en casa.'
  },
  {
    name: 'MacBook Pro',
    price: 1299.99,
    image: 'img/tecnologia7.jpg',
    type: 'Tecnology',
    description: ' Este ordenador port??til MacBook Pro tiene una pantalla Retina de 13.3 pulgadas, un procesador Intel Core i5 de 4 n??cleos a 2.0 GHz y 8 GB de memoria RAM. Tambi??n cuenta con una tarjeta gr??fica Intel Iris Plus Graphics 645 y un disco duro de 256 GB.'
  },
  {
    name: 'Smartwatch Sport SMART BAND',
    price: 80.99,
    image: 'img/tecnologia26.jpg',
    description: 'Lleva tus entrenamientos al siguiente nivel con el Smartwatch Sport SMART BAND. Monitorea tu actividad f??sica, sue??o, ritmo card??aco y m??s. ??Mantente en forma con estilo!',
    type: 'Tecnology'
  },
  {
    name: 'C??mara ILFORD SUPER 400',
    price: 150.99,
    image: 'img/tecnologia11.jpg',
    type: 'Tecnology',
    description: 'Es una excelente opci??n para los fot??grafos que buscan un estilo vintage. Con un acabado suave y un grano fino, esta pel??cula de 35mm es ideal para fotograf??as de retrato, paisaje y naturaleza.'
  },
  {
    name: 'Samsung Galaxy A10',
    price: 150.99,
    image: 'img/tecnologia4.jpg',
    type: 'Tecnology',
    description: ''
  },
  {
    name: 'Traje rojo femenino',
    price: 149.99,
    image: 'img/ropa7.jpg',
    type: 'Clothes',
    description: 'Traje de dos piezas en color rojo para mujer, con un dise??o moderno y sofisticado.'
  },
  {
    name: 'Su??ter amarillo',
    price: 25.99,
    image: 'img/ropa4.jpg',
    type: 'Clothes',
    description: 'Un su??ter de punto en color amarillo, c??modo y c??lido para los d??as m??s fr??os. Dise??o cl??sico con cuello redondo y mangas largas.'
  },
  {
    name: 'M??quina de coser',
    price: 250.99,
    image: 'img/random2.jpg',
    description: 'Esta m??quina de coser es perfecta para cualquier persona que quiera comenzar a coser. Es f??cil de usar y viene con todas las caracter??sticas esenciales que necesita para comenzar, como varios tipos de puntadas y una bobina de hilo incluida. Adem??s, su construcci??n resistente garantiza una larga vida ??til.',
    type: 'Others'
  },
  {
    name: 'Beats Studio Negro',
    price: 100.99,
    image: 'img/tecnologia18.jpg',
    type: 'Tecnology',
    description: 'Estos auriculares Beats Studio Negro te ofrecen un sonido de alta calidad, lo que te permitir?? disfrutar al m??ximo de tu m??sica, videos o podcast favoritos. Con su dise??o c??modo y elegante, podr??s usarlos durante horas sin sentir molestias. Adem??s, su cancelaci??n de ruido te permitir?? sumergirte en tus audios sin distracciones externas. Este modelo cuenta con micr??fono y controles integrados para mayor comodidad.'
  },
  {
    name: 'Vestido morado de gala',
    price: 189.99,
    image: 'img/ropa5.jpg',
    type: 'Clothes',
    description: 'Vestido de gala en color morado, con escote en V y un dise??o ajustado al cuerpo. Ideal para una ocasi??n especial como una boda o una cena formal.'
  },
  {
    name: 'Smartwatch D20 PRO',
    price: 120.99,
    image: 'img/tecnologia25.jpg',
    description: 'Con el Smartwatch D20 PRO tendr??s un compa??ero ideal para tu estilo de vida activo. Monitorea tus entrenamientos, recibe notificaciones, controla la m??sica y m??s.',
    type: 'Tecnology'
  },
  {
    name: 'Vestido blanco floreado',
    price: 39.99,
    image: 'img/ropa9.jpg',
    type: 'Clothes',
    description: 'Vestido de tono blanco con estampado de flores, con corte cl??sico y una ca??da suave. Perfecto para un d??a de campo o una reuni??n al aire libre.'
  },
  {
    name: 'Su??ter negro',
    price: 25.99,
    image: 'img/ropa13.jpg',
    type: 'Clothes',
    description: 'Un su??ter de punto en color negro, b??sico y vers??til para cualquier ocasi??n. Dise??o cl??sico con cuello redondo y mangas largas.'
  },
  {
    name: 'iMac',
    price: 1799.99,
    image: 'img/tecnologia6.jpg',
    type: 'Tecnology',
    description: 'Este ordenador de escritorio iMac tiene una pantalla Retina 5K de 27 pulgadas, un procesador Intel Core i5 de 6 n??cleos a 3.0 GHz y 8 GB de memoria RAM. Tambi??n cuenta con una tarjeta gr??fica Radeon Pro 570X y un disco duro de 1 TB..'
  },
  {
    name: 'Saco formal femenino',
    price: 89.99,
    image: 'img/ropa3.jpg',
    type: 'Clothes',
    description: 'Un saco formal en color negro, para un look elegante y sofisticado en cualquier ocasi??n. Confeccionado con tela de alta calidad y un corte impecable. '
  },
  {
    name: 'Auriculares rojos Skullcandy',
    price: 200.99,
    image: 'img/tecnologia22.jpg',
    type: 'Tecnology',
    description: 'Estos aud??fonos Skullcandy te brindan un estilo ??nico y una calidad de sonido incre??ble. Con una construcci??n duradera y un dise??o llamativo, estos auriculares inal??mbricos son perfectos para el uso diario. Con una bater??a de larga duraci??n y controles integrados, podr??s disfrutar de tus canciones favoritas con facilidad.'
  },
  {
    name: 'Summer Bird Blue',
    price: 18.99,
    image: 'img/random10.jpg',
    description: 'Este libro de Akemi Dawn Bowman cuenta la historia de Rumi, una adolescente que pierde a su madre en un accidente de coche y es enviada a vivir con su hermana en Haw??i. All??, Rumi lucha por encontrar su lugar en el mundo y por superar su dolor, todo mientras se enamora por primera vez.',
    type: 'Others'
  },
  {
    name: 'Smart TV',
    price: 600.99,
    image: 'img/tecnologia23.jpg',
    description: 'Disfruta de una imagen n??tida y brillante en la pantalla de tu Smart TV. Conecta tus dispositivos a trav??s de HDMI y USB para una experiencia multimedia completa.',
    type: 'Tecnology'
  },
  {
    name: 'Mouse Logitech',
    price: 50.99,
    image: 'img/tecnologia13.jpg',
    type: 'Tecnology',
    description: 'Es un rat??n inal??mbrico de alta precisi??n para usuarios de PC y Mac. Con su dise??o ergon??mico y su tecnolog??a inal??mbrica avanzada, este mouse es ideal para largas sesiones de trabajo o para jugadores que buscan una ventaja en el juego.'
  },
  {
    name: 'Vestido negro de gala',
    price: 219.99,
    image: 'img/ropa6.jpg',
    type: 'Clothes',
    description: 'Vestido de gala en color negro, con corte elegante y una ca??da suave y fluida. Dise??o con escote en V y tirantes ajustables.'
  },
  {
    name: 'Smartwatch SMART BAND M6',
    price: 50.99,
    image: 'img/tecnologia27.jpg',
    description: 'Controla tu estilo de vida saludable y activo con el Smartwatch SMART BAND M6. Monitorea tus entrenamientos, recibe notificaciones, controla la m??sica y m??s.',
    type: 'Tecnology'
  },
  {
    name: 'Headphones Philips On Hear',
    price: 249.99,
    image: 'img/tecnologia21.jpg',
    type: 'Tecnology',
    description: 'Estos auriculares de diadema son perfectos para el uso diario. Con una banda ajustable y almohadillas suaves, te brindan un ajuste c??modo y seguro durante horas. Con un sonido potente y claro, podr??s disfrutar de tu m??sica y llamadas con facilidad.'
  },
  {
    name: 'Traje rojo formal femenino',
    price: 169.99,
    image: 'img/ropa10.jpg',
    type: 'Clothes',
    description: 'Traje de dos piezas en color rojo para mujer, con un dise??o formal y elegante. Incluye pantal??n y saco a juego.'
  },
  {
    name: 'Escritorio blanco minimalista',
    price: 500.99,
    image: 'img/mueble7.jpg',
    description: 'Este escritorio blanco es perfecto para hogares modernos y minimalistas. El color claro es f??cil de combinar con otros colores y la construcci??n de alta calidad asegura que ser?? duradero. Tiene un caj??n para guardar art??culos peque??os.',
    type: 'Furnitures'
  },
  {
    name: 'The selfish gene',
    price: 20.99,
    image: 'img/random8.png',
    description: 'Este libro de Richard Dawkins es un cl??sico de la divulgaci??n cient??fica, en el que explora el concepto de que los genes son la unidad b??sica de la evoluci??n y que los organismos son meras herramientas para asegurar su supervivencia. A trav??s de ejemplos y analog??as, Dawkins presenta su teor??a sobre la evoluci??n de las especies.',
    type: 'Others'
  },
  {
    name: 'Pack Home Office Apple',
    price: 3500.99,
    image: 'img/tecnologia16.jpg',
    type: 'Tecnology',
    description: 'Es una soluci??n todo en uno para usuarios de Mac que trabajan desde casa. Incluye un teclado, aud??fonos, libreta y un mouse, todo dise??ado espec??ficamente para Mac. Con una calidad de construcci??n s??lida y caracter??sticas avanzadas, este paquete es ideal para usuarios de Mac que buscan una soluci??n completa para su espacio de trabajo en casa'
  },
  {
    name: 'C??mara OLYMPUS',
    price: 499.99,
    image: 'img/tecnologia8.jpg',
    type: 'Tecnology',
    description: 'Esta c??mara OLYMPUS tiene un sensor de imagen Micro Four Thirds de 16 MP, una pantalla LCD de 3 pulgadas y un lente zoom de 14-42 mm. Tambi??n cuenta con funciones como Wi-Fi y grabaci??n de video Full HD.'
  },
  {
    name: 'Reloj Cassio de mesa',
    price: 50.99,
    image: 'img/random1.jpg',
    description: 'Este reloj de mesa es elegante y funcional. Tiene una pantalla digital f??cil de leer y un dise??o moderno que lo hace perfecto para cualquier oficina o sala de estar. Adem??s, su construcci??n resistente garantiza una larga vida ??til.',
    type: 'Others'
  },
  {
    name: 'Silla algod??n',
    price: 100.99,
    image: 'img/mueble9.jpg',
    description: 'Esta silla de algod??n es perfecta para hogares modernos y minimalistas. El color claro es f??cil de combinar con otros colores y la construcci??n de alta calidad asegura que ser?? duradero. Viene con un coj??n c??modo para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'iPhone 8',
    price: 500.99,
    image: 'img/tecnologia3.jpg',
    type: 'Tecnology',
    description: 'Este smartphone iPhone 8 tiene una pantalla Retina HD de 4.7 pulgadas, una c??mara trasera de 12 MP y una c??mara frontal de 7 MP. Viene con el sistema operativo iOS 11 y tiene 64 GB de almacenamiento interno.'
  },
  {
    name: 'Sof?? Waifu Premium',
    price: 3000.99,
    image: 'img/mueble6.jpg',
    description: 'Este sof?? de alta calidad es perfecto para hogares modernos y elegantes. El dise??o limpio y sofisticado lo convierte en un mueble de declaraci??n. Viene con cojines c??modos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Smartwatch Manilla M3',
    price: 70.99,
    image: 'img/tecnologia29.jpg',
    description: 'Mantente al tanto de tus notificaciones, actividad f??sica y sue??o con el Smartwatch Manilla M3. Con un dise??o c??modo y elegante, te acompa??ar?? en todo momento.',
    type: 'Tecnology'
  },
  {
    name: 'Pack Home Office',
    price: 1500.99,
    image: 'img/tecnologia15.jpg',
    type: 'Tecnology',
    description: 'Es una soluci??n todo en uno para usuarios que trabajan desde casa. Incluye un teclado, aud??fonos, libreta y un mouse, todo en un pr??ctico paquete. Con una calidad de construcci??n s??lida y caracter??sticas avanzadas, este paquete es ideal para usuarios de PC y Mac que buscan una soluci??n completa para su espacio de trabajo en casa'
  },
  {
    name: 'Vestido morado fantas??a',
    price: 45.99,
    image: 'img/ropa8.jpg',
    type: 'Clothes',
    description: 'Vestido en tono morado con un dise??o fantas??a, confeccionado en tela suave y liviana. Ideal para un evento informal o una salida con amigas.'
  },
  {
    name: 'Mesa de terraza',
    price: 800.99,
    image: 'img/mueble8.jpg',
    description: 'Esta mesa de terraza es perfecta para hogares con espacios al aire libre. La construcci??n de alta calidad asegura que ser?? duradero en exteriores. El dise??o limpio y moderno es perfecto para hogares modernos.',
    type: 'Furnitures'
  },
  {
    name: 'Su??ter arco??ris',
    price: 29.99,
    image: 'img/ropa11.jpg',
    type: 'Clothes',
    description: 'Un su??ter de punto en tonos arco??ris, perfecto para dar un toque de color a cualquier outfit. Dise??o con cuello redondo y mangas largas.'
  },
  {
    name: 'Su??ter rojo',
    price: 25.99,
    image: 'img/ropa12.jpg',
    type: 'Clothes',
    description: 'Un su??ter de punto en color rojo, c??lido y c??modo para los d??as m??s fr??os. Dise??o cl??sico con cuello redondo y mangas largas.'
  },
  {
    name: 'Pel??cula Godzilla vs King Kong',
    price: 25.99,
    image: 'img/random5.jpg',
    description: 'En esta pel??cula, dos titanes de la pantalla grande se enfrentan en una batalla ??pica. Con efectos especiales impresionantes y una trama emocionante, esta pel??cula es perfecta para cualquier fan??tico de la ciencia ficci??n y las pel??culas de acci??n.',
    type: 'Others'
  },
  {
    name: 'Mica Sof?? Whitney',
    price: 1200.99,
    image: 'img/mueble10.jpg',
    description: 'Esta mica para sof?? es perfecta para proteger tu sof?? de manchas y da??os. La construcci??n de alta calidad asegura que ser?? duradero. El dise??o limpio y moderno es perfecto para hogares modernos.',
    type: 'Furnitures'
  },
  {
    name: 'Samsung Galaxy A20',
    price: 200.99,
    image: 'img/tecnologia1.jpg',
    type: 'Tecnology',
    description: 'Este smartphone Samsung Galaxy A20 cuenta con una pantalla Super AMOLED de 6.4 pulgadas, una c??mara trasera dual de 13 MP + 5 MP y una c??mara frontal de 8 MP. Tambi??n cuenta con una bater??a de 4000 mAh y 32 GB de almacenamiento interno.'
  },
  {
    name: 'C??mara MINOLTA X-700',
    price: 300.99,
    image: 'img/tecnologia9.jpg',
    type: 'Tecnology',
    description: 'Es una excelente opci??n para los amantes de la fotograf??a que buscan una experiencia vintage. Con un enfoque autom??tico, velocidad de obturaci??n y medici??n de luz, esta c??mara de 35mm es una maravilla tecnol??gica para capturar im??genes de alta calidad.'
  },
  {
    name: 'Traje formal azul marino',
    price: 400.99,
    image: 'img/ropa16.jpg',
    type: 'Clothes',
    description: 'Este traje formal es de color azul marino y est?? hecho de lana de alta calidad. El saco tiene dos botones y un corte cl??sico, mientras que el pantal??n cuenta con una pierna recta y un tiro medio.'
  },
  {
    name: 'C??mara RICOH 500 GX',
    price: 250.99,
    image: 'img/tecnologia12.jpg',
    type: 'Tecnology',
    description: 'Es una c??mara compacta de 35mm con una lente fija de alta calidad. Con su dise??o elegante y caracter??sticas avanzadas, esta c??mara es ideal para fot??grafos que buscan una opci??n port??til pero potente.'
  },
  {
    name: 'Traje sport formal',
    price: 60.99,
    image: 'img/ropa15.jpg',
    type: 'Clothes',
    description: 'Este traje sport formal es de color gris y est?? hecho de una mezcla de algod??n y poli??ster. Cuenta con un corte moderno y detalles como bolsillos con cierre y botones en los pu??os.'
  },
  {
    name: 'iPhone 5',
    price: 100.99,
    image: 'img/tecnologia2.jpg',
    type: 'Tecnology',
    description: 'Este smartphone iPhone 5 tiene una pantalla de 4 pulgadas, una c??mara trasera de 8 MP y una c??mara frontal de 1.2 MP. Viene con el sistema operativo iOS 6 y tiene 16 GB de almacenamiento interno.'
  }
]
// console.log(productList)

// Renderizo el HTML de los productos y cambio la imagen de carrito vac??o
renderProductList(productList)
messageEmptyCart()

// L??gica de la navegaci??n de secciones
const sectionDesktop = document.querySelectorAll(".navbar-left ul li a")
const sectionMobile = document.querySelectorAll(".mobile-menu ul li a")
const cards_container = document.querySelector(".cards-container")

function showSectionProducts(sectionElement, sectionName) {
  sectionElement.addEventListener("click", function(){
    desktop_menu.classList.add("invisible")
    mobile_menu.classList.add("invisible")
    cart_detail.classList.add("invisible")
    product_detail.classList.add("invisible")
    body.classList.remove("no-scroll")

    cards_container.innerHTML = ""  

    // Creamos un array filtrado en base del nombre de la seccion
    if(sectionName === "All"){
      renderProductList(productList) 
      return  
    }
    
    const sectionProduct = productList.filter(product => {
        return product.type == sectionName
    })
    renderProductList(sectionProduct)
  })
}

showSectionProducts(sectionDesktop[0], "All")
showSectionProducts(sectionDesktop[1], "Clothes")
showSectionProducts(sectionDesktop[2], "Tecnology")
showSectionProducts(sectionDesktop[3], "Furnitures")
showSectionProducts(sectionDesktop[4], "Others")

showSectionProducts(sectionMobile[1], "All")
showSectionProducts(sectionMobile[2], "Clothes")
showSectionProducts(sectionMobile[3], "Tecnology")
showSectionProducts(sectionMobile[4], "Furnitures")
showSectionProducts(sectionMobile[5], "Others")


// Renderizado
function renderProductList(productsList) {
  for (product of productsList) {
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
    cartImg.addEventListener("click", increaseCounter)
    // Agregar el producto al carrito



    // Creo HTML
    cards_container.appendChild(product_card);
    product_card.append(productImg, product_info);
    product_info.append(product_div, productFigure);
    product_div.append(productPrice, productName);
    productFigure.append(cartImg);

  }
}



