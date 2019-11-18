$(window).on('load', function () {
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    });
    setTimeout(function () {
        $('.loader').slideUp("slow", function () {});
    }, 2000);
});
$(function () {

    $('#year').text(new Date().getFullYear());

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    scrollTo('.projects', '#toProjects');
    scrollTo('.contact', '#toContact');
    scrollTo('.home', '#toHome');

    function scrollTo(from, to) {
        $(from).click(function () {
            $('html, body').animate({
                scrollTop: $(to).offset().top
            }, 2000);
        });
    }

    var particles = document.getElementById("particles");
    var border = ["30%", "60%", "10%", "50%", "80%"];
    var colors = ["#FF6B6B", "#FFE66D", "#4472CA"];

    function createParticle(event) {
        var x = event.clientX;
        var y = event.clientY;
        var color = Math.floor(Math.random() * 3);

        var div = document.createElement("div");
        div.style.position = "absolute";
        div.style.marginLeft = x + "px";
        div.style.marginTop = y + "px";
        div.style.width = "10px";
        div.style.borderTop = "5px solid transparent";
        div.style.borderRight = "5px solid transparent";
        div.style.borderLeft = "5px solid transparent";
        div.style.borderBottom = "10px solid " + colors[color];
        div.style.animation = "move 5s ease-in infinite";
        particles.appendChild(div);
        setTimeout(
            function () {
                div.remove();
            }, 5000);
    }

    function getParticles() {
        var np = document.documentElement.clientWidth / 20;
        particles.innerHTML = "";
        for (var i = 0; i < np; i++) {
            var w = document.documentElement.clientWidth;
            var h = document.documentElement.clientHeight;
            var rndw = Math.floor(Math.random() * w) + 1;
            var rndh = Math.floor(Math.random() * h) + 1;
            var widthpt = Math.floor(Math.random() * 12) + 7;
            var opty = Math.floor(Math.random() * 4) + 1;
            var anima = Math.floor(Math.random() * 12) + 8;
            var bdr = Math.floor(Math.random() * 2);
            var color = Math.floor(Math.random() * 3);

            var div = document.createElement("div");
            div.style.position = "absolute";
            div.style.marginLeft = rndw + "px";
            div.style.marginTop = rndh + "px";
            div.style.width = widthpt + "px";
            div.style.height = widthpt + "px";
            div.style.opacity = opty;
            div.style.backgroundColor = "transparent";
            div.style.border = "2px solid";
            div.style.borderColor = colors[color];
            div.style.borderRadius = border[bdr];
            div.style.animation = "move " + anima + "s ease-in infinite";
            //        div.style.zIndex=-2;
            particles.appendChild(div);
        }
    }

    function main(event) {
        getParticles();
    }

    window.addEventListener("resize", main);
    window.addEventListener("load", main);

    $('.player-card').mousemove(function (e) {
        $(this).children('div').children('div').children('.content').parallax(50, e);
        //        $('img').parallax(70, e);
    });

    // Parallax mouse
    $.fn.parallax = function (resistance, mouse) {
        $el = $(this);
        TweenLite.to($el, 0.2, {
            x: -((mouse.clientX - (window.innerWidth / 2)) / resistance),
            y: -((mouse.clientY - (window.innerHeight / 2)) / resistance)
        });
    };

    animations();
    $(window).resize(function () {
        animations();
    });
    var widthJs = 1024;

    function animations() {

        $('.player-card').on('mousemove', function (e) {

            if ($(window).width() > widthJs) {

                var $this = $(this);

                var x = (event.clientX / $(window).width()) - 0.5;
                var y = (event.clientY / $(window).height()) - 0.5;

                TweenLite.to($this, 0.6, {
                    rotationY: 10 * x,
                    rotationX: 5 * y,
                    ease: Power1.easeOut,
                    transformPerspective: 500,
                    transformOrigin: "center"
                });

            }

        });
    }




});
