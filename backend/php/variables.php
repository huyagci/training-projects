<?php

    // Single Line Comment
    # Single Line Comment
    /*
        Multiple
        Line
        Comment
    */

    // VARIABLES
    /*
        - Prefix $
        - Start with a letter or an underscore
        - Only letters, numbers and underscores
        - Case sensitive
    */

    // DATA TYPES
    /*
        - String
        - Integer
        - Floats
        - Booleans
        - Arrays
        - Objects
        - Null
        - Resource
    */

    #STRINGS

    $output = 'Hello World';
    $num1 = 4;
    $num2 = 10;
    $sum = $num1 + $num2;

    $string1 = 'Hello';
    $string2 = 'World';
    $greeting1 = $string1 . ' '  . $string2;
    $greeting2 = "$string1 $string2";

    $string3 = 'They\'re Here';
    $string4 = "They're Here";

    $float1 = 4.4;
    $bool1 = true;

    # CONSTANTS

    define('GREETING1', 'Hello Everyone');
    // define('GREETING2', 'Hello Everyone', true);

    // echo greeting2;

?>