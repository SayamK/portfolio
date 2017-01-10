     var birthyear = 2002;
     var currentyear = new Date().getFullYear();
     var age = currentyear - birthyear;
    
     document.getElementById("age").innerHTML = age;

     document.getElementById("year").innerHTML = currentyear;