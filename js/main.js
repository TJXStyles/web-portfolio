// $(document).ready(function() {
//   $('[title]').removeAttr('title');
// });

!function(d,s,id) {
	var js,fjs=d.getElementsByTagName(s)[0],
	p=/^http:/.test(d.location)?'http':'https';
		if(!d.getElementById(id)) {
			js=d.createElement(s);
			js.id=id;
			js.src=p+"://platform.twitter.com/widgets.js";
			fjs.parentNode.insertBefore(js,fjs);
		}
	} (document,"script","twitter-wjs");

//This will force the collapsed menu to create padding equal to the height of the menu and push
//the rest of the page down when using class fixed-to-top on the <nav> element (Only in mobile view)
$(document).ready(function(){
	var navHeight = $('.navbar-collapse').height();
	$('.navbar-collapse').on('show.bs.collapse', function(){
		$('body').animate({
	  	'padding-top': parseInt($("body").css("padding-top")) + navHeight
	  }, 300);
	});
	$('.navbar-collapse').on('hide.bs.collapse', function(){
	  $('body').animate({
	    'padding-top': parseInt($("body").css("padding-top")) - navHeight
	   }, 300);
	});

//For the popup to go back to top once scroll is detected
//show and hide the sticky button to go back to top
	$(window).scroll(function(){
    if ($(this).scrollTop() > 500) {
      $('.go-top').fadeIn(200);
    } else {
    $('.go-top').fadeOut(200);
    }
  });
//Smooth scrolling back to the top when clicking on the sticky button
  	$('.go-top, .navbar-brand').click(function(event){
  		event.preventDefault();
  		$('html, body').animate( {scrollTop: 0}, 1000);
  	});
//Smooth scrolling of the navbar navigation menu
		$('.scroll').click(function(event) {
			event.preventDefault();
			$('html, body').animate( {scrollTop: $(this.hash).offset().top}, 1000 );
	});
});
