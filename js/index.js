$(function(){
//jQuery start

/* Start message */
console.log(`The website is built by Edvinass Janusevicius, 2019.
The code for this website is open-source and is available at the bottom of the page.`);


/* Smooth Scrolling */
$(".js--about-btn").click(function () {
    $("html, body").animate({
        scrollTop: $(".js--about-me-section").offset().top
    }, 500);
});


$(".js--portfolio-btn").click(function () {
    $("html, body").animate({
        scrollTop: $(".js--portfolio-section").offset().top
    }, 750);
});


$(".js--home-btn").click(function () {
    $("html, body").animate({
        scrollTop: $(".js--home-section").offset().top
    }, 750);
});



$(".about-me-wrapper").waypoint(function(direction) {
    $(".about-me-wrapper").fadeTo(750, 1);
}, {
    offset: "60%"
});






/* Tech-box namechange */
var iconName;
var stackItem;

$(".tech-row").on("mouseenter", ".tech-box", function() {
    stackItem = $(this).data("stackitem");
    //console.log(stackItem);

    $(this).children("i").remove();

    $(this).append(`<p class="stack-text">${stackItem}</p>`);


});


$(".tech-row").on("mouseleave", ".tech-box", function() {
    
    iconName = $(this).data("iconname");
    //console.log(iconName);

    $(this).children("p").remove();

    $(this).append(`<i class="${iconName}"></i>`);


});



//jQuery end
});