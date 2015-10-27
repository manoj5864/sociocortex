function updateContent(post) {
    alert(post);
}

$(document).ready(function () {
    $(".navbar-nav>li>a").each(function () {
        if (window.location.href == this.href || (window.location.href.indexOf("/applications/") >= 0 && this.href.indexOf("/applications/") >= 0)) {
            $(this).addClass("nav-active");
        }
    });
});