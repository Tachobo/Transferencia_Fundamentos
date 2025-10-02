alert("En este programa se mostrara el valor de un producto despues de aplicarle el 10% de descuento");
let producto = parseInt(prompt("Por favor digite el valor del producto"));
let descuento = (producto * 0.10);
let total = producto - descuento;
alert("El valor del producto despues de aplicar el descuento es" + " " + total);