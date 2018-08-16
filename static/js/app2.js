(function ($) {
  "use strict";

  var fn = {

    // Launch Functions
    Launch: function () {
      fn.Header();
      fn.Masonry();
      fn.AOS();
      fn.ImageView();
      fn.Typed();
      fn.Swiper();
      fn.Vivus();
      fn.Overlay();
      fn.OwlCarousel();
      fn.Apps();
    },

    Header: function (){
      $("header").headroom({
        tolerance : 0
      });
    },

    ImageView: function() {
      $('.lightbox').magnificPopup({
        type: 'image',
        closeOnContentClick: true,
        closeBtnInside: false,
        fixedContentPos: true,
        mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
        image: {
          verticalFit: true
        }
      });

      $('.gallery').each(function() { // the containers for all your galleries
          $(this).magnificPopup({
              delegate: '.photo > a', // the selector for gallery item
              type: 'image',
              mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
              gallery: {
                enabled:true
              }
          });
      });
      
      $('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
        disableOn: 700,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,

        fixedContentPos: false
      });
    },

    Typed: function() {
      if( $('#typed').length ) {
        var typed = new Typed("#typed", {
          stringsElement: '#typed-strings',
          typeSpeed: 100,
          backSpeed: 50,
          backDelay: 2000,
          startDelay: 200,
          loop: true
        });
      }
    },

    Masonry: function() {
      var $grid = $('.masonry').masonry({
        itemSelector: '.masonry > *',
      });

      $grid.imagesLoaded().progress( function() {
        $grid.masonry('layout');
      });
    },


    AOS: function() {

    },


    // Swiper
    Swiper: function() {

      $('.swiper-container').each(function(index, element){
        var $this = $(this)

        $this.find(".swiper-pagination").addClass("swiper-pagination-" + index);
        $this.find(".swiper-button-next").addClass("swiper-button-next-" + index);
        $this.find(".swiper-button-prev").addClass("swiper-button-prev-" + index);

        var options = {
          parallax: true,
          speed: 1500,
          simulateTouch: false,
          effect: 'fade',

          //pagination
          pagination: {
            el: '.swiper-pagination-' + index,
            clickable: true
          },

          // navigation
          navigation: {
            nextEl: '.swiper-button-next-' + index,
            prevEl: '.swiper-button-prev-' + index,
          }

        };

        var slider = $(this);

        if ($(this).hasClass('swiper-container-carousel')) {
          options.spaceBetween = 10;
          options.effect = 'slide';
          options.simulateTouch = true;
          options.slideToClickedSlide = true;
        }

        new Swiper ( slider, options );
      });



      if ( $( ".gallery-container" ).length ) {
        var galleryTop = new Swiper('.gallery-container', {
          effect: 'fade',
          speed: 1500,
          simulateTouch: false
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
          centeredSlides: true,
          slidesPerView: 6,
          speed: 1500,
          breakpoints: {
            1600: { slidesPerView: 5 },
            1200: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 2 }
          },
          slideToClickedSlide: true
        });
        galleryTop.controller.control = galleryThumbs;
        galleryThumbs.controller.control = galleryTop;
      }

    },


    // SVG Animation
    Vivus: function() {
      var myCallback = function () {};

      var myElements = document.querySelectorAll(".svg-icon svg");

      for (var i = myElements.length - 1; i >= 0; i--) {
        new Vivus(myElements[i], {duration: 100, type: 'async' }, myCallback);
      }
    },


    // Overlay Menu
    Overlay: function() {
      $(document).ready(function(){
        $('.burger').click(function(){
          var a = $(this);

          a.toggleClass('clicked');
          $('body').toggleClass('overlay-active');
          $('.overlay-menu').toggleClass('opened');
          $('.wrapper').toggleClass('push');
        });
      });
    },


    // Owl Carousel
    OwlCarousel: function() {

      $('.owl-carousel').each(function() {
        var a = $(this),
          items = a.data('items') || [1,1,1],
          margin = a.data('margin'),
          loop = a.data('loop'),
          nav = a.data('nav'),
          dots = a.data('dots'),
          center = a.data('center'),
          autoplay = a.data('autoplay'),
          autoplaySpeed = a.data('autoplay-speed'),
          rtl = a.data('rtl'),
          autoheight = a.data('autoheight');

        var options = {
          nav: nav || false,
          loop: loop || false,
          dots: dots || false,
          center: center || false,
          autoplay: autoplay || false,
          autoHeight: autoheight || false,
          rtl: rtl || false,
          margin: margin || 0,
          autoplayTimeout: autoplaySpeed || 3000,
          autoplaySpeed: 400,
          autoplayHoverPause: true,
          responsive: {
            0: { items: items[2] || 1 },
            576: { items: items[1] || 1 },
            1200: { items: items[0] || 1}
          }
        };
        
        a.owlCarousel(options);
      });
    },

    // Apps
    Apps: function () {

      // Navbar Nested Dropdowns
      $('.dropdown-menu a.dropdown-toggle').on('click', function(e) {
        var a = $(this);

        if (!a.next().hasClass('show')) {
          a.parents('.dropdown-menu').first().find('.show').removeClass("show");
        }

        var $subMenu = a.next(".dropdown-menu");
        $subMenu.toggleClass('show');

        a.parents('li.nav-item.dropdown.show').on('hidden.bs.dropdown', function(e) {
          $('.dropdown-submenu .show').removeClass("show");
        });

        return false;
      });


      // Accordion
      $('.accordion').accordion();


      // Lavalamp
      $('.nav').lavalamp({
        setOnClick: true,
        enableHover: false,
        margins: false,
        autoUpdate: true,
        duration: 200
      });


      // Tooltips
      $('[data-toggle="tooltip"]').tooltip();


      skrollr.init({  
          forceHeight: false,        
          mobileCheck: function() {
              //hack - forces mobile version to be off
              return false;
          }
      });


      // Video Player
      $(function () {
        if ( $('#my-player').length ) {
          var player = videojs('my-player');
        }
      });



      // Select
      $(function() {
        $('select').selectric({
          disableOnMobile: false,
          nativeOnMobile: false
        });
      });


      // Radial
      $('.progress-circle').each(function(){
        var a = $(this),
            b = a.data('percent'),
            c = a.data('color');

        var options = {
          value: (b / 100),
          size: 600,
          thickness: 15,
          startAngle: -Math.PI / 2,
          lineCap: 'round',
          fill: {
            color: c
          },
        };

        a.circleProgress(options).on('circle-animation-progress', function(event, progress, stepValue) {
            a.find('strong').html(Math.round(100 * stepValue) + '<i>%</i>');
          });
      });

      // Smooth Scroll
      $(function () {
        var scroll = new SmoothScroll('[data-scroll]');
      });


      // Filtering
      $(function () {
        if ( $('.filtr-container').length ) {
          var filterizd = $('.filtr-container').filterizr({
            layout: 'sameWidth'
          });
        }
      });


      // Speaker Panel
      $(function () {
          var a = $(".expand");
          var b = $(".collapse");

          a.click( function () {
              var c = $(this);

              a.removeClass("expanded");
              c.toggleClass("expanded");
          });

          b.click( function () {
              a.removeClass("expanded");
          });

      });


      AOS.init({
        duration: 800,
        anchorPlacement: 'center-bottom'
      });
    }


  };

  $(document).ready(function () {
    fn.Launch();
  });

})(jQuery);