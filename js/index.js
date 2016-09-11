//Adds Functionality to the Header Bar.
$(window).scroll(function() {
    if($(this).scrollTop() > 1){
        $('div#ban-container').addClass("sticky");
        //$('img#ban-img').style("float","center");
    } else {
        $('div#ban-container').removeClass("sticky");
        //$('img#ban-img').style("float","left");
    }


    //Scrolling Fading for scroll-img
    $(window).scroll(function(){
        $(".scroll-img#scroll-img1").css("opacity", 0.7 - 0.4*$(window).scrollTop() / 350);
  });



});