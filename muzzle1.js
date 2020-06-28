$(function() {

  
$('#text').hide();
  $("#hide-text").click(function() {
  $("#text").show();
});


 $(".thumbnail").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main-image").attr('src',dataUrl);
});

   $(".thumbnail").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main-image2").attr('src',dataUrl);
});
  
});



  
  

