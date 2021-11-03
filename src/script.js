const button = document.getElementById('button');
const vodka = document.getElementById('vodka');
const carrito = document.getElementById('carrito');

let id = 1;


let precioTotal = 0;

class Cart {
    constructor(){
        this.products = [];
        this.totalValue = 0;
    }

    addProduct (obj){
        this.products.push(obj)
        this.totalValue += obj.value; 
    }

    deleteProduct (obj) {
        this.totalValue -= obj.value;
        this.products.splice(this.products.find(product => product.id == obj.id), 1);
    }
    
    get total(){
        return `${this.products.length} vodka y un total de ${this.totalValue} pesos`;
    }

}

class Vodka{
    constructor(){
        this.id = id;
        id++;
        this.value = 100;
    }
}

const cart = new Cart();





const obtenerPrecio = (precio, cuotas) => {return calcularCuotas(calcularIVA(precio),cuotas)}  

const calcularIVA = (precioTotal) => {
    return Math.round(precioTotal + (precioTotal * 0.30));
}

const calcularCuotas = (precioTotal, cantidadCuotas) => {
    return alert(`Pagaras en ${cantidadCuotas} cuotas de ${Math.round(precioTotal / cantidadCuotas)} pesos argentinos`);
}

button.addEventListener('click', () => {
    obtenerPrecio(cart.totalValue, parseInt(prompt(`Total $${cart.totalValue}
    Ingrese cantidad total de cuotas`)));
})

vodka.addEventListener('click', ()=>{
    cart.addProduct(new Vodka());
    alert(`Se agrego vodka al carrito`)
})

carrito.addEventListener('click', () => {
    alert(cart.total);
})


//function para ordenar por precio

const sortByPrice = (arrayItems) => {
    //Esta funcion ordenara los items de forma ascendente
    //Sera un array de objects de bebidas

    arrayItems.sort((a, b) => {
        // a y b son objects 
        return a.price - b.price; 
    })
}