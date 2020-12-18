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
