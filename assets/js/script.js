$(function(){
    $('div') .mouseover(function() {
        $(this) .find('img') .animate({
            width:350,
            height:350
        }, 2000)
    }) .mouseout(function() {
        $(this) .find('img') .animate({
            width:280,
            height:280
        }, 2000)
    })
})