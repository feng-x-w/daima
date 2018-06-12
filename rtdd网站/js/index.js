var zneedindex = 0;
var w =$("#Events").width();

var oa = demoUl.getElementsByTagName("a");
oa[0].className = "bgcolor";
$("#demoUl a").click(function() {
	$(this).siblings().removeClass("bgcolor");
	$(this).addClass("bgcolor");
})

$("#isueud").click(function() {
	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$(this).addClass("fontColor");
	$(this).children().addClass("borderTopColor");
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
	$(".machines_isuede_main_div").fadeIn();
	$(".machines_ammonia_main_div").fadeIn();
	$(".machines_isuede_center").fadeOut();
//	$("#window_see").css("height", "617px");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$(".machines_ammonia_Gallery").fadeOut();
	clearInterval(tim);
	$(document).scrollTop(800);
})
$("#ammonia").click(function() {
	$("#isueud").removeClass("fontColor");
	$("#isueud").children().removeClass("borderTopColor");
	$(this).addClass("fontColor");
	$(this).children().addClass("borderTopColor");
	$("#window_see").stop().animate({
		"left": "-100%"
	}, 300)
	$(".machines_isuede_main_div").fadeIn();
	$(".machines_ammonia_main_div").fadeIn();
	$(".machines_isuede_center").fadeOut();
//	$("#window_see").css("height", "617px");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$(".machines_ammonia_Gallery").fadeOut();
	clearInterval(tim);
	$(document).scrollTop(800);
})

function reurl() {
    url = location.href; 
    var times = url.split("?");
    if (times[1] != 1) {
        url += "?1"; 
        self.location.replace(url);
        self.location.replace(url); 
        self.location.replace(url); 
    }


}

$("#isueud_info").click(function() {
	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$("#isueud_Gallery").removeClass("fontColor")
	$("#isueud").addClass("fontColor");
	$("#isueud").children().addClass("borderTopColor");
	$("#isueud_info").addClass("fontColor");
	$(".machines_isuede_main_div").fadeOut()
	$(".machines_isuede_center").css({
		"left": "0%"
	})
	$(".machines_ammonia_main_div").fadeOut()
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
//	$("#window_see").css("height", "749px");
	$(".machines_isuede_center").fadeIn();
	$(".machines_Gallery_main").fadeOut();
	$(".machines_ammonia_info").fadeOut();
	$("#ammonia_Gallery").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$(".machines_ammonia_Gallery").fadeOut();
	clearInterval(tim);
	tim = setInterval(function() {
		zneedindex++;
		if(zneedindex == 2) {
			zneedindex = 0
		}
		$(".machines_isuede_center").stop().animate({
			'left': -zneedindex * $(".machines_inof_main").width()
		}, 500);
	}, 6666)
	$(document).scrollTop(800);
})

$("#isueud_Gallery").click(function() {
	
	$("#isueud").addClass("fontColor");
	$("#isueud").children().addClass("borderTopColor");
	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$("#isueud_Gallery").addClass("fontColor");
	$("#isueud_info").removeClass("fontColor");
	$(".machines_isuede_main_div").fadeOut();
	$(".machines_ammonia_main_div").fadeOut();
	$(".machines_isuede_center").fadeOut();
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
	$(".machines_Gallery_main").fadeIn();
	$("#ammonia_info").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_Gallery").fadeOut();
	clearInterval(tim);
	clearInterval(zdtim);
	run1();
	$(document).scrollTop(800);
//	$("#window_see").css("height", "749px");
})

$("#ammonia_info").click(function() {
	$("#ammonia_info").addClass("fontColor");
	$("#isueud").removeClass("fontColor");
	$("#isueud").children().removeClass("borderTopColor");
	$("#ammonia").addClass("fontColor");
	$("#ammonia").children().addClass("borderTopColor");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#window_see").stop().animate({
		"left": "-100%"
	}, 300);
