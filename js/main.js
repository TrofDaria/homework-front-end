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