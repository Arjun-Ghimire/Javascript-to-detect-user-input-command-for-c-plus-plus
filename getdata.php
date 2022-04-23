<?php 

        $total = $_POST["totalval"];
    
        echo "Response values are = ";
        for($i=1;$i<=5;$i++){
            $value[$i] = $_POST["value".$i];
            echo $value[$i]. " ";
        }
    
?>