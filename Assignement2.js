/*

Q1: Create objects
- Create object using object literal syntax. Object should have at least 2 properties.
- Create another using the keyword “new”. Object should have at least 2 properties



 // Object and properts

 //Object Literal

 var AssObj = {
    firstName: 'AbdiJamaal',
    LastName: 'Gedi',
  
};

console.log(AssObj);

var Osman = new Object();
Osman.firstName = 'Adde';
Osman.BirthYear = 1999;

console.log(Osman);

delete Osman.firstName;

*/


/*
//Q2: Create object constructor

var Person = {
    firstName: 'AbdiJamaal',
    LastName: 'Gedi',
    YearBorn: 1999,
    Age: function(){
        this.Age = 2021 - this.YearBorn;

    }

};
Person.Age();
console.log(Person);
*/



/*
 Q3: Create a function expression and store it in a variable

var Jam function mult(a,b){
    return sum = 7+7;
 
}
mult();
console.log(sum);

*/

/*
//Q4: Create a self-invoking function that prints out something
(function () {
    var Jamaal = 'Hayeh Ma ii jeedaa';

console.log(Jamaal)

});

*/

/*
//Q5: Create an arrow function and store it in a variable

let Abdi = (a,b) => {return a + b};
 console.log(Abdi(10,20));
*/

/*
//Q6: Declare a function that takes (a,b)

function multiply(a, b) {
     b = (typeof b !== 'undefined') ?  b : 10
     return a * b
   }
  console.log(multiply(10)); 
*/



//Q7: Create a class called “Vehicle”
class vehicle {
    constructor(type,year){
       this.type = type;
        this.year =  year;
        
    }
    Move(){
        
        return `Moving`;
    }

    Stop(){
        return `Stopping`;
    }


}



//Q8: Create a class called “Plane” and inherits “Vehicle”

class plane extends vehicle{
    constructor(type,year){
      // super(type,year);
        
    }
    Fly(){
       
        return `Flying`
}
Land(){
    
    return `Landing`
}

}




// Q9:: Create an instance of the “Plane” class.
const Boenj = new plane('Boeng', 2021);
console.log(Boenj.Land())
console.log(Boenj.Fly())
console.log(Boenj.Move())
console.log(Boenj.Stop())




