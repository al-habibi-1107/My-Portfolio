window.addEventListener("scroll",function(){
   var nav = document.querySelector("nav");
   nav.classList.toggle("sticky",window.scrollY > 0);
});

var i =0;
var text = "Hello World ... I'm";
var speed = 100;



function typeAnim(){
   if(i<text.length){
     document.querySelector("#type-text").innerHTML += text.charAt(i);
     i++;
    setTimeout(typeAnim,speed);
   }
}

window.onload= function(){
      setTimeout(typeAnim,500);
   
}

function redirect(url){

   window.location.href = url;
}
