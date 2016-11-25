
var values = [80, 35, 75, 99];



 function setWidth(35) {
   var elem = document.getElementById("js-loading");
   var width = 0;
   var id = setInterval(frame, 30);

   function frame() {
     if (width >= maxWidth) {
       clearInterval(id);
     } 
     else {
       width++;
       elem.style.width = width + '%';
       document.getElementById("js-progress").innerHTML = width * 1 + '%';
     }
   }
   
 }
