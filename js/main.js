snow_img = "../immagini/neve.gif";
snow_no = 15;

if (typeof(window.pageYOffset) == "number")
{
	snow_browser_width = window.innerWidth;
	snow_browser_height = window.innerHeight;
} 
else if (document.body && (document.body.scrollLeft || document.body.scrollTop))
{
	snow_browser_width = document.body.offsetWidth;
	snow_browser_height = document.body.offsetHeight;
}
else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop))
{
	snow_browser_width = document.documentElement.offsetWidth;
	snow_browser_height = document.documentElement.offsetHeight;
}
else
{
	snow_browser_width = 500;
	snow_browser_height = 500;	
}

snow_dx = [];
snow_xp = [];
snow_yp = [];
snow_am = [];
snow_stx = [];
snow_sty = [];

for (i = 0; i < snow_no; i++) 
{ 
	snow_dx[i] = 0; 
	snow_xp[i] = Math.random()*(snow_browser_width-50);
	snow_yp[i] = Math.random()*snow_browser_height;
	snow_am[i] = Math.random()*20; 
	snow_stx[i] = 0.02 + Math.random()/10;
	snow_sty[i] = 0.7 + Math.random();
	if (i == 0) document.write("<\div id=\"snow_flake0\" style=\"position:absolute;z-index:0\"><a href=\"http://peters1.dk/tools\" target=\"_blank\"><\img src=\""+snow_img+"\" border=\"0\"></a><\/div>");
	else document.write("<\div id=\"snow_flake"+ i +"\" style=\"position:absolute;z-index:"+i+"\"><\img src=\""+snow_img+"\" border=\"0\"><\/div>");
}

function SnowStart() 
{ 
	for (i = 0; i < snow_no; i++) 
	{ 
		snow_yp[i] += snow_sty[i];
		if (snow_yp[i] > snow_browser_height-50) 
		{
			snow_xp[i] = Math.random()*(snow_browser_width-snow_am[i]-30);
			snow_yp[i] = 0;
			snow_stx[i] = 0.02 + Math.random()/10;
			snow_sty[i] = 0.7 + Math.random();
		}
		snow_dx[i] += snow_stx[i];
		document.getElementById("snow_flake"+i).style.top=snow_yp[i]+"px";
		document.getElementById("snow_flake"+i).style.left=snow_xp[i] + snow_am[i]*Math.sin(snow_dx[i])+"px";
	}
	snow_time = setTimeout("SnowStart()", 10);
}
//SnowStart();
/**************************************************************************************************************/
<!-- Addobbo di Natale Inizio -->
//<![CDATA[
document.write('<style type="text/css">body{padding-bottom:50px}</style><img style="position:fixed;z-index:9999;top:0;left:0" src="https://lh6.googleusercontent.com/-Di8HyBYuJZM/UMtBwjjwuFI/AAAAAAAAdnk/dA-4EZMGaco/s150/alto-sinistra.png"/><img style="position:fixed;z-index:9999;top:0;right:0" src="https://lh5.googleusercontent.com/-JldeQjMDYZo/UMtBt7NC2bI/AAAAAAAAdnc/yWIVWI6azKA/s150/alto-destra.png"/><div style="position:fixed;z-index:9999;bottom:0;left:0;width:100%;height:104px;background:url(https://lh6.googleusercontent.com/-UCGpY7pJTxg/UMtB2vcQvLI/AAAAAAAAdn0/hnwcqDMVbkA/s640/footer.png) repeat-x bottom left;"></div><img style="position:fixed;z-index:9999;bottom:30px;left:30px" src="https://lh4.googleusercontent.com/-xDQzwyfI-uU/UMtBzvGCsrI/AAAAAAAAdns/Osn5TLGrcL8/s180/basso-sinistra.png"/>');var no=100;var hidesnowtime=0;var snowdistance='pageheight';var ie4up=(document.all)?1:0;var ns6up=(document.getElementById&&!document.all)?1:0;function festenatale(){return(document.compatMode&&document.compatMode!='BackCompat')?document.documentElement:document.body}var dx,xp,yp;var am,stx,sty;var i,doc_width=800,doc_height=600;if(ns6up){doc_width=self.innerWidth;doc_height=self.innerHeight}else if(ie4up){doc_width=festenatale().clientWidth;doc_height=festenatale().clientHeight}dx=new Array();xp=new Array();yp=new Array();am=new Array();stx=new Array();sty=new Array();for(i=0;i<no;++i){dx[i]=0;xp[i]=Math.random()*(doc_width-50);yp[i]=Math.random()*doc_height;am[i]=Math.random()*20;stx[i]=0.02+Math.random()/10; sty[i]=0.7+Math.random();if(ie4up||ns6up){document.write('<div id="dot'+i+'" style="POSITION:absolute;Z-INDEX:'+i+';VISIBILITY:visible;TOP:15px;LEFT:15px;"><span style="font-size:18px;color:#ffffff">*</span><\/div>')}}function snowIE_NS6(){doc_width=ns6up?window.innerWidth-10:festenatale().clientWidth-10;doc_height=(window.innerHeight&&snowdistance=='windowheight')?window.innerHeight:(ie4up&&snowdistance=='windowheight')?festenatale().clientHeight:(ie4up&&!window.opera&&snowdistance=='pageheight')?festenatale().scrollHeight:festenatale().offsetHeight;for(i=0;i<no;++i){yp[i]+=sty[i];if(yp[i]>doc_height-50){xp[i]=Math.random()*(doc_width-am[i]-30);yp[i]=0;stx[i]=0.02+Math.random()/10;sty[i]=0.7+Math.random()}dx[i]+=stx[i];document.getElementById('dot'+i).style.top=yp[i]+'px';document.getElementById('dot'+i).style.left=xp[i]+am[i]*Math.sin(dx[i])+'px'}snowtimer=setTimeout('snowIE_NS6()',10)}function hidesnow(){if(window.snowtimer){clearTimeout(snowtimer)}for(i=0;i<no;i++)document.getElementById('dot'+i).style.visibility='hidden'}if(ie4up||ns6up){snowIE_NS6();if(hidesnowtime>0)setTimeout('hidesnow()',hidesnowtime*1000)}
//]]>
<!-- Addobbo di Natale Fine -->
/************************************/	
var maindeferred = $.Deferred();
var evt = isMobile() ? 'touchend' : 'click';

$(window).resize(function() {
 resizePage();
});

function resizePage() {
	
	/*var h = $(window).height()-$("#header").height()-$("#subHeader").height()-$("footer").height()
	$("#mainContainer").css("max-height",h);*/
}
/**
 * Verifica se il dispositivo con il quale si accede all'applicazione è Mobile
 */
function isMobile() {
	
	var isMobile = ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	return isMobile;
}

$(document).ready(function() {
	
	
	$("#subHeader").on("mouseleave", function(e) {
    		$("#subHeader span.desc").removeClass("hide");
      		if (!$("#subHeader span.ricette").hasClass("hide") ) {
			$("#subHeader span.ricette").addClass("hide");
		}	
       });
	
  $("#footer").load( "components/footer.html", function() {
  
  });
	
 $("#header").load( "components/header.html", function() {
  
  });
 
})
