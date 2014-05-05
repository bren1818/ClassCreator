String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

Array.prototype.remByVal = function(val) {
    for (var i = 0; i < this.length; i++) {
        if (this[i] === val) {
            this.splice(i, 1);
            i--;
        }
    }
    return this;
}

function tab(n){
	var tabs = "";
	for(var t =0; t< n; t++){
		tabs += "\t";
	}
	return '\r\n' + tabs;
}

function newLine(){
	return '\r\n';
}

$(function(){

	var variables = $('#variables');
	var button = $('#generate');
	var className =  $('#className');
	var code =  $('#generatedCode');
	var sql = $('#generatedSQL');
	
	$('input[name="mode"]').change(function(event){
		if( $(this).val() == "simple" ){
			$('#variables').show();
			$('#formMode').hide();
		}else{
			$('#variables').hide();
			$('#formMode').show();
		}
	});
	
	
	
	button.click(function(event){
		var mode = $('input[name="mode"]').val();
		
		if( className.val() == ""){
			window.alert("Please enter a class name");
			return;
		}
		var vars = ["id", "connection", "errors"];
		var varsCheck = vars.slice(); //duplicate copy for use with checking variavles

	
		var lines = variables.val().split('\n');
		for(var l = 0;l < lines.length;l++){
			var newVar = lines[l].replace(/\s/g, "");
			if( (vars.indexOf(newVar) == -1) && (varsCheck.indexOf( newVar.toLowerCase() ) == -1) && newVar != "" ){ 
				varsCheck.push( newVar.toLowerCase() ); //add to a lowercase copy of the strings sanity check later
				vars.push( newVar );					//add to our list of vars
			}
		}

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
		
		code.val( code.val() + '\r\n\t\t/*Special Functions*/');
		
		
		
		//load function
		code.val( code.val() + '\r\n\t\tfunction load($id = null){');
		code.val( code.val() + tab(3) + 'if( $this->connection ){');
		code.val( code.val() + tab(4) + 'if( $id == null && $this->getId() != ""){');
		code.val( code.val() + tab(5) + '$id = $this->getId();');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(4) + '/*Perform Query*/');
		code.val( code.val() + tab(4) + 'if( $id != "" ){');
			code.val( code.val() + tab(5) + '$query = $this->connection->prepare("SELECT * FROM `' + className.val().capitalize() + '` WHERE `id` = :id");');
			code.val( code.val() + tab(5) + '$query->bindParam(\':id\', $id);');
			code.val( code.val() + tab(5) + 'if( $query->execute() ){');
				code.val( code.val() + tab(6) + '$' + className.val() + ' = $query->fetchObject("' + className.val().capitalize() + '");');
			code.val( code.val() + tab(5) + '}');
			code.val( code.val() + tab(5) + 'if( is_object( $' + className.val() + ' ) ){');
				code.val( code.val() + tab(6) + '$' + className.val() + '->setConnection( $this->connection );');
			code.val( code.val() + tab(5) + '}');
			code.val( code.val() + tab(5) + 'return $' + className.val()  + ';');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		//save function
		code.val( code.val() + '\r\n\t\tfunction save(){');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" ){
				code.val( code.val() + '\r\n\t\t\t$' + vars[v] + ' = $this->get' + vars[v].capitalize() + '();');
			}
		}
		code.val( code.val() + tab(3) + 'if( $this->connection ){');
		code.val( code.val() + tab(4) + 'if( $id != "" ){');
		/*Update Operation*/
		code.val( code.val() + tab(5) + '/*Perform Update Operation*/' );
		code.val( code.val() + tab(5) + '$query = $this->connection->prepare("UPDATE  `' + className.val().capitalize() + ' SET ');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" ){
				code.val( code.val() + '`' + vars[v] + '` = :' + vars[v]  + ' ');
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + 'WHERE `id` = :id");');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" ){
				code.val( code.val() + tab(5) + '$query->bindParam(\'' + vars[v] + '\', $' + vars[v] + ');');
			}
		}
		code.val( code.val() + tab(5) + '$query->bindParam(\'id\', $id);');
		code.val( code.val() + tab(5) + 'if( $query->execute() ){');
			code.val( code.val() + tab(6) + 'return $id;');
		code.val( code.val() + tab(5) + '}else{');
			code.val( code.val() + tab(6) + 'return -1;');
		code.val( code.val() + tab(5) + '}');
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(4) + '}else{');
		/*Insert Operation*/
		code.val( code.val() + tab(5) + '/*Perform Insert Operation*/' );
		code.val( code.val() + tab(5) + '$query = $this->connection->prepare("INSERT INTO `' + className.val().capitalize() + '` (`id`');
		if( vars.length > 3 ){ code.val( code.val() + ',' ); }
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "id" && vars[v] != "connection" && vars[v] != "errors" ){
				code.val( code.val() + '`' + vars[v] + '`' );
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + ') VALUES (NULL' );
		if( vars.length > 3 ){ code.val( code.val() + ',' ); }
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "id" && vars[v] != "connection" && vars[v] != "errors" ){
				code.val( code.val() + ':' + vars[v]  );
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + ');");');
		
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" ){
			code.val( code.val() + tab(5) + '$query->bindParam(\':' +  vars[v] + '\', $' + vars[v] + ');');
			code.val( code.val() + '\r\n' + tab(5) + 'if( $query->execute() ){');
			code.val( code.val() + tab(6) + '$this->setId( $this->connection->lastInsertId() );');
			code.val( code.val() + tab(6) + 'return $this->getId();');
			code.val( code.val() + tab(5) + '}else{');
			code.val( code.val() + tab(6) + 'return -1;');
			code.val( code.val() + tab(5) + '}	');	
			}
		}
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + tab(2) + '}');
		code.val( code.val() + '\r\n');
		
		
		
		code.val( code.val() + newLine() );
		//listBy function
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" ){
				code.val( code.val() + '\r\n\t\tfunction getListBy' +  vars[v].capitalize() +'($' +  vars[v] +'=null){');
				code.val( code.val() + tab(3) + 'if( $this->connection ){');
				code.val( code.val() + tab(4) + 'if( $' + vars[v] + ' == null && $this->get' + vars[v].capitalize() + '() != ""){');
				code.val( code.val() + tab(5) + '$' + vars[v] + ' = $this->get' + vars[v].capitalize() + '();');
				code.val( code.val() + tab(4) + '}');
				code.val( code.val() + newLine() );
				code.val( code.val() + tab(4) + '/*Perform Query*/');
				
				
				code.val( code.val() + tab(3) + '}');
				code.val( code.val() + '\r\n\t\t}' );
			}
		}
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Return parameter (object) as Array*/');
		code.val( code.val() + '\r\n\t\tfunction toArray ($obj=null) {');
			code.val( code.val() + tab(3) + 'if (is_object($obj)) $obj = (array)$obj;');
			code.val( code.val() + tab(3) + 'if (is_array($obj)) {');
				code.val( code.val() + tab(4) + '$new = array();');
				code.val( code.val() + tab(4) + 'foreach ($obj as $key => $val) {');
					code.val( code.val() + tab(5) + '$class = get_class($this);');
					code.val( code.val() + tab(5) + '$k = $key;');
					code.val( code.val() + tab(5) + '$fkey = trim( str_replace( $class,"",$k));');
					code.val( code.val() + tab(5) + 'if( $fkey == "connection" || $fkey == "errors" ){');
						code.val( code.val() + tab(6) + '//dont add');
					code.val( code.val() + tab(5) + '}else{');
						code.val( code.val() + tab(6) + '$new[$fkey] = $this->toArray($val);');
					code.val( code.val() + tab(5) + '}');
				code.val( code.val() + tab(4) + '}');
			code.val( code.val() + tab(3) + '} else {');
				code.val( code.val() + tab(4) + '$new = $obj;');
			code.val( code.val() + tab(3) + '}');
			code.val( code.val() + tab(3) + 'return $new;');
		code.val( code.val() + '\r\n\t\t}');
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Return object as Array*/');
		code.val( code.val() + '\r\n\t\tfunction asArray(){');
			code.val( code.val() + tab(3) + '$array = $this->toArray( $this );');
			code.val( code.val() + tab(3) + 'return $array;');
		code.val( code.val() + '\r\n\t\t}');
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Return object as JSON String*/');
		code.val( code.val() + '\r\n\t\tfunction asJSON(){');
		code.val( code.val() + tab(3) + 'return json_encode($this->asArray());');
		code.val( code.val() + '\r\n\t\t}');
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Return clone of Object*/');
		code.val( code.val() + '\r\n\t\tfunction getClone(){');
		code.val( code.val() + tab(3) + 'return clone($this);');
		code.val( code.val() + '\r\n\t\t}');		
		
		
		
		
		
		code.val( code.val() + '\r\n\t}\r\n?>');
		code.trigger('autosize.resize');
		
		/**************SQL TABLE CREATION**********************/
		sql.show();
		sql.val('CREATE TABLE  `' + className.val().capitalize() + '` (');
		sql.val( sql.val() + '\r\n`id` INT NULL DEFAULT NULL AUTO_INCREMENT PRIMARY KEY');
		//remove the original pre-defined vars
		vars.remByVal("id");
		vars.remByVal("connection");
		vars.remByVal("errors");
		
		
		if( vars.length > 1 ){ sql.val( sql.val() + ','); }
		if( mode == "simple" ){
			for(var v=0; v < vars.length; v++){
				sql.val( sql.val() + '\r\n' + '`' + vars[v] + '` VARCHAR( 55 )');
				if( (v + 1) != vars.length ){ sql.val( sql.val() + ',' ); }
			}
		}
		sql.val( sql.val() + '\r\n);');
		
		/*
		CREATE TABLE  `test` (
		`id` INT NULL DEFAULT NULL AUTO_INCREMENT PRIMARY KEY ,
		`varchar` VARCHAR( 55 ) NOT NULL ,
		`integer` INT NOT NULL ,
		`longtext` LONGTEXT NOT NULL
		`a` TIMESTAMP NOT NULL ,
		`bool` BOOLEAN NOT NULL
		);
		*/
		sql.trigger('autosize.resize');
	});
	
	$('textarea').autosize();   

});