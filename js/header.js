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
	
	$( "#header").load( "components/header.html", function() {

		resizePage();
		$("#menu .nav li.ricette").on("mouseenter", function(){
			$("#subHeader span.desc").addClass("hide");
			$("#subHeader span.ricette").removeClass("hide");
	   	 })
    		.on("mouseleave", function(e) {
    			var mouseleavetimeout = $(this).data("mouseleavetimeout");
			if (mouseleavetimeout) {
				clearTimeout(mouseleavetimeout);
			}
    			mouseleavetimeout = setTimeout(function() {
    				if ( !$(e.relatedTarget).hasClass("subHeader")  && !$(e.relatedTarget).hasClass("nav") ) {
          				$("#subHeader span.desc").removeClass("hide");
      	  				$("#subHeader span.ricette").addClass("hide");
        			}
    			}, 0);
    			$(this).data("mouseleavetimeout", mouseleavetimeout);
    	});
    
});

})
