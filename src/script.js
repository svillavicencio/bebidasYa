import drinkCard from "./components/Card.js";
import singleVault from "./scripts/class/Vault.js";
import Drink from "./scripts/class/Drink.js"

let id = 0;

singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));
singleVault.addProduct(new Drink(id++, "Vodka", 100));

const button = document.getElementById('button');

function renderList(){
    const totalCard = singleVault.totalList();

    for (let card of totalCard){
        drinkCard(card.name, card.value.toString());
    }

    button.classList.add('hidden');
}

button.addEventListener('click', renderList);






// const vodka = document.getElementById('vodka');
// const carrito = document.getElementById('carrito');


// const obtenerPrecio = (precio, cuotas) => {return calcularCuotas(calcularIVA(precio),cuotas)}  

// const calcularIVA = (precioTotal) => {
//     return Math.round(precioTotal + (precioTotal * 0.30));
// }

// const calcularCuotas = (precioTotal, cantidadCuotas) => {
//     return alert(`Pagaras en ${cantidadCuotas} cuotas de ${Math.round(precioTotal / cantidadCuotas)} pesos argentinos`);
// }



//event listeners


// vodka.addEventListener('click', ()=>{
//     cart.addProduct(new Vodka());
//     alert(`Se agrego vodka al carrito`)
// })

// carrito.addEventListener('click', () => {
//     alert(cart.total);
// })


//function para ordenar por precio

// const sortByPrice = (arrayItems) => {
//     //Esta funcion ordenara los items de forma ascendente
//     //Sera un array de objects de bebidas

//     arrayItems.sort((a, b) => {
//         // a y b son objects 
//         return a.price - b.price; 
//     })
// }