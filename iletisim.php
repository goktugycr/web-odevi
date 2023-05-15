<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
    error_reporting(0);
    echo "Adınız:";
    $ad =  $_POST['adi'];
    echo $ad;


    ?>
    <br>
    <?php
   
    echo "Soyadınız:";
    $soyad = $_POST['soyad'];
    echo $soyad;

    ?>
    <br>
    <?php
   
   echo "Mail Adresiniz:";
    $posta = $_POST['posta'];
    echo $posta;


   ?>
   <br>
   <?php
   
   echo "Cinsiyetiniz:";
   $cinsiyet = $_POST['cinsiyet'];
   echo $cinsiyet;

   ?>
  
    <br>
    <?php
   
   echo "Memleketiniz:";
   $memleket = $_POST['memleket'];
   echo $memleket;


   ?>
   <br>
   <?php
   
    echo "Öğrenim Durumunuz:";
    $ogrenim=$_POST['ogrenim'];
    
    foreach($ogrenim as $key => $value){
        
        echo $value;
        echo " ";
    }



   ?>
   <br>
   <?php
   
   echo "Önerileriniz:";
   $oneri = $_POST['oneri'];
    echo $oneri;



   ?>
   <br>
   <?php
   
   echo "Dosya Durumu:";
    
    $tmp_name=$_FILES['dosya']['tmp_name'];
    $name=$_FILES['dosya']['name'];
    $upload_dir="uploads";
    if(move_uploaded_file($tmp_name,"$upload_dir/$name"))
    {
        echo "Dosya başarılı bir şekilde yüklendi";
        
    }
    else{
        echo "Dosya yüklenemedi";
    }
     
    ?>
    
  
    


   

   
   
    

</body>
</html>







