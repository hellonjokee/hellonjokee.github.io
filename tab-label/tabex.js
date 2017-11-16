//<![CDATA[
$(function() {
    $("#select-ted li:first").addClass("selectab"), $("#sidebar-main > div").hide(), $("#sidebar-main > div:first").show(), $("#select-ted a").click(function() {
        $("#select-ted li").removeClass("selectab"), $(this).parent().addClass("selectab");
        var e = $(this).attr("href");
        return $("#sidebar-main > div:visible").hide(), $(e).fadeToggle(1e3), !1
    })
});
//]]>
