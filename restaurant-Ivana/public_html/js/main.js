$(document).ready(function () {
    $('.search').click(function (e) {
        e.preventDefault();
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
        animation: "slide",
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

    $('.seance .nav-tabs li a').click(function (e) {
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
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 2,
        minView: 2,
        forceParse: 0
    });
    $('.form_time').datetimepicker({
        language: 'fr',
        weekStart: 1,
        todayBtn: 1,
        autoclose: 1,
        todayHighlight: 1,
        startView: 1,
        minView: 0,
        maxView: 1,
        forceParse: 0
    });



    $('.tab-content .active .userComment').slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });


    $('.preciousSense .nav-tabs a').click(function (e) {
        e.preventDefault();


        setTimeout(function () {
            $('.tab-content .active .userComment').slick({
                dots: true,
                infinite: false,
                speed: 300,
                slidesToShow: 4,
                slidesToScroll: 3,
                responsive: [
                    {
                        breakpoint: 992,
                        settings: {
                            slidesToShow: 3,
                            slidesToScroll: 3,
                            infinite: true,
                            dots: true
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 480,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                    // You can unslick at a given breakpoint now by adding:
                    // settings: "unslick"
                    // instead of a settings object
                ]
            });
        }, 1);
    });

    $('a.heart').click(function (e) {
        e.preventDefault();
        $(this).find('span').toggleClass('fa-heart-o fa-heart');
    });


    $(document).ready(function () {
        $('#vertical').lightSlider({
            gallery: true,
            item: 1,
            vertical: true,
            verticalHeight: 530,
            vThumbWidth: 80,
            thumbItem: 5,
            thumbMargin: 4,
            slideMargin: 0
        });
    });

    $('.minus').click(function () {
        //kupim vrednost inputa
        var kolicina = $(this).next().val();
        //proveravam da li je broj tj dobar unos
        var checkKolicina = isNaN(checkKolicina); //true ili false
        if (kolicina < 2 || checkKolicina == true) {
            //ako je manji od 2 ili nije broj setuj vrednost u inputu na 1
            $(this).next().val(1);
        } else {
            //u suprotno to je broj veci od 1
            //prevedi ga u int jer se dobija iz input polja pa ga tumaci kao string
            kolicina = parseInt(kolicina);
            //umanji za 1
            kolicina -= 1;
            //setuj sada tu novu umanjenu vrednost u input
            $(this).next().val(kolicina);
        }
    });

    $('.plus').click(function () {

        //kupim vrednost inputa
        var kolicina = $(this).prev().val();
        //proveravam da li je broj tj dobar unos
        var checkKolicina = isNaN(kolicina);//true ili false
        if (checkKolicina == false) {

            //ako je broj prevedi ga u int jer je vrednost iz inputa pa ga posmatra kao string
            kolicina = parseInt(kolicina);
            // povecaj ga za jedan
            kolicina += 1;
            //sad uvecanu vrednost setuj u input
            $(this).prev().val(kolicina);
        } else {
            //ako  nije broj setuj vrednost u inputu na 1

            $(this).prev().val(1);
        }
    });
    
//    $('.select-field').click(function(){
//    $(this).next().slideToggle();
//});
//
//$('.my-select ul').on('click', '.option', function(){
//    var option = $(this).text();
//    $(this).parent().prev().text(option);
//    $(this).closest('.my-select').find('input').val(option);
//    
//    
//    $(this).parent().slideUp();
//    
//});

$('#myTabs a').click(function (e) {
  e.preventDefault();
  $(this).tab('show');
});

// validacija forme//


function Rezervacija() {
  var ime = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var telefon = document.getElementById("phone").value;
  var broj = document.getElementById("number").value;
  
  //ime kandidata//
  if (ime == "") {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("name-error").innerHTML = "Ime kandidata je obavezno polje";
        return;
    }
    if (ime.length < 3 || ime.length > 20) {
        document.getElementById("name").style.border = "1px solid red";
        document.getElementById("name-error").innerHTML = "Ime kandidata mora biti izmedju 3 i 20 karaktera";
        return;
    }
    document.getElementById("name").style.border = "1px solid black";
    document.getElementById("name-error").innerHTML = "";
    
    //email kandidata//
    
    if (email == "") {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email-error").innerHTML = "Email je obavezno polje!";
        return;
    }
    if (email.search("@") < 0) {
        document.getElementById("email").style.border = "1px solid red";
        document.getElementById("email-error").innerHTML = "Email nije validan!";
        return;
    }
    document.getElementById("email").style.border = "1px solid black";
    document.getElementById("email-error").innerHTML = "";
    
    //telefon//
    
   
   //broj ljudi //
   if (broj === "---") {
        document.getElementById("number").style.border = "1px solid red";
        document.getElementById("number-error").innerHTML = "Ne smije biti prazno polje";
        return;
    }
    document.getElementById("number").style.border = "1px solid black";
    document.getElementById("number-error").innerHTML = "";
  
};

});
