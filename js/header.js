var maindeferred = $.Deferred();
var evt = isMobile() ? 'touchend' : 'click';

/**
 * Verifica se il dispositivo con il quale si accede all'applicazione è Mobile
 */
function isMobile() {
	
	var isMobile = ("ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch);
	return isMobile;
}

$.when(maindeferred).then(function() {

	alert("s");
});	

$(document).ready(function() {
	
    $("#menu .nav li.ricette").on("mouseenter", function(){
    	$("#subHeader span.desc").addClass("hide");
    	$("#subHeader span.desc").removeClass("hide");
    })
    .on("mouseleave", function(e) {
    	var mouseleavetimeout = $(this).data("mouseleavetimeout");
    	if (mouseleavetimeout) {
    		clearTimeout(mouseleavetimeout);
    	}
    	mouseleavetimeout = setTimeout(function() {
    		if ( !$(e.relateTarget).hasClass("userMenuList") ) {
          $("#subHeader span.desc").removeClass("hide");
      	  $("#subHeader span.desc").addClass("hide");
        	}
    	}, 0);
    	$(this).data("mouseleavetimeout", mouseleavetimeout);
    });
    

})
