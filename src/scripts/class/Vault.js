class Vault {
    constructor(){
        this.vault = [];
    }

    
    addProduct(product){
        this.vault.push(product);
        
    }

    getProduct(id){
        return this.vault.find(product => product.id === id);
    }

    deleteProduct(id){
        this.products.splice(this.products.find(product => product.id == id), 1);
    }

    totalList(){
        return this.vault;
    }

}

const singleVault = new Vault();

export default singleVault;