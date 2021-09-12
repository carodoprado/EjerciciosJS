$(document).ready(function () {
  
  $(".cuadrado").slideDown("fast", function(){
    $(".cuadrado").slideUp("slow", function(){
      $(".cuadrado").slideDown("fast", function(){
        $(".cuadrado").slideUp(1000)
      });
    });

  })

});