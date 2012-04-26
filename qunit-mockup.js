testMockup = function( mockupUrl, testName, expected, callback ) {
	
	if( arguments.length === 3 ) {
		callback = expected;
		expected = null;
	}
	
	QUnit.test( testName, expected, function() {
		QUnit.stop();
		
		$.ajax({
			url: mockupUrl,
			dataType: "html",
			error: function() {
				throw "Not able to load mockup data at " + mockupUrl + "!";
			},
			success: function( data ) {
				$( "div#qunit-fixture" ).append( data );
				
				callback.apply( null, [] );
				
				QUnit.start();	
			}
		});
	}, true );
	
};