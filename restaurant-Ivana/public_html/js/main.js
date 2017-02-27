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



});

