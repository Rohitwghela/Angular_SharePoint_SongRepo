(define('jquery'), function($) {

  return
	  $(document).ready(function(ev) {
	    $('#carousel-example-generic, #myCarousel-slider, #myCarousel-picture').carousel({
	      interval: 0
	    });
	
	    $('[data-toggle="tooltip"]').tooltip();
	
	    $(document).on("scroll", onScroll);
	
	    $('ul.orglist li a[href^="#"]').parent().on('click', function(e) {
	      e.preventDefault();
	      $(document).off("scroll");
	
	      $('ul.orglist li').each(function() {
	        $(this).removeClass('activetablist');
	      });
	      
	      $(this).addClass('activetablist');
	
	      var target = $(this).find("a")[0].hash;
	      $target = $(target);
	      $('html, body').stop().animate({
	        'scrollTop': $target.offset().top - 60
	      }, 500, 'swing', function() {
	        window.location.hash = target;
	        $(document).on("scroll", onScroll);
	      });
	    });
	    
	    console.log('inside sticky menu');
	
	
	    function onScroll(event) {
	      var scrollPosition = $(document).scrollTop();
	      console.log(scrollPosition);
	      $('ul.orglist li a').each(function() {
	        var currentLink = $(this);
	        var refElement = $(currentLink.attr("href"));
	        if (refElement.position().top - 61 <= scrollPosition && refElement.position().top + refElement.height() > scrollPosition) {
	          $('ul.orglist li').removeClass("activetablist");
	          currentLink.parent().addClass("activetablist");
	        } else {
	          currentLink.parent().removeClass("activetablist");
	        }
	      });
	    }
	
	
	    $('.showSingle').click(function() {
	      $('.targetDiv').hide();
	      $('#bitwisediv' + $(this).attr('target')).show();
	    });
	
	    $('#custom_carousel').on('slide.bs.carousel', function(evt) {
	      $('#custom_carousel .controls li.active').removeClass('active');
	      $('#custom_carousel .controls li:eq(' + $(evt.relatedTarget).index() + ')').addClass('active');
	    })
	  });
  

})