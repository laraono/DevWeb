<?php
function verifica_campo($texto){
  $texto = trim($texto);
  $texto = stripslashes($texto);
  $texto = htmlspecialchars($texto);
  return $texto;
}

$nome = "";
$email = "";
$anexo = "";
$data = "";
$pass = "";
$passcheck = "";
$erro = false;

if ($_SERVER["REQUEST_METHOD"] == "POST") {

  if(empty($_POST["nome"])){
    $erro_nome = "Nome é obrigatório.";
    $erro = true;
  }
  else{
    $nome = verifica_campo($_POST["nome"]);
  }
  if(empty($_POST["email"])){
    $erro_email = "E-mail é obrigatório.";
    $erro = true;
  }
  else {
  if (!filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)) {
      $erro_email = "E-mail inválido.";
      $erro = true;
  }
    else {
      $email = verifica_campo($_POST["email"]);
    }
  }
  if(empty($_POST["data"])){
    $erro_data = "Data de nascimento é obrigatoria";
    $erro = true;
  }
  else{
    $data = verifica_campo($_POST["data"]);
  } 
  if(empty($_POST["pass"])){
    $erro_pass = "Senha é obrigatoria";
    $erro = true;
  }
  else{
    $pass = verifica_campo($_POST["pass"]);
  } 
  if(empty($_POST["passcheck"])){
    $erro_passcheck = "Confirmação de senha é obrigatoria";
    $erro = true;
  }
  else{
    $passcheck = verifica_campo($_POST["passcheck"]);
    if($passcheck != $pass) {
      $erro_passcheck = "As senhas não batem";
    }
  } 
  if(empty($_FILES['anexo']['name'])){
    $erro_anexo = "Avatar é obrigatorio";
    $erro = true;
  }
  else{
    $accept = ["jpg", "png"];
    $ext = strtolower(pathinfo($_FILES["anexo"]["name"], PATHINFO_EXTENSION));
    if (!in_array($ext, $accept)) { 
      $erro_anexo = "Apenas arquivos .jpg e .png são suportados";
    } 
    if ($_FILES["anexo"]["size"] > 1000000) {
      $erro_anexo = "Desculpe, seu arquivo é muito grande.";
    }
  }
  if(empty($erro)){
    $dir = "imagens/";
    if (!file_exists($dir)) {
      mkdir($dir, 0777, true);
    }
    $file = $dir . basename($_FILES["anexo"]["name"]);
    move_uploaded_file($_FILES["anexo"]["tmp_name"], $file);
    
  } 
  
}
?>
