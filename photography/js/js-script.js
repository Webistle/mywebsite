!function(){"use strict";var e={init:function(){this.Basic.init()},Basic:{init:function(){this.webistleiopreloader(),this.BackgroundImage(),this.counterUp(),this.EiStickyMenu(),this.EiscreenSlider(),this.EiscrollTop(),this.EiTeamSlide(),this.faqBg(),this.EiScroller(),this.EiServiceSLider(),this.EiTestimonialSlider(),this.EiPartnerSlider(),this.webistleHeader(),this.webistleSideInner(),this.webistleMobileMenu(),this.APSeoVideoPopUp(),this.webistlePartner(),this.webistleTestimonial(),this.webistleMscroller(),this.webistleMMobileMenu(),this.webistleMOnePageNav(),this.webistleCMobileMenu(),this.webistleCmemberSLider(),this.webistleCOnePageNav(),this.StrFeatureSlide(),this.StrPortfolioSlide(),this.StrBannerSlide(),this.StrProgressBar(),this.StrMobileMenu(),this.StrOnePageNav(),this.StrTestimonial(),this.StrPartnerSlider(),this.StrBlogSlide(),this.StrTeamSlide(),this.DiaHeader(),this.DiaSkillProgress(),this.DiaMobileMenu(),this.DiaPortSlider(),this.DiaTeamSlide(),this.DiaTestimonial(),this.DiaCounterUp(),this.DiaScrollImg(),this.PmBlog(),this.PmStickymenu(),this.PmMobileMenu(),this.PmScrollTop(),this.PmPartnerSlider(),this.Animation()},webistleiopreloader:function(){jQuery(window).on("load",function(){jQuery("#preloader").fadeOut("slow",function(){jQuery(this).remove()})})},BackgroundImage:function(){$("[data-background]").each(function(){$(this).css("background-image","url("+$(this).attr("data-background")+")")})},EiStickyMenu:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".main-header-eight").addClass("eisticky-menu-bg-overlay "):jQuery(".main-header-eight").removeClass("eisticky-menu-bg-overlay ")}),$(".navigation-eight a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e.length)return $("html, body").animate({scrollTop:e.offset().top-80},1e3),!1}}),$(".appi-ab-open_mobile_menu").on("click",function(){$(".appi-ab-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".appi-ab-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".appi-ab-mobile_menu li.dropdown ul").length&&($(".appi-ab-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".appi-ab-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},counterUp:function(){$(".odometer").length&&($(".odometer").appear(),$(document.body).on("appear",".odometer",function(e){$(".odometer").each(function(){var e=$(this).attr("data-count");$(this).html(e)}),window.odometerOptions={format:"d"}}))},EiscreenSlider:function(){if($(".ab-appScreenshotCarousel-container").length&&$(".ab-appScreenshotCarousel-container").length)new Swiper(".ab-appScreenshotCarousel-container",{effect:"coverflow",loop:!0,centeredSlides:!0,slidesPerView:4,initialSlide:4,keyboardControl:!0,mousewheelControl:!1,lazyLoading:!0,preventClicks:!1,preventClicksPropagation:!1,lazyLoadingInPrevNext:!0,nextButton:".swiper-button-next",prevButton:".swiper-button-prev",coverflow:{rotate:0,stretch:0,depth:250,modifier:.5,slideShadows:!1},breakpoints:{1199:{slidesPerView:4,spaceBetween:30},1024:{slidesPerView:3,spaceBetween:30},991:{slidesPerView:4,spaceBetween:10},768:{slidesPerView:3,spaceBetween:10},767:{slidesPerView:2,spaceBetween:10},575:{slidesPerView:1,spaceBetween:5}}})},EiscrollTop:function(){$(window).on("scroll",function(){$(this).scrollTop()>200?$("#scrollup").fadeIn():$("#scrollup").fadeOut()}),$("#scrollup").on("click",function(){return $("html, body").animate({scrollTop:0},800),!1})},EiTeamSlide:function(){$("#ab-team-slide").owlCarousel({margin:0,responsiveClass:!0,nav:!0,dots:!1,loop:!0,center:!0,autoplay:!1,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:2},1000:{items:3}}})},faqBg:function(){$(document).on("click",".ab-faq",function(){$(this).addClass("faq_bg").siblings().removeClass("faq_bg")})},EiScroller:function(){$(window).on("load",function(){$("#how-workscrollbar").mCustomScrollbar({autoHideScrollbar:!0})})},EiServiceSLider:function(){if($(".ab-service-slide").length)$(".ab-service-slide").bxSlider({adaptiveHeight:!0,controls:!0,pause:5e3,speed:1e3,nextText:'<span class="control-icon fa fa-angle-right"></span>',prevText:'<span class="control-icon fa fa-angle-left"></span>',pagerCustom:"#banner-pager"})},EiTestimonialSlider:function(){$("#testimonial-scroller").length&&$("#testimonial-scroller").owlCarousel({margin:105,responsiveClass:!0,nav:!1,dots:!0,autoplay:!1,smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:1},700:{items:1},1000:{items:1},1300:{items:2}}})},EiPartnerSlider:function(){$("#ab-partner-slide").length&&$("#ab-partner-slide").owlCarousel({margin:105,autoplay:!0,loop:!0,responsiveClass:!0,nav:!1,dots:!1,slideTransition:"linear",autoplayTimeout:10,autoplayHoverPause:!1,autoplaySpeed:4500,responsive:{0:{items:2},400:{items:3},600:{items:4},700:{items:4},1000:{items:4}}})},webistleHeader:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".webistle-main-header").addClass("webistle-sticky-header-overlay"):jQuery(".webistle-main-header").removeClass("webistle-sticky-header-overlay")})},webistleSideInner:function(){$(".open_side_area").on("click",function(){$(".wide_side_inner").toggleClass("wide_side_on")}),$(".open_side_area").on("click",function(){$("body").toggleClass("body_overlay_on")})},webistleMobileMenu:function(){$(".webistle-open_mobile_menu").on("click",function(){$(".webistle-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".webistle-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".webistle-mobile_menu li.dropdown ul").length&&($(".webistle-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".webistle-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},APSeoVideoPopUp:function(){$(".lightbox-image").length&&$(".lightbox-image").fancybox({openEffect:"fade",closeEffect:"fade",helpers:{media:{}}})},webistlePartner:function(){$("#partner-slide").owlCarousel({margin:95,responsiveClass:!0,nav:!1,dots:!1,loop:!0,autoplay:!1,smartSpeed:1e3,responsive:{0:{items:2},400:{items:2},600:{items:3},700:{items:4},1000:{items:5}}})},webistleTestimonial:function(){$("#webistle-testimonial-id").slick({slidesToShow:1,slidesToScroll:1,arrows:!1,fade:!0,asNavFor:"#testimonial-webistle-name"}),$("#testimonial-webistle-name").slick({slidesToShow:3,slidesToScroll:1,asNavFor:"#webistle-testimonial-id",dots:!0,centerMode:!0,focusOnSelect:!0})},webistleMscroller:function(){$(window).on("load",function(){$("#featured_scroll").mCustomScrollbar({axis:"x",mouseWheel:{enable:!1},advanced:{autoExpandHorizontalScroll:!0}})}),$("#featured_scroll").removeClass("mCustomScrollbar")},webistleMMobileMenu:function(){$(".open_mobile_menu").on("click",function(){$(".mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(document).on("click",".mobile_menu_wrap ul li.dropdown > a",function(e){return $(this).parent().find(".dropdown-menu").slideToggle("slow"),!1})},webistleMOnePageNav:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".main_header").addClass("menu-bg-overlay"):jQuery(".main_header").removeClass("menu-bg-overlay")}),$(".navbar-nav a").on("",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e.length)return $("html, body").animate({scrollTop:e.offset().top-108},1e3),!1}})},webistleCMobileMenu:function(){$(".s2-open_mobile_menu").on("click",function(){$(".s2-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".s2-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".s2-mobile_menu li.dropdown ul").length&&($(".s2-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".s2-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},webistleCmemberSLider:function(){$("#s2_team_slide").length&&$("#s2_team_slide").owlCarousel({margin:30,responsiveClass:!0,nav:!0,dots:!1,loop:!1,navText:["<i class='fas fa-long-arrow-alt-left'></i>","<i class='fas fa-long-arrow-alt-right'></i>"],autoplay:!1,smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:2},1000:{items:4}}})},webistleCOnePageNav:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".webistle_two_main_header").addClass("webistle_2-menu-bg-overlay "):jQuery(".webistle_two_main_header").removeClass("webistle_2-menu-bg-overlay ")}),$(".webistle_two_main_header .navbar-nav a").on("",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e.length)return $("html, body").animate({scrollTop:e.offset().top-80},1e3),!1}})},StrFeatureSlide:function(){$("#str-slide").owlCarousel({margin:30,responsiveClass:!0,nav:!0,dots:!1,loop:!0,autoplay:!1,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:3},1000:{items:4}}})},StrPortfolioSlide:function(){$("#str-protfolio-slide").owlCarousel({margin:30,responsiveClass:!0,nav:!0,dots:!1,loop:!0,center:!0,autoplay:!1,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:1},700:{items:1},1000:{items:2}}})},StrBannerSlide:function(){$("#str-banner-slide").length&&$("#str-banner-slide").owlCarousel({animateOut:"fadeOut",animateIn:"fadeIn",loop:!0,margin:0,nav:!0,autoHeight:!0,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:500,responsive:{0:{items:1},600:{items:1},800:{items:1},1024:{items:1},1200:{items:1}}})},StrProgressBar:function(){($("#progress1").barfiller({duration:3e3}),$("#progress2").barfiller({duration:3e3}),$("#progress3").barfiller({duration:3e3}),$(".fill").length)&&($(".fill").appear(),$(document.body).on("appear",".fill",function(){var e=$(this);if(!e.hasClass("appeared"))e.data("percent")}))},StrMobileMenu:function(){$(".str-open_mobile_menu").on("click",function(){$(".str-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".str-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".str-mobile_menu li.dropdown ul").length&&($(".str-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".str-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},StrOnePageNav:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".str-main-header").addClass("str-sticky-menu"):jQuery(".str-main-header").removeClass("str-sticky-menu")}),$(".navbar-nav a").on("",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e.length)return $("html, body").animate({scrollTop:e.offset().top-108},1e3),!1}})},StrTestimonial:function(){$("ol.carousel-indicators2 li").on("click",function(){$("ol.carousel-indicators2 li.active").removeClass("active"),$("ol.carousel-indicators li.active").removeClass("active"),$(this).addClass("active");var e=$(this).data("slide-to");$(".carousel-indicators").find("[data-slide-to='"+e+"']").addClass("active")}),$(".carousel").on("slid.bs.carousel",function(){var e=$(".carousel-indicators li.active").data("slide-to");$(".carousel-indicators2 li").removeClass("active"),$(".carousel-indicators2").find("[data-slide-to='"+e+"']").addClass("active")})},StrPartnerSlider:function(){$("#str-partner-slide").owlCarousel({margin:105,autoplay:!0,loop:!0,nav:!1,dots:!1,autoplay:!0,autoplaySpeed:6e3,responsiveClass:!0,autoplayTimeout:6e3,autoplayHoverPause:!0,slideTransition:"linear",responsive:{0:{items:2},400:{items:2},600:{items:4},700:{items:3},1000:{items:4}}})},StrBlogSlide:function(){$("#str-blog-slide").owlCarousel({margin:30,responsiveClass:!0,nav:!1,dots:!0,autoplay:!1,smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:1},700:{items:2},1000:{items:3}}})},StrTeamSlide:function(){$("#str-team-slide").owlCarousel({margin:30,responsiveClass:!0,nav:!0,dots:!1,loop:!0,autoplay:!1,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:3},1000:{items:4}}})},DiaHeader:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".dia-main-header").addClass("dia-sticky-menu"):jQuery(".dia-main-header").removeClass("dia-sticky-menu")}),$(".dia-main-navigation ul li a").on("click",function(){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var e=$(this.hash);if(e.length)return $("html, body").animate({scrollTop:e.offset().top-100},1e3),!1}})},DiaSkillProgress:function(){$(".progress-bar").length&&($(".progress-bar").appear(),$(document.body).on("appear",".progress-bar",function(){var e=$(this);if(!e.hasClass("appeared")){var i=e.data("percent");e.css("width",i+"%").addClass("appeared").parent().append("<span>"+i+"%</span>")}}))},DiaMobileMenu:function(){$(".dia-open_mobile_menu").on("click",function(){$(".dia-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".dia-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".dia-mobile_menu li.dropdown ul").length&&($(".dia-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".dia-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},DiaPortSlider:function(){$("#dia-portfolio-slider").owlCarousel({margin:20,responsiveClass:!0,nav:!0,dots:!1,loop:!0,autoplay:!1,navText:["<i class='fas fa-chevron-left'></i>","<i class='fas fa-chevron-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:2},1000:{items:3},1300:{items:4},1600:{items:5}}})},DiaTeamSlide:function(){$("#dia-team-slide").owlCarousel({margin:0,responsiveClass:!0,nav:!0,dots:!1,loop:!0,center:!0,autoplay:!1,navText:["<i class='fas fa-angle-left'></i>","<i class='fas fa-angle-right'></i>"],smartSpeed:1e3,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:2},1000:{items:3}}})},DiaTestimonial:function(){$("ol.carousel-indicators2 li").on("click",function(){$("ol.carousel-indicators2 li.active").removeClass("active"),$("ol.carousel-indicators li.active").removeClass("active"),$(this).addClass("active");var e=$(this).data("slide-to");$(".carousel-indicators").find("[data-slide-to='"+e+"']").addClass("active")}),$(".carousel").on("slid.bs.carousel",function(){var e=$(".carousel-indicators li.active").data("slide-to");$(".carousel-indicators2 li").removeClass("active"),$(".carousel-indicators2").find("[data-slide-to='"+e+"']").addClass("active")})},DiaCounterUp:function(){$(".odometer").length&&($(".odometer").appear(),$(document.body).on("appear",".odometer",function(e){$(".odometer").each(function(){var e=$(this).attr("data-count");$(this).html(e)}),window.odometerOptions={format:"d"}}))},DiaScrollImg:function(){!function(e){e.fn.visible=function(i){var o=e(this),n=e(window),a=n.scrollTop(),s=a+n.height(),t=o.offset().top,l=t+o.height();return(!0===i?t:l)<=s&&(!0===i?l:t)>=a}}(jQuery),$(window).on("scroll",function(){$(".banner-img1, .banner-img2").each(function(e,i){(i=$(i)).visible(!0)?i.addClass("view-on"):i.removeClass("view-on")})}),$(document).on("ready",function(){$(".banner-img1, .banner-img2").each(function(e,i){(i=$(i)).visible(!0)?i.addClass("view-on"):i.removeClass("view-on")})})},PmBlog:function(){$(document).on("click",".pm-blog-img-text",function(){$(this).addClass("active").siblings().removeClass("active")})},PmStickymenu:function(){jQuery(window).on("scroll",function(){jQuery(window).scrollTop()>100?jQuery(".pm-main-header").addClass("pm-sticky-menu"):jQuery(".pm-main-header").removeClass("pm-sticky-menu")})},PmMobileMenu:function(){$(".pm-open_mobile_menu").on("click",function(){$(".pm-mobile_menu_wrap").toggleClass("mobile_menu_on")}),$(".pm-open_mobile_menu").on("click",function(){$("body").toggleClass("mobile_menu_overlay_on")}),$(".pm-mobile_menu li.dropdown ul").length&&($(".pm-mobile_menu li.dropdown").append('<div class="dropdown-btn"><span class="fa fa-angle-down"></span></div>'),$(".pm-mobile_menu li.dropdown .dropdown-btn").on("click",function(){$(this).prev("ul").slideToggle(500)}))},PmScrollTop:function(){$(window).on("scroll",function(){$(this).scrollTop()>200?$(".pm-scrollup").fadeIn():$(".pm-scrollup").fadeOut()}),$(".pm-scrollup").on("click",function(){return $("html, body").animate({scrollTop:0},800),!1})},PmPartnerSlider:function(){$("#pm-partner-slide").owlCarousel({margin:90,autoplay:!0,loop:!0,responsiveClass:!0,nav:!1,dots:!1,slideTransition:"linear",autoplayTimeout:10,autoplayHoverPause:!1,autoplaySpeed:4500,responsive:{0:{items:1},400:{items:1},600:{items:2},700:{items:3},1000:{items:4}}})},Animation:function(){(AOS.init({once:!0,duration:1e3}),$(".wow").length)&&new WOW({boxClass:"wow",animateClass:"animated",offset:0,mobile:!0,live:!0}).init()}}};jQuery(document).ready(function(){e.init()}),$('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(e){if(location.pathname.replace(/^\//,"")==this.pathname.replace(/^\//,"")&&location.hostname==this.hostname){var i=$(this.hash);(i=i.length?i:$("[name="+this.hash.slice(1)+"]")).length&&(e.preventDefault(),$("html, body").animate({scrollTop:i.offset().top},1e3,function(){var e=$(i);if(e.focus(),e.is(":focus"))return!1;e.attr("tabindex","-1"),e.focus()}))}})}();