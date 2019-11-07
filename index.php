<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Palavras Cruzadas</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="css/main.css">
    <script src="script/jquery-3.3.1.min.js"></script>
    <script src="script/script.js"></script>
    <script src="script/jogo.js"></script>
    
</head>
<body oncontextmenu="return false;">
    <!--TCC-->
    <div id="ConteinerPopUp">
            <?php
            $servername = "127.0.0.1";
            $username = "root";
            $password = "";
            $dbname = "tcc";
            
            // Create connection
            $conn = new mysqli($servername, $username, $password, $dbname);
            // Check connection
            if ($conn->connect_error) {
                die("Connection failed: " . $conn->connect_error);
            } 
            
            $sql = "SELECT * FROM jogo";
            $result = $conn->query($sql);
            
            if ($result->num_rows > 0) {
                // output data of each row
                while($row = $result->fetch_assoc()) {
                    echo '<div class="btnPopUp" xml="' . $row["xml"] . '" tamanho="' . $row["size"] . '">' . $row["id"] . "</div>";
                }
            } else {
                echo "0 results";
            }
            $conn->close();
            ?>
    </div>
    <div id="Content">
            <div id="contentBtn">
                    <button class="btn" id="OnOff"></button>
                    <button class="btn" id="Novo"></button>
                </div>
                <main id="Central"></main>
    </div>
</body>


</html>