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
        return `${this.totalValue}`;
    }

}

const singleCart = () => {
    return new Cart();
}

