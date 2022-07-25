<?php

    # FUNCTION (Block of code that can be repeatedly called)

    /*
    Camel Case - myFunction()
    Lower Case - my_function()
    Pascal Case - MyFunction()
    */

    // Create Function
    function simpleFunction(){
        echo 'Hello World';
    }

    // Run Function
    #simpleFunction();

    // Function with Parameters
    function sayHello($name = 'User'){
        echo "Hello $name<br>";
    }

    #sayHello('Joe');
    #sayHello('Bob');
    #sayHello();

    // Return Value
    function addNumbers($num1, $num2){
        return $num1 + $num2;
    }

    #addNumbers(2,3);

    // Passing Arguments by Reference

    $myNum = 10;

    function addFive($num){
        $num += 5;
    }

    function addTen(&$num){
        $num += 10;
    }

    addFive($myNum);

    echo "Value: $myNum<br>";

    addTen($myNum);

    echo "Value: $myNum<br>";

?>