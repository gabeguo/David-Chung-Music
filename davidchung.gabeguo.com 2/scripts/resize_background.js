function resize() {
    //look at aspect ratio for displaying background
    if (window.innerWidth < 1.5 * window.innerHeight) {
        document.getElementById("top").style.backgroundSize = "auto 100vh";
    } else {
        document.getElementById("top").style.backgroundSize = "100vw auto";
    }
}
window.onresize = resize;
window.onload = resize;