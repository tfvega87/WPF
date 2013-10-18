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

    