//	$("#window_see").css("height", "749px");
	$(".machines_isuede_main_div").fadeOut();
	$(".machines_ammonia_main_div").fadeOut();
	$(".machines_isuede_center").fadeOut();
	$(".machines_Gallery_main").fadeOut();
	$(".machines_ammonia_info").fadeIn();
	$(".machines_ammonia_Gallery").fadeOut();
	$("#ammonia_Gallery").removeClass("fontColor");
	clearInterval(tim);
	$(document).scrollTop(800);
})
$("#ammonia_Gallery").click(function() {
	
	$(".machines_ammonia_Gallery").fadeIn();
	$("#ammonia_Gallery").addClass("fontColor");
	$("#isueud").removeClass("fontColor");
	$("#isueud").children().removeClass("borderTopColor");
	$("#ammonia").addClass("fontColor");
	$("#ammonia").children().addClass("borderTopColor");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#window_see").stop().animate({
		"left": "-100%"
	}, 300);
//	$("#window_see").css("height", "749px");
	$("#ammonia_info").removeClass("fontColor");
	$(".machines_isuede_main_div").fadeOut();
	$(".machines_ammonia_main_div").fadeOut();
	$(".machines_isuede_center").fadeOut();
	$(".machines_Gallery_main").fadeOut();
	$(".machines_ammonia_info").fadeOut();
	clearInterval(tim);
	clearInterval(zdtim3);
	run3();
	$(document).scrollTop(800);
})

function go(obj, left, fontc, fontb) {
	obj.onclick = function() {
		about_see.style.left = left;
		fontc.style.color = "#ffffff";
		fontb.style.color = "#cfcfcf";
		$(document).scrollTop(0);
	};
};

go(who_we_are, "0%", who_we_are, why_rtdd);
go(why_rtdd, "-100%", why_rtdd, who_we_are);
go(go_right, "-100%", why_rtdd, who_we_are);
go(go_left, "0%", who_we_are, why_rtdd);

$("#events_info").click(function() {
	
	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$(this).addClass("fontColor");
	$(this).children().addClass("borderTopColor");
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
	$(".machines_isuede_main_div").fadeIn();
	$(".machines_ammonia_main_div").fadeIn();
	$(".machines_isuede_center").fadeOut();
	
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$(".machines_ammonia_Gallery").fadeOut();

	$(".events_main").css({
		"display": "none"
	})
	$(".events_div").fadeIn();
	$(".events_info").fadeIn();
	$(".events_Gallery").css({
		"display": "none"
	});
	$(document).scrollTop(1600);
//	$("#window_see").css("height", "617px");
})
$("#events_gallery").click(function() {

	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$(this).addClass("fontColor");
	$(this).children().addClass("borderTopColor");
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
	$(".machines_isuede_main_div").fadeIn();
	$(".machines_ammonia_main_div").fadeIn();
	$(".machines_isuede_center").fadeOut();
//	$("#window_see").css("height", "617px");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$(".machines_ammonia_Gallery").fadeOut();
	$(".events_main").css({
		"display": "none"
	});
	$(".events_info").css({
		"display": "none"
	});
	$(".events_div").fadeIn();
	$(".events_Gallery").fadeIn();

	$(document).scrollTop(1600);
	clearInterval(zdtim5);
	run5();

});
var zdtim = null;
var needindex = 0;
$("#right_go").click(function() {
	needindex++;
	if(needindex == $("#lun_bo_ul>li").length) {
		needindex = 0;
	}
	$("#lun_bo_ul").stop().animate({
		'left': -needindex * w
	}, 500);
});

$("#left_go").click(function() {
	needindex--;
	if(needindex == -1) {
		needindex = $("#lun_bo_ul>li").length - 1;
	}
	$("#lun_bo_ul").stop().animate({
		'left': -needindex * w
	}, 500);
});

$("#lun_bo_ul>li").hover(function() {
	clearInterval(zdtim);
}, function() {
	run1();
})
$("#right_go").hover(function() {
	clearInterval(zdtim);
}, function() {
	run1();
})
$("#left_go").hover(function() {
	clearInterval(zdtim);
}, function() {
	run1();
})

var tim = null;
$(".machines_isuede_center").mouseover(function() {
	clearInterval(tim);
});
$(".machines_isuede_center").mouseout(function() {
	clearInterval(tim);
	tim = setInterval(function() {
		zneedindex++;
		if(zneedindex == 2) {
			zneedindex = 0
		}
		$(".machines_isuede_center").stop().animate({
			'left': -zneedindex * $(".machines_inof_main").width()
		}, 500);
	}, 6666)
});


