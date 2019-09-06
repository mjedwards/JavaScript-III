/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. this is when 'this' is pointing at the global object of the window.
* 2. 'this' is pointing to what is being referred to before the dot when a method or function is called. 
* 3. 'this' is binded when using object constructors. When the word 'new' is used to create an instance of an object via the constructor 'this' will point to the newly created object.
* 4. 'this' overwrites what was previously bound to it when .call() or .apply() method are used.
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
let a = {
    name = "a",
    home = "alphabet",
    position = 1,
    speak = () => {
        return `${this.name} says hello!`;
    }
};

console.log(a.speak());

// Principle 2

// code example for Implicit Binding
let b = {
    name = "b",
    home = "alphabet",
    position = 2,
    speak = function () {
        return `${this.name} says hello!`;
    }
};

console.log(b.speak());

// Principle 3

// code example for New Binding
function NewLetter (type) {
    this.style = type.style;
    this.size = type.size;
    this.bold = type.bold;
}

const pq = new NewLetter({
    style: "Sans", 
    size: 3, 
    bold: true
});
console.log(pq);

// Principle 4

// code example for Explicit Binding
b.speak.call(a);
a.speak.apply(b)