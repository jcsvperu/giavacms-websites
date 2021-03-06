angular
    .module('jsApp')
    .run(function ($rootScope) {

        $rootScope.$on('$viewContentLoaded',
            function () {
                //console.log('resize it');
                if ($(window).width() < 991) {
                    $('.resizeMe').removeClass('bigFonts');
                    $('.resizeMeUp').removeClass('bigFontsUpperCase');
                } else {
                    $('.resizeMe').addClass('bigFonts');
                    $('.resizeMeUp').addClass('bigFontsUpperCase');
                }
                //console.log('go to top');
                $('html, body').animate({scrollTop: 0}, 'fast');
            });

        angular.element(document).ready(
            function () {
                //console.log('dom is ready NOW');


                (function ($) {
                    "use strict";
                    var flex_slider = function ($this) {
                        $('.hero-slider').flexslider({
                            animation: "fade",
                            direction: "horizontal",
                            animationSpeed: 1000,
                            animationLoop: true,
                            smoothHeight: true,
                            directionNav: false,
                            controlsContainer: ".hero-controls",
                            controlNav: true,
                            slideshow: true,
                            useCSS: true,
                            after: function (slider) {
                                if ($('li.flex-active-slide').hasClass("dark-slider")) {
                                    $('.header').addClass('white-header');
                                }
                                else {
                                    $('.header').removeClass('white-header');
                                }
                                if ($('li.flex-active-slide').hasClass("white-slider")) {
                                    $('.header').addClass('black-header');
                                }
                                else {
                                    $('.header').removeClass('black-header');
                                }
                            },
                            start: function (slider) {
                                if ($('li.flex-active-slide').hasClass("dark-slider")) {
                                    $('.header').addClass('inverse-header');
                                }
                                else {
                                    $('.header').removeClass('inverse-header');
                                }
                                if ($('li.flex-active-slide').hasClass("white-slider")) {
                                    $('.header').addClass('black-header');
                                }
                                else {
                                    $('.header').removeClass('black-header');
                                }
                            }
                        });
                        $('.flexslider').flexslider({
                            animation: "fade",
                            controlNav: true,
                            useCSS: true,
                            directionNav: false
                        });
                    }
                    var animate_start = function ($this) {
                        $this.find('.animate').each(function (i) {
                            var $item = jQuery(this);
                            var animation = $item.data("animate");
                            $item.waypoint(function (direction) {
                                $item.css({
                                    '-webkit-animation-delay': (i * 0.1) + "s",
                                    '-moz-animation-delay': (i * 0.1) + "s",
                                    '-ms-animation-delay': (i * 0.1) + "s",
                                    '-o-animation-delay': (i * 0.1) + "s",
                                    'animation-delay': (i * 0.1) + "s"
                                });
                                $item.removeClass('animate').addClass('animated ' + animation).one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                                    jQuery(this).removeClass(animation + ' animated');
                                });
                            }, {offset: '80%', triggerOnce: true});
                        });
                    };
                    var parallax_image = function ($this) {
                        $.stellar({horizontalScrolling: false, responsive: true});
                    }
                    var fullscreen_section = function ($this) {
                        $this.find('.fullscreen').each(function () {
                            var $this = $(this);
                            var resize_height = function () {
                                $this.height($(window).height());
                                fullscreenFix();
                            }
                            resize_height();
                            $(window).resize(function () {
                                resize_height();
                            });
                        });
                    }

                    function fullscreenFix() {
                        var h = $(window).height();
                        $(".fullscreen").children(".container").each(function (i) {
                            var hc = $(this).innerHeight() + 270;
                            if (hc >= h) {
                                $(this).parent(".fullscreen").addClass("not-overflow");
                            } else {
                                $(this).parent(".fullscreen").removeClass("not-overflow");
                            }
                        });
                    }

                    var fix_height = function ($this) {
                        var auto_height = function () {
                            if ($(window).width() > 991) {
                                $('.auto-height').each(function () {
                                    var element = $(this);
                                    var height = element.height();
                                    var parent_height = element.parent().parent().height();
                                    element.css('height', parent_height);
                                });
                            } else {
                                $('.auto-height').each(function () {
                                    var element = $(this);
                                    element.css('height', 'auto');
                                });
                            }
                        }
                        auto_height();
                        $(window).resize(function () {
                            auto_height();
                        });
                    }
                    var progress_bar = function ($this) {
                        $this.find('.progress-bar').each(function () {
                            var $this = $(this);
                            $this.waypoint(function (direction) {
                                $this.css('width', $this.attr('aria-valuenow') + '%');
                            }, {offset: '80%', triggerOnce: true});
                        });
                    }
                    var mobile_nav = function ($this) {
                        $('.menu-toggle').on('click', function () {
                            $(this).closest('header').toggleClass('menu-open');
                            if ($(this).closest('header').hasClass('menu-3')) {
                                $(this).toggleClass('active');
                            }
                        });
                        $('.menu-item').on('click', function () {
                            $(this).closest('header').toggleClass('menu-open');
                        });
                        var add_mm_class = function () {
                            if ($(window).width() < 991) {
                                $('.menu').addClass('mobile-menu')
                                $('.resizeMe').removeClass('bigFonts');
                                $('.resizeMeUp').removeClass('bigFontsUpperCase');
                            } else {
                                $('.menu').removeClass('mobile-menu')
                                $('.resizeMe').addClass('bigFonts');
                                $('.resizeMeUp').addClass('bigFontsUpperCase');
                            }
                        }
                        add_mm_class();
                        $(window).resize(function () {
                            add_mm_class();
                        });
                    }
                    var owl_carousel = function ($this) {
                        $('.owl-carousel').each(function () {
                            var $this = $(this);
                            $this.owlCarousel({
                                loop: true,
                                margin: 0,
                                responsiveClass: true,
                                responsive: {
                                    0: {items: 1, nav: true},
                                    768: {items: $this.data('col-sm'), nav: false},
                                    992: {items: $this.data('col-md'), nav: true, loop: false},
                                    1200: {items: $this.data('col-lg'), nav: true, loop: false}
                                }
                            });
                        });
                    }
                    var one_page_scroll = function ($this) {
                        $(function () {
                            var sections = jQuery('.section');
                            var navigation_links = jQuery('.menu a, a.scroll-down');
                            sections.waypoint({
                                handler: function (direction) {
                                    var active_section;
                                    active_section = jQuery(this);
                                    if (direction === "up")active_section = active_section.prev();
                                    var active_link = jQuery('.menu a[href="#' + active_section.attr("id") + '"]');
                                    navigation_links.removeClass("active");
                                    active_link.addClass("active");
                                    active_section.addClass("active-section");
                                }, offset: '80%'
                            });
                        });
                        $('.menu, .scroll-down').each(function () {
                            var $this = $(this);
                            $this.localScroll({offset: -60, duration: 500})
                        });
                        $('a.scroll-down').localScroll();
                    }
                    var site_loader = function ($this) {
                        $('.loader').css('opacity', 0);
                        setTimeout(function () {
                            $('.loader').hide();
                            $('body').addClass('loaded')
                        }, 600);
                    }
                    var bs_tooltip = function ($this) {
                        $('[data-toggle="tooltip"]').tooltip()
                    }
                    var sticky_header = function ($this) {
                        $(window).scroll(function () {
                            if (window.scrollY > 100 && !$('.mobile-toggle').is(":visible")) {
//                                $('#header').addClass('sticky');
                            } else {
                                //                              $('#header').removeClass('sticky');
                            }
                        });
                    }
                    var isotope_go = function ($this) {
                        var $container = $('.isotope-container');
                        $container.isotope({
                            itemSelector: '.isotope-item',
                            filter: '*',
                            resizable: false,
                            animationOptions: {duration: 750, easing: 'linear', queue: false}
                        });
                        $('ul.portfolio-filter a').on('click', function () {
                            var selector = $(this).attr('data-filter');
                            $container.isotope({
                                filter: selector,
                                animationOptions: {duration: 750, easing: 'linear', queue: false}
                            });
                            return false;
                        });
                        var $optionSets = $('ul.portfolio-filter'), $optionLinks = $optionSets.find('a');
                        $optionLinks.on('click', function () {
                            var $this = $(this);
                            if ($this.hasClass('selected')) {
                                return false;
                            }
                            var $optionSet = $this.parents('ul.portfolio-filter');
                            $optionSet.find('.selected').removeClass('selected');
                            $this.addClass('selected');
                        });
                    }

                    $(document).ready(function () {
                        fullscreen_section($(this));
                        parallax_image();
                        flex_slider($);
                        fix_height();
                        progress_bar($(this));
                        mobile_nav($(this));
                        owl_carousel($(this));
                        one_page_scroll($(this));
                        sticky_header($(this));
                        bs_tooltip($(this));
                        isotope_go($(this));
                    });
                    jQuery(window).load(function () {
                        site_loader($(this));
                        fullscreen_section($(this));
                        parallax_image();
                        isotope_go($(this));
                        $('.section').each(function () {
                            animate_start($(this));
                        });
                    });

                })(jQuery);


            });

    });