$(".go_right_jia").click(function(){
	zneedindex = 1;
	$(".machines_isuede_center").stop().animate({
			'left': -zneedindex * $(".machines_inof_main").width()
	}, 500);
})

$(".go_left_jia").click(function(){
	zneedindex = 0;
	$(".machines_isuede_center").stop().animate({
			'left': -zneedindex * $(".machines_inof_main").width()
	}, 500);
})




var zdtim3 = null;
var centerindex = 0;
$("#Gallery_right_go").click(function() {
	centerindex++;
	if(centerindex == $("#Gallery_lun_bo_ul>li").length) {
		centerindex = 0;
	}
	$("#Gallery_lun_bo_ul").stop().animate({
		'left': -centerindex * w
	}, 500);
});
$("#Gallery_left_go").click(function() {
	centerindex--;
	if(centerindex == -1) {
		centerindex = $("#Gallery_lun_bo_ul>li").length - 1;
	}
	$("#Gallery_lun_bo_ul").stop().animate({
		'left': -centerindex * w
	}, 500);
});

$("#Gallery_lun_bo_ul>li").hover(function() {
	clearInterval(zdtim3);
}, function() {
	run3();
})
$("#Gallery_left_go").hover(function() {
	clearInterval(zdtim3);
}, function() {
	run3();
})
$("#Gallery_right_go").hover(function() {
	clearInterval(zdtim3);
}, function() {
	run3();
})

var zdtim5 = null;

var bottomindex = 0;
setTimeout(function(){
	
$(".info_yulan_1").click(function() {
	bottomindex = 0;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:'0px'});
})

$(".info_yulan_2").click(function() {
	bottomindex = 1;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-w+"px"});
})
$(".info_yulan_3").click(function() {
	bottomindex = 2;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-2*w+"px"});
})
$(".info_yulan_4").click(function() {
	bottomindex = 3;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-3*w+"px"});
})
$(".info_yulan_5").click(function() {
	bottomindex = 4;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-4*w+"px"});
})
$(".info_yulan_6").click(function() {
	bottomindex = 5;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-5*w+"px"});
})
$(".info_yulan_7").click(function() {
	bottomindex = 6;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-6*w+"px"});
})
$(".info_yulan_8").click(function() {
	bottomindex = 7;
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").addClass("fontColor");
	$("#events_Gallery_ul").css({left:-7*w+"px"});
})
$(".yulan_1").click(function() {
	needindex = 0;
	$("#lun_bo_ul").css({left:"0px"})
})
$(".yulan_2").click(function() {
	needindex = 1;
	$("#lun_bo_ul").css({left:-w+"px"})
})
$(".yulan_3").click(function() {
	needindex = 2;
	$("#lun_bo_ul").css({left:-2*w+"px"})
})
$(".yulan_4").click(function() {
	needindex = 3;
	$("#lun_bo_ul").css({left:-3*w+"px"})
})
$(".yulan_5").click(function() {
	needindex = 4;
	$("#lun_bo_ul").css({left:-4*w+"px"})
})
$(".yulan_6").click(function() {
	needindex = 5;
	$("#lun_bo_ul").css({left:-5*w+"px"})
})
$(".yulan_7").click(function() {
	needindex = 6;
	$("#lun_bo_ul").css({left:-6*w+"px"})
})
$(".yulan_8").click(function() {
	needindex = 7;
	$("#lun_bo_ul").css({left:-7*w+"px"})
})
$(".ammonia_yulan_1").click(function() {
	centerindex = 0;
	$("#Gallery_lun_bo_ul").css({left:"0px"})
})
$(".ammonia_yulan_2").click(function() {
	centerindex = 1;
	$("#Gallery_lun_bo_ul").css({left:-w+"px"})
})
$(".ammonia_yulan_3").click(function() {
	centerindex = 2;
	$("#Gallery_lun_bo_ul").css({left:-2*w+"px"})
})
$(".ammonia_yulan_4").click(function() {
	centerindex = 3;
	$("#Gallery_lun_bo_ul").css({left:-3*w+"px"})
})
$(".ammonia_yulan_5").click(function() {
	centerindex = 4;
	$("#Gallery_lun_bo_ul").css({left:-4*w+"px"})
})

