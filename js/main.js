function updateContent(post) {
    alert(post);
}

$(document).ready(function () {
    $(".navbar-nav>li>a").each(function () {
        if (this.href == window.location.href) {
            $(this).addClass("nav-active");
        }
    });
});