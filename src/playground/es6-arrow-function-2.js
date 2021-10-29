// arguments object - no longer bound with arrow functions

const add = (a, b) => {
<<<<<<< HEAD
  // console.log(arguments);
  return a + b;
};
console.log(add(55, 1, 1001));

// this keyword - no longer bound

const user = {
  name: 'Andrew',
  cities: ['Philadelphia', 'New York', 'Dublin'],
  printPlacesLived() {
    return this.cities.map((city) => this.name + ' has lived in ' + city);
  }
};
console.log(user.printPlacesLived());

// Challenge area

const multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  }
};

console.log(multiplier.multiply());
=======
    // console.log(arguments);
    return a + b;
  };
  console.log(add(55, 1, 1001));
  
  // this keyword - no longer bound
  
  const user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    printPlacesLived() {
      return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
  };
  console.log(user.printPlacesLived());
  
  // Challenge area
  
  const multiplier = {
    numbers: [10, 20, 30],
    multiplyBy: 3,
    multiply() {
      return this.numbers.map((number) => number * this.multiplyBy);
    }
  };
  
  console.log(multiplier.multiply());
  
>>>>>>> 6f0b3e788f62b31511e79043b27f2780724e0c25
