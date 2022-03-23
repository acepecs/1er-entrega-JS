
let total = 0;

let product1 = [id: 1, "Zapatillas Adidas", precio:15000];
let product2 = [id: 2, "Zapatillas Salomon", precio: 12000];
let product3 = [id: 3, "Zapatillas Nike", precio: 18000];
let product4 = [id: 4, "Zapatillas Under Armour", precio: 14000];

agregarAlCarrito(producto1);
console.log(carrito);
agregarAlCarrito(producto2);
console.log(carrito);
agregarAlCarrito(producto3);
console.log(carrito);
agregarAlCarrito(producto4);
console.log(carrito);

function agregarAlCarrito(producto){

carrito.push(producto);
}

const arrayProducts = [product1,product2,product3,product4];

const IndiceDeProducts = arrayProducts.indexof(1);
console.log(indiceDeProducts);

arrayProducts.slice(indiceDeProducts,product1);
console.log(arrayProducts);


function add(product,price){
    console.log(product,price);
    products.push(product);
    total = total + price; 
    document.getElementById('checkout').innerHTML = `Pagar $${total}`
}

function pay() {
    window.alert(products,join(", /n"));
}

// buscardor 

const boton = document.getElementById("producto-buscado");

boton.onclick = () => {
    alert('ingrese el producto que esta buscando')
}
