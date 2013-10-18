//Antonio Vega-Ceja
// 10/17/13
//Calculate Your Monthly Payments
            function Calc(){ 
            var a, res;             
            a = parseFloat(document.monthly.form.value); 
            res1 = a/1000;
            res2 = a/500;
            res3 = a/300;

           
            if(document.monthly.payments.value == "1" )
            {
                window.alert("Your monthlys repayments have been estimaded to be $" + res1);
            }
            else if(document.monthly.payments.value == "2" )
            {
                window.alert("Your monthly repayments have been estimaded to be $ " + res2);
            }
            else if(document.monthly.payments.value == "3" )
            {
                window.alert("Your monthly repayments have been estimaded to be $ " + res3);
            } 
        }