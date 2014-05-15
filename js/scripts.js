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

function getType(type){
	switch( type ){
		default:
		case "v":
			var vl = $('input[name="defaultVarcharLength"]').val();
			return "VARCHAR( " + vl + " )";
		break;
		case "i":
			return "INTEGER";
		break;
		case "t":
			return "TEXT";
		break;
		case "d":
			return "DATE";
		break;
		case "c":
			return "CHAR( 10 )";
		break;
		case "mt":
			return "MEDIUMTEXT";
		break;
		case "lt":
			return "LONGTEXT";
		break;
		case "dt":
			return "DATETIME";
		break;
		case "ts":
			return "TIMESTAMP";
		break;
		case "ti":
			return "TIME";
		break;
		case "b":
			return "BIT( 1 )";
		break;
		case "bool":
			return "BOOLEAN";
		break;
	}
}


function addFormRow(){
	$(function(){
		var id = new Date().getTime();
		var html = '<div id="formSection_' + id + '" class="formSection">' + 
			'<div class="formRow">' + 
				'<div class="item_variableName">' + 
					'Variable name: <input type="text" name="label" value="" required="required"/>' +
				'</div>' +
				'<div class="item_label">' + 
					'Label: <input type="text" name="label" value="" />' +
				'</div>' + 
				'<div class="item_type">' + 
					'Type: <select name="item"><option value="text">text</option><option value="number">number</option><option value="email">email</option><option value="telephone">telephone</option><option value="textarea">textarea</option><option value="wysiwyg">wysiwyg</option><option value="code">code</option><option value="checkbox">checkbox</option><option value="select">Select</option><option value="selectMultiple">Select Multiple</option><option value="radioGroup">Radio Button Group</option><option value="checkGroup">Checkbox Group</option><option value="RegexText">Regex Text Group</option><option value="RepeatSection">Repeatable Section</option><option value="File">File</option></select>' + 
				'</div>' + 
				'<div class="item_required">' + 				
					'Required: <input type="checkbox" name="item_required"/>' + 
				'</div>' + 
				'<div class="item_error" style="display: none">' + 
					'Error Text: <input type="text" value="" />' +
				'</div>' + 
				'<div class="type_text">' + 
					'Min Length: <input type="number" name="min_length" value="0"/> - Max Length: <input type="number" name="max_length" value="' + $('#defaultVarcharLength').val() + '" />' +
				'</div>' + 
				'<div class="type_number" style="display: none">' + 
					'Min amount: <input type="number" name="min_amount" value="0"/> - Max amount: <input type="number" name="max_amount" value="0" />' +
				'</div>' + 
				'<div class="type_code" style="display: none">' + 
				'	-code type' +  
				'</div>' + 
				'<div class="type_list" style="display: none">' + 
					'<textarea class="list" placeholder="comma seperated list of items"></textarea>' +  
				'</div>' + 
				'<div class="type_repeat_section" style="display: none">' + 
				'</div>' + 
				//'<button id="addFormInput">Add Form Input</button>' + 
			'</div>' + 
			//'<button id="addFormInput">Add Form Section</button>' + 
		'</div>';
		$('#formMode').append(html);
		$('#formSection_' + id + ' .item_type select').change(function(event){
			var val = $(this).val();
			switch( val ){
				default:
				case "text":
					$('#formSection_' + id + ' .type_text').show();
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "number":
				
				
					$('#formSection_' + id + ' .type_number').show();
					$('#formSection_' + id + ' .type_text').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "email":
				
				
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_text').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "telephone":
				
				
					$('#formSection_' + id + ' .type_text').hide();
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "textarea":
				
				
					$('#formSection_' + id + ' .type_text').show();
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "wysiwyg":
				
					$('#formSection_' + id + ' .type_text').show();
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "code":
				
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "checkbox":
				
				
				
				
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_text').hide();
				break;
				case "radioGroup":
				case "checkGroup":
				case "selectMultiple":
				case "select":
					
					$('#formSection_' + id + ' .item_required').hide();
					$('#formSection_' + id + ' .type_list').show();
					$('#formSection_' + id + ' .type_text').hide();
				break;
				case "RegexText":
				
				
					$('#formSection_' + id + ' .type_number').hide();
					$('#formSection_' + id + ' .type_text').hide();
				break;
				case "RepeatSection":
				
					$('#formSection_' + id + ' .item_required').hide();
					$('#formSection_' + id + ' .type_text').hide();
					$('#formSection_' + id + ' .type_list').hide();
				break;
				case "File":
					$('#formSection_' + id + ' .type_list').hide();
					
					
				break;
			}
			console.log( val );
		});
		
		$('#formSection_' + id + ' .item_required input[type="checkbox"]').click(function(event){
			if( $(this).prop("checked") ){
				$(this).closest('.formRow').find('.item_error').show();
			}else{
				$(this).closest('.formRow').find('.item_error').hide();
			}
		});


	//return html;
	});
}


