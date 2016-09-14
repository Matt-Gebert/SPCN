//Scrolling Functions:
$(".parallax").scroll(function() {
    //Adds Functionality to the Header Bar.
        if($(this).scrollTop() > 1){
            $('div#ban-container').addClass("sticky");
            $('img#ban-img').addClass("sticky");
        } else {
            $('div#ban-container').removeClass("sticky");
            $('img#ban-img').removeClass("sticky");
        }

    //Scrolling Fading for scroll-img
        $(".scroll-img#scroll-img1").css("opacity", 0.7 - 0.4*$(this).scrollTop() / 600);

 });