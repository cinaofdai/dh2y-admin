$(function() {
    $("#linkage_menu>h4>i").click(function() {
        $("#linkage_menu>h4>i").each(function() {
            if ($(this).hasClass("jian")) { $(this).removeClass("jian"); $(this).addClass("jia"); }
        });
        if ($(this).parent().next("ul").hasClass("undisplay")) {
            $("#linkage_menu>ul").each(function() {
                if ($(this).hasClass("undisplay") == false) {
                    $(this).addClass("undisplay");
                }
            });
            if ($(this).hasClass("jia")) $(this).removeClass("jia");
            $(this).addClass("jian");
            $(this).parent().next("ul").removeClass("undisplay");
        }
        else {
            if ($(this).hasClass("jian")) $(this).removeClass("jian");
            $(this).addClass("jia");
            $(this).parent().next("ul").addClass("undisplay");
        }
    });
    $("#linkage_menu").find("span").find("i").click(function() {
        var current_node_next_ul_classname = $(this).parent().next("ul").attr("class");
        $(this).parent().parent().parent().find("i").each(function() {
            if ($(this).hasClass("jian")) { $(this).removeClass("jian"); $(this).addClass("jia"); }
        });
        $(this).parent().parent().parent().find("ul").each(function() {
            if ($(this).hasClass("undisplay") == false) {
                $(this).addClass("undisplay");
            }
        });
        if (current_node_next_ul_classname == "undisplay") {
            $(this).parent().find("ul").each(function() {
                if ($(this).hasClass("undisplay") == false) {
                    $(this).addClass("undisplay");
                }
            });
            if ($(this).hasClass("jia")) $(this).removeClass("jia");
            $(this).addClass("jian");
            $(this).parent().next("ul").removeClass("undisplay");
        }
        else {
            if ($(this).hasClass("jian")) $(this).removeClass("jian");
            $(this).addClass("jia");
            $(this).parent().next("ul").addClass("undisplay");
        }
    });
});

$(function() {
    $("#divCategoryTreeBox").find("h2.left-column-title").click(function() {
        var current_name = $.trim($(this).find("span").text());
        var prev_classname = "";
        var title_border_classname = "h-border-style-1";
        $("#divCategoryTreeBox").find("h2.left-column-title").each(function(i) {
            if ($.trim($(this).children("span").text()) == current_name) {
                if ($(this).hasClass("h-border-style-1")) $(this).removeClass("h-border-style-1");
                if ($(this).hasClass("h-border-style-2")) $(this).removeClass("h-border-style-2");
                if ($(this).hasClass("h-bg-style-1")) {
                    $(this).removeClass("h-bg-style-1");
                    if ($(this).find("i").hasClass("status1")) {
                        $(this).find("i").removeClass("status1")
                    }
                    if ($(this).hasClass("status1") == false) $(this).find("i").addClass("status2");
                }
                else {
                    $(this).addClass("h-bg-style-1");
                    if ($(this).find("i").hasClass("status2")) {
                        $(this).find("i").removeClass("status2")
                    }
                    if ($(this).hasClass("status1") == false) $(this).find("i").addClass("status1");
                }
                if (i == 0) {
                    if ($("#linkage_menu").hasClass("undisplay")) $("#linkage_menu").removeClass("undisplay");
                    else $("#linkage_menu").addClass("undisplay");
                }
                else {
                    if ($(this).next("div").hasClass("undisplay")) $(this).next("div").removeClass("undisplay");
                    else $(this).next("div").addClass("undisplay");
                }
                prev_classname = "current";
            }
            else {
                if (prev_classname == "current") {
                    title_border_classname = "h-border-style-2";
                }
                if ($(this).hasClass("h-bg-style-1") == false) {
                    $(this).addClass("h-bg-style-1");
                    if ($(this).find("i").hasClass("status2")) {
                        $(this).find("i").removeClass("status2")
                    }
                    if ($(this).hasClass("status1") == false) $(this).find("i").addClass("status1");
                }
                if ($(this).hasClass("h-border-style-1")) $(this).removeClass("h-border-style-1");
                if ($(this).hasClass("h-border-style-2")) $(this).removeClass("h-border-style-2");
                if ($(this).hasClass(title_border_classname) == false) {
                    $(this).addClass(title_border_classname);
                }
                if (i == 0) { if ($("#linkage_menu").hasClass("undisplay") == false) $("#linkage_menu").addClass("undisplay"); }
                else { if ($(this).next("div").hasClass("undisplay") == false) $(this).next("div").addClass("undisplay") }
            }
        });
    });
    var url = window.location.href;
    var articleid = "";
    if (url.indexOf("Id") > 0 || url.indexOf("id") > 0) {
        articleid = $.query.get('id');
        if (articleid == "") {
            articleid = $.query.get('Id');
        }
    }
    var cateid = "";
    if (url.indexOf("categoryId") > 0 || url.indexOf("categoryid") > 0) {
        cateid = $.query.get('categoryId');
        if (cateid == "") {
            cateid = $.query.get('categoryid');
        }
    }
    init_category_tree(cateid, articleid);
});

function init_category_tree(cateid, artid) {
    if (cateid == "") { return; }
    var $target = $("#linkage_menu").find("a[cateid='" + cateid + "']");
    var $current = $target;
    if (artid != 0) {
        if ($target.length > 0) {
            if ($target.parent().next("ul").find("a[articleid='" + artid + "']").length > 0) {
                $target.parent().next("ul").find("a[articleid='" + artid + "']").addClass("highlight");
            }
            else {
                $target.addClass("highlight")
            }
        }
        else {
            if ($("#linkage_menu>p").find("a[articleid='" + artid + "']").length > 0) {
                $("#linkage_menu>p").find("a[articleid='" + artid + "']").each(function() {
                    if ($(this).hasClass("highlight") == false) $(this).addClass("highlight");
                });
            }
            return;
        }
    } else {
        if ($target.hasClass("highlight") == false) $target.addClass("highlight")
    }
    for (var i = 0; i < 20; i++) {
        if ($current.parent().attr("id") != "linkage_menu") {

            if (i == 0) {
                if ($current.parent().get(0).tagName != undefined && $current.parent().get(0).tagName == "SPAN") {
                    $current = $current.parent().parent().parent();
                }
            }
            else {
                if ($current.prev("span").find("i").length > 0) {
                    $current.prev("span").find("i").remove("jia"); $current.prev("span").find("i").addClass("jian");
                }
                $current = $current.parent().parent();
                if ($current.prev("h4").find("i").length > 0) {
                    $current.prev("h4").find("i").remove("jia"); $current.prev("h4").find("i").addClass("jian");
                }
            }
            if ($current.hasClass("undisplay")) $current.removeClass("undisplay");
        } else { break; }
    }
    if ($target.parent().find("i").length > 0) {
        $target.parent().find("i").removeClass("jia");
        $target.parent().find("i").addClass("jian");
    }
    if ($target.parent().next("ul").hasClass("undisplay")) $target.parent().next("ul").removeClass("undisplay");
}





