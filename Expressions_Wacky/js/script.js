/*Antonio Vega Ceja, 10/10/13 */

function calorieIntake () {

    var yourWeight     = parseInt (prompt('What is your weight? (lb):'));
    var   myCarbs      = parseInt(prompt ('How many carbs do you intake a day:'));
    var  myAge         = parseInt(prompt('Tell us your age:'))
    var equationTime   = yourWeight/myCarbs*myAge*100

    var  result        = "I'm "+myAge+" years old, I weigh "+yourWeight+" and I intake "+myCarbs+" amount of carbs a day. Making it a total of "+equationTime+" calories.";

    return equationTime;

}


console.log(calorieIntake()) ;
