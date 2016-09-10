//Adds Functionality to the Header Bar.
$(window).scroll(function() {
    if($(this).scrollTop() > 1){
        $('div#ban-container').addClass("sticky");
//        $('img#banner').removeClass("center-block").addClass("pull-left");
    } else {
        $('div#ban-container').removeClass("sticky");
//        $('img#banner').removeClass("pull-left").addClass("center-block");
    }
});