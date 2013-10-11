/*Antonio Vega Ceja, 10/10/13 */
function idNumber () {

    var buildingNumbers = prompt ('Choose a number from 1 to 9:');
    var  wordsList    = parseInt(prompt ('Choose a word that is 4 characters long:'));
    var  studentAge    = parseInt(prompt('Tell us your age:'))
    var sectionNumber  = prompt ('Choose a letter between F and G:');

    var  uniqueID      = buildingNumbers+wordsList*studentAge+sectionNumber;

    return uniqueID;

}


console.log(idNumber()) ;
