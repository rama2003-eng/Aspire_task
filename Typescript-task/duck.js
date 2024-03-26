var Pigeon = /** @class */ (function () {
    function Pigeon() {
        this.sound = "coos";
    }
    return Pigeon;
}());
var Owl = /** @class */ (function () {
    function Owl() {
        this.sound = "hoots";
    }
    return Owl;
}());
var Penguin = /** @class */ (function () {
    function Penguin() {
        this.sound = "peeps";
    }
    Penguin.prototype.swim = function () {
        console.log("I'm a bird and i can swim");
    };
    return Penguin;
}());
var pigeon = new Owl();
var owl = new Pigeon();
var pigeon2 = new Penguin();
// let penguin: Penguin = new Pigeon(); Compile time error 
// Printing values 
console.log("A pigeon " + pigeon.sound);
console.log("An owl " + owl.sound);
console.log("A pigeon " + pigeon2.sound);
// console.log("A penguin " + penguin.sound);
