<?php
session_start();
require "giris.php";
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=($_POST["ad"]);
    $password=($_POST["sifre"]);
    $databaseUser="b221210058@sakarya.edu.tr";
    $databasePass="b221210058";
    
        if($databaseUser != $username || $databasePass != $password){
            echo("<h2>Kullanıcı adı veya şifre hatalı Yönlendiriliyorsunuz<h2>");            
            comeBack(3);
        }else{
            echo '<h2>Giriş yapıldı profil sayfasına Yönderiliyorsunuz<h2>';
            go("Anasayfa.html",3);       
        }
}else{
    
    go("Giris.html",3);
    exit("<h2>Bu sayfayı görüntüleme yetkiniz yok. Yönlendiriliyorsunuz<h2>");
}


?>