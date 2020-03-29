<?php

$name = $_POST["name"];
$q = $_POST["q"];

try {
    $pdo = new PDO('mysql:dbname=tommy_db;charset=utf8;host=localhost','root','');
  } catch (PDOException $e) {
    exit('DbConnectError:'.$e->getMessage());
  }

$stmt = $pdo->prepare("INSERT INTO tommy_table(id, name, q, indate )VALUES(NULL, :name, :q, sysdate())");
$stmt->bindValue(':name', $name, PDO::PARAM_STR);
$stmt->bindValue(':q', $q, PDO::PARAM_STR);
$status = $stmt->execute();

if($status==false){
    $error = $stmt->errorInfo();
    exit("QueryError:".$error[2]);
  }else{
    header("Location: sent.php");
    exit;
  }
?>