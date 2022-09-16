let cm=document.getElementById("contenedorMenu");
let cmv=document.getElementById("contenedorMenuMovile");
let moc=document.getElementById("contenedormisordenes");
let cc=document.querySelector(".cards-container");

function mostrarMenu() {
    cm.classList.toggle("menu-container");
    if (moc.className=="none myOrderContainer")
    {
        moc.classList.toggle("myOrderContainer");
    }
}


function mostrarMenuMovile() {
    cmv.classList.toggle("menu-movile-container");
    if (moc.className=="none myOrderContainer")
    {
        moc.classList.toggle("myOrderContainer");
    }
}

function mostrarMyOrderContainer() {
    moc.classList.toggle("myOrderContainer");
    if (cm.className=="none menu-container")
    {
        cm.classList.toggle("menu-container");
    }

    if (cmv.className=="none menu-movile-container")
    {
        cmv.classList.toggle("menu-movile-container");
    }
}


const productlist = [];
productlist.push({
    name: "Bike",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Celular",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Compu",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Bike",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Celular",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Compu",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Bike",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Celular",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});

productlist.push({
    name: "Compu",
    price: "300",
    image: "static/YARDSALE/productos/bicicleta.jpg",
});


function renderProducts(){
    /*
<div class="card">
    <img src="static/YARDSALE/productos/bicicleta.jpg" alt="bicicleta">
    <div class="caja">
        <div>
            <h1 class="productext">300$</h1>
            <h2 class="productext">Bicicleta SFCC</h2>
        </div>
        <div>
            <figure>
                <img src="static/YARDSALE/icons/bt_add_to_cart.svg" alt="cart" class="icon">
            </figure>
        </div>
    </div>
</div>
*/

for (product of productlist) {
    const productCard=document.createElement("div");
    productCard.classList.add("card");

    const img =document.createElement("img");
    img.setAttribute("src",product.image);

    const productCaja=document.createElement("div");
    productCaja.classList.add("caja");

    const productInfo=document.createElement("div");
    const productPrice=document.createElement("h1");
    productPrice.classList.add("productext");
    productPrice.innerText=product.price+ " $";
    const productName=document.createElement("h2");
    productPrice.classList.add("productext");
    productName.innerText=product.name

    const productCajaDos=document.createElement("div");
    const productLogo=document.createElement("figure");
    const productLogoImage=document.createElement("img");
    productLogoImage.setAttribute("src","static/YARDSALE/icons/bt_add_to_cart.svg");
    productLogoImage.classList.add("icon");

    productLogo.appendChild(productLogoImage);
    productCajaDos.appendChild(productLogo);

    productInfo.appendChild(productPrice);
    productInfo.appendChild(productName);

    productCaja.appendChild(productInfo);
    productCaja.appendChild(productCajaDos);

    productCard.appendChild(img);
    productCard.appendChild(productCaja);

    cc.appendChild(productCard);
}
}

renderProducts();