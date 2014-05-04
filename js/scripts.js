String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

$(function(){

	var variables = $('#variables');
	var button = $('#generate');
	var className =  $('#className');
	var code =  $('#generatedCode');
	var sql = $('#generatedSQL');
	
	
	button.click(function(event){
		if( className.val() == ""){
			window.alert("Please enter a class name");
			return;
		}
		var vars = ["id", "connection", "errors"];
		
	
		code.show();
		code.val( '<?php');
		code.val( code.val() + '\r\n\t/*Class Generated by Brendon Irwin\'s Class Generator*/\r\n');
		code.val( code.val() + '\r\n\tclass ' + className.val().capitalize() + '{' );
		
		for(var v=0; v < vars.length; v++){
			code.val( code.val() + '\r\n\t\tprivate $' + vars[v] + ';');
		}
		
		code.val( code.val() + '\r\n');
		code.val( code.val() + '\r\n');

		//Constructor
		code.val( code.val() + '\r\n\t\t/*Constructor*/');
		code.val( code.val() + '\r\n\t\tfunction __construct($databaseConnection=null){');
		code.val( code.val() + '\r\n\t\t\treturn $this->connection = $databaseConnection;');
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + '\r\n');
		
		code.val( code.val() + '\r\n\t\t/*Getters and Setters*/');
		for(var v=0; v < vars.length; v++){
			//Getter
			code.val( code.val() + '\r\n\t\tfunction get' + vars[v].capitalize() + '(){');
			code.val( code.val() + '\r\n\t\t\treturn $this->' + vars[v] + ';');
			code.val( code.val() + '\r\n\t\t}');
			code.val( code.val() + '\r\n');
			
			//Setter
			code.val( code.val() + '\r\n\t\tfunction set' + vars[v].capitalize() + '($' + vars[v] + '){');
			code.val( code.val() + '\r\n\t\t\t$this->' + vars[v] + ' = $' +  vars[v] + ';');
			code.val( code.val() + '\r\n\t\t}');
			code.val( code.val() + '\r\n');
			
		}
		
		code.val( code.val() + '\r\n\t}\r\n?>');
	});


});