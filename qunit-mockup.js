testMockup = function( mockupUrl, testName, expected, callback ) {
	
	if( arguments.length === 3 ) {
		callback = expected;
		expected = null;
	}
	
	QUnit.stop();
	
	QUnit.asyncTest( testName, expected, function() {
		$.ajax({
			url: mockupUrl,
			dataType: "html",
			error: function() {
				throw "Not able to load mockup data at " + mockupUrl + "!";
			},
			success: function( data ) {
				QUnit.start();	
				
				$( "div#qunit-fixture" ).append( data );
				
				callback.apply( null, [] );
			}
		});
	}, true );
	
};