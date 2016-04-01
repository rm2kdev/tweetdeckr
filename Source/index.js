(function(){

    //Require Modules
    var ua = require('universal-analytics');

    //Google Analytics
    var visitor = ua('UA-39829018-6');
    visitor.pageview("/", function (err) {
        console.log("GA Pageview Sent.");
    });

	


    //Exports to webkit process
    exports.log_click = function() {
		visitor.event("click", "open_url").send();
		return true		
    };
	

	

})();