$(document).ready(function () {
  $ ('.menu-toggler').on('click', function() {
      $(this).toggleClass('open');
      $('.top-nav').toggleClass('open');
    });

    $ ('.top-nav .nav-link').on('click', function() {
      $('.menu-toggler').removeClass('open');
      $('.top-nav').removeClass('open');
    });

    //$('nav a[*="#"]').on('click', function() {
      //$('html, body').animate (keyframe, {
        //scrollTop: $($(this).attr('href')).offset().top - 100
      //}, options, 2000);
    //});

    //$ ('#up').on('click', function() {
      //$('html, body').animate( keyframes, {
        //scrollTop: 0
      // }, options, 2000);
    }); 

   //  A0S.init({
     // easing: 'ease',
     // duration: 1800,
     // once: true
   // }) 
// }); 