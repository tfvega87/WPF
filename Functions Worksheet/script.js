/*Antonio Vega-Ceja
10/24/13 

Functions-worksheet */


// Circumference
var total = calcCircumference(4);

function calcCircumference(radius){
        var circumference = 2 * 3.14 * radius;
        return circumference;
}
console.log("The circumference of the circle is " + total);

// Stung!
var totalStings = beeStings(180)

function beeStings(lbs){
        var stings = 8.666666667 * lbs;
        return stings;
}
console.log("It takes " + totalStings + " to kill this animal.");

