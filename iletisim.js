
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

document.getElementById("btn2").addEventListener("click", function () {
    document.forms["form"].reset();
});

document.getElementById("btn1").addEventListener("click", function (e) {
    
    var metin = document.getElementById("posta").value;
    if (metin.indexOf('@') !== -1 && metin.indexOf('.') !== -1) {
        
        
    } else {
        alert("Lütfen girdiğiniz ifade email formatında olsun");
        e.preventDefault();
    }
});

