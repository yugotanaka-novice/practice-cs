
$(function(){
  $('header,.aboutus, .topic-bottom,.latest,.contact,.vision,.company-list,.title').hide();
  $('header, .topic-bottom,.latest,.contact,.vision,.company-list,.title').fadeIn(1500);
  
  $('.top-text').hide();
  $('.top-text').fadeIn(3000);


  
  $(window).on("scroll",function(){
    $('.aboutus,.ceo').slideDown(1000);
    
  });

 

});
