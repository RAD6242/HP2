$(".photo_group img").click(function(){
    var photo_name = $(this).attr("src");

    console.log(photo_name);
    $(".photo_zoom").css('visibility','visible');
    $(".photo_zoom img").attr("src", photo_name);
});

$(".photo_zoom p").click(function(){
    $(".photo_zoom").css('visibility','hidden');
});