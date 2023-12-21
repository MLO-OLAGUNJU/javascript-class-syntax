//Javascript Classes
/* class Pizza {
  constructor() {
    this.size = "medium";
    this.crust = "original";
  }
  bake = () => {
    console.log(`Baking a ${this.size} size ${this.crust} crust pizza.`);
  };
}

const myPizza = new Pizza();
myPizza.bake(); */

/* class Pizza {
  constructor(pizzaType, pizzaSize) {
    this.type = pizzaType;
    this.size = pizzaSize;
    this.crust = "original";
    this.toppings = [];
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
  getToppings() {
    return this.toppings;
  }
  setToppings(topping) {
    this.toppings.push(topping);
  }
  bake = () => {
    console.log(
      `Baking a ${this.size} size ${this.type} ${this.crust} crust pizza.`
    );
  };
}

const myPizza = new Pizza("pepperoni", "small");
myPizza.setCrust("thin");
myPizza.bake();
myPizza.setToppings("sausage");
myPizza.setToppings("olives");
console.log(myPizza.getToppings()); */

/* //This is the parent or super class
class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
  }
  getCrust() {
    return this._crust;
  }
  setCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }
} */

/* //creating a child class
class SpecialtyPizaa extends Pizza {
  constructor(pizzaSize) {
    super(pizzaSize);
    this.type = "The works";
  }
  slice() {
    console.log(`Our ${this.type} ${this.size} pizza has 8 slices`);
  }
}

const mySpecialty = new SpecialtyPizaa("medium");
mySpecialty.slice(); */

/* /Factory Function

//=======Another way to create Objects in javascript=======================

function pizzaFactory(pizzaSize) {
  const crust = "original";
  const size = pizzaSize;
  return {
    bake: () => console.log(`Bakng a ${size} ${crust} crust pizza.`),
  };
}

const myPizza = pizzaFactory("small");
myPizza.bake(); */

class Pizza {
  crust = "original ";
  #sauce = "tradional";
  constructor(pizzaSize) {
    this.size = pizzaSize;
  }
  getCrust() {
    return this.crust;
  }
  setCrust(pizzaCrust) {
    this.crust = pizzaCrust;
  }
}
