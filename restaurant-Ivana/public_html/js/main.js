$(document).ready(function(){
     $('.search').click(function(){
        $('.form-group').toggle(); 
     });
   $('.bxslider').bxSlider({
  mode: 'fade',
  captions: true
});
$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})
    
    
});