$("#events_Gallery_right_go").click(function() {
	bottomindex++;
	if(bottomindex == $("#events_Gallery_ul>li").length) {
		bottomindex = 0;
	}
	$("#events_Gallery_ul").stop().animate({
		'left': -bottomindex * w
	}, 500);
});
$("#events_Gallery_left_go").click(function() {
	bottomindex--;
	if(bottomindex == -1) {
		bottomindex = $("#events_Gallery_ul>li").length - 1;
	}
	$("#events_Gallery_ul").stop().animate({
		'left': -bottomindex * w
	}, 500);
});
$(".events_info_yulan>div").click(function() {
	$(".events_main").css({
		"display": "none"
	});
	$(".events_info").css({
		"display": "none"
	});
	$(".events_div").fadeIn();
	$(".events_Gallery").fadeIn();
	$(document).scrollTop(1600);
	run5();
})
},1)

function run1() {
	clearInterval(zdtim);
	zdtim = setInterval(function() {
		needindex++;
		if(needindex == $("#lun_bo_ul>li").length) {
			needindex = 0;
		}
		$("#lun_bo_ul").stop().animate({
			'left': -needindex * w
		}, 500);
	},4000)
}

function run3() {
	clearInterval(zdtim3);
	zdtim3 = setInterval(function() {
		centerindex++;
		if(centerindex == $("#Gallery_lun_bo_ul>li").length) {
			centerindex = 0;
		}
		$("#Gallery_lun_bo_ul").stop().animate({
			'left': -centerindex * w
		}, 500);
	}, 4000)
}

function run5() {
	clearInterval(zdtim5);
	zdtim5 = setInterval(function() {
		bottomindex++;
		if(bottomindex == $("#events_Gallery_ul>li").length) {
			bottomindex = 0;
		}
		$("#events_Gallery_ul").stop().animate({
			'left': -bottomindex * w
		}, 500);
	}, 4000)
}

//$('.lun_bo_1').css({marginLeft:'0px'});
//$('.Gallery_lun_bo_1').css({marginLeft:'0px'});
//$('.events_Gallery_li_1').css({marginLeft:'0px'});

$("#events_Gallery_ul>li").hover(function() {
	clearInterval(zdtim5);
}, function() {
	run5();
})
$("#events_Gallery_left_go").hover(function() {
	clearInterval(zdtim5);
}, function() {
	run5();
})
$("#events_Gallery_right_go").hover(function() {
	clearInterval(zdtim5);
}, function() {
	run5();
})

