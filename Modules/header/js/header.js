var s,
header = {

    settings: {
        navItems: $(".nav ul li")
    },

    //kick things off
    init: function() {
        s = this.settings;
        this.navActive();
        this.magicLine();
        this.responsiveNav();
    },

    //MAGIC LINE
    magicLine: function() {

        var leftPos;
        var $navList = $(".nav ul");

        $navList.append("<li id='magic-line'></li>");
        var $magicLine = $("#magic-line");
        $magicLine.css("backgroundColor", $(".nav__item--active").css("color"));
        var origLeft = ( $(".nav__item--active").width() / 2) + $(".nav__item--active").position().left;

        $magicLine.css("left", origLeft ).data("origLeft", origLeft );

        s.navItems.hover(function() {

            leftPos = ( $(this).width() / 2 ) + $(this).position().left;
            $magicLine.stop().animate({
                left: leftPos
            });

        }, function() {

            var navItems = $(".nav li");
            for(var i = 0; i < s.navItems.length; i++) {

                if( $(s.navItems[i]).hasClass("nav__item--active") ) {
                    $magicLine.stop().animate({
                        left: ( $(s.navItems[i]).width() / 2 ) + $(s.navItems[i]).position().left
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

    //RESPONSIVE NAV
    responsiveNav: function() {
        var menuMobileButton = document.querySelector(".nav .humburger-button"),
        mainNav = document.querySelector(".nav ul");
        menuMobileButton.onclick = function() {
            mainNav.classList.toggle("nav-list--mobile");
            this.classList.toggle("humburger-button--opened");
        };
    }

};

(function() {

  header.init();

})();
