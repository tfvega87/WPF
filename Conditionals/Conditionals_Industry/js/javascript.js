//Antonio Vega-Ceja
//10/17/13


function fixOrder() {
    var TAX = 0.0975;
    var numPrice;
    var total;
    var tax;

    numPrice = parseFloat(document.getElementById("cost").value);
    tax      = parseFloat(document.getElementById("tax").value);
    total    = parseFloat(document.getElementById("total").value);

     numPrice = parseFloat(document.getElementById("cost").value);
    tax      = parseFloat(document.getElementById("tax").value);
    total    = parseFloat(document.getElementById("total").value);

    numPrice = numPrice + (tax || numPrice * TAX);
    total    = numPrice;
    var dec  = new Number((total+'').split('.')[1])  || 0;
    total    = document.getElementById("total").value =
                  "$" + Number(parseInt(total)
                      + '.'
                      + Math.round(
                          ( (dec+''.split('').reverse().join('') )/100 + '').split('').reverse().join('')
                        )).toFixed(2);
                        );

    if (isNaN(numPrice)) {
        alert("Sorry,you must enter a numeric value to place order");
        numPrice = 0;
    }
}