!function(t){var e={};function i(o){if(e[o])return e[o].exports;var r=e[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.m=t,i.c=e,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/",i(i.s=27)}({27:function(t,e,i){"use strict";i.r(e);var o,r,s;i(28);function n(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}var a=GT3,l=(a.Hooks,a.autobind),d=a.ThemesCore,c=d.Widgets.BasicWidget,u=d.isRTL,p=d.jQuery,m=l((s=r=function(t){var e,i;function o(){var e;e=t.apply(this,arguments)||this;var i=p(e.el);if(!(i=p(".gt3_testimonial",i)).length)return n(e);var o=i.data("settings");p(".testimonials_item",i).css("display","");var r=p(".testimonials_list",i),s=i.find(".testimonials_content .testimonials-text").css("color"),a=document.createElement("canvas");a.classList.add("testimonials-canvas-quote"),r.prepend(a),r.prepend('<img class="testimonials-text-quote-holder" src=""/>');var l=i.find(".testimonials-text-quote-holder").css("color");void 0!==l&&(s=l);var d=new Image;d.onload=function(){a.width=this.width,a.height=this.height,c.drawImage(this,0,0),c.globalCompositeOperation="source-in",c.fillStyle=s,c.fillRect(0,0,a.width,a.height);var t=a.toDataURL("image/png");r.find(".testimonials-text-quote-holder").attr("src",t),p(".testimonials_item",i).each((function(){var e=p(this);e.length&&e.find(".testimonials-text").prepend('<div class="testimonials-text-quote"><div class="testimonials-quote-icon-holder" style="background-image:url('+t+");-webkit-mask-image:url("+t+');"></div></div>')}))},i.attr("data-quote-src").length?d.src=i.attr("data-quote-src"):d.src=gt3_gt3theme.templateUrl+"/img/quote.png";var c=a.getContext("2d"),m=p(".testimonials_author_rotator",i);return p(".testimonials_author_rotator",i).length||(m=!1),p(".testimonials_rotator",i).slick({autoplay:o.autoplay,autoplaySpeed:o.autoplaySpeed,fade:o.fade,dots:o.dots,arrows:o.arrows,slidesToScroll:o.items_per_line,slidesToShow:o.items_per_line,focusOnSelect:!0,speed:500,infinite:!0,asNavFor:m,prevArrow:'<div class="slick-prev gt3_modified"><div class="theme_icon-arrows-left"></div>'+o.l10n.prev+"</div>",nextArrow:'<div class="slick-next gt3_modified">'+o.l10n.next+'<div class="theme_icon-arrows-right"></div></div>',responsive:[{breakpoint:600,settings:{slidesToShow:1,slidesToScroll:1}}],rtl:u}),p(".testimonials_author_rotator",i).length&&p(".testimonials_author_rotator",i).slick({slidesToShow:3,slidesToScroll:1,asNavFor:p(".testimonials_rotator",i),dots:!1,arrows:!1,infinite:!0,focusOnSelect:!0,speed:500,centerMode:i.hasClass("text_align-center"),rtl:u}),e}return i=t,(e=o).prototype=Object.create(i.prototype),e.prototype.constructor=e,e.__proto__=i,o}(c),r.widgetName="gt3-core-TestimonialsLite",o=s))||o;GT3.ThemesCore.onWidgetRegisterHandler(m.widgetName,m)},28:function(t,e,i){}});