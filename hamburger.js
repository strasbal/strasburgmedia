 $(document).ready(function(){
 $("#hamburger ul").hide();
 $("#holder").hover(function(){
   $("#hamburger ul").show();
   },function(){
   $("#hamburger ul").hide();
   });
});
