 $(document).ready(function(){
 $("#hamburger ul").hide();
 $("img").hover(function(){
   $("#hamburger ul").show();
   },function(){
   $("#hamburger ul").hide();
   });
});