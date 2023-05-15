
function validateForm(){
    var x=document.forms["form"]["adi"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle adınızı girin.");
        return false;
    }
    var x=document.forms["form"]["soyad"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle soyadınızı girin.");
        return false;
    }
    var x=document.forms["form"]["posta"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle mailinizi girin.");
        return false;
    }
    var x=document.forms["form"]["cinsiyet"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle cinsiyetinizi girin.");
        return false;
    }
    var x=document.forms["form"]["dosya"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle dosyanızı seçin.");
        return false;
    }
    var x=document.forms["form"]["oneri"].value;
    if(x==null||x=="")
    {
        alert("Lütfen formda boş kısım bırakmayın ve öncelikle önerilerinizi girin.");
        return false;
    }
    
   
    

   
    
    
    
 
    
}
