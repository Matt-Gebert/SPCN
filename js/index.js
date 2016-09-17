//Scrolling Functions:
$(".parallax").scroll(function() {
    //Scrolling Fading for scroll-img
        $(".scroll-img#scroll-img1").css("opacity", 0.7 - 0.4*$(this).scrollTop() / 600);

        if($(this).scrollTop() > 20){
            $('div#ban-height').css("max-height","48px").css("width","25%");//.removeClass("col-md-3").addClass("col-md-6")
            $('div#ban-container').addClass("sticky");
            $('div#top-buttons').fadeOut(100, function(){
                $("#nav-button-container").appendTo("#nav-buttons");
                $('div#nav-buttons').fadeIn(600);
            })
        } else {

            $('div#nav-buttons').fadeOut(100,function(){
                //In case we want to sequence fadeout and stretch rather than run parallel.
                $("#nav-button-container").appendTo("#top-buttons");
                $("#top-buttons").fadeIn(600);
            });
            $('div#ban-container').removeClass("sticky");
            $('div#ban-height').css("max-height","150px").css("width","100%");//.removeClass("col-md-6").addClass("col-md-3")
            $('div#top-buttons').css("max-height","100px");


        }
 });

$("div#ban-container").mousewheel(function(e){
    //Adds Scroll Functionality to the Header Bar. #TODO: EVENT NOT TRIGGERING...
    var event = new WheelEvent('wheel',{
        'deltaY': e.deltaY*e.deltaFactor,
        'deltaX':0,
        'deltaZ':0,
        'deltaMode':0
    });
//    alert(event.deltaX);
    $(".parallax").dispatchEvent(event);
    alert(event.deltaY);
});



$(document).ready(function(){
    //Adds start up functions.
    //0 - Set Banner Width to Parallax Width
    //1 - Transition Top Bar upon load.
    $(".parallax").scroll();
    $('div#nav-buttons').fadeOut(300,"swing",function() {
        //At fadeout, make element visible again.
        $(this).css("display","auto");
    });
    //THIS THROWS OFF WINDOW HEIGHT SO MUCH HAHAHAHA... TODO: Fix height of back div.
    //alert($(".parallax")[0].scrollHeight);
    //alert($(".parallax_layer_front")[0].scrollHeight);
    //$(".parallax_layer_back").css('height',($(".parallax_layer_front")[0].scrollHeight + $(window).height()));
});

//DEBUGGING SCRIPT FOR Z Scales
var debugInput = document.querySelector("input");
function updateDebugState() {
    document.body.classList.toggle('debug-on', debugInput.checked);
}
debugInput.addEventListener("click", updateDebugState);
updateDebugState();