$(function(){

	var variables = $('#variables');
	var button = $('#generate');
	var className =  $('#className');
	var code =  $('#generatedCode');
	var sql = $('#generatedSQL');
	
	$('input[name="mode"]').change(function(event){
			$('#variables').hide();
			$('#formMode').hide();
			$('#addFormInput').hide();
			$('#advancedMode').hide();
		if( $(this).val() == "simple" ||  $(this).val() == "advanced"){
			$('#variables').show();
			if(  $(this).val() == "advanced"){
				$('#advancedMode').show();
			}
		}else{
			$('#formMode').show();
			$('#addFormInput').show();
		}
	});
	
	
	var generatedCode, generatedSQL, generatedConn;
	
	
	button.click(function(event){
		var mode = $('input[name="mode"]:checked').val();
		var tableName = "";
		if( typeof generatedCode != "undefined" && $( generatedCode.getWrapperElement() ).length ){
			$( generatedCode.getWrapperElement() ).remove();
		}
		
		if( typeof generatedSQL != "undefined" && $( generatedSQL.getWrapperElement() ).length ){
			$( generatedSQL.getWrapperElement() ).remove();
		}
		
		//console.log( generatedCode );
		//console.log( generatedSQL );
		
		if( className.val() == ""){
			window.alert("Please enter a class name");
			return;
		}else{
			tableName = className.val().toLowerCase().trim();
		}
		var vars = ["id", "connection", "errors", "errorCount"];
		var varsCheck = vars.slice(); //duplicate copy for use with checking variables
		var types = [];
	
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
		code.val( code.val() + '\r\n\tclass ' + tableName.capitalize() + '{' );
		
		if( mode == "simple" ){
			for(var v=0; v < vars.length; v++){
				code.val( code.val() + '\r\n\t\tprivate $' + vars[v] + ';');
			}
		}else{
		
			for(var v=0; v < vars.length; v++){
				if( v > 3 ){
					var temp = vars[v].split(",");
					code.val( code.val() + '\r\n\t\tprivate $' + temp[0]  + ';');
					vars[v] = temp[0];
					types.push( temp[1] );	
				}else{
					code.val( code.val() + '\r\n\t\tprivate $' +  vars[v] + ';');
				}
			}
		}
		
	
		code.val( code.val() + '\r\n');
		code.val( code.val() + '\r\n');

		//Constructor
		code.val( code.val() + '\r\n\t\t/*Constructor*/');
		code.val( code.val() + '\r\n\t\tfunction __construct($databaseConnection=null){');
		code.val( code.val() + '\r\n\t\t\t$this->connection = $databaseConnection;');
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
			code.val( code.val() + tab(5) + '$query = $this->connection->prepare("SELECT * FROM `' + tableName + '` WHERE `id` = :id");');
			code.val( code.val() + tab(5) + '$query->bindParam(\':id\', $id);');
			code.val( code.val() + tab(5) + 'if( $query->execute() ){');
				code.val( code.val() + tab(6) + '$' + tableName + ' = $query->fetchObject("' + tableName + '");');
			code.val( code.val() + tab(5) + '}');
			code.val( code.val() + tab(5) + 'if( is_object( $' + tableName + ' ) ){');
				code.val( code.val() + tab(6) + '$' + tableName + '->setConnection( $this->connection );');
			code.val( code.val() + tab(5) + '}');
			code.val( code.val() + tab(5) + 'return $' + tableName  + ';');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		//get From Post
		code.val( code.val() + '\r\n\t\tfunction getFromPost(){');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount" ){
				code.val( code.val() + tab(3) + '$this->set' + vars[v].capitalize() + '( (isset($_POST["' +  vars[v] + '"])) ? $_POST["' +  vars[v] + '"] : $this->get' +  vars[v].capitalize() + '() );');
			}
		
		}
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		//Get From Request
		code.val( code.val() + '\r\n\t\tfunction getFromRequest(){');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount" ){
				code.val( code.val() + tab(3) + '$this->set' + vars[v].capitalize() + '( (isset($_REQUEST["' +  vars[v] + '"])) ? $_REQUEST["' +  vars[v] + '"] : $this->get' +  vars[v].capitalize() + '() );');
			}
		
		}
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		
		
		
		
		//save function
		code.val( code.val() + '\r\n\t\tfunction save(){');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "errorCount" ){
				code.val( code.val() + '\r\n\t\t\t$' + vars[v] + ' = $this->get' + vars[v].capitalize() + '();');
			}
		}
		code.val( code.val() + tab(3) + 'if( $this->connection ){');
		code.val( code.val() + tab(4) + 'if( $id != "" ){');
		/*Update Operation*/
		code.val( code.val() + tab(5) + '/*Perform Update Operation*/' );
		
		if( vars.length > 4 ){
		
		code.val( code.val() + tab(5) + '$query = $this->connection->prepare("UPDATE  `' + tableName + '` SET ');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount"){
				code.val( code.val() + '`' + vars[v] + '` = :' + vars[v]  + ' ');
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + 'WHERE `id` = :id");');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount" ){
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
		
		}else{
		code.val( code.val() + tab(5) + '/*No fields to update...*/' );
		}
		
		code.val( code.val() + tab(4) + '}else{');
		/*Insert Operation*/
		code.val( code.val() + tab(5) + '/*Perform Insert Operation*/' );
		code.val( code.val() + tab(5) + '$query = $this->connection->prepare("INSERT INTO `' + tableName + '` (`id`');
		if( vars.length > 4 ){ code.val( code.val() + ',' ); }
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "id" && vars[v] != "connection" && vars[v] != "errors" && vars[v] != "errorCount" ){
				code.val( code.val() + '`' + vars[v] + '`' );
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + ') VALUES (NULL' );
		if( vars.length > 4 ){ code.val( code.val() + ',' ); }
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "id" && vars[v] != "connection" && vars[v] != "errors" && vars[v] != "errorCount" ){
				code.val( code.val() + ':' + vars[v]  );
				if( (v + 1) != vars.length ){ code.val( code.val() + ',' ); }
			}
		}
		code.val( code.val() + ');");');
		
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount"){
				code.val( code.val() + tab(5) + '$query->bindParam(\':' +  vars[v] + '\', $' + vars[v] + ');');
			}
		}
		code.val( code.val() + '\r\n' + tab(5) + 'if( $query->execute() ){');
		code.val( code.val() + tab(6) + '$this->setId( $this->connection->lastInsertId() );');
		code.val( code.val() + tab(6) + 'return $this->getId();');
		code.val( code.val() + tab(5) + '}else{');
		code.val( code.val() + tab(6) + 'return -1;');
		code.val( code.val() + tab(5) + '}	');	
			
		
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + tab(2) + '}');
		code.val( code.val() + '\r\n');
		code.val( code.val() + newLine() );
		
		//delete function
		code.val( code.val() + '\r\n\t\tfunction delete($id = null){');
		code.val( code.val() + tab(3) + 'if( $this->connection ){');
		code.val( code.val() + tab(4) + 'if( $id == null && $this->getId() != ""){');
		code.val( code.val() + tab(5) + '$id = $this->getId();');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(4) + '/*Perform Query*/');
		code.val( code.val() + tab(4) + 'if( $id != "" ){');
			code.val( code.val() + tab(5) + '$query = $this->connection->prepare("DELETE FROM `' + tableName + '` WHERE `id` = :id");');
			code.val( code.val() + tab(5) + '$query->bindParam(\':id\', $id);');
			code.val( code.val() + tab(5) + 'if( $query->execute() ){');
				code.val( code.val() + tab(6) + 'return 1;');
				
			code.val( code.val() + tab(5) + '}else{');
				code.val( code.val() + tab(6) + 'return 0;');
			code.val( code.val() + tab(5) + '}');


		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		//Get By
		if( $('input[name="includeGetby"]').prop("checked")  ){
			for(var v=0; v < vars.length; v++){
				if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "errorCount"){
					code.val( code.val() + '\r\n\t\tfunction getBy' + vars[v].capitalize() + '($' +  vars[v] + '){');
					code.val( code.val() + tab(3) + 'if( $this->connection ){');
					
					code.val( code.val() + tab(4) + 'if( $' + vars[v] + ' == null && $this->get' + vars[v].capitalize() + '() != ""){');
					code.val( code.val() + tab(5) + '$' + vars[v] + ' = $this->get' + vars[v].capitalize() + '();');
					code.val( code.val() + tab(4) + '}');
					code.val( code.val() + newLine() );
					code.val( code.val() + tab(4) + '/*Perform Query*/');
					
					code.val( code.val() + tab(4) + '$query = $this->connection->prepare("SELECT * FROM `' + tableName + '` WHERE `' + vars[v] + '` = :' + vars[v] + ' LIMIT 1");');
					code.val( code.val() + tab(4) + '$query->bindParam(\':' +  vars[v] + '\', $' + vars[v] + ');');
					code.val( code.val() + tab(4) + '$object = null;');
					code.val( code.val() + '\r\n' + tab(4) + 'if( $query->execute() ){');
					
					code.val( code.val() + tab(5) + 'while( $result = $query->fetchObject("' + tableName + '") ){');
							code.val( code.val() + tab(6) + '$object = $result;');
					code.val( code.val() + tab(5) + '}');
					code.val( code.val() + '\r\n' + tab(4) + '}');
					code.val( code.val() + tab(4) + 'if( is_object( $object ) ){');
						code.val( code.val() + tab(5) + 'return $object;');
					code.val( code.val() + tab(4) + '}');
					code.val( code.val() + tab(3) + '}');
					code.val( code.val() + '\r\n\t\t}');
					code.val( code.val() + '\r\n');
				}
			}
		}
		
		if( $('input[name="includeListby"]').prop("checked")  ){
			//listBy function
			for(var v=0; v < vars.length; v++){
				if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "errorCount"  ){
					code.val( code.val() + newLine() );
					code.val( code.val() + '\r\n\t\tfunction getListBy' +  vars[v].capitalize() +'($' +  vars[v] +'=null){');
					code.val( code.val() + tab(3) + 'if( $this->connection ){');
					code.val( code.val() + tab(4) + 'if( $' + vars[v] + ' == null && $this->get' + vars[v].capitalize() + '() != ""){');
					code.val( code.val() + tab(5) + '$' + vars[v] + ' = $this->get' + vars[v].capitalize() + '();');
					code.val( code.val() + tab(4) + '}');
					code.val( code.val() + newLine() );
					code.val( code.val() + tab(4) + '/*Perform Query*/');
					code.val( code.val() + tab(4) + '$query = $this->connection->prepare("SELECT * FROM `' + tableName + '` WHERE `' + vars[v] + '` = :' + vars[v] + '");');
					code.val( code.val() + tab(4) + '$query->bindParam(\':' +  vars[v] + '\', $' + vars[v] + ');');
					code.val( code.val() + '\r\n' + tab(4) + 'if( $query->execute() ){');
					
					code.val( code.val() + tab(5) + 'while( $result = $query->fetchObject("' + tableName + '") ){');
							code.val( code.val() + tab(6) + '$' + tableName + 's[] = $result;');
					code.val( code.val() + tab(5) + '}');
					
					code.val( code.val() + tab(5) + 'if( is_array( $' + tableName + 's ) ){');
						code.val( code.val() + tab(6) + 'return $' + tableName + 's;');
					code.val( code.val() + tab(5) + '}else{');
						code.val( code.val() + tab(6) + 'return array();');
					code.val( code.val() + tab(5) + '}');
					
					
					code.val( code.val() + '\r\n' + tab(4) + '}');
					
					
					code.val( code.val() + tab(3) + '}');
					code.val( code.val() + '\r\n\t\t}' );
				}
			}
			code.val( code.val() + newLine() );
		}
		
		
		code.val( code.val() + tab(2) + '/*Return parameter (object) as Array*/');
		code.val( code.val() + '\r\n\t\tfunction toArray ($obj=null) {');
			code.val( code.val() + tab(3) + 'if (is_object($obj)) $obj = (array)$obj;');
			code.val( code.val() + tab(3) + 'if (is_array($obj)) {');
				code.val( code.val() + tab(4) + '$new = array();');
				code.val( code.val() + tab(4) + 'foreach ($obj as $key => $val) {');
					code.val( code.val() + tab(5) + '$class = get_class($this);');
					code.val( code.val() + tab(5) + '$k = $key;');
					code.val( code.val() + tab(5) + '$fkey = trim( str_replace( $class,"",$k));');
					code.val( code.val() + tab(5) + 'if( $fkey == "connection" || $fkey == "errors" || $fkey == "errorCount" ){');
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
		code.val( code.val() + newLine() );
		
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Echo array as CSV file*/');
		code.val( code.val() + '\r\n\t\tfunction arrayToCSVFile($array, $filename="' + tableName + '.csv", $delmiter=","){');
		code.val( code.val() + tab(3) + 'ob_clean();');
		code.val( code.val() + tab(3) + "header('Content-Type: application/csv; charset=UTF-8');");
		code.val( code.val() + tab(3) + "header('Content-Disposition: attachement; filename=\"'.$filename.'\";');");
		code.val( code.val() + tab(3) + "$f = fopen('php://output', 'w');");
		code.val( code.val() + tab(3) + "foreach ($array as $line) {");
			code.val( code.val() + tab(4) + "fputcsv($f, $line, $delimiter);");
		code.val( code.val() + tab(3) + "}");
		code.val( code.val() + tab(3) + "exit;");
		code.val( code.val() + '\r\n\t\t}');		
		code.val( code.val() + newLine() );
		
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*getObjectsLikeThis - returns array*/');
		code.val( code.val() + '\r\n\t\tfunction getObjectsLikeThis(){');
		code.val( code.val() + tab(3) + 'if( $this->connection ){');
		code.val( code.val() + tab(4) + '$buildQuery="SELECT * FROM `' + tableName +'` WHERE ";');
		code.val( code.val() + tab(4) + '$numParams = 0;');
		code.val( code.val() + tab(4) + '$values = array();');
		code.val( code.val() + tab(4) + 'foreach ($this as $key => $value) {');
		code.val( code.val() + tab(5) + 'if( $value != "" && $key != "id" && $key != "connection" && $key != "error" && $key != "errorCount"){');
		code.val( code.val() + tab(6) + '$buildQuery.="`".$key."` = :value_".$numParams." AND ";');
		code.val( code.val() + tab(6) + '$numParams++;');
		code.val( code.val() + tab(6) + '$values[] = $value;');
		code.val( code.val() + tab(5) + '}');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(4) + 'if( $numParams > 0 ){');
		code.val( code.val() + tab(5) + '//remove last AND');
		//code.val( code.val() + tab(5) + '$buildQuery = strrev(implode(strrev(""), explode("AND", strrev($buildQuery), 2)));');
		code.val( code.val() + tab(5) + '$buildQuery = substr( $buildQuery , 0, (strlen($buildQuery) -4) );');
		
		code.val( code.val() + tab(5) + '$query = $this->connection->PREPARE($buildQuery);');
		code.val( code.val() + tab(5) + 'for($i=0; $i < sizeof($numParams); $i++){');
		code.val( code.val() + tab(6) + '$query->bindParam(":value_".$i, $values[$i]);');
		code.val( code.val() + tab(5) + '}');
		code.val( code.val() + tab(5) + 'if( $query->execute() ){');
		code.val( code.val() + tab(6) + 'return $query->fetchAll();');
		code.val( code.val() + tab(5) + '}');
		
		code.val( code.val() + tab(4) + '}');
		
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');		
		code.val( code.val() + newLine() );
		
		
		
		//printFormatted
		code.val( code.val() + tab(2) + '/*Human readable print out of object*/');
		code.val( code.val() + '\r\n\t\tfunction printFormatted($return=false){');
		code.val( code.val() + tab(3) + 'if($return){');
		code.val( code.val() + tab(4) + "return '<pre>'.print_r( $this->asArray(), true ).'</pre>';");
		code.val( code.val() + tab(3) + '}else{');
		code.val( code.val() + tab(4) + "echo '<pre>'.print_r( $this->asArray(), true ).'</pre>';");
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + '\r\n');
		
		
		code.val( code.val() + '\r\n\t}\r\n?>');
		//code.trigger('autosize.resize');
		
		/**************SQL TABLE CREATION**********************/
		sql.show();
		sql.val('CREATE TABLE  `' + tableName + '` (');
		sql.val( sql.val() + '\r\n`id` INT NULL DEFAULT NULL AUTO_INCREMENT PRIMARY KEY');
		//remove the original pre-defined vars
		vars.remByVal("id");
		vars.remByVal("connection");
		vars.remByVal("errors");
		vars.remByVal("errorCount");
		
		if( vars.length > 1 ){ sql.val( sql.val() + ','); }
		if( mode == "simple" ){
			var vl = $('input[name="defaultVarcharLength"]').val();
			for(var v=0; v < vars.length; v++){
				sql.val( sql.val() + '\r\n' + '`' + vars[v] + '` VARCHAR( ' + vl + ' )');
				if( (v + 1) != vars.length ){ sql.val( sql.val() + ',' ); }
			}
		}else if( mode == "advanced" ){
			for(var v=0; v < vars.length; v++){
				sql.val( sql.val() + '\r\n' + '`' + vars[v] + '` ' + getType( types[v] ) );
				if( (v + 1) != vars.length ){ sql.val( sql.val() + ',' ); }
			}
		
		}
		
		
		sql.val( sql.val() + '\r\n);');
		
		//console.log( types );
		
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
		//sql.trigger('autosize.resize');
		
			generatedCode = CodeMirror.fromTextArea(document.getElementById("generatedCode"), {
				lineNumbers: true,
				matchBrackets: true,
				mode: "text/x-php",
				indentUnit: 4,
				indentWithTabs: true,
				extraKeys: { 
					"F11": function(cm) {
					  cm.setOption("fullScreen", !cm.getOption("fullScreen"));
					},
					"Esc": function(cm) {
					  if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
					},
					"Ctrl-Space": "autocomplete"
				}
			});
			
			generatedSQL = CodeMirror.fromTextArea(document.getElementById("generatedSQL"), {
				lineNumbers: true,
				mode: "text/javascript", 
				extraKeys: { 
					"F11": function(cm) {
					  cm.setOption("fullScreen", !cm.getOption("fullScreen"));
					},
					"Esc": function(cm) {
					  if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
					},
					"Ctrl-Space": "autocomplete"
				}
			});
		
		
		
		
	});
	
	$('textarea').autosize();   

	
	generatedConn = CodeMirror.fromTextArea(document.getElementById("generatedConn"), {
		lineNumbers: true,
		matchBrackets: true,
		mode: "text/x-php",
		indentUnit: 4,
		indentWithTabs: true,
		extraKeys: { 
			"F11": function(cm) {
			  cm.setOption("fullScreen", !cm.getOption("fullScreen"));
			},
			"Esc": function(cm) {
			  if (cm.getOption("fullScreen")) cm.setOption("fullScreen", false);
			},
			"Ctrl-Space": "autocomplete"
		}
	});
});