$(document).ready(function(){
    //set interval for carousel
    function setCarouselInterval(){
        $('.carousel').carousel({
            interval: 2000
        });
    }
    setCarouselInterval();

    //adding and removing container and container-fluid respectively.
    $(window).resize(function () {
        var viewportWidth = $(window).width();
        if (viewportWidth <= 575.98) {
            $("#main-container").removeClass("container").addClass("container-fluid");
        }else{
            $("#main-container").removeClass("container-fluid").addClass("container");
        }
    });




});//end of ready function
