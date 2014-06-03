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
		//case "bool":
		//	return "BOOLEAN";
		//break;
	}
}


function addFormRow(){
	$(function(){
		var id = new Date().getTime();
		var html = '<div id="formSection_' + id + '" class="formSection">' + 
			'<div class="formRow">' + 
			
				'<div class="item_variableName">' + 
					'Variable name: <input type="text" name="label" value="" pattern="[a-zA-Z0-9_]+" required="required" title="Variable name, no spaces"/>' +
				'</div>' +
				
				'<div class="item_label">' + 
					'Label: <input type="text" name="label" value="" required="required"/>' +
				'</div>' + 
				
				'<div class="item_type">' + 
					//<option value="telephone">telephone</option><option value="File">File</option><option value="wysiwyg">wysiwyg</option><option value="code">code</option><option value="RepeatSection">Repeatable Section</option>
					'Type: <select name="item"><option value="text">text</option><option value="number">number</option><option value="email">email</option><option value="textarea">textarea</option><option value="checkbox">checkbox</option><option value="select">Select</option><option value="pattern">Input Pattern</option><option value="date">Date</option><option value="selectMultiple">Select Multiple</option><option value="radioGroup">Radio Button Group</option><option value="checkGroup">Checkbox Group</option></select>' + 
				'</div>' + 
				
				'<div class="item_required">' + 				
					'Required: <input type="checkbox" name="item_required"/>' + 
				'</div>' + 
				
				'<div class="item_error" style="display: none">' + 
					'Error Text: <input type="text" value="" />' +
				'</div>' + 
				
				'<div class="item_date" style="display: none"> Date: ' +
					/*
					$('#birthday, #dateResidency').datepicker({
						changeMonth: true,
						changeYear: true,
						dateFormat: 'dd/mm/yy',
						yearRange: "-65y:-15y",
						defaultDate: new Date(1970, 00, 01)
					});
					*/
					'Restrict Dates : <input type="checkbox" name="item_restrictDates"/>' + 
					'<div class="item_restrict_dates" style="display: none;">' +
						'<label>Start Year (0 for current year): <input name="startYr" type="number" value="0" placeholder="YYYY" /></label><br />' +
						'<label>Cur Year (=/-) : <input name="from" type="number" value="0"/></label> to: <br /><label>Cur Year (=/-): <input name="to" type="number" value="0" /></label>' +
					'</div>' +
				'</div>' +
				
				'<div class="type_text type_number type_textarea" style="display: none;">' + 
					'Restrict input length: <input type="checkbox" name="item_restrictLength"/>' + 
					'<div class="item_restrict_length" style="display: none;">' +
						'Min Length: <input type="number" name="min_length" value="0"/> - Max Length: <input type="number" name="max_length" value="' + $('#defaultVarcharLength').val() + '" />' +
					'</div>' +
				'</div>' + 
				
				'<div class="type_number" style="display: none">' + 
					'Restrict input amount: <input type="checkbox" name="item_restrictAmount"/>' + 
					'<div class="item_restrict_amount" style="display: none">' +
						'Min amount: <input type="number" name="min_amount" value="0"/> - Max amount: <input type="number" name="max_amount" value="0" />' +
					'</div>' +
				'</div>' + 
				
				
				'<div class="type_code" style="display: none">' + 
			
				'</div>' + 
				
				'<div class="type_list" style="display: none">' + 
					'<textarea class="list" placeholder="comma seperated list of items"></textarea>' +  
				'</div>' + 
				
				'<div class="type_repeat_section" style="display: none">' + 
				
				'</div>' + 
				
				'<div class="type_pattern" style="display: none">' +
					'<p>Input a Regex pattern: eg: "[\+]{0,1}?\d{0,1}?[\(]{0,1}?\d{3}[\)]{0,1}?\d{3}[\-]{0,1}?\d{4}" for a phone number</p>' +
					'<textarea></textarea>' +
				'</div>' +
			'</div>' + 
			
		'</div>';
		$('#formMode').append(html);
		$('#formSection_' + id + ' .item_type select').change(function(event){
			var val = $(this).val();
				$('#formSection_' + id + ' .type_number').hide();
				$('#formSection_' + id + ' .type_list').hide();
				$('#formSection_' + id + ' .type_text').hide();
				$('#formSection_' + id + ' .type_pattern').hide();
				$('#formSection_' + id + ' .item_required').show();
				$('#formSection_' + id + ' item_date').hide();
			switch( val ){
				default:
				case "text":
					$('#formSection_' + id + ' .type_text').show();
				break;
				case "number":
					$('#formSection_' + id + ' .type_number').show();
				break;
				case "email":
				
				break;
				case "textarea":
					$('#formSection_' + id + ' .type_text').show();
				break;
				case "wysiwyg":
				
				break;
				case "code":

				break;
				case "checkbox":
			
				break;
				case "date":
					
					$('#formSection_' + id + ' .item_date').show();
				break;
				case "checkGroup":
					$('#formSection_' + id + ' .item_required').hide();
					$('#formSection_' + id + ' .type_list').show();
				break;
				case "radioGroup":
				case "selectMultiple":
					$('#formSection_' + id + ' .type_list').show();
				break;
				case "select":
					$('#formSection_' + id + ' .type_list').show();
				break;
				case "RepeatSection":
				

				break;
				case "File":
					
					
				break;
				case "pattern":
					$('#formSection_' + id + ' .type_pattern').show();
					
				break;
			}
			

		});
		
		
		$('#formSection_' + id + ' .type_text').show(); //default
		
		//text restriction
		$('#formSection_' + id + ' .type_text input[name="item_restrictLength"]').click(function(event){
			if( $(this).prop("checked") ){
				$(this).closest('.formRow').find('.item_restrict_length').show();
			}else{
				$(this).closest('.formRow').find('.item_restrict_length').hide();
			}
		});

		//number restriction
		$('#formSection_' + id + ' .type_number input[name="item_restrictAmount"]').click(function(event){
			if( $(this).prop("checked") ){
				$(this).closest('.formRow').find('.item_restrict_amount').show();
			}else{
				$(this).closest('.formRow').find('.item_restrict_amount').hide();
			}
		});


		
		$('#formSection_' + id + ' .item_required input[type="checkbox"]').click(function(event){
			if( $(this).prop("checked") ){
				$(this).closest('.formRow').find('.item_error').show();
			}else{
				$(this).closest('.formRow').find('.item_error').hide();
			}
		});

		
		$('#formSection_' + id + ' .item_date input[type="checkbox"]').click(function(event){
			if( $(this).prop("checked") ){
				$(this).closest('.formRow').find('.item_restrict_dates').show();
			}else{
				$(this).closest('.formRow').find('.item_restrict_dates').hide();
			}
		});

	
	});
}


