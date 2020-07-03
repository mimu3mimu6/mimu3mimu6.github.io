$(function() {

  
$('#text').hide();
  $("#hide-text").click(function() {
  $("#text").show();
});


 $(".thumbnail").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main_image").attr('src',dataUrl);
});

 $(".thumbnail").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main_image3").attr('src',dataUrl);
});
  
 $(".thumbnail_2").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main_image4").attr('src',dataUrl);
});
  
  
});



  
  

