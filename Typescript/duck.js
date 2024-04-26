var Developer = /** @class */ (function () {
    function Developer() {
        this.role = "codes";
    }
    return Developer;
}());
var Manager = /** @class */ (function () {
    function Manager() {
        this.role = "manages";
    }
    return Manager;
}());
var Designer = /** @class */ (function () {
    function Designer() {
        this.role = "designs";
    }
    Designer.prototype.interview = function () {
        console.log("I'm a designer and I can conduct interviews");
    };
    return Designer;
}());
var developer = new Manager();
var manager = new Developer();
var developer2 = new Designer();
// let designer: Designer = new Developer(); // Compile time error
console.log("A developer " + developer.role);
console.log("A manager " + manager.role);
console.log("A developer " + developer2.role);
// console.log("A designer " + designer.role);