$(window).scroll(function() {
	if($(document).scrollTop() >= 0 && $(document).scrollTop() < 757) {
		$("#demoUl a").removeClass("bgcolor");
		$("#demoUl a:eq(0)").addClass("bgcolor");
		$("#xiahua_div>div").removeClass("quan");
		$("#xiahua_div>div:eq(0)").addClass("quan");
	}
	if($(document).scrollTop() >= 757 && $(document).scrollTop() < 1557) {
		$("#demoUl a").removeClass("bgcolor");
		$("#demoUl a:eq(1)").addClass("bgcolor");
		$("#xiahua_div>div").removeClass("quan");
		$("#xiahua_div>div:eq(1)").addClass("quan");
	}
	if($(document).scrollTop() >= 1557 && $(document).scrollTop() < 2357) {
		$("#demoUl a").removeClass("bgcolor");
		$("#demoUl a:eq(2)").addClass("bgcolor");
		$("#xiahua_div>div").removeClass("quan");
		$("#xiahua_div>div:eq(2)").addClass("quan");
	}
	if($(document).scrollTop() >=(2357 - 262)){
		$("#demoUl a").removeClass("bgcolor");
		$("#demoUl a:eq(3)").addClass("bgcolor");
		$("#xiahua_div>div").removeClass("quan");
		$("#xiahua_div>div:eq(3)").addClass("quan");
	}

	if($(document).scrollTop() >= 0 && $(document).scrollTop() < 600) {
		$(".events_info_Gallery_nav").addClass("dis");
		$(".machines_chlid_nav").addClass("dis");
		$(".chlid_nav").removeClass("dis");
		$(".chlid_nav").fadeIn();
	} else {
		$(".chlid_nav").css({
			"display": "none"
		});
	}

	if($(document).scrollTop() >= 757 && $(document).scrollTop() < 1400) {
		$(".events_info_Gallery_nav").addClass("dis");
		$(".machines_chlid_nav").removeClass("dis");
		$(".chlid_nav").addClass("dis");
		$(".machines_chlid_nav").fadeIn();
	} else {
		$(".machines_chlid_nav").css({
			"display": "none"
		});
	}

	if($(document).scrollTop() >= 1557 && $(document).scrollTop() < 2095) {
		$(".events_info_Gallery_nav").fadeIn();
		$(".events_info_Gallery_nav").removeClass("dis");
		$(".machines_chlid_nav").addClass("dis");
		$(".chlid_nav").addClass("dis");
	} else {
		$(".events_info_Gallery_nav").css({
			"display": "none"
		});
	}

	if($(document).scrollTop() > 2357) {
		$(".events_info_Gallery_nav").addClass("dis");
		$(".machines_chlid_nav").addClass("dis");
		$(".chlid_nav").addClass("dis");
	}

})
$("#demoUl a:eq(0)").click(function() {
	$("#demoUl a").removeClass("bgcolor");
	$("#demoUl a:eq(0)").addClass("bgcolor");
	$("#xiahua_div>div").removeClass("quan");
	$("#xiahua_div>div:eq(0)").addClass("quan");
})
$("#demoUl a:eq(1)").click(function() {
	$("#demoUl a").removeClass("bgcolor");
	$("#demoUl a:eq(1)").addClass("bgcolor");
	$("#xiahua_div>div").removeClass("quan");
	$("#xiahua_div>div:eq(1)").addClass("quan");
})
$("#demoUl a:eq(2)").click(function() {
	$("#demoUl a").removeClass("bgcolor");
	$("#demoUl a:eq(2)").addClass("bgcolor");
	$("#xiahua_div>div").removeClass("quan");
	$("#xiahua_div>div:eq(2)").addClass("quan");
})
$("#demoUl a:eq(3)").click(function() {
	$("#demoUl a").removeClass("bgcolor");
	$("#demoUl a:eq(3)").addClass("bgcolor");
	$("#xiahua_div>div").removeClass("quan");
	$("#xiahua_div>div:eq(3)").addClass("quan");
})

$("#MachinesBtn").click(function() {
	$(".machines_isuede_main_div").fadeIn();
	$(".machines_isuede_center").fadeOut();
	$(".machines_Gallery_main").fadeOut();
	$("#window_see").css({
		"left": "0%",
		"height": "617px"
	});
	$("#isueud").addClass("fontColor");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#ammonia").removeClass("fontColor");
	$("#ammonia_info").removeClass("fontColor");
	$("#ammonia_Gallery").removeClass("fontColor");
	$("#isueud>em").addClass("borderTopColor");
	$("#ammonia>em").removeClass("borderTopColor");

	$(".events_info_Gallery_nav").addClass("dis");
	$(".machines_chlid_nav").removeClass("dis");
	$(".chlid_nav").addClass("dis");
})

$("#EventsBtn").click(function() {
	$(".events_main").fadeIn();
	$(".events_div").fadeOut();
	$(".events_info").fadeOut();
	$(".events_Gallery").fadeOut();
	$("#events_info").removeClass("fontColor");
	$("#events_gallery").removeClass("fontColor");
	$(".events").removeClass("eventsDiv_749px");
	$(".events_info_Gallery_nav").removeClass("dis");
	$(".machines_chlid_nav").addClass("dis");
	$(".chlid_nav").addClass("dis");
})

$("#AboutBtn").click(function() {
	$(".about_see").css({
		"left": "0%"
	});
	$("#who_we_are").css({
		"color": "#ffffff"
	});
	$("#why_rtdd").css({
		"color": "#cfcfcf"
	});
	$(".events_info_Gallery_nav").addClass("dis");
	$(".machines_chlid_nav").addClass("dis");
	$(".chlid_nav").removeClass("dis");
})

$("#ContactBtn").click(function() {
	$(".events_info_Gallery_nav").addClass("dis");
	$(".machines_chlid_nav").addClass("dis");
	$(".chlid_nav").addClass("dis");
})

