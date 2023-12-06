<?php
function create_table_cell($txt){
    return "<td>$txt</td>";
}

function create_table_row($cells){
    $row = "<tr>";
    foreach ($cells as $cell) {
        $row .= create_table_cell($cell);
    }
    $row .= "</tr>";
    return $row;
}

function create_table($rows){
    $table = "<table class='table'>";
    foreach ($rows as $row) {
        $table .= create_table_row($row);
    }
    $table .= "</table>";
    return $table;
}

function power_matrix($n){
  /*  $matrix = array();
    for ($i = 1; $i <= $n; $i++) {
        $row = array();
        for ($j = 1; $j <= $n+1; $j++) {
            array_push($row, pow($i, $j));
        }
        array_push($matrix, $row);
    }
    return $matrix; */

    $matrix = [];
    for ($i = 1; $i <= $n; $i++){
        $matrix[$i] = [];
        for ($j=1;$j<=$n+1; $j++){
            $matrix[$i][$j] = pow($i, $j);
        }
        return $matrix;
    }
}
?>
<!DOCTYPE html>
<html>
<head>
  <title>Teste PHP</title>
  <meta charset="utf-8">
  <link rel="stylesheet" href="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css">
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js"></script>
</head>
<body>
<div class="container">
  <h1>Tabela de potências</h1>
  <?php
    $n = 5;
    $m = power_matrix($n);
    echo create_table($m);
  ?>
</div>
</body>
</html>

