var SliderManager = function() {

    function showSlides() {
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex> slides.length) {slideIndex = 1}
        slides[slideIndex-1].style.display = "block";
        setTimeout(showSlides, autoplaySpeed); // Change image every (autoplaySpeed) seconds
    }

    function init(opts) {
        slideIndex = 0;
        slides = document.querySelectorAll(opts.slides);
        autoplaySpeed = opts.autoplaySpeed;
        showSlides();
    }

    var slides,
    slideIndex,
    autoplaySpeed,
    publicAPI = {
        init: init
    };

    return publicAPI;

};

var mainSlider = SliderManager();

(function() {
    mainSlider.init({
        slides: ".main-slider > div",
        autoplaySpeed: 10000
    });
})();
