<?php 
    include(".htaccess.php");
    $rest_json = file_get_contents("php://input", true);
    $data = json_decode($rest_json, true);

    $cart = array();
    $message = "<h2>Новый заказ.</h2>";
    $message .= "<table style='border: 1px solid black; border-collapse: collapse; text-align: left'>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Имя</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['name']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Телефон</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['phone']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Авто</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['auto']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Email</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['email']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Дата</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['date']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Время</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['time']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Услуга</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['service']."</th>
                    </tr>
                    <tr>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px; font-weight: bold'>Сообщение</th>
                        <th style='border: 1px solid black; padding-left: 5px; padding-right: 5px'>".$data['message']."</th>
                    </tr>
                </table>";

    $subject = "Сервис СТО";
    $to = "boogee2820@gmail.com";
    $from = $data['email'];

    // // Headers
    $headers = "MIME-Version: 1.0\r\n";
    $headers.= "Content-type: text/html; charset=UTF-8\r\n";
    $headers.= "From: <" . $from . ">";

    mail($to, $subject, $message, $headers);

?>