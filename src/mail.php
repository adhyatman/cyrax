<?php

  $email   = $_POST["email"];
  $subject = "Mensagem recebida de " . $_POST["nome"] . ' (' . $email . ')';
  $message = $_POST["mensagem"];

  mail('matheusdutrademoura@gmail.com', $subject, $message);

  header('Location: index.php?sent=1#contact');

?>
