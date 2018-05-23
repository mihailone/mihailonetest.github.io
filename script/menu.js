$(document).ready(function () {
    $(".mb_menu").click(function () {
        $(".open_mb_menu").toggle("slow", function () {
            // Animation complete.
        });
        $(".open_mb_menu").css("display", "flex");
    });
});