$(document).ready(function() {
 
      $('#js--about-li').on('click', () => {
    $('html, body').animate({scrollTop: $('#js--about').offset().top}, 1000);
});
    
       $('#js--skills-li').on('click', () => {
    $('html, body').animate({scrollTop: $('#js--skills').offset().top}, 1000);
});
    
      $('#js--projects-li').on('click', () => {
    $('html, body').animate({scrollTop: $('#js--projects').offset().top}, 1000);
});
    
     $('#js--hobby-li').on('click', () => {
    $('html, body').animate({scrollTop: $('#js--hobby').offset().top}, 1000);
});
    
    
    $('#js--contact-li').on('click', () => {
    $('html, body').animate({scrollTop: $('#js--contact').offset().top}, 1000);
});

    
$('#js--intro').waypoint(function(direction) {
    if(direction === "down") {
       $('nav').addClass('sticky');
       } else {
       $('nav').removeClass('sticky');
       }
}, {
    offset: '70px'
});
    

//mobile nav
$('.js--nav-icon').click(function() {
    var nav = $('#js--main-nav');
    var icon = $('.js--nav-icon i');
    
    nav.slideToggle(200);
    
    if (icon.hasClass('ion-md-menu')) {
        icon.addClass('ion-md-close');
        icon.removeClass('ion-md-menu');
        } else {
        icon.addClass('ion-md-menu');
        icon.removeClass('ion-md-close');
        }
})
    
});