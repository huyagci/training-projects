<?php

    // LOOPS (Executes code set number of times)

    /*
        - For
        - While
        - Do..While
        - Foreach
    */

    # FOR
    # @params - init, condition, inc

    /*
    for($i = 4; $i < 10; $i++){
        echo 'Number ' . $i;
        echo '<br>';
    }
    */

    # WHILE
    # @params - condition

    /*
    $i = 0;

    while($i < 10){
        echo $i;
        echo '<br>';
        $i++;
    }
    */

    #DO..WHILE
    # @params - condition

    /*
    $i = 0;

    do{
        echo $i;
        echo '<br>';
        $i++;
    }

    while($i < 10);
    */

    # FOR EACH
    # @params - 

    /*
    $people = array('Brad', 'Jose', 'William');
    
    foreach($people as $person){
        echo "$person <br>";
    }
    */

    $people = array('Brad' => 'brad@gmail.com', 'Jose' => 'jose@gmail.com', 'William' => 'william@gmail.com');
    
    foreach($people as $person => $email){
        echo $person . ': ' . $email;
        echo '<br>';
    }

?>