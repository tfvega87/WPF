/*Antonio Vega Ceja, 10/10/13 */

function myscore  () {
    var levelCap           = 50;
    var myscoreLevel            =prompt("What level are you?") ;
    var myscorLevel          =parseInt(prompt("What is the highest level"+" max is:"+myscorLevel));
    var myscoreTotal          = gearLevel+5;
    var returnMessage  ='next';

if(myLevel>=45 && gearTotal>=40)     {returnMessage="Joining dungeon..."+"You are level "+myscorLevel+ " and your Myscore level is, "+myscoreTotal+"."}
else                                {returnMessage="You do not meet the requirements."}

    return returnMessage;

}

console.log(myscore());