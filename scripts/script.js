// Task 1: Implement a function that calculates total coffees sold
    // Calculate the total coffees sold by summing up a sales array
    function getTotalCoffeesSold(sales) {
        const total = sales.reduce((acc, coffee) => acc + coffee, 0);
        return total;
      }


// Task 2: Implement a function to filter out decaf coffees from a list of coffee options
    // Use the filter method to filter out decaf coffee options
    function filterOutDecaf(coffeeOptions) {
        return coffeeOptions.filter(coffee => coffee.toLowerCase() !== "decaf");
      }


// Task 3: Define a class for Jazz Coffee Roasters
class JazzCoffeeRoasters {
    constructor(name, location) {
      this.name = name;
      this.location = location;
    }  
// Task 4: Extend the Jazz Coffee Roaster class for Specialty Coffee Roasters
class SpecialtyCoffeeRoasters extends JazzCoffeeRoasters {
    constructor(name, location, specialties) {
      super(name, location); // Call parent class constructor
      this.specialties = specialties;
    }
  

// Task 5: Create a custom constructor function for Jazz Coffee Blends
function JazzCoffeeBlend(name, origin, roastLevel, ingredients) {
    this.name = name;
    this.origin = origin;
    this.roastLevel = roastLevel;
    this.ingredients = ingredients;
  }
  

// Task 6: Implement a class with default parameters for Jazz Coffee Cups
class JazzCoffeeCup {
    constructor(size = "Medium", material = "Ceramic") {
      this.size = size;
      this.material = material;
    }

// Task 7: Use template literals to create a message about a coffee event
    //The event details have been given to you below
    const coffeeEvent = {
        name: "Java Jam",
        date: "April 10, 2024",
        venue: "Jazz & Java"
    };
    const eventMessage = `Join us for ${coffeeEvent.name} on ${coffeeEvent.date} at ${coffeeEvent.venue}!`;
console.log(eventMessage); // Output: Join us for Java Jam on April 10, 2024 at Jazz & Java!
    
    
    // Task 9: Use spreadrest operators on an array
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
const newType = "Mocha";

    // Array of coffee types
    const coffeeTypes = ["Espresso", "Latte", "Cappuccino"];
    const newType = "Mocha";
    
    // Add a new coffee type using spread operator and create an updated coffee type array
    
    console.log("Updated Coffee Types:", updatedCoffeeTypes);
    
    const updatedCoffeeTypes = [...coffeeTypes, newType]; // Spread existing array and add new type
console.log("Updated Coffee Types:", updatedCoffeeTypes); // Output: Updated Coffee Types: ["Espresso", "Latte", "Cappuccino", "Mocha"]   