$(document).ready(function () {
    $('.search').click(function () {
        $('.form-group').toggle();
    });

//    $('#myTabs a').click(function (e) {
//        e.preventDefault()
//        $(this).tab('show')
//    })


  // The slider being synced must be initialized first
$('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    itemWidth: 50,
    itemMargin: 0,
    direction: "vertical",
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation:  "slide",
    controlNav: false,
    animationLoop: true,
    slideshow: false,
    sync: "#carousel"
  });
  

$('.seance .tab-content .active .bxslider').bxSlider({
  minSlides: 3,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
});

$('.seance .nav-tabs li a').click(function(e){
   e.preventDefault();

setTimeout($('.seance .active .bxslider').bxSlider({
  minSlides: 1,
  maxSlides: 4,
  slideWidth: 170,
  slideMargin: 10
}), 1);

});
$('.quotes').bxSlider();

if ($('.list-slider').length > 0) {


        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            nav: true,
            responsive: {
                0: {
                    items: 1

                },
                768: {
                    items: 3

                },
                992: {
                    items: 6

                },
                1200: {
                    items: 9

                }
            }
        });
    }
    
	$('.form_date').datetimepicker({
    
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 2,
		minView: 2,
		forceParse: 0
    });
	$('.form_time').datetimepicker({
        language:  'fr',
        weekStart: 1,
        todayBtn:  1,
		autoclose: 1,
		todayHighlight: 1,
		startView: 1,
		minView: 0,
		maxView: 1,
		forceParse: 0
    });
    
});

