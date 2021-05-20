var pointer = 1;
var fadeTime = 1000;

$(function(){
    setInterval(function(){
        if (pointer < 4){
           $('.top_main_group img:nth-of-type('+ pointer + ')').fadeOut(fadeTime); 
           ++pointer;
           $('.top_main_group img:nth-of-type('+ pointer + ')').fadeIn(fadeTime);   
        }else{
            $('.top_main_group img:nth-of-type('+ pointer + ')').fadeOut(fadeTime); 
            $('.top_main_group img:nth-of-type(1)').fadeIn(fadeTime); 
            pointer = 1;
        }
    }, 6500);

    $('.reserve_link span').hover(function(){
        $(this).prev().toggleClass("hovering");
    });

    $('aside nav ul li span').hover(function(){
        $(this).prev().toggleClass("hovering");
    });
})

