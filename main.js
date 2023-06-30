var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)
carousel.interval = 1000;

$(".carousel-item").mouseenter(function(){
    carousel.pause;
})

$(".nav-item").mouseenter(function(){
    $(".nav-link").css("color","black");
})
$(".link").mouseenter(function(){
    $(".link").css("color","black");
})