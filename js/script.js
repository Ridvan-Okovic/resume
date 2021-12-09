$(document).ready (function(){
    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){
        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0) {
            $('#top').show();
        }
        else {
            $('#top').hide();
        }
    });

    $('a[href*="#"]').on('click',function(func){
        func.preventDefault();

        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top,
        }, 
        500,
        'linear');
    });
});

let ridvan = {
    firstname: "Ridvan", lastname: "Okovic", age: "21", curriculum: "Software Engineering"
};

function validateEmail() {
    var form = document.getElementById("form");
    var email = document.getElementById("email").value;
    var pattern ="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

    if (email.match(pattern)) {
        form.classList.add("valid");
       
    }
    else {
        
        form.classList.add("invalid");
    }
}

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}