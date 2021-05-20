$(".openbtn").click(function(){
    $(this).toggleClass('active');
    $('.header_nav').toggleClass('active');
});

$(".header_nav h1").click(function(){
    $('.header_nav').toggleClass('active');
});

$(".header_nav ul li").click(function(){
    $('.header_nav').toggleClass('active');
});

$(function(){
    $('.page_view').delay(2500).fadeOut('slow'); 
})