function buildForm(){
	var code = $('#generatedFORM');
	var variables = $('#variables');
	
	
	var frmName = $('#className').val().toLowerCase().trim();
	
	code.show();
	code.val(  '<!--Form Generated by Brendon Irwin\'s Form Generator-->\r\n');
	
	code.val(   code.val() + tab(0) + '<?php' );
	code.val(  code.val() + tab(1) + '$conn = null; //set to DB Conn');
	code.val(  code.val() + tab(1) + '$' + frmName + ' = new ' + frmName.capitalize() + '($conn); ');
	code.val(  code.val() + tab(1) + 'if(strtoupper($_SERVER["REQUEST_METHOD"]) === "POST") {');
	code.val(  code.val() + tab(2) + '$' + frmName + '->getFromPost();');
	code.val(  code.val() + tab(1) + '}');
	code.val(  code.val() + tab(0) + '?>' );
	
	code.val( code.val() + tab(0) + '<form name="' + frmName + '" id="' + frmName + '" method="POST" action="" enctype="multipart/form-data">' );
	
	$('#formMode .formSection').each(function(){
		var label = $(this).find('.item_label input').val();
		var variable = $(this).find('.item_variableName input').val();
		variable = variable.replace(/\s+/g, ' ');
		var type =  $(this).find('.item_type select option:selected').val();
		var required = $(this).find('.item_required input').prop('checked');
		var restrictLength = $(this).find('.type_text input[name="item_restrictLength"]').prop('checked');
		var min = 0;
		var max = 0;
		var errText = $(this).find('.item_error input').val();
		var restrictAmount =  $(this).find('.type_number input[name="item_restrictAmount"]').prop('checked');
		var minAmount = 0;
		var maxAmount = 0;
		var pattern =  $(this).find('.type_pattern textarea').val();
		
		var restrictDate= $(this).find('.item_date input[name="item_restrictDates"]').prop('checked');
		
		
		if( variable == "" ){
			return;
		}
		
		if( errText == "" ){
			if( required ){
				errText = label + " is a required field. ";
			}
		}
		
		if( restrictLength ){
			min = $(this).find('.type_text input[name="min_length"]').val();
			max = $(this).find('.type_text input[name="max_length"]').val();
			errText += label + " must be between " + min + " and " + max + " characters in length. ";
		}
		
		
		if( restrictAmount ){
			minAmount = $(this).find('.type_number input[name="min_amount"]').val();
			maxAmount = $(this).find('.type_number input[name="max_amount"]').val();
			errText += label + " must have a value between " + minAmount + " and " + maxAmount + ". ";
		}
		
		
		code.val( code.val() + tab(1) + '<div class="formRow">' );
		code.val( code.val() + tab(2) + '<div class="rowLabel">' );
		code.val( code.val() + tab(3) + '<label for="' + variable + '">' + label + ':' + (required ? '*' : '' ) + '</label>');
		code.val( code.val() + tab(2) + '</div>' );
		code.val( code.val() + tab(2) + '<div class="rowField">' );
		
		if( type == "text" ){
			/*Input type text*/
			code.val( code.val() + tab(3) + '<input type="text" name="' + variable + '" id="' + variable + '" value="<?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?>" ' + (restrictLength ? 'pattern=".{' + min + ',' + max + '}"' : '') + ' title="' + errText + '" ' +  (required ? 'required="required"' : '' ) + '/>');
			variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
		}else if( type == "number" ){
			/*Number */
			code.val( code.val() + tab(3) + '<input type="number" name="' + variable + '" id="' + variable + '" value="<?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?>" ' + (restrictLength ? 'pattern=".{' + min + ',' + max + '}" ' : '') + 'title="' + errText + '" ' + (required ? 'required="required" ' : '') +  (restrictAmount ? 'min="' + minAmount + '" max="' + maxAmount + '"' : '') +'/>');
			variables.val( variables.val() + '\r\n' + variable +', ' + 'i');
		}else if( type == "email" ){
			/*Email - essentially same as input*/
			if( required ){
				errText = label + " is a required field. ";
			}
			code.val( code.val() + tab(3) + '<input type="email" name="' + variable + '" id="' + variable + '" value="<?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?>" ' + (restrictLength ? 'pattern=".{' + min + ',' + max + '}" ' : '') + 'title="' + errText + '" ' + (required ? 'required="required" ' : '')  + '/>');
			
			variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
		}else if( type == "textarea" ){
		
			/*Textarea*/
			
			code.val( code.val() + tab(3) + '<textarea name="' + variable + '" id="' + variable + '" ' + (required ? ' required="required" ' : '') + (restrictLength ? ' maxlength=' + max + ' minlength=' + min : '') + ' title="' + errText + '" ' + '><?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?></textarea>');
			
			
			variables.val( variables.val() + '\r\n' + variable +', ' + 'mt');
			
			
		}else if(type == "select"){
			//set values for select
			var vals =  $(this).find('.type_list textarea').val();
			var valStr = "";
			vals = vals.split(",");
			for(var v=0; v < vals.length; v++){
				valStr += '"' + vals[v] + '"';
				if( ((v + 1) < vals.length) ){
				valStr += ', '
				}
			}
			//get variable
			code.val( code.val() + tab(3) + '<?php $' + variable + '_values = array(' + valStr + '); ?>');	
			code.val( code.val() + tab(3) + '<?php if( isset( $' + frmName + ') && $' + frmName +'->get' + variable.capitalize() + '() != null ){');
			code.val( code.val() + tab(4) + ' $' + variable + '_selected = $' + frmName +'->get' + variable.capitalize() + '();');
			code.val( code.val() + tab(3) + '}else{');
				code.val( code.val() + tab(4) + ' $' + variable + '_selected = "";');
			code.val( code.val() + tab(3) + '} ?>');
			
			
			code.val( code.val() + tab(3) + '<select name="' + variable  + '"' + (required ? ' required="required" ' : '') +'>');
			code.val( code.val() + tab(4) + '<?php for($v=0; $v < sizeof($' + variable + '_values); $v++){ ?>');
			code.val( code.val() + tab(5) + '<option value="<?php echo $'+ variable +'_values[$v]; ?>" <?php if($'+ variable +'_values[$v] ==  $' + variable + '_selected ){ echo "selected"; } ?>><?php echo $'+ variable +'_values[$v]; ?></option>' );
			code.val( code.val() + tab(4) + '<?php } ?>');
			code.val( code.val() + tab(3) + '</select>');
			
			variables.val( variables.val() + '\r\n' + variable +', ' + 'i');
			
		}else if( type == "checkbox" ){
			
			code.val( code.val() + tab(3) + '<?php if( isset( $' + frmName + ') && $' + frmName +'->get' + variable.capitalize() + '() != null ){');
			code.val( code.val() + tab(4) + ' $' + variable + '_selected = $' + frmName +'->get' + variable.capitalize() + '();');
			code.val( code.val() + tab(3) + '}else{');
				code.val( code.val() + tab(4) + ' $' + variable + '_selected = "";');
			code.val( code.val() + tab(3) + '} ?>');
			
			code.val( code.val() + tab(3) + '<input type="checkbox" id="' + variable + '" name="' + variable + '" ' + ' title="' + errText + '" ' + (required ? ' required="required" ' : '') + ' value="1" <?php if($' + variable + '_selected == 1 ){ echo "checked"; } ?> />');

			//variable length should be size of largest option
			variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
		}else if(type == "pattern" ){
		
			code.val( code.val() + tab(3) + '<input type="text" id="' + variable + '" name="' + variable + '" ' + ' title="' + errText + '" ' + (required ? ' required="required" ' : '') + ' pattern="' + pattern + '" value="<?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?>" />');
		
			variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
		
		}else if (type == "selectMultiple" || type == "radioGroup" || type == "checkGroup" ){
			var vals =  $(this).find('.type_list textarea').val();
			var valStr = "";
			vals = vals.split(",");
			for(var v=0; v < vals.length; v++){
				valStr += '"' + vals[v] + '"';
				if( ((v + 1) < vals.length) ){
				valStr += ', '
				}
				
				//create multiple variables for these
				if( type == "selectMultiple" || type == "checkGroup" ){
					variables.val( variables.val() + '\r\n' + variable +'_' + v + ', ' + 'v');
				}
				
			}
			code.val( code.val() + tab(3) + '<?php $' + variable + '_values = array(' + valStr + '); ?>');	
			
			if( type == "selectMultiple" ){
				code.val( code.val() + tab(3) + '<select id="' + variable + '" name="' + variable + '[]" ' + ' title="' + errText + '" ' + (required ? ' required="required" ' : '') + ' multiple>');
			
				code.val( code.val() + tab(4) + '<?php for($sm = 0; $sm < sizeof( $' + variable + '_values); $sm++){ ?>');
				
				//get values
				
				code.val( code.val() + tab(5) + '<?php $function = "get' +  variable.capitalize() + '_' + '".$sm; ?>');
				
				code.val( code.val() + tab(5) + '<option value="<?php echo $'+ variable +'_values[$sm]; ?>" <?php if($'+ variable +'_values[$sm] ==  ( is_object($' + frmName + ') &&  $' + frmName + '->$function() ?  $' + frmName + '->$function()  : \'\') ){ echo "selected"; } ?>><?php echo $'+ variable +'_values[$sm]; ?></option>' );
			
				code.val( code.val() + tab(4) + '<?php } ?>');
				code.val( code.val() + tab(3) + '</select>');
				code.val( code.val() + tab(3) + '<p>You may hold ctrl to select multiple items</p>');
				
				//added vars for each
				
			
			}else if( type == "checkGroup" ){
				
				code.val( code.val() + tab(3) + '<?php for($sm = 0; $sm < sizeof( $' + variable + '_values); $sm++){ ?>');
				code.val( code.val() + tab(4) + '<?php $function = "get' +  variable.capitalize() + '_' + '".$sm; ?>');
				
				code.val( code.val() + tab(4) + '<label><?php echo $' + variable + '_values[$sm]; ?>: <input type="checkbox" name="' + variable + '_<?php echo $sm; ?>" id="' + variable + '_<?php echo $sm; ?>" value="<?php echo trim($' + variable + '_values[$sm]); ?>" <?php if(  ( isset($' + frmName + ') &&  is_object($' + frmName + ') &&  $' + frmName + '->$function() ?  $' + frmName + '->$function()  : \'\') == trim($' + variable + '_values[$sm])){ echo " checked" } ?>/></label>');
			
			
				code.val( code.val() + tab(3) + '<?php } ?>');
			}else if( type == "radioGroup" ){
			
				code.val( code.val() + tab(3) + '<?php for($sm = 0; $sm < sizeof( $' + variable + '_values); $sm++){ ?>');
				//code.val( code.val() + tab(4) + '<?php $function = "get' +  variable.capitalize() + '_' + '".$sm; ?>');
				
				code.val( code.val() + tab(4) + '<label><?php echo $' + variable + '_values[$sm]; ?>: <input type="radio" name="' + variable + '" id="' + variable + '" value="<?php echo trim($' + variable + '_values[$sm]); ?>" <?php if( ( is_object($' + frmName + ') &&  $' + frmName + '->get' +  variable.capitalize() + '() ?  $' + frmName + '->get' +  variable.capitalize() + '()  : \'\') == trim($' + variable + '_values[$sm])){ echo " checked"; } ?> ' + (required ? ' required="required" ' : '') + '/></label>');
			
			
				code.val( code.val() + tab(3) + '<?php } ?>');
			
				variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
			}
			
		
		}else if(type == "date"){
			//pattern="\d{1,2}/\d{1,2}/\d{4}"
			//(mm/dd/yyyy)
			errText = errText + " Date should be in format mm\/dd\/yyyy";
			
			code.val( code.val() + tab(3) + '<label>(mm/dd/yyyy) <input class="dateInput" type="text" name="' + variable + '" id="' + variable + '" value="<?php echo (isset($' + frmName + ') ?  $' + frmName + '->get' + variable.capitalize() + '() : \'\'); ?>" title="' + errText + '" ' +  (required ? 'required="required"' : '' ) + ' pattern="\d{1,2}/\d{1,2}/\d{4}" /></label>');
			
			if( restrictDate ){
				var startYr = $(this).find('.item_date input[name="startYr"]').val();
				var From = $(this).find('.item_date input[name="from"]').val();
				var To = $(this).find('.item_date input[name="to"]').val();
			
				//to do
			
			}
			
			
			
			variables.val( variables.val() + '\r\n' + variable +', ' + 'v');
		}
		
		
		
		
		
		code.val( code.val() + tab(2) + '</div>' );
		
		
		
		code.val( code.val() + tab(1) + '</div>' );
		console.log(label,variable,type, required, restrictLength, errText, min, max);
		
		//set the class creator to 
		
		
	});
	code.val( code.val() + tab(1) + '<div class="formRow rowCenter">');
	code.val( code.val() + tab(2) + '<input class="button" type="submit" value="SUBMIT" />' );
	code.val( code.val() + tab(1) + '</div>');
	code.val( code.val() + tab(0) + '</form>' );
	
	//$('#preview').html( code.val() );
	
	
	var generatedForm;
	
	generatedForm = CodeMirror.fromTextArea(document.getElementById("generatedFORM"), {
		lineNumbers: true,
		mode: "text/html", 
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
	
	$('input[name="mode"][value="advanced"]').prop("checked", true);
	$('#generate').click();

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
	
	
	var generatedCode, generatedSQL, generatedConn, defaultCSS;
	
	
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
	
		if( mode == "form" ){
			buildForm();
			return;
		}
	
		var lines = variables.val().split('\n');
		for(var l = 0;l < lines.length;l++){
			var newVar = lines[l].replace(/\s/g, "");
			//console.log( newVar );
			
			if( (vars.indexOf(newVar) == -1) && (varsCheck.indexOf( newVar.toLowerCase() ) == -1) && newVar != "" ){ 
				varsCheck.push( newVar.toLowerCase() ); //add to a lowercase copy of the strings sanity check later
				vars.push( newVar );					//add to our list of vars
			}
		}

		code.show();
		code.val( '<?php');
		code.val( code.val() + '\r\n\t/*Class Generated by Brendon Irwin\'s Class Generator*/\r\n');
		code.val( code.val() + '\r\n\tclass ' + tableName.capitalize() + '{' );
		
		var removals = [];
		
		if( mode == "simple" ){
			for(var v=0; v < vars.length; v++){
				var temp = vars[v].split(",");
				vars[v] = temp[0]; //tidy
				code.val( code.val() + '\r\n\t\tprivate $' + vars[v] + ';');
			}
		}else{
		
			for(var v=0; v < vars.length; v++){
				if( v > 3 ){
					var temp = vars[v].split(",");
					//console.log(temp);
					if( temp[1] == "r" ){
						//
						removals.push(v);
						//0 = name, 1 = r, 2, number times, 3, type
						if( temp[2] != null && temp[3] != null ){
							for(var c =0; c < parseInt( temp[2] ); c++ ){
								vars.push( temp[0] + "" + parseInt(c + 1) );
								varsCheck.push(  (temp[0] + "" + parseInt(c + 1)  ).toLowerCase() );
								//code.val( code.val() + '\r\n\t\tprivate $' + temp[0]  + '_' + c + ';');
								types.push( temp[3] );
							}
						}
					}else{
					
						code.val( code.val() + '\r\n\t\tprivate $' + temp[0]  + ';');
						vars[v] = temp[0];
						types.push( temp[1] );
					}					
				}else{
					code.val( code.val() + '\r\n\t\tprivate $' +  vars[v] + ';');
				}
			}
		}
		
		//console.log( removals );
		for( var r = (removals.length -1); r >= 0; r-- ){
			//console.log( removals[r] );
			vars.splice(removals[r], 1);
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
		
		/*Write object / array as CSV*/
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*Echo array as CSV file*/');
		code.val( code.val() + '\r\n\t\tfunction arrayToCSVFile($array, $filename="' + tableName + '.csv", $delimiter=",", $showHeader=true){');
		code.val( code.val() + tab(3) + 'ob_clean();');
		code.val( code.val() + tab(3) + 'if( !is_array($array) ){');
			code.val( code.val() + tab(4) + '$array = $this->asArray();');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + tab(3) + 'if( !is_array($showHeader) && $showHeader == true){');
			code.val( code.val() + tab(4) + '$header=array();');
			code.val( code.val() + tab(4) + 'foreach( $array[0] as $key => $value){');	
			code.val( code.val() + tab(5) + '$header[] = strtoupper($key);');
			code.val( code.val() + tab(4) + '}');
			code.val( code.val() + tab(4) + 'array_unshift($array, $header);');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + tab(3) + 'if( is_array($showHeader) ){');
			code.val( code.val() + tab(4) + 'array_unshift($array, $showHeader);');
		code.val( code.val() + tab(3) + '}');
		
		code.val( code.val() + tab(3) + "header('Content-Type: application/csv; charset=UTF-8');");
		code.val( code.val() + tab(3) + "header('Content-Disposition: attachement; filename=\"'.$filename.'\";');");
		code.val( code.val() + tab(3) + "$f = fopen('php://output', 'w');");
		code.val( code.val() + tab(3) + "foreach ($array as $line) {");
			code.val( code.val() + tab(4) + "fputcsv($f, $line, $delimiter);");
		code.val( code.val() + tab(3) + "}");
		code.val( code.val() + tab(3) + "exit;");
		code.val( code.val() + '\r\n\t\t}');		
		code.val( code.val() + newLine() );
		
		
		/*Fetch Objects like the current one */
		code.val( code.val() + newLine() );
		code.val( code.val() + tab(2) + '/*getObjectsLikeThis - returns array*/');
		code.val( code.val() + '\r\n\t\tfunction getObjectsLikeThis($asArray=true){');
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
		code.val( code.val() + tab(5) + 'for($i=0; $i < $numParams; $i++){');
		code.val( code.val() + tab(6) + '$query->bindParam(":value_".$i, $values[$i]);');
		code.val( code.val() + tab(5) + '}');
		code.val( code.val() + tab(5) + 'if( $query->execute() ){');
		code.val( code.val() + tab(6) + 'if( $asArray == true ){');
		code.val( code.val() + tab(7) + 'return $query->fetchAll(PDO::FETCH_ASSOC);');
		code.val( code.val() + tab(6) + '}else{');
		code.val( code.val() + tab(7) + '$objArray = array();');
		code.val( code.val() + tab(7) + 'while( $result = $query->fetchObject("' + tableName + '") ){');
		code.val( code.val() + tab(8) + '$object = $result;');
		code.val( code.val() + tab(8) + '$objArray[] = $object;');
		code.val( code.val() + tab(7) + '}');
		
		code.val( code.val() + tab(7) + 'return $objArray;');
		code.val( code.val() + tab(6) + '}');
		code.val( code.val() + tab(5) + '}');
		
		code.val( code.val() + tab(4) + '}');
		
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + '\r\n\t\t}');		
		code.val( code.val() + newLine() );
		
		
		code.val( code.val() + tab(2) + '/*get properties*/');
		code.val( code.val() + '\r\n\t\tfunction getObjectsProperties(){');
		code.val( code.val() + tab(3) + '$properties = array();');
		code.val( code.val() + tab(3) + 'foreach ($this as $key => $value) {');
		code.val( code.val() + tab(4) + 'if( $key != "id" && $key != "connection" && $key != "error" && $key != "errorCount"){');
		code.val( code.val() + tab(5) + '$properties[] = $key;');
		code.val( code.val() + tab(4) + '}');
		code.val( code.val() + tab(3) + '}');
		code.val( code.val() + tab(3) + 'return $properties;');
		code.val( code.val() + '\r\n\t\t}');
		
		
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

	defaultCSS = CodeMirror.fromTextArea(document.getElementById("defaultCSS"), {
		lineNumbers: true,
		matchBrackets: true,
		mode: "text/css",
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