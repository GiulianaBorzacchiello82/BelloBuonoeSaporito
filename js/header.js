var evt = isMobile() ? 'touchend' : 'click';

$(document).ready(function() {
	
    $(".menu .nav #ricette").on("mouseenter", function(){
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
