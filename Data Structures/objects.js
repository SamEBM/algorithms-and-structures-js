const obj = {
    property1: "Property 1",    // property name may be an identifier
    2: "Property 3",            // or a number
    "property n": "Property N", // or a string
    printData: function(){
        console.log(this.property1 + this[2] + this["property n"]);
    }
};

console.log(obj.property1);
console.log(obj[2]);
console.log(obj["property n"]);

obj.printData();