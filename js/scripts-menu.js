	jQuery(document).ready(function($) {
		$('.toggle-menu').jPushMenu();
				});

	$(function() {
    $(".drop-scrolla").click(function() {
        $("html,body").animate({
            scrollTop: $(".burgers").offset().top - 108
        }, "slow");
        return true;
    });
});
	
	$(function() {
    $(".drop-scrollb").click(function() {
        $("html,body").animate({
            scrollTop: $(".chicken").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrollc").click(function() {
        $("html,body").animate({
            scrollTop: $(".chips").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrolld").click(function() {
        $("html,body").animate({
            scrollTop: $(".drinks").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrolle").click(function() {
        $("html,body").animate({
            scrollTop: $(".fsh").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrollf").click(function() {
        $("html,body").animate({
            scrollTop: $(".pies").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrollg").click(function() {
        $("html,body").animate({
            scrollTop: $(".sausages").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrollh").click(function() {
        $("html,body").animate({
            scrollTop: $(".specials").offset().top - 108
        }, "slow");
        return false;
    });
});

$(function() {
    $(".drop-scrolli").click(function() {
        $("html,body").animate({
            scrollTop: $(".sides").offset().top - 108
        }, "slow");
        return false;
    });
});