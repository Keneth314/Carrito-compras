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
    selectedProduct.description = "Lo siento aún no tenemos su descripción :("
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
  // console.log("🚀 ~ file: script.js:156 ~ increaseCounter ~ delete_product_img", delete_product_img)

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
    name: 'Película Mi vecino Totoro',
    price: 10.99,
    image: 'img/random6.jpg',
    type: 'Others',
    description: 'Mi vecino Totoro es una película animada clásica de Studio Ghibli. Esta película presenta una historia conmovedora y personajes adorables que seguro que te robarán el corazón. Si eres fanático del anime o las películas animadas, esta película es imprescindible en tu colección.'
  },
  {
    name: 'Headphones Beats Studio Rosa',
    price: 179.99,
    image: 'img/tecnologia19.jpg',
    type: 'Tecnology',
    description: 'Estos audífonos inalámbricos de alta calidad te brindan una experiencia musical única y envolvente. Con una batería de larga duración y cancelación de ruido, podrás disfrutar de tus canciones favoritas con un sonido cristalino y claro.'
  },
  {
    name: 'A million to one',
    price: 12.99,
    image: 'img/random9.jpg',
    description: 'Basada en hechos reales, esta película cuenta la historia de Chris Norton, un joven deportista que quedó paralizado del cuello para abajo tras un accidente en un partido de fútbol americano. A pesar de las dificultades, Chris encuentra el amor y juntos trabajan para cumplir un objetivo aparentemente imposible: caminar juntos en el día de su boda.',
    type: 'Others'
  },
  {
    name: 'Película Spiderman far from home',
    price: 20.99,
    image: 'img/random4.webp',
    description: 'Esta película de Spiderman sigue las aventuras de Peter Parker mientras viaja por Europa. Con efectos especiales impresionantes y una trama emocionante, esta película es perfecta para cualquier fanático de los superhéroes.',
    type: 'Others'
  },
  {
    name: 'Headphones Marshall',
    price: 149.99,
    image: 'img/tecnologia20.jpg',
    type: 'Tecnology',
    description: 'Experimenta un sonido auténtico y potente con estos auriculares Marshall. Con un diseño clásico y elegante, estos audífonos te brindan un sonido nítido y equilibrado. Con un micrófono integrado y controles de reproducción, podrás tomar llamadas y controlar tu música sin problemas.'
  },
  {
    name: 'Alicia en el país de las Maravillas',
    price: 10.99,
    image: 'img/random11.jpg',
    description: 'La clásica novela de Lewis Carroll cuenta la historia de Alicia, una niña que cae por un agujero en el suelo y llega a un mundo mágico y surrealista. Allí, se encuentra con personajes extraños y vive aventuras que desafían la lógica y la razón.',
    type: 'Others'
  },
  {
    name: 'Película Pulp fiction',
    price: 15.99,
    image: 'img/random3.webp',
    description: 'Pulp Fiction es una película icónica del cine de los años 90. Dirigida por Quentin Tarantino, esta película presenta una trama compleja y personajes inolvidables. Si eres fanático del cine, esta película es imprescindible en tu colección.',
    type: 'Others'
  },
  {
    name: 'Sofá blanco Basement Home',
    price: 2000.99,
    image: 'img/mueble3.jpg',
    description: 'Este sofá blanco es perfecto para hogares modernos y minimalistas. El color claro es fácil de combinar con otros colores y la construcción de alta calidad asegura que será duradero. Viene con cojines cómodos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sofá Wholesale Couch negro',
    price: 1800.99,
    image: 'img/mueble4.jpg',
    description: 'Este sofá negro es perfecto para hogares modernos y minimalistas. El color oscuro es fácil de combinar con otros colores y la construcción de alta calidad asegura que será duradero. Viene con cojines cómodos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sofá Premium',
    price: 2500.99,
    image: 'img/mueble5.jpg',
    description: 'Este sofá de alta calidad es perfecto para hogares modernos y elegantes. El diseño limpio y sofisticado lo convierte en un mueble de declaración. Viene con cojines cómodos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Sofá gris con doble forro',
    price: 800.99,
    image: 'img/mueble2.jpg',
    description: 'Dale un toque de elegancia y comodidad a tu hogar con el Sofá gris con doble forro. Con un diseño moderno y sofisticado, es ideal para cualquier espacio.',
    type: 'Furnitures'
  },
  {
    name: 'La teoría del todo',
    price: 15.99,
    image: 'img/random7.jpg',
    description: 'Basada en la vida del físico británico Stephen Hawking, esta película narra su historia de amor con Jane, desde que se conocieron en la Universidad de Cambridge hasta el éxito internacional de Hawking como científico, todo esto mientras lucha contra la enfermedad que lo dejó en una silla de ruedas.',
    type: 'Others'
  },
  {
    name: 'Samsung Galaxy S20',
    price: 500.99,
    image: 'img/tecnologia5.jpg',
    type: 'Tecnology',
    description: 'Este smartphone Samsung Galaxy S20 cuenta con una pantalla Dynamic AMOLED de 6.2 pulgadas, una cámara trasera triple de 64 MP + 12 MP + 12 MP y una cámara frontal de 10 MP. También cuenta con una batería de 4000 mAh y 128 GB de almacenamiento interno.'
  },
  {
    name: 'Sofá de verano',
    price: 500.99,
    image: 'img/mueble1.jpg',
    description: 'Disfruta del verano en la comodidad de tu hogar con el Sofá de verano. Su diseño fresco y atractivo lo convierten en una pieza ideal para cualquier espacio.',
    type: 'Furnitures'
  },
  {
    name: 'Smartwatch Huawei Watch',
    price: 30.99,
    image: 'img/tecnologia28.jpg',
    description: 'Con un diseño elegante y una gran variedad de funciones, el Smartwatch Huawei Watch te acompañará en tu día a día. Recibe notificaciones, monitorea tu actividad física y mucho más.',
    type: 'Tecnology'
  },
  {
    name: 'Vestido margarita con tiras',
    price: 29.99,
    image: 'img/ropa2.jpg',
    type: 'Clothes',
    description: 'Vestido de verano en tonos blanco y amarillo, con estampado de margaritas y tiras ajustables en los hombros. Ideal para un día soleado. '
  },
  {
    name: 'Mouse INPHC',
    price: 15.99,
    image: 'img/tecnologia14.jpg',
    type: 'Tecnology',
    description: 'Es un ratón inalámbrico económico con un diseño compacto y ergonómico. Con una conexión inalámbrica estable y un sensor óptico de alta precisión, este mouse es una excelente opción para usuarios de PC y Mac que buscan una alternativa asequible.'
  },
  {
    name: 'Polo blanco marca Legendary',
    price: 45.99,
    image: 'img/ropa14.jpg',
    type: 'Clothes',
    description: 'Una polo en color blanco de la marca Legendary, confeccionada en tela de alta calidad y con un diseño clásico y elegante.'
  },
  {
    name: 'Sofá blanco Basement gray',
    price: 400.99,
    image: 'img/mueble11.jpg',
    description: 'Este sofá moderno y elegante es perfecto para cualquier sala de estar. Su diseño minimalista en tonos grises y blancos combina perfectamente con cualquier decoración y le da un toque de sofisticación a su hogar.',
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
    name: 'Cámara MINOLTA X-900',
    price: 400.99,
    image: 'img/tecnologia10.jpg',
    type: 'Tecnology',
    description: 'Es una cámara réflex de 35mm que ofrece una gran calidad de imagen y características avanzadas. Con un sistema de enfoque automático rápido y preciso, y un obturador de alta velocidad, esta cámara es ideal para fotografías de acción y deportes.'
  },
  {
    name: 'Smartwatch Samsung',
    price: 250.99,
    image: 'img/tecnologia24.jpg',
    description: 'Controla tu día a día con estilo y comodidad con el Smartwatch Samsung. Recibe notificaciones, controla la reproducción de música, monitorea tu ritmo cardíaco y más.',
    type: 'Tecnology'
  },
  {
    name: 'Pack Home Office Apple Pro',
    price: 4000.99,
    image: 'img/tecnologia17.jpg',
    type: 'Tecnology',
    description: 'Es una solución premium todo en uno para usuarios de Mac que buscan lo mejor en calidad y diseño. Incluye un teclado, audífonos, libreta y un mouse, todo diseñado específicamente para Mac.Con una calidad de construcción excepcional y características avanzadas, este paquete es ideal para usuarios de Mac que buscan una solución completa para su espacio de trabajo en casa.'
  },
  {
    name: 'MacBook Pro',
    price: 1299.99,
    image: 'img/tecnologia7.jpg',
    type: 'Tecnology',
    description: ' Este ordenador portátil MacBook Pro tiene una pantalla Retina de 13.3 pulgadas, un procesador Intel Core i5 de 4 núcleos a 2.0 GHz y 8 GB de memoria RAM. También cuenta con una tarjeta gráfica Intel Iris Plus Graphics 645 y un disco duro de 256 GB.'
  },
  {
    name: 'Smartwatch Sport SMART BAND',
    price: 80.99,
    image: 'img/tecnologia26.jpg',
    description: 'Lleva tus entrenamientos al siguiente nivel con el Smartwatch Sport SMART BAND. Monitorea tu actividad física, sueño, ritmo cardíaco y más. ¡Mantente en forma con estilo!',
    type: 'Tecnology'
  },
  {
    name: 'Cámara ILFORD SUPER 400',
    price: 150.99,
    image: 'img/tecnologia11.jpg',
    type: 'Tecnology',
    description: 'Es una excelente opción para los fotógrafos que buscan un estilo vintage. Con un acabado suave y un grano fino, esta película de 35mm es ideal para fotografías de retrato, paisaje y naturaleza.'
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
    description: 'Traje de dos piezas en color rojo para mujer, con un diseño moderno y sofisticado.'
  },
  {
    name: 'Suéter amarillo',
    price: 25.99,
    image: 'img/ropa4.jpg',
    type: 'Clothes',
    description: 'Un suéter de punto en color amarillo, cómodo y cálido para los días más fríos. Diseño clásico con cuello redondo y mangas largas.'
  },
  {
    name: 'Máquina de coser',
    price: 250.99,
    image: 'img/random2.jpg',
    description: 'Esta máquina de coser es perfecta para cualquier persona que quiera comenzar a coser. Es fácil de usar y viene con todas las características esenciales que necesita para comenzar, como varios tipos de puntadas y una bobina de hilo incluida. Además, su construcción resistente garantiza una larga vida útil.',
    type: 'Others'
  },
  {
    name: 'Beats Studio Negro',
    price: 100.99,
    image: 'img/tecnologia18.jpg',
    type: 'Tecnology',
    description: 'Estos auriculares Beats Studio Negro te ofrecen un sonido de alta calidad, lo que te permitirá disfrutar al máximo de tu música, videos o podcast favoritos. Con su diseño cómodo y elegante, podrás usarlos durante horas sin sentir molestias. Además, su cancelación de ruido te permitirá sumergirte en tus audios sin distracciones externas. Este modelo cuenta con micrófono y controles integrados para mayor comodidad.'
  },
  {
    name: 'Vestido morado de gala',
    price: 189.99,
    image: 'img/ropa5.jpg',
    type: 'Clothes',
    description: 'Vestido de gala en color morado, con escote en V y un diseño ajustado al cuerpo. Ideal para una ocasión especial como una boda o una cena formal.'
  },
  {
    name: 'Smartwatch D20 PRO',
    price: 120.99,
    image: 'img/tecnologia25.jpg',
    description: 'Con el Smartwatch D20 PRO tendrás un compañero ideal para tu estilo de vida activo. Monitorea tus entrenamientos, recibe notificaciones, controla la música y más.',
    type: 'Tecnology'
  },
  {
    name: 'Vestido blanco floreado',
    price: 39.99,
    image: 'img/ropa9.jpg',
    type: 'Clothes',
    description: 'Vestido de tono blanco con estampado de flores, con corte clásico y una caída suave. Perfecto para un día de campo o una reunión al aire libre.'
  },
  {
    name: 'Suéter negro',
    price: 25.99,
    image: 'img/ropa13.jpg',
    type: 'Clothes',
    description: 'Un suéter de punto en color negro, básico y versátil para cualquier ocasión. Diseño clásico con cuello redondo y mangas largas.'
  },
  {
    name: 'iMac',
    price: 1799.99,
    image: 'img/tecnologia6.jpg',
    type: 'Tecnology',
    description: 'Este ordenador de escritorio iMac tiene una pantalla Retina 5K de 27 pulgadas, un procesador Intel Core i5 de 6 núcleos a 3.0 GHz y 8 GB de memoria RAM. También cuenta con una tarjeta gráfica Radeon Pro 570X y un disco duro de 1 TB..'
  },
  {
    name: 'Saco formal femenino',
    price: 89.99,
    image: 'img/ropa3.jpg',
    type: 'Clothes',
    description: 'Un saco formal en color negro, para un look elegante y sofisticado en cualquier ocasión. Confeccionado con tela de alta calidad y un corte impecable. '
  },
  {
    name: 'Auriculares rojos Skullcandy',
    price: 200.99,
    image: 'img/tecnologia22.jpg',
    type: 'Tecnology',
    description: 'Estos audífonos Skullcandy te brindan un estilo único y una calidad de sonido increíble. Con una construcción duradera y un diseño llamativo, estos auriculares inalámbricos son perfectos para el uso diario. Con una batería de larga duración y controles integrados, podrás disfrutar de tus canciones favoritas con facilidad.'
  },
  {
    name: 'Summer Bird Blue',
    price: 18.99,
    image: 'img/random10.jpg',
    description: 'Este libro de Akemi Dawn Bowman cuenta la historia de Rumi, una adolescente que pierde a su madre en un accidente de coche y es enviada a vivir con su hermana en Hawái. Allí, Rumi lucha por encontrar su lugar en el mundo y por superar su dolor, todo mientras se enamora por primera vez.',
    type: 'Others'
  },
  {
    name: 'Smart TV',
    price: 600.99,
    image: 'img/tecnologia23.jpg',
    description: 'Disfruta de una imagen nítida y brillante en la pantalla de tu Smart TV. Conecta tus dispositivos a través de HDMI y USB para una experiencia multimedia completa.',
    type: 'Tecnology'
  },
  {
    name: 'Mouse Logitech',
    price: 50.99,
    image: 'img/tecnologia13.jpg',
    type: 'Tecnology',
    description: 'Es un ratón inalámbrico de alta precisión para usuarios de PC y Mac. Con su diseño ergonómico y su tecnología inalámbrica avanzada, este mouse es ideal para largas sesiones de trabajo o para jugadores que buscan una ventaja en el juego.'
  },
  {
    name: 'Vestido negro de gala',
    price: 219.99,
    image: 'img/ropa6.jpg',
    type: 'Clothes',
    description: 'Vestido de gala en color negro, con corte elegante y una caída suave y fluida. Diseño con escote en V y tirantes ajustables.'
  },
  {
    name: 'Smartwatch SMART BAND M6',
    price: 50.99,
    image: 'img/tecnologia27.jpg',
    description: 'Controla tu estilo de vida saludable y activo con el Smartwatch SMART BAND M6. Monitorea tus entrenamientos, recibe notificaciones, controla la música y más.',
    type: 'Tecnology'
  },
  {
    name: 'Headphones Philips On Hear',
    price: 249.99,
    image: 'img/tecnologia21.jpg',
    type: 'Tecnology',
    description: 'Estos auriculares de diadema son perfectos para el uso diario. Con una banda ajustable y almohadillas suaves, te brindan un ajuste cómodo y seguro durante horas. Con un sonido potente y claro, podrás disfrutar de tu música y llamadas con facilidad.'
  },
  {
    name: 'Traje rojo formal femenino',
    price: 169.99,
    image: 'img/ropa10.jpg',
    type: 'Clothes',
    description: 'Traje de dos piezas en color rojo para mujer, con un diseño formal y elegante. Incluye pantalón y saco a juego.'
  },
  {
    name: 'Escritorio blanco minimalista',
    price: 500.99,
    image: 'img/mueble7.jpg',
    description: 'Este escritorio blanco es perfecto para hogares modernos y minimalistas. El color claro es fácil de combinar con otros colores y la construcción de alta calidad asegura que será duradero. Tiene un cajón para guardar artículos pequeños.',
    type: 'Furnitures'
  },
  {
    name: 'The selfish gene',
    price: 20.99,
    image: 'img/random8.png',
    description: 'Este libro de Richard Dawkins es un clásico de la divulgación científica, en el que explora el concepto de que los genes son la unidad básica de la evolución y que los organismos son meras herramientas para asegurar su supervivencia. A través de ejemplos y analogías, Dawkins presenta su teoría sobre la evolución de las especies.',
    type: 'Others'
  },
  {
    name: 'Pack Home Office Apple',
    price: 3500.99,
    image: 'img/tecnologia16.jpg',
    type: 'Tecnology',
    description: 'Es una solución todo en uno para usuarios de Mac que trabajan desde casa. Incluye un teclado, audífonos, libreta y un mouse, todo diseñado específicamente para Mac. Con una calidad de construcción sólida y características avanzadas, este paquete es ideal para usuarios de Mac que buscan una solución completa para su espacio de trabajo en casa'
  },
  {
    name: 'Cámara OLYMPUS',
    price: 499.99,
    image: 'img/tecnologia8.jpg',
    type: 'Tecnology',
    description: 'Esta cámara OLYMPUS tiene un sensor de imagen Micro Four Thirds de 16 MP, una pantalla LCD de 3 pulgadas y un lente zoom de 14-42 mm. También cuenta con funciones como Wi-Fi y grabación de video Full HD.'
  },
  {
    name: 'Reloj Cassio de mesa',
    price: 50.99,
    image: 'img/random1.jpg',
    description: 'Este reloj de mesa es elegante y funcional. Tiene una pantalla digital fácil de leer y un diseño moderno que lo hace perfecto para cualquier oficina o sala de estar. Además, su construcción resistente garantiza una larga vida útil.',
    type: 'Others'
  },
  {
    name: 'Silla algodón',
    price: 100.99,
    image: 'img/mueble9.jpg',
    description: 'Esta silla de algodón es perfecta para hogares modernos y minimalistas. El color claro es fácil de combinar con otros colores y la construcción de alta calidad asegura que será duradero. Viene con un cojín cómodo para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'iPhone 8',
    price: 500.99,
    image: 'img/tecnologia3.jpg',
    type: 'Tecnology',
    description: 'Este smartphone iPhone 8 tiene una pantalla Retina HD de 4.7 pulgadas, una cámara trasera de 12 MP y una cámara frontal de 7 MP. Viene con el sistema operativo iOS 11 y tiene 64 GB de almacenamiento interno.'
  },
  {
    name: 'Sofá Waifu Premium',
    price: 3000.99,
    image: 'img/mueble6.jpg',
    description: 'Este sofá de alta calidad es perfecto para hogares modernos y elegantes. El diseño limpio y sofisticado lo convierte en un mueble de declaración. Viene con cojines cómodos para mayor comodidad.',
    type: 'Furnitures'
  },
  {
    name: 'Smartwatch Manilla M3',
    price: 70.99,
    image: 'img/tecnologia29.jpg',
    description: 'Mantente al tanto de tus notificaciones, actividad física y sueño con el Smartwatch Manilla M3. Con un diseño cómodo y elegante, te acompañará en todo momento.',
    type: 'Tecnology'
  },
  {
    name: 'Pack Home Office',
    price: 1500.99,
    image: 'img/tecnologia15.jpg',
    type: 'Tecnology',
    description: 'Es una solución todo en uno para usuarios que trabajan desde casa. Incluye un teclado, audífonos, libreta y un mouse, todo en un práctico paquete. Con una calidad de construcción sólida y características avanzadas, este paquete es ideal para usuarios de PC y Mac que buscan una solución completa para su espacio de trabajo en casa'
  },
  {
    name: 'Vestido morado fantasía',
    price: 45.99,
    image: 'img/ropa8.jpg',
    type: 'Clothes',
    description: 'Vestido en tono morado con un diseño fantasía, confeccionado en tela suave y liviana. Ideal para un evento informal o una salida con amigas.'
  },
  {
    name: 'Mesa de terraza',
    price: 800.99,
    image: 'img/mueble8.jpg',
    description: 'Esta mesa de terraza es perfecta para hogares con espacios al aire libre. La construcción de alta calidad asegura que será duradero en exteriores. El diseño limpio y moderno es perfecto para hogares modernos.',
    type: 'Furnitures'
  },
  {
    name: 'Suéter arcoíris',
    price: 29.99,
    image: 'img/ropa11.jpg',
    type: 'Clothes',
    description: 'Un suéter de punto en tonos arcoíris, perfecto para dar un toque de color a cualquier outfit. Diseño con cuello redondo y mangas largas.'
  },
  {
    name: 'Suéter rojo',
    price: 25.99,
    image: 'img/ropa12.jpg',
    type: 'Clothes',
    description: 'Un suéter de punto en color rojo, cálido y cómodo para los días más fríos. Diseño clásico con cuello redondo y mangas largas.'
  },
  {
    name: 'Película Godzilla vs King Kong',
    price: 25.99,
    image: 'img/random5.jpg',
    description: 'En esta película, dos titanes de la pantalla grande se enfrentan en una batalla épica. Con efectos especiales impresionantes y una trama emocionante, esta película es perfecta para cualquier fanático de la ciencia ficción y las películas de acción.',
    type: 'Others'
  },
  {
    name: 'Mica Sofá Whitney',
    price: 1200.99,
    image: 'img/mueble10.jpg',
    description: 'Esta mica para sofá es perfecta para proteger tu sofá de manchas y daños. La construcción de alta calidad asegura que será duradero. El diseño limpio y moderno es perfecto para hogares modernos.',
    type: 'Furnitures'
  },
  {
    name: 'Samsung Galaxy A20',
    price: 200.99,
    image: 'img/tecnologia1.jpg',
    type: 'Tecnology',
    description: 'Este smartphone Samsung Galaxy A20 cuenta con una pantalla Super AMOLED de 6.4 pulgadas, una cámara trasera dual de 13 MP + 5 MP y una cámara frontal de 8 MP. También cuenta con una batería de 4000 mAh y 32 GB de almacenamiento interno.'
  },
  {
    name: 'Cámara MINOLTA X-700',
    price: 300.99,
    image: 'img/tecnologia9.jpg',
    type: 'Tecnology',
    description: 'Es una excelente opción para los amantes de la fotografía que buscan una experiencia vintage. Con un enfoque automático, velocidad de obturación y medición de luz, esta cámara de 35mm es una maravilla tecnológica para capturar imágenes de alta calidad.'
  },
  {
    name: 'Traje formal azul marino',
    price: 400.99,
    image: 'img/ropa16.jpg',
    type: 'Clothes',
    description: 'Este traje formal es de color azul marino y está hecho de lana de alta calidad. El saco tiene dos botones y un corte clásico, mientras que el pantalón cuenta con una pierna recta y un tiro medio.'
  },
  {
    name: 'Cámara RICOH 500 GX',
    price: 250.99,
    image: 'img/tecnologia12.jpg',
    type: 'Tecnology',
    description: 'Es una cámara compacta de 35mm con una lente fija de alta calidad. Con su diseño elegante y características avanzadas, esta cámara es ideal para fotógrafos que buscan una opción portátil pero potente.'
  },
  {
    name: 'Traje sport formal',
    price: 60.99,
    image: 'img/ropa15.jpg',
    type: 'Clothes',
    description: 'Este traje sport formal es de color gris y está hecho de una mezcla de algodón y poliéster. Cuenta con un corte moderno y detalles como bolsillos con cierre y botones en los puños.'
  },
  {
    name: 'iPhone 5',
    price: 100.99,
    image: 'img/tecnologia2.jpg',
    type: 'Tecnology',
    description: 'Este smartphone iPhone 5 tiene una pantalla de 4 pulgadas, una cámara trasera de 8 MP y una cámara frontal de 1.2 MP. Viene con el sistema operativo iOS 6 y tiene 16 GB de almacenamiento interno.'
  }
]
// console.log(productList)

// Renderizo el HTML de los productos y cambio la imagen de carrito vacío
renderProductList(productList)
messageEmptyCart()

// Lógica de la navegación de secciones
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



