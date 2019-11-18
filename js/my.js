$(window).on('load', function() {
 // code here

    setTimeout(function(){$('.loader').slideUp( "slow", function(){} );}, 3000);
});
$(function () {

    $('#year').text(new Date().getFullYear());

    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    scrollTo('.projects','#toProjects');
    scrollTo('.contact','#toContact');
    scrollTo('.home','#toHome');

    function scrollTo(from, to) {
        $(from).click(function () {
            $('html, body').animate({
                scrollTop: $(to).offset().top
            }, 2000);
        });
    }
    //    /*
    //
    //ThreeJs custom waves
    //Original script by ThreeJS : https://threejs.org/examples/canvas_particles_waves.html
    //Modified version for Cloudoru by Kevin Rajaram : http://kevinrajaram.com
    //Date: 08/14/2014
    //
    //
    //*/
    //
    //    var SEPARATION = 50,
    //        AMOUNTX = 60,
    //        AMOUNTY = 30;
    //
    //    var container;
    //    var camera, scene, renderer;
    //    /*
    //
    //    if (window.WebGLRenderingContext){
    //    	renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    //    	}
    //    else {
    //    	renderer = new THREE.CanvasRenderer();
    //    	}
    //    */
    //
    //    var particles, particle, count = 0;
    //
    //    var windowHalfX = window.innerWidth / 2;
    //    var windowHalfY = window.innerHeight / 2;
    //
    //    init();
    //    animate();
    //
    //    function init() {
    //
    //        container = document.createElement('div');
    //        document.body.appendChild(container);
    //        if (container) {
    //            container.className += container.className ? ' waves' : 'waves';
    //        }
    //
    //        camera = new THREE.PerspectiveCamera(120, window.innerWidth / window.innerHeight, 1, 10000);
    //        camera.position.y = 180; //changes how far back you can see i.e the particles towards horizon
    //        camera.position.z = 10; //This is how close or far the particles are seen
    //
    //        camera.rotation.x = 0.35;
    //
    //        scene = new THREE.Scene();
    //
    //        particles = new Array();
    //
    //        var PI2 = Math.PI * 2;
    //        var material = new THREE.SpriteCanvasMaterial({
    //
    //            color: 0xE59500, //changes color of particles
    //            program: function (context) {
    //
    //                context.beginPath();
    //                context.arc(0, 0, 0.5, 0, PI2, true);
    //                context.fill();
    //
    //            }
    //
    //        });
    //
    //        var i = 0;
    //
    //        for (var ix = 0; ix < AMOUNTX; ix++) {
    //
    //            for (var iy = 0; iy < AMOUNTY; iy++) {
    //
    //                particle = particles[i++] = new THREE.Sprite(material);
    //                particle.position.x = ix * SEPARATION - ((AMOUNTX * SEPARATION) / 2);
    //                particle.position.z = iy * SEPARATION - ((AMOUNTY * SEPARATION) - 10);
    //                scene.add(particle);
    //
    //            }
    //
    //        }
    //
    //        renderer = new THREE.CanvasRenderer();
    //        renderer.setSize(window.innerWidth, window.innerHeight);
    ////        renderer.setClearColor(, 1);
    //        container.appendChild(renderer.domElement);
    //
    //        window.addEventListener('resize', onWindowResize, false);
    //
    //    }
    //
    //    function onWindowResize() {
    //
    //        windowHalfX = window.innerWidth / 2;
    //        windowHalfY = window.innerHeight / 2;
    //
    //        camera.aspect = window.innerWidth / window.innerHeight;
    //        camera.updateProjectionMatrix();
    //
    //        renderer.setSize(window.innerWidth, window.innerHeight);
    //
    //    }
    //
    //    function animate() {
    //
    //        requestAnimationFrame(animate);
    //
    //        render();
    //
    //    }
    //
    //    function render() {
    //
    //        var i = 0;
    //
    //        for (var ix = 0; ix < AMOUNTX; ix++) {
    //
    //            for (var iy = 0; iy < AMOUNTY; iy++) {
    //
    //                particle = particles[i++];
    //                particle.position.y = (Math.sin((ix + count) * 0.5) * 15) + (Math.sin((iy + count) * 0.5) * 15);
    //                particle.scale.x = particle.scale.y = (Math.sin((ix + count) * 0.5) + 2) * 4 + (Math.sin((iy + count) * 0.5) + 1) * 4;
    //
    //            }
    //
    //        }
    //
    //        renderer.render(scene, camera);
    //
    //        // This increases or decreases speed
    //        count += 0.05;
    //
    //    }
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
        //    particles.addEventListener("click", createParticle);
    }

    window.addEventListener("resize", main);
    window.addEventListener("load", main);

});
