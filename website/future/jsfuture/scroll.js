//const sections = document.querySelectorAll('section');
//const bubble  = document.querySelector('.bubble')
//const options = {
  //  threshold: 0.7
//};
//let observer = new IntersectionObserver(navCheck, options);

//function navCheck(entries){
//entries.forEach(entry => {
//    const className = entry.target.className
//    console.log(className)
//})
//}

//sections.forEach(section => {
//    observer.observe(section);
//});
var nav_sections = $('section');
var main_nav = $('.nav-menu, #mobile-nav');

$(window).on('scroll', function() {
  var cur_pos = $(this).scrollTop() + 200;

  nav_sections.each(function() {
    var top = $(this).offset().top,
      bottom = top + $(this).outerHeight();

    if (cur_pos >= top && cur_pos <= bottom) {
      if (cur_pos <= bottom) {
        main_nav.find('li').removeClass('active');
      }
      main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
    }
    if (cur_pos < 300) {
      $(".nav-menu ul:first li:first").addClass('active');
    }
  });
});
