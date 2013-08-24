$(document).ready(function(){
   var badBrowser = (/MSIE ((5\.5)|6)/.test(navigator.userAgent) && navigator.platform == "Win32");
   if (badBrowser) {
		/* overall width	*/ resizeIt(); $(window).resize(function(){ resizeIt(); });
		/* comment bubbles	*/ $(".cnt").css("margin-left","-8px");
		/* forum tables		*/ $(".table1").css("width","98%");
		/* upgrade message	*/ if($("#fa").length > 0) $("#fa")[0].innerHTML = "<center><strong>IE6 Users:</strong> Your (free) internet browser is <u>over 10 years old</u> and 3 major versions out of date, some layout issues may occur. Please visit <a href=\"http://www.microsoft.com/windows/Internet-explorer/default.aspx\" title=\"Update your Internet Explorer\">this link</a> to download an updated version of Internet Explorer</center>";
	}
});

function resizeIt(){
	var el = $("#contain");
	if($(window).width() > 1200)
		el[0].style.width="1200px";
	else if($(window).width() < 1200 && $(window).width() > 770)
		el[0].style.width="98%";
	else
		el[0].style.width="770px";
}