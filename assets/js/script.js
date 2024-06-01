document.addEventListener('DOMContentLoaded', function() {

    //HEADER -MENU BURGUER
    document.body.addEventListener('click', function(e) {
        if (e.target.closest('.menu')) {
            var menu = document.querySelector('.menu');
            var navList = document.querySelector('.nav-list');
            menu.classList.toggle('active');
            navList.classList.toggle('active');
        }
    });
    
    //HEADER SCROOL
    let lastScrollTop = 0;
    const header = document.querySelector('.header');

    window.addEventListener('scroll', () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Rolar para baixo
        header.classList.add('hidden');
    } else {
        // Rolar para cima
        header.classList.remove('hidden');
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Evita valores negativos
    });

    //LOGIN E SIGNUP
    var login_section = document.querySelector(".login-section");
    var signup_section = document.querySelector(".signup-section");
    var btn_login_form = document.querySelectorAll(".btn-login-form");
    var btn_signup_form = document.querySelectorAll(".btn-signup-form");

    btn_signup_form.forEach(function(button) {
        if (login_section && signup_section) {
            button.addEventListener("click", function() {
                login_section.classList.toggle("active");
                signup_section.classList.toggle("active");
            });
        }
    });

    btn_login_form.forEach(function(button) {
        button.addEventListener("click", function() {
            if (signup_section && login_section) {
                signup_section.classList.toggle("active");
                login_section.classList.toggle("active");
            }

            var login_success = document.getElementById("login-success");
            if (login_success) {
                var login = false;
                if (login == true) {
                    login_success.style.display = "flex";
                    login_success.innerHTML = "<p>Login feito com sucesso!</p>";
                    setTimeout(function() {
                        login_success.style.display = "none";
                        setTimeout(function() {
                            location.reload();
                        }, 1000);
                    }, 3000);
                }
            }
        });
    });

    //COOKIES
    var cookieMessage = document.getElementById('cookie-notification');
    var closeCookie = document.getElementById('cookie-notification-close');

    if (cookieMessage && closeCookie) {
        if (!localStorage.getItem("cookiesAccepted")) {
            cookieMessage.style.display = 'block';
            closeCookie.addEventListener("click", function(e) {
                e.preventDefault();
                localStorage.setItem("cookiesAccepted", true);
                cookieMessage.style.display = 'none';
            });
        }
    }

    //LIGHT E DARK MODE
    var logoImages = document.querySelectorAll(".mk-logo");
    var userImg = document.querySelector(".user-img");
    var btnColor = document.getElementById('colorToggleBtn');

    var logoImages = document.querySelectorAll(".mk-logo");
    var userImg = document.querySelector(".user-img");

    if (btnColor) {
        var isLightMode = true;
        btnColor.addEventListener('click', function() {
            const root = document.documentElement;
            const cor1 = getComputedStyle(root).getPropertyValue('--cor1').trim();
            const cor2 = getComputedStyle(root).getPropertyValue('--cor2').trim();
            root.style.setProperty('--cor1', cor2);
            root.style.setProperty('--cor2', cor1);

            logoImages.forEach(function(logoImage) {
                logoImage.style.filter = isLightMode ? "invert(1)" : "invert(0)";
            });

            // Inverte as cores da imagem do usuário
            if (userImg) {
                userImg.style.filter = isLightMode ? "invert(1)" : "invert(0)";
            }

            // Alterna o modo de luz para escuro e vice-versa
            isLightMode = !isLightMode;
        });
    }



    
});