$(".yu_lan_div>div").click(function() {

	$("#isueud").addClass("fontColor");
	$("#isueud").children().addClass("borderTopColor");
	$("#ammonia").removeClass("fontColor");
	$("#ammonia").children().removeClass("borderTopColor");
	$("#isueud_Gallery").addClass("fontColor");
	$("#isueud_info").removeClass("fontColor");
	$(".machines_isuede_main_div").fadeOut();
	$(".machines_ammonia_main_div").fadeOut();
	$(".machines_isuede_center").fadeOut();
	$("#window_see").stop().animate({
		"left": "0%"
	}, 300)
	$(".machines_Gallery_main").fadeIn();
	$("#ammonia_info").removeClass("fontColor");
	$(".machines_ammonia_info").fadeOut();
	$("#ammonia_Gallery").removeClass("fontColor");
	$(".machines_ammonia_Gallery").fadeOut();
	clearInterval(tim);
	$(document).scrollTop(800);
	run1();

})

$(".yu_lan_divs>div").click(function() {
	$(".machines_ammonia_Gallery").fadeIn();
	$("#ammonia_Gallery").addClass("fontColor");
	$("#isueud").removeClass("fontColor");
	$("#isueud").children().removeClass("borderTopColor");
	$("#ammonia").addClass("fontColor");
	$("#ammonia").children().addClass("borderTopColor");
	$("#isueud_info").removeClass("fontColor");
	$("#isueud_Gallery").removeClass("fontColor");
	$("#window_see").stop().animate({
		"left": "-100%"
	}, 300);
//	$("#window_see").css("height", "706px");
	$("#ammonia_info").removeClass("fontColor");
	$(".machines_isuede_main_div").fadeOut();
	$(".machines_ammonia_main_div").fadeOut();
	$(".machines_isuede_center").fadeOut();
	$(".machines_Gallery_main").fadeOut();
	$(".machines_ammonia_info").fadeOut();
	clearInterval(tim);
	$(document).scrollTop(800);
	run3();
})

$(".events_info_yulan>div").hover(function() {
	$(this).children().css({
		"display": "block"
	})
	$(this).children().children().fadeIn();
	$(this).stop().animate({
		"backgroundSize": "110px"
	}, 400)
}, function() {
	$(this).children().css({
		"display": "none"
	})
	$(this).children().children().fadeOut();
	$(this).stop().animate({
		"backgroundSize": "165px"
	}, 400)
})

$(".yu_lan_div>div").hover(function() {
	$(this).children().css({
		"display": "block"
	})
	$(this).children().children().fadeIn();
	$(this).stop().animate({
		"backgroundSize": "135px"
	}, 400)
}, function() {
	$(this).children().css({
		"display": "none"
	})
	$(this).children().children().fadeOut();
	$(this).stop().animate({
		"backgroundSize": "190px"
	}, 400)
})

$(".yu_lan_divs>div ").hover(function() {
	$(this).children().css({
		"display": "block"
	})
	$(this).children().children().fadeIn();
	$(this).stop().animate({
		"backgroundSize": "135px"
	}, 400)
}, function() {
	$(this).children().css({
		"display": "none"
	})
	$(this).children().children().fadeOut();
	$(this).stop().animate({
		"backgroundSize": "190px"
	}, 400)
})

window.onresize = function () {
	$('#lun_bo_ul').css({ 'width': '800%' });
	$('#lun_bo_ul li').css({ 'width': '12.5%' });
	$('#Gallery_lun_bo_ul').css({ 'width': '500%' });
	$('#Gallery_lun_bo_ul li').css({ 'width': '20%' });
	$('#events_Gallery_ul').css({ 'width': '800%' });
	$('#events_Gallery_ul li').css({ 'width': '12.5%' });
	var slider_w = $('#lun_bo_ul li').width();
	var slider_h = 748 / 1364 * slider_w;
	$('#Machines,#window_see,.machines_isuede_main,.machines_Gallery_main,#lun_bo_ul,#lun_bo_ul li').height(slider_h);
	$('.machines_ammonia_Gallery,#Gallery_lun_bo_ul,#Gallery_lun_bo_ul li').height(slider_h);
	$('#Events,.events_div,.events_Gallery,#events_Gallery_ul,#events_Gallery_ul li').height(slider_h);
	console.log($('#lun_bo_ul li').width(), $('#Gallery_lun_bo_ul li').width(), $('#events_Gallery_ul li').width());
}








