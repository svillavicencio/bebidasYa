class Drink {
    constructor(id, name, value, icon){
        this.id = id;
        this.name = name;
        this.value = value;
        this.icon = icon;
    }

    get price(){
        return this.value;
    }
}

export default Drink;