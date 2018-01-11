jQuery(document).ready(function () {
    jQuery(".toggle-nav").click(function () {
        $(".nav").slideToggle("slow");
        $(this).toggleClass("toggle-quit");
    });
});