function Operators(){
    var cars = ["Audi", "Volvo", "BMW"];
    console.log("Audi" in cars);          // Returns false (specify the index number instead of value)              // Returns false (does not exist)
    console.log("length" in cars);        // Returns true  (length is an Array property)
    
    // Objects
    var person = {firstName:"John", lastName:"Doe", age:50};
    console.log("firstName" in person)   // Returns true
    console.log("age" in person)         // Returns true
    
    // Predefined objects
    console.log("PI" in Math)            // Returns true
    console.log("NaN" in Number)         // Returns true
    console.log("length" in String)      // Returns true
}
Operators();