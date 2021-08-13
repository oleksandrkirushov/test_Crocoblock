import $ from "jquery";
import "slick-carousel";

$(".banner").slick({
    dots: true,
    arrows: true,
    dotsClass: "slick-dots",
});

$(".book__slider").slick({
    slidesToShow: 5,
    arrows: true,
    dotsClass: "slick-dots",
    dots: true,
    slidesToScroll: 2,
});
