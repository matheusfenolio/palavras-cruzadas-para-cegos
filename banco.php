<?php 
    $serverName = "matheusfenolio.database.windows.net"; // update me
    $connectionOptions = array(
        "Database" => "BD", // update me
        "Uid" => "matheusfenolio", // update me
        "PWD" => "M@theus164" // update me
    );
    //Establishes the connection
    $conn = sqlsrv_connect($serverName, $connectionOptions);
    $tsql= "select * from FCFO";
    $getResults= sqlsrv_query($conn, $tsql);
    echo ("Reading data from table" . PHP_EOL);
    if ($getResults == FALSE)
        echo (sqlsrv_errors());
    while ($row = sqlsrv_fetch_array($getResults, SQLSRV_FETCH_ASSOC)) {
     echo ($row['NOME'] . PHP_EOL);
    }
    sqlsrv_free_stmt($getResults);
?>