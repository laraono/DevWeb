<!DOCTYPE html>
<html>
<head>
  <title>Teste PHP</title>
  <meta charset="utf-8">
</head>
<body>
<div class="container">
    <form action="post.php" method="get">
        <input type="number" name="num1" id="num1">
        <input type="number" name="num2" id="num2">
        <input type="submit" value="enviar">
    </form>
  <?php
    $n = $_GET['num1'];
     $n2 = $_GET['num2'];
    echo $n + $n2;
  ?>
</div>
</body>
</html>

