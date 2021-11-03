class Drink {
    constructor(id, name, value){
        this.id = id;
        this.name = name;
        this.value = value;
      
    }

    get price(){
        return this.value;
    }
}

export default Drink;