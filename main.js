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

$(".contenedor-boton-vermas").click(function(){
    for(let i=4; i <= 7; i++){
        $(".gallery").append(`<div id="no${i}" class="grid-item"><a href="images/lilpeep${i}.jpg" data-fancybox="gallery"><img src="images/lilpeep${i}.jpg"/></a></div>`);
    }
    $(".contenedor-boton-vermas").hide();
    $(".contenedor-boton-vermenos").css("display","flex")
})
$(".contenedor-boton-vermenos").click(function(){
    for(let i=7; i>=4; i--){
        $(`#no${i}`).hide();
    }
    $(".contenedor-boton-vermenos").css("display", "none");
    $(".contenedor-boton-volveraver").css("display","flex");
});
$(".contenedor-boton-volveraver").click(function(){
    for(let i=4; i<=7;i++){
        $(`#no${i}`).show();
    }
    $(".contenedor-boton-vermenos").css("display", "flex");
    $(".contenedor-boton-volveraver").css("display", "none");

})
