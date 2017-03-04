var s,
UiManager = {

    settings: {
        counter: $(".counter-number"),
        navItems: $(".nav__item")
    },

    //kick things off
    init: function() {
        s = this.settings;
        this.navActive();
        this.count();
        this.magic();
        this.accordion();
        this.quoteSlider();
        this.gallerySlider();
        this.masonry();
        this.responsiveUI();
    },

    bindUIActions: function() {

    },

    //Changing active class for links on Click
    // var activeClass = function() {
    //     var listItems = document.querySelectorAll("nav ul li");
    //     function handleClick() {
    //         for (var i = 0; i < listItems.length; i++) {
    //             listItems[i].classList.remove("active");
    //         }
    //         this.classList.add("active");
    //     }
    //     for (var i = 0; i < listItems.length; i++) {
    //         listItems[i].addEventListener("click", handleClick);
    //     }
    // }();

    //MAGIC LINE
    magic: function() {

        var leftPos;
        var $navList = $(".nav-list");

        $navList.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
        var origLeft = ( $(".nav__item--active").width() / 2) + 23 + $(".nav__item--active").position().left; //.nav__item--active

        $magicLine.css("left", origLeft ).data("origLeft", origLeft );

        s.navItems.hover(function() {

            leftPos = ( $(this).width() / 2 ) + 23 + $(this).position().left;
            $magicLine.stop().animate({
                left: leftPos
            });

        }, function() {

            var navItems = $(".nav__item");
            for(var i = 0; i < s.navItems.length; i++) {

                if( $(s.navItems[i]).hasClass("nav__item--active") ) {
                    $magicLine.stop().animate({
                        left: ( $(s.navItems[i]).width() / 2 ) + 23 + $(s.navItems[i]).position().left
                    });
                }

            }

        });

    },

    navActive: function() {
        s.navItems.on("click", function() {
            $(this).addClass("nav__item--active").siblings().removeClass("nav__item--active");
        });
    },

    //Triggering QUOTE-Slider #1

    quoteSlider: function() {

        $(".slider-quote").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: "<i class=\"slider-quote__arrows fa fa-chevron-left\" aria-hidden=\"true\"></i>",
            nextArrow: "<i class=\"slider-quote__arrows fa fa-chevron-right\" aria-hidden=\"true\"></i>",
            responsive: [
                {
                  breakpoint: 1250,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true
                  }
                },
                {
                  breakpoint: 991,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 767,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });

    },

    //FAQ ACCORDION
    accordion: function() {
        var accButtons = document.getElementsByClassName("accordion__btn");
        for(var i = 0; i < accButtons.length; i++) {
            accButtons[i].onclick = function() {
                this.classList.toggle("active");
                this.nextElementSibling.classList.toggle("show");
            };
        }
    },

    //GALLERY-Slider
    gallerySlider: function() {

        var slideIndex = 1;
        showSlides(slideIndex);

        function plusSlides(n) {
            showSlides(slideIndex += n);
        }

        function showSlides(n) {
            var i;
            var slides = document.getElementsByClassName("slider-gallery__item");
            if (n > slides.length) {slideIndex = 1;}
            if (n < 1) {slideIndex = slides.length;}
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
            }
            slides[slideIndex-1].style.display = "block";
        }

        $(".slider-gallery__arrows--next").on("click", function() {
            plusSlides(1);
            UiManager.masonry();
        });

        $(".slider-gallery__arrows--prev").on("click", function() {
            plusSlides(-1);
            UiManager.masonry();
        });

        window.addEventListener("resize", function() {
            UiManager.masonry();
        });

    },

    masonry: function() {
        $(".grid").masonry({
            itemSelector: ".grid-item",
            columnWidth: (25%- (30 + "px")),
            resize: true
        });
    },

    //Animating Count on Scroll
    count: function() {
        s.counter.counterUp({ time: 2000 });
    },

    //RESPONSIVE
    responsiveUI: function() {
        var searchIconMobile = document.querySelector(".search-icon--mobile"),
        searchForm = document.querySelector(".search-form"),
        closeForm = document.querySelector(".btn--close"),
        body = document.querySelector("body");
        searchIconMobile.addEventListener("click", function() {
            searchForm.classList.add("search-form--mobile");
            body.style.overflow = "hidden";
        });
        closeForm.addEventListener("click", function() {
            searchForm.classList.remove("search-form--mobile");
            body.style.overflow = "auto";
        });

        var menuMobileButton = document.querySelector(".humburger-button"),
        mainNav = document.querySelector(".nav-list");
        menuMobileButton.onclick = function() {
            mainNav.classList.toggle("nav-list--mobile");
            this.classList.toggle("humburger-button--opened");
        };
    }

};

(function() {

  UiManager.init();

})();
