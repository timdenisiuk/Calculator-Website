let num1 = 0;
let num2 = 'NaN';
var lastOp = 'NA';

$input = $('.input');

$(function() {

    $('.number').on('click', event => {
        $input.append((event.currentTarget).innerHTML);
    });

    $('.clear').on('click', function() {
        $input.html("");
        num1 = 0;
        num2 = 0;
        lastOp = "NA"
    });

    $('.op').on('click', event => {

        if(lastOp === 'NA'){
            num1 = Number($input.html());
            lastOp = (event.currentTarget).innerHTML;
            $input.html("");
            
        }
        else if(num2 === 'NaN'){
            num2 = Number($input.html());
            let calc = performCalculation(num1, num2);
            $input.html(calc);
        }
        
    });

    $('#result').on('click', function() {
        if(lastOp === 'NA'){
        }
        else if(num2 === 'NaN'){
            num2 = Number($input.html());
            $input.html(performCalculation(num1, num2));
        }
        else{
            num1 = Number($input.html());
            $input.html(performCalculation(num1, num2));
        }
        
    });

    function performCalculation(n1, n2) {
        switch(lastOp) {
            case "+":
                return n1 + n2;
            case "-":
                return n1 - n2;
            case "×":
                return n1 * n2;
            case "÷":
                return n1 % n2;
        }
    };


});