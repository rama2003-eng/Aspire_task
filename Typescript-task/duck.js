var SBI = /** @class */ (function () {
    function SBI() {
        this.interest = 1000;
    }
    return SBI;
}());
var HDFC = /** @class */ (function () {
    function HDFC() {
        this.interest = 2000;
    }
    return HDFC;
}());
var ICICI = /** @class */ (function () {
    function ICICI() {
        this.interest = 3000;
    }
    ICICI.prototype.display = function () {
        console.log("ICICI bank");
    };
    return ICICI;
}());
var sbi = new HDFC();
var hdfc = new SBI();
//let icici: ICICI = new SBI();  
console.log("Interest in SBI " + sbi.interest);
console.log("Interest in HDFC " + hdfc.interest);
//console.log("Interest in ICICI " + icici.interest); 
