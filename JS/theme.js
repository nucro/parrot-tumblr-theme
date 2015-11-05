$(document).ready(function () {
    $("button#openSidebar").click(function () {

        $(".contentCover").addClass('coverToggle');
        $(".sidebar").addClass('sidebarToggle');


    });

    $(".contentCover").click(function () {
        $(".contentCover").removeClass('coverToggle');
        $(".sidebar").removeClass('sidebarToggle');
        $(".search").css("top","-55px");


    });
     $(".closeSidebar").click(function () {
        $(".contentCover").removeClass('coverToggle');
        $(".sidebar").removeClass('sidebarToggle');
        $(".search").css("top","-55px");


    });
    $(".loadMore").click(function () {
        $(".loadMore i").toggleClass("rotate");

    });
        $(".searchTrigger").click(function () {
        $(".search").css("top","50px","pointer-events","all");
        $(".contentCover").addClass('coverToggle');
    });


});
