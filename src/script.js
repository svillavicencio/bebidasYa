import drinkCard from "./components/Card.js";
import singleVault from "./scripts/class/Vault.js";
import Drink from "./scripts/class/Drink.js"


const main = document.getElementById('main');
const question = document.getElementById('question');
const intro = document.getElementById('intro');
const error = document.getElementById('error');
const confirmAge = document.getElementById('button-confirm-age');
const errorAge = document.getElementById('button-error-age');
const confirmDirection = document.getElementById('button-confirm-direction');
const direction = document.getElementById('direction');
const formDirection = document.getElementById('form-direction')
const directionTitle = document.getElementById('direction-title');


confirmAge.addEventListener('click', () => {
    localStorage.setItem('age', 'true');
    question.classList.add('hidden');
    direction.classList.remove('hidden')

    
    console.log(localStorage.getItem('age'))

});


errorAge.addEventListener('click', () => {

    question.classList.add('hidden');
    error.classList.remove('hidden');

});

confirmDirection.addEventListener('click', () => {
    intro.classList.add('hidden');
    main.classList.remove('hidden');
    localStorage.setItem('direction', formDirection.value || "Sin direccion ingresada");
    directionTitle.innerHTML = localStorage.getItem('direction')
})



function randomPrice() { 
    return Math.floor(Math.random() * (1000 - 100 + 1) + 100)
}

async function renderList (){
    fetchDrinks().then(
        totalList => {
            for (const drink of totalList) {
                let button = drinkCard(drink.name, randomPrice(), drink.icon, drink.id);
                button.addEventListener('click', (event) => {console.log(event.target.id || undefined)})
            }
        }
    )

}

const fetchDrinks = async() => {
    
    //objecto modelo
    // {
        //     "strDrink": "1-900-FUK-MEUP",
        //     "strDrinkThumb": "https://www.thecocktaildb.com/images/media/drink/uxywyw1468877224.jpg",
        //     "idDrink": "15395"
        // }
        
        let data;
        
        try{
            const response = await fetch('../data.json')
            data = await response.json();
        }catch(error){
            alert(error);
        }
        
        for (let drink of data.drinks){
            let temp = new Drink(drink.idDrink, drink.strDrink, randomPrice(), drink.strDrinkThumb);
            singleVault.addProduct(temp);
        }
        return singleVault.totalList();
    }
    
    const getButtons = async () =>{
        await renderList();
        
        
    }
    
    getButtons();
   
   