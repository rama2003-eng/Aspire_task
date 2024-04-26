class Developer {
  role = "codes";
}

class Manager {
  role = "manages";
}

class Designer {
  role = "designs";
  interview() {
    console.log("I'm a designer ");
  }
}

let developer: Developer = new Manager();
let manager: Manager = new Developer();
let developer2: Developer = new Designer();
// let designer: Designer = new Developer(); // Compile time error

console.log("A developer " + developer.role);
console.log("A manager " + manager.role);
console.log("A developer " + developer2.role);
// console.log("A designer " + designer.role);