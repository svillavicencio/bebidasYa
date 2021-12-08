import Drink from "./Drink.js";
import drinkCard from "../../components/Card.js";
import itemCard from "../../components/ItemCard.js";



function randomPrice() { 
    return Math.floor(Math.random() * (1000 - 100 + 1) + 100)
}


class Vault {
    constructor(){
        this.vault = [];
        const URL = '../data.json'
        $.get(URL, (resp, state) => {
            if(state === 'success'){
                let data = resp;
                console.log(data)
                for (let drink of data.drinks){
                    
                    let temp = new Drink(drink.idDrink, drink.strDrink, randomPrice(), drink.strDrinkThumb);
                    this.vault.push(temp);
                    
                }

                localStorage.setItem('list', JSON.stringify(this.vault));
                this.render();

            }
        })
    }

    updateStorage(){

        localStorage.setItem('list', JSON.stringify(this.vault));

    }
    
    addProductCart(id){
        let product = this.vault.find(drink => drink.id === id);
        product.added = true;
        this.renderCart();
        this.updateStorage();
    }

    deleteProductCart(id){
        let product = this.vault.find(drink => drink.id === id);
        product.added = false;
        this.updateStorage();

    }

    confirmBuy(){
        this.vault.forEach(drink => {
            if(drink.added){
                drink.sold = true;
            }
        })
        this.updateStorage();
        this.render();
        $('#checkout').addClass('translate-x-full');
        $('#cart').empty();

    }

    deleteProduct(id){
        this.products.splice(this.products.find(product => product.id == id), 1);
    }

    itemsAvailable(){
        return this.vault.filter(drink => drink.sold !== true);
    }

    itemsCart(){
        return this.vault.filter(drink => drink.added === true);
    }

    totalList(){
        return this.vault;
    }

    render(){
        $('#cardList').empty();

        this.vault.forEach(drink =>{
            if(!drink.sold){
                drinkCard(drink.name, drink.value, drink.icon, drink.id);
            }
        })
    }

    reRender(list){
        $('#cardList').empty();

        for(const drink of list){
            drinkCard(drink.name, drink.value, drink.icon, drink.id);
        }
    }

    filteredList(searchField){
        let tempList = this.vault.filter(drink => 
            
            drink.name.includes(searchField));
        this.reRender(tempList);
    }

    renderCart(){
        $('#cart').empty();
        
        let filterList = this.vault.filter(drink => drink.added === true);
        for(const itemCart of filterList){
            if(!itemCart.sold){
                itemCard(itemCart.name, itemCart.value, itemCart.id);
            }
        }
    }
}

const singleVault = new Vault();
export default singleVault;