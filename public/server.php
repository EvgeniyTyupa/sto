<?php 
    include(".htaccess.php");
    $rest_json = file_get_contents("php://input", true);
    $data = json_decode($rest_json, true);

    // $cart = array();
    $message = "Новый заказ.\r\n\n";
    $message .= "Имя: ".$data['name'].";\r\n";
    $message .= "Телефон: ".$data['phone'].";\r\n";
    $message .= "Авто: ".$data['auto'].";\r\n";
    $message .= "Email: ".$data['email'].";\r\n\n";
    $message .= "Дата: ".$data['date'].";\r\n";
    $message .= "Время: ".$data['time'].";\r\n\n";
    $message .= "Услуга: ".$data['service'].";\r\n";
    $message .= "Сообщение:\r\n";
    $message .= $data['service'];

    $subject = "Сервис СТО";
    $to = "boogee2820@gmail.com";
    $from = $data['email'];


    $headers = 'From: '.$from."\r\n" .
                'Reply-To: boogee2820@gmail.com'. "\r\n" .
                'X-Mailer: PHP/' . phpversion();

    var_dump(mail($to, $subject, $message, $headers));
    return $res;

?>