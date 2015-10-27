function updateContent(post) {
    alert(post);
}

$(document).ready(function () {
    $(".navbar-nav>li>a").each(function () {
        if (window.location.href.startsWith(this.href)) {
            $(this).addClass("nav-active");
        }
    });
});