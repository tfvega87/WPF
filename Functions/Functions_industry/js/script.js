/*Antonio Vega-Ceja
10/24/13 

functions-Industry */




function myRunningTime(startTime, daytime){
    var returnValue =  "Started running at " +  startTime +" in the " + daytime +"."; 
     return returnValue;
     }
 var startPrompt =  prompt("What was your full running lap time? Enter hour started |hours mins,  seconds ");
 var place = prompt( "What place?" )
 
 
 console.log(myRunningTime(startPrompt,place));

/* calculating the time ran by day time and startime also given the name of the location where this was performed */