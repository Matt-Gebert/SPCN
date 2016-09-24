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

//BIND SCROLLING ON BANNER TO PARALLAX CONTAINER:
$('div#ban-container').bind('mousewheel', function(e){
    var scrollTo= (e.deltaY*e.deltaFactor*-1) + $('.parallax').scrollTop();
    $(".parallax").scrollTop(scrollTo);
});

var imgHeight;
var imgWidth;

$(document).ready(function(){
    //1 - Resize Events:
    imgHeight = document.getElementById('scroll-img1').naturalHeight;
    imgWidth =  document.getElementById('scroll-img1').naturalWidth;
    $(window).resize();

    //Adds start up functions.
    //2 - Set Banner Width to Parallax Width
    //3 - Transition Top Bar upon load.
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

$(window).resize(function (){
    //Handler for resize event of window.
    //1:
    var width = $(window).width() - getScrollbarWidth();
    $('div#ban-container').css('width',width);

    if(width < 1100)  {
        $('div.menu-item span').css('font-size',7+width/(300)).css('display','none');
    } else {
        $('div.menu-item span').css('font-size',7+width/(300)).css('display','');
    }


    //Attempt at scaling background image.
    /*var scale = width/imgWidth;//Math.sqrt(scale) * imgHeight/2
    var string = 'rect('+0+ 'px,'+Math.round((1-0.4*scale)*imgWidth)+'px,'+imgHeight+'px,'+Math.round(0.4*(scale)*imgWidth)+'px)';
    alert(string);
    if(scale<1){
        $('#scroll-img1').css('clip',string); //Top,Right,Bottom,Left
    }
    */
});

/*-----------------------------------------------------EXTERNAL FUNCTIONS-----------------------------------------------------*/
/*Get the width of a random scrollbar, to deal with the oversize banner.
Credit from source: http://stackoverflow.com/questions/13382516/
*/
function getScrollbarWidth() {
    var outer = document.createElement("div");
    outer.style.visibility = "hidden";
    outer.style.width = "100px";
    outer.style.msOverflowStyle = "scrollbar"; // needed for WinJS apps

    document.body.appendChild(outer);

    var widthNoScroll = outer.offsetWidth;
    // force scrollbars
    outer.style.overflow = "scroll";

    // add innerdiv
    var inner = document.createElement("div");
    inner.style.width = "100%";
    outer.appendChild(inner);

    var widthWithScroll = inner.offsetWidth;

    // remove divs
    outer.parentNode.removeChild(outer);

    return widthNoScroll - widthWithScroll;
}

/*Check if selected item is in the view-field or not.
Credit from source: http://stackoverflow.com/questions/487073/
*/
function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();

    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}



//DEBUGGING SCRIPT FOR Z Scales
//var debugInput = document.querySelector("input");
//function updateDebugState() {
//    document.body.classList.toggle('debug-on', debugInput.checked);
//}
//debugInput.addEventListener("click", updateDebugState);
//updateDebugState();