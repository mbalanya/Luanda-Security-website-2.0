// navigation
  /*  var content0 = document.getElementById("content0");
    var content1 = document.getElementById("content1");
    var content2 = document.getElementById("content2");
    var content3 = document.getElementById("content3");
    var content4 = document.getElementById("content4");
    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btn2 = document.getElementById("btn2");
    var btn3 = document.getElementById("btn3");
    var btn4 = document.getElementById("btn4");

    function openHome() {
        content0.style.transform = "translateX(0)";
        content1.style.transform = "translateX(-150%)";
        content2.style.transform = "translateX(-150%)";
        content3.style.transform = "translateX(-150%)";
        content4.style.transform = "translateX(-150%)";
        btn0.style.borderBottom = "2px solid #262626";
        btn1.style.borderBottom = "none";
        btn2.style.borderBottom = "none";
        btn3.style.borderBottom = "none";
        btn4.style.borderBottom = "none";
        content0.style.transitionDelay = ".1s";
        content1.style.transitionDelay = "0";
        content2.style.transitionDelay = "0";
        content3.style.transitionDelay = "0";
        content4.style.transitionDelay = "0";
    }
    function openServices() {
        content0.style.transform = "translateX(-150%)";
        content1.style.transform = "translateX(0)";
        content2.style.transform = "translateX(-150%)";
        content3.style.transform = "translateX(-150%)";
        content4.style.transform = "translateX(-150%)";
        btn1.style.borderBottom = "2px solid #262626";
        btn0.style.borderBottom = "none";
        btn2.style.borderBottom = "none";
        btn3.style.borderBottom = "none";
        btn4.style.borderBottom = "none";
        content1.style.transitionDelay = ".1s";
        content0.style.transitionDelay = "0";
        content2.style.transitionDelay = "0";
        content3.style.transitionDelay = "0";
        content4.style.transitionDelay = "0";
    }
    function openAboutUs() {
        content0.style.transform = "translateX(-150%)";
        content1.style.transform = "translateX(-150%)";
        content2.style.transform = "translateX(0)";
        content3.style.transform = "translateX(-150%)";
        content4.style.transform = "translateX(-150%)";
        btn2.style.borderBottom = "2px solid #262626";
        btn1.style.borderBottom = "none";
        btn0.style.borderBottom = "none";
        btn3.style.borderBottom = "none";
        btn4.style.borderBottom = "none";
        content2.style.transitionDelay = ".1s";
        content1.style.transitionDelay = "0";
        content0.style.transitionDelay = "0";
        content3.style.transitionDelay = "0";
        content4.style.transitionDelay = "0";
    }
    function openContactUs() {
        content0.style.transform = "translateX(-150%)";
        content1.style.transform = "translateX(-150%)";
        content2.style.transform = "translateX(-150%)";
        content3.style.transform = "translateX(0)";
        content4.style.transform = "translateX(-150%)";
        btn3.style.borderBottom = "2px solid #262626";
        btn1.style.borderBottom = "none";
        btn2.style.borderBottom = "none";
        btn0.style.borderBottom = "none";
        btn4.style.borderBottom = "none";
        content3.style.transitionDelay = ".1s";
        content1.style.transitionDelay = "0";
        content2.style.transitionDelay = "0";
        content0.style.transitionDelay = "0";
        content4.style.transitionDelay = "0";
    }
    function openSupport() {
        content0.style.transform = "translateX(-150%)";
        content1.style.transform = "translateX(-150%)";
        content2.style.transform = "translateX(-150%)";
        content3.style.transform = "translateX(-150%)";
        content4.style.transform = "translateX(0)";
        btn4.style.borderBottom = "2px solid #262626";
        btn1.style.borderBottom = "none";
        btn2.style.borderBottom = "none";
        btn3.style.borderBottom = "none";
        btn0.style.borderBottom = "none";
        content4.style.transitionDelay = ".1s";
        content1.style.transitionDelay = "0";
        content2.style.transitionDelay = "0";
        content3.style.transitionDelay = "0";
        content0.style.transitionDelay = "0";
    } */


// mobile button toggle
    document.querySelector('.menu-btn').addEventListener('click', () => document.querySelector('.main-menu').classList.toggle('show'));


// blur
    function toggle() {
        var popup = document.getElementById('popup');
        popup.classList.toggle('active');

        var blur = document.getElementById('blur');
        blur.classList.toggle('active');
    }


// form validation
    function validateName() {
            var name = document.getElementById('name').value;
            if(name.length == 0) {
                alert("Name can't be blank") ;
                return false;

            }
            if (!name.match(/^[a-zA-Z]{3,}(?: [a-zA-Z]+){0,2}$/)) {
                alert("Please enter your correct name") ;//Validation Message
                return false;
            }
            return true;
            }

            function validatePhone() {
            var phone = document.getElementById('phone').value;
            if(phone.length == 0) {
                alert("Phone number can't be blank") ;//Validation Message
                return false;
            }

            if(!phone.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im)) {
                alert("Please enter a correct phone number") ;//Validation Message
                return false;
            }

            return true;

            }

            function validateEmail () {

            var email = document.getElementById('email').value;
            if(email.length == 0) {
            alert("Email can't be blank") ;//Validation Message
            return false;

            }

            if(!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
            alert("Please enter a correct email address") ;//Validation Message
            return false;

            }

            return true;

    }


        function validateForm() {
            if (!validateName() || !validatePhone() || !validateEmail()) {

            alert("Form not submitted");//Validation Message
            return false;
            }
            else {
            submitted=true;
            return true;
            }
        }


// book us button
$(document).ready(function(){
    $(".button").click(function(){
        $(this).addClass("active");

        setTimeout(function(){
            $(".button").addClass("success");
        }, 3700);
        setTimeout(function(){
            $(".button").removeClass("active");
            $(".button").removeClass("success");
        }, 5000);
    });
});