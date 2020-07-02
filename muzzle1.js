$(function() {

  
$('#text').hide();
  $("#hide-text").click(function() {
  $("#text").show();
});


 $(".thumbnail").on('mouseover touchend',function(){
    var dataUrl = $(this).attr('data-url');
    $("#main_image").attr('src',dataUrl);
});


  
});



  
  

