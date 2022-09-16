let cm=document.getElementById("contenedorMenu");
let cmv=document.getElementById("contenedorMenuMovile");
let moc=document.getElementById("contenedormisordenes");

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
