function changeNavVisibility() {
    var nav = document.getElementById("hidden-nav");
    var header = document.getElementById("header");
    if (nav.style.display === "flex") {
        nav.style.display = "none";
        header.style.marginBottom = "50px";
    } else {
        nav.style.display = "flex";
        header.style.marginBottom = "10px";
    }
}

function manageNavLinks() {
    var current = location.pathname;
    if (document.title === "Contact") {
        var link = document.getElementsByClassName('contact');
        link[0].className = 'header__menu__item inactive contact';
        return;
    }
    if (document.title === "Palo Alto") {
        var link = document.getElementsByClassName('home');
        link[0].className = 'header__menu__item inactive home';
    }
}
