/*
{"mode":"form","keys":"%5B%7B%22name%22:%22name%22,%22label%22:%22Name%22,%22type%22:%22text%22,%22required%22:true,%22errText%22:%22%22,%22placeHolder%22:%22your%20name%22,%22chkRestrictDates%22:false,%22startYr%22:%220%22,%22frmYr%22:%220%22,%22to%22:%220%22,%22restrictLength%22:false,%22min_length%22:%220%22,%22max_length%22:%2245%22,%22restrictAmount%22:false,%22min_amount%22:%220%22,%22max_amount%22:%220%22,%22listType%22:%22textarea%22,%22list%22:%22%22,%22pattern%22:%22undefined%22,%22listObjectName%22:%22%22,%22listObjectKeyFunction%22:%22%22,%22listObjectTitleFunction%22:%22%22%7D,%7B%22name%22:%22friend%22,%22label%22:%22Select%20People%22,%22type%22:%22select%22,%22required%22:true,%22errText%22:%22%22,%22placeHolder%22:%22-=Select=-%22,%22chkRestrictDates%22:false,%22startYr%22:%220%22,%22frmYr%22:%220%22,%22to%22:%220%22,%22restrictLength%22:false,%22min_length%22:%220%22,%22max_length%22:%2245%22,%22restrictAmount%22:false,%22min_amount%22:%220%22,%22max_amount%22:%220%22,%22listType%22:%22object%22,%22list%22:%22%22,%22pattern%22:%22undefined%22,%22listObjectName%22:%22person%22,%22listObjectKeyFunction%22:%22id%22,%22listObjectTitleFunction%22:%22name%22%7D%5D","classname":"person","listBy":true,"getBy":true,"buildCRUD":"undefined","defaultSize":"45"}
*/

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
				'<div class="tools"><button class="up"> &uarr; </botton><button class="down"> &darr; </button> <button class="delete">X</button></div>' +
				
				'<div class="ajaxControls">' +
					'<p><input type="checkbox" name="showAdmin" value="1" />: Show in Admin Interface? ' +
					'<input type="checkbox" name="useQuery" value="1" />: Use for search Querying </p>' +	
				'</div>' +

				
				'<div class="item_type">' + 
					//<option value="telephone">telephone</option><option value="File">File</option><option value="code">code</option><option value="RepeatSection">Repeatable Section</option>
					'<label>Type: ' +
					'<select name="item">' +
						'<option value="text">text</option>' +
						'<option value="number">number</option>' +
						'<option value="email">email</option>' +
						'<option value="textarea">textarea</option>' +
						'<option value="wysiwyg">wysiwyg</option>' +
						'<option value="checkbox">checkbox</option>' +
						'<option value="select">Select</option>' +
						'<option value="pattern">Input Pattern</option>' +
						'<option value="date">Date</option>' +
						'<option value="selectMultiple">Select Multiple</option>' +
						'<option value="radioGroup">Radio Button Group</option>' +
						'<option value="checkGroup">Checkbox Group</option>' +
					'</select>' +
					'</label>' + 
				'</div>' + 
				
				'<div class="item_label">' + 
					'<label>Label: <input type="text" name="label" value="" style="text-transform: lowercase;" required="required"/></label>' +
				'</div>' + 
				
				'<div class="item_variableName">' + 
					'<label>Variable name: <input type="text" name="label" value="" pattern="[a-zA-Z0-9_]+" required="required" title="Variable name, no spaces"/></label>' +
				'</div>' +
				
				'<div class="item_required">' + 				
					'<label>Required: <input type="checkbox" name="item_required"/></label>' + 
				'</div>' + 
				
				'<div class="item_error" style="display: none">' + 
					'<label>Error Text: <input type="text" value="" /></label>' +
				'</div>' + 
				
				'<div class="item_placeholder">' + 
					'<label>Placeholder: <input type="text" name="placeholder" placeholder="placeholder Text" value="" /></label>' +
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
						'<label>From: Cur Year (=/-) : <input name="from" type="number" value="0"/></label><br />' +
						'<label>To: Cur Year (=/-): <input name="to" type="number" value="0" /></label>' +
					'</div>' +
				'</div>' +
				
				'<div class="type_text type_number type_textarea" style="display: none;">' + 
					'<label>Restrict input length: <input type="checkbox" name="item_restrictLength"/></label>' + 
					'<div class="item_restrict_length" style="display: none;">' +
						'<label>Min Length: <input type="number" name="min_length" value="0"/></label><br />' +
						'<label>Max Length: <input type="number" name="max_length" value="' + $('#defaultVarcharLength').val() + '" /></label>' +
					'</div>' +
				'</div>' + 
				
				'<div class="type_number" style="display: none">' + 
					'<label>Restrict input amount: <input type="checkbox" name="item_restrictAmount"/></label>' + 
					'<div class="item_restrict_amount" style="display: none">' +
						'<label>Min amount: <input type="number" name="min_amount" value="0"/> - Max amount: <input type="number" name="max_amount" value="0" />' +
					'</div>' +
				'</div>' + 
				
				
				//'<div class="type_code" style="display: none">' + 
			
				//'</div>' + 
				
				'<div class="type_list" style="display: none">' + 
					'<p>Feed From object or textarea?</p>' +
					'<input type="radio" name="' + id + '_list_type" value="textarea" checked/> Textarea <input name="' + id + '_list_type" type="radio" value="object" /> Object<br />' +
					'<textarea class="list" placeholder="comma seperated list of items"></textarea>' +  
					
					'<div class="objectDetails" style="display: none">' +
						'<p>Object name is the name of the other object, value is the value feild stored, title is what is presented to the end user. These should be properties of the object, eg id, title</p>' +
						'<p><input type="text" name="objectName" placeholder="person" style="text-transform: capitalize;" required/> <i>eg Person</i><br />' +
						'<input type="text" placeholder="id (key)" name="objectKey" required/><i>eg:this would be ID as we want to record the ID of the person</i><br />' +
						'<input type="text" placeholder="name (display value)" name="objectTitle" required/><i>eg:this would be Name as we want to present the name of the person, but record the ID. Title and Key can be the same</i></p>' +
						
						
						
						/*Value type!!!!*/
						
						
						
						//object name
						//option value from
						//option title from
						//perform validation?
					'</div>';
				'</div>' + 
				
				//'<div class="type_repeat_section" style="display: none">' + 
				
				//'</div>' + 
				
				'<div class="type_pattern" style="display: none">' +
					'<p>Input a Regex pattern: eg: "[\+]{0,1}?\d{0,1}?[\(]{0,1}?\d{3}[\)]{0,1}?\d{3}[\-]{0,1}?\d{4}" for a phone number</p>' +
					'<textarea></textarea>' +
				'</div>' +
				
				
		
			'</div>' + 
			
		'</div>';
		$('#formMode').append(html);
		$('#formSection_' + id + ' .tools .delete').click(function(event){
			$(this).closest('.formSection').remove();
		});
		$('#formSection_' + id + ' .tools .up').click(function(event){
			 $(this).parents('.formSection').insertBefore($(this).parents('.formSection').prev());
			
			$('#addFormInput').detach().appendTo( $('#formMode') );
		});
		$('#formSection_' + id + ' .tools .down').click(function(event){
			$(this).parents('.formSection').insertAfter($(this).parents('.formSection').next());
			
			$('#addFormInput').detach().appendTo( $('#formMode') );
		});
		
		
		
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
					$('#formSection_' + id + ' .type_text').show();
					
				break;
				//case "code":

				//break;
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
				//case "RepeatSection":
				

				//break;
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

		$('#formSection_' + id + ' .type_list input[type="radio"]').change(function(event){
			if( $(this).val() == "textarea" ){
				$(this).parent().find('.objectDetails').hide();
				$(this).parent().find('textarea.list').show();
			}else{
				$(this).parent().find('.objectDetails').show();
				$(this).parent().find('textarea.list').hide();
			}
		});
		
		$('#addFormInput').detach().appendTo( $('#formMode') );
	
	});
}

	function getFormVals(mode){
		if( mode == "advanced" || mode == "simple" ){
			return encodeURI($('#variables').val());
		}else{
			var rows = [];
			$('#formMode .formSection').each(function(){
				var row = { 
					'name': $(this).find('.item_variableName input').val(), 
					'label': $(this).find('.item_label input').val(), 
					'type':  $(this).find('.item_type select option:selected').val(),
					'required': $(this).find('.item_required input').prop("checked"),
					'errText': $(this).find('.item_error input').val(),
					'placeHolder' : $(this).find('.item_placeholder input').val(),
					//item_date
					'chkRestrictDates' :	 $(this).find('.item_date > input[name="item_restrictDates"]').prop("checked"),
					'startYr' :	 $(this).find('.item_date .item_restrict_dates input[name="startYr"]').val(),
					'frmYr'	:  $(this).find('.item_date .item_restrict_dates input[name="from"]').val(),
					'to' :	 $(this).find('.item_date .item_restrict_dates input[name="to"]').val(),
						
					//type_text type_number type_textarea
					'restrictLength': 	 $(this).find('.type_text.type_number.type_textarea input[name="item_restrictLength"]').prop("checked"),
					'min_length': $(this).find('.type_text.type_number.type_textarea .item_restrict_length input[name="min_length"]').val(),
					'max_length': $(this).find('.type_text.type_number.type_textarea .item_restrict_length  input[name="max_length"]').val(),
						
					//type_number
					'restrictAmount':  $(this).find('.type_number input[name="item_restrictAmount"]').prop("checked"),	
					'min_amount': $(this).find('.type_number .item_restrict_amount input[name="min_amount"]').val(),
					'max_amount': $(this).find('.type_number .item_restrict_amount input[name="max_amount"]').val(),
						
					//type_code
					//type_list
					'listType' : $(this).find('.type_list > input[type="radio"]:checked').val(),
					'list' : encodeURI( $(this).find('.type_list textarea').val() ),
					//type_repeat_section
					//type_pattern
					'pattern' : encodeURI( $(this).find('.type_pattern textarea').val() ),
					
					'listObjectName' : $(this).find('.type_list  .objectDetails input[name="objectName"]').val(),
					'listObjectKeyFunction' : $(this).find('.type_list  .objectDetails input[name="objectKey"]').val(),
					'listObjectTitleFunction' :  $(this).find('.type_list  .objectDetails input[name="objectTitle"]').val(),
					
					'showAdmin': $(this).find('input[name="showAdmin"]').prop("checked"),
					'useQuery': $(this).find('input[name="useQuery"]').prop("checked")
					
					
				}
				//console.log( row );
				
				rows.push( row );
			});
			return rows;
		}
	}
	
	function makeSaveString(){
		//end generate button click
		var m =  $('input[name="mode"]:checked').val();
		var v = getFormVals( m );
	
		var SaveString = {
			'mode' : m,
			'keys' :  encodeURI(JSON.stringify(v)),
			'classname' : $('#className').val(),
			'listBy' : $('input[name="includeListby"]').prop("checked"),
			'getBy' : $('input[name="includeGetby"]').prop("checked"),
			'buildCRUD' : $('input[name="name="buildCrud"]').prop("checked"),
			'buildAjax' : $('input[name="name="buildAjax"]').prop("checked"),
			'defaultSize' : $('#defaultVarcharLength').val()
		}
		$('#saveString').val( array2json(SaveString) );
	}


/**

**********************************

**/	

var hasGenerated = 0;
var cmInstances = {}
	
function makeCodeEditor(id, EditorMode){
	if( hasGenerated != 1 ){
		cmInstances['_' + id] = CodeMirror.fromTextArea(document.getElementById("" + id + ""), {
			lineNumbers: true,
			mode: EditorMode, //"text/html", 
			indentUnit: 4,
			indentWithTabs: true,
			matchBrackets: true,
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
	}else{
		cmInstances['_' + id].setValue( $("#" + id).val() );
		$('#' + id).hide();
	}
}

	
function buildForm(){
	var code = $('#generatedFORM');
	var variables = $('#variables');
	
	var frmName = $('#className').val().toLowerCase().trim();
	
	code.show();
	code.val(  '<!--Form Generated by Brendon Irwin\'s Form Generator-->\r\n');
	
	code.val(  code.val() + tab(0) + '<?php' );
	code.val(  code.val() + tab(1) + '$conn = null; //set to DB Conn');
	code.val(  code.val() + tab(1) + '$' + frmName + ' = new ' + frmName.capitalize() + '($conn); ');
	code.val(  code.val() + tab(1) + 'if(strtoupper($_SERVER["REQUEST_METHOD"]) === "POST") {');
	code.val(  code.val() + tab(2) + '$' + frmName + '->getFromPost();');
	code.val(  code.val() + tab(1) + '}');
	code.val(  code.val() + tab(0) + '?>' );
	
	code.val( code.val() + tab(0) + '<form name="' + frmName + '" id="' + frmName + '" method="POST" action="" enctype="multipart/form-data">' );
	
	//
	getFormInnards( 'generatedFORM' );
	
	
	code.val( code.val() + tab(1) + '<div class="formRow rowCenter">');
	code.val( code.val() + tab(2) + '<input class="button" type="submit" value="SUBMIT" />' );
	code.val( code.val() + tab(1) + '</div>');
	code.val( code.val() + tab(0) + '</form>' );
	
	if( ! $('#buildCrud').prop('checked') == true ){
		//show the form
		makeCodeEditor('generatedFORM', "text/html");
	}else{
		//hide the form
		$('#generatedFORM').hide();
	}
	
	
	makeSaveString();
	
	$('input[name="mode"][value="advanced"]').prop("checked", true);
	
	$('#generate').click();
	
	
	
$('input[name="mode"][value="form"]').prop("checked", true);
	
	if( hasGenerated == 0){
		hasGenerated = 1; // flag
	}
}

/**

**********************************

**/


function saveTextAsFile(textToWrite, fileNameToSaveAs)
{
    var textToWrite = $('#' + textToWrite ).val();
    var textFileAsBlob = new Blob([textToWrite], {type:'text/plain'});
   // var fileNameToSaveAs = //Your filename;

    var downloadLink = document.createElement("a");
    downloadLink.download = fileNameToSaveAs;
    downloadLink.innerHTML = "Download File";
    if (window.webkitURL != null)
    {
        // Chrome allows the link to be clicked
        // without actually adding it to the DOM.
        downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    }
    else
    {
        // Firefox requires the link to be added to the DOM
        // before it can be clicked.
        downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
        downloadLink.onclick = destroyClickedElement;
        downloadLink.style.display = "none";
        document.body.appendChild(downloadLink);
    }

    downloadLink.click();
}

function adminPageDownload(type){
	
		var className = $('#className').val().toLowerCase().trim().capitalize();
		
		if( type == "Class"){
			var name = className + '.php';
			saveTextAsFile('generatedCode', name );
		}else if(type == "SQL"){
			var name = className + 'SQL.sql';
			saveTextAsFile('generatedSQL', name);
		}else if(type == "Admin"){
			var name = className + 'Admin.php';
			saveTextAsFile('AdminPage', name);
		}else if(type == "Create"){
			var name = 'create' + className + '.php';
			saveTextAsFile('CreatePage', name);
		}else if(type == "Update"){
			var name = 'modify' + className + '.php';
			saveTextAsFile('UpdatePage', name);
		}else if(type == "Delete"){
			var name = 'delete' + className + '.php';
			saveTextAsFile('DeletePage', name);
		}else if(type == "Include"){
			var name = 'include.php';
			saveTextAsFile('generatedConn', name);
		}else if(type=="Ajax"){
			var name = 'ajaxTable' + className + '.php';
			saveTextAsFile('GenAjaxCode', name);
		}
		
		

}


$(function(){
	var variables = $('#variables');

	var className =  $('#className');
	var code =  $('#generatedCode');
	var sql = $('#generatedSQL');
	var generatedCode, generatedSQL, generatedConn, defaultCSS;
	
	
	
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
			if( $('#formMode .formSection').length == 0 ){
				addFormRow();
			}
		}
	});
	
	
	$('#buildCrud').click(function(e){
		if( $(this).prop("checked") ){
			//$('#crudInterfaces').show();
			$('#buildAjaxControls').show();
			$('body').removeClass('showAjaxControls');
		}else{
			$('#crudInterfaces').hide();
			$('#buildAjaxControls').hide();
			$('body').removeClass('showAjaxControls');
		}
	
	});
	
	$('#buildAjax').click(function(e){
		if( $(this).prop("checked") ){
			$('body').addClass('showAjaxControls');
		}else{
			$('body').removeClass('showAjaxControls');
		}
		
	});
	
	
	
	$('#generate').click(function(event){
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
			//
			//console.log(  $('#buildCrud').prop('checked') )
			if( $('#buildCrud').prop('checked')  ){
				$('#crudInterfaces').show();
				buildAdminForm();
				buildCreateForm();
				buildUpdateForm();
				buildDeleteForm();
				if( $('#buildAjax').prop('checked') == true  ){
					buildAjaxTable();
				}
				makeSaveString();
				
				//$('input[name="mode"][value="form"]').prop("checked", true);
				buildForm();
			}else{
				$('#genFormTitle').show();
				buildForm();
			}
			
			return;
		}else{
			if( $.trim( $('#saveString').val() ) == "" ){
				makeSaveString();
			}
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
		code.val( code.val() + '\r\n/*  Class Generated by Brendon Irwin\'s Class Generator\r\n');
		
		code.val( code.val() + '\r\n\tClass: ' + tableName.capitalize() + '\r\n');
		code.val( code.val() + '\r\n\tFile: ' + tableName.capitalize() + '.php \r\n');
		
		code.val( code.val() + '\r\n\tLoad Config String:\r\n');
		code.val( code.val() + '\r\n\t' + $('#saveString').val() );
		/*
		for(var v=0; v < vars.length; v++){
			if( v > 3 ){
				var temp = vars[v].split(",");
				if( temp.length == 1 ){
					code.val( code.val() + '\r\n\t'  + temp[0].trim()  + ', v'   );
				}else{				
					code.val( code.val() + '\r\n\t'  + temp[0].trim()  + ', ' + temp[1].trim() );
				}
			}
		}	
		*/
		code.val( code.val() + '\r\n\r\n*/\r\n' );
		
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
		
		//Get From Array
		code.val( code.val() + '\r\n\t\tfunction getFromArray($arr){');
		for(var v=0; v < vars.length; v++){
			if( vars[v] != "connection" && vars[v] != "errors" && vars[v] != "id" && vars[v] != "errorCount" ){
				code.val( code.val() + tab(3) + '$this->set' + vars[v].capitalize() + '( (isset($arr["' +  vars[v] + '"])) ? $arr["' +  vars[v] + '"] : $this->get' +  vars[v].capitalize() + '() );');
			}
		
		}
		code.val( code.val() + '\r\n\t\t}');
		code.val( code.val() + newLine() );
		
		//compare to
		code.val( code.val() + '\r\n\t\tfunction compareTo($' + tableName + '){');
		code.val( code.val() + tab(3) + '$log = array();' );
		for(var v=0; v < vars.length; v++){
			code.val( code.val() + tab(3) + 'if($this->get' + vars[v].capitalize() + '() != $' + tableName + '->get' + vars[v].capitalize() + '() ){');
				code.val( code.val() + tab(4) + '$log["' + vars[v].capitalize() + '"] = "modified";');
			code.val( code.val() + tab(3) + '}else{');
				code.val( code.val() + tab(4) + '$log["' + vars[v].capitalize() + '"] = "un-modified";');
			code.val( code.val() + tab(3) + '}');
			
			
		}
		code.val( code.val() + tab(2) + 'return $log;');
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
		sql.val('CREATE TABLE IF NOT EXISTS `' + tableName + '` (');
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
		
		makeCodeEditor('generatedCode', "text/x-php");
		makeCodeEditor('generatedSQL', "text/javascript");
		
		
		if( $('#buildCrud').prop("checked") == true ){
			$('#crudInterfaces').show();
			
		}else{
			$('#crudInterfaces').hide();
		}
		$('a.download').show();
	});
	
	
	
	/*******************LOAD*****************/
	
	
	$('#loadConfig').click(function(e){
		e.preventDefault();
		var loadStr = prompt("Please Paste load string");
		if( loadStr != null){
			//decode load string
			var o = jsonParse( loadStr );
			if(  o === Object(o) ){
				 
				//console.log( o );
				$('input:radio[name="mode"][value="' + o.mode + '"]').prop('checked',true);
				$('input:radio[name="mode"]').click();
				
				$('#className').val( o.classname );
				if( o.mode == "advanced" || o.mode == "simple" ){
					$('#variables').val( decodeURI(o.config) );
				}else{
					var keys = jsonParse( decodeURI( o.keys ) );
					$('#formMode .formSection').remove();
					
				//	console.log( keys );
					
					for(var k=0; k < keys.length; k++){
						$('#addFormInput').click();
						var lastRow = $('#formMode .formSection').last().attr('id');
						
						$('#' + lastRow + ' .item_variableName input').val( keys[k].name );  			//variable name
						$('#' + lastRow + ' .item_label input').val( keys[k].label );        			//label
						$('#' + lastRow + ' .item_type select').val( keys[k].type );					//type
						
						$('#' + lastRow + ' .item_type select').change(); //trigger change
						
						$('#' + lastRow + ' .item_error input').val( keys[k].errText );					//error message
						$('#' + lastRow + ' .item_placeholder input').val( keys[k].placeHolder );		//placeholder message
						$('#' + lastRow + ' .item_required input').prop('checked', keys[k].required ); 	//required
						
						//$('#' + lastRow + ' .item_date > input[name="item_restrictDates"]').prop("checked",  keys[k].chkRestrictDates );
						if( keys[k].chkRestrictDates ){  $('#' + lastRow + ' .item_date > input[name="item_restrictDates"]').click(); }
						
						$('#' + lastRow + ' .item_date .item_restrict_dates input[name="startYr"]').val(  keys[k].startYr );
						$('#' + lastRow + ' .item_date .item_restrict_dates input[name="from"]').val(  keys[k].frmYr );
						$('#' + lastRow + ' .item_date .item_restrict_dates input[name="to"]').val(  keys[k].to );
						
						
						//$('#' + lastRow + ' .type_text.type_number.type_textarea input[name="item_restrictLength"]').prop("checked",  keys[k].restrictLength );
						if( keys[k].restrictLength ){  $('#' + lastRow + ' .type_text.type_number.type_textarea input[name="item_restrictLength"]').click(); }
						
						$('#' + lastRow + ' .type_text.type_number.type_textarea .item_restrict_length input[name="min_length"]').val(  keys[k].min_length );
						$('#' + lastRow + ' .type_text.type_number.type_textarea .item_restrict_length  input[name="max_length"]').val(  keys[k].max_length );
						
						
						//$('#' + lastRow + ' .type_number input[name="item_restrictAmount"]').prop("checked",  keys[k].restrictAmount );
						if( keys[k].restrictAmount ){  $('#' + lastRow + ' .type_number input[name="item_restrictAmount"]').click(); }
						
						$('#' + lastRow + ' .type_number .item_restrict_amount input[name="min_amount"]').val(  keys[k].min_amount );
						$('#' + lastRow + ' .type_number .item_restrict_amount input[name="max_amount"]').val(  keys[k].max_amount );
						$('#' + lastRow + ' .type_list textarea').val(  decodeURI(keys[k].list) );
						$('#' + lastRow + ' .type_pattern textarea').val(  decodeURI(keys[k].pattern ) ); 
						
						
						$('#' + lastRow + ' .type_list > input[value="' + keys[k].listType + '"]').prop('checked',true);
						$('#' + lastRow + ' .type_list > input[value="' + keys[k].listType + '"]').change();
						
						if(keys[k].listType == "object" ){
							$('#' + lastRow + ' .type_list  .objectDetails input[name="objectName"]').val(  keys[k].listObjectName );
							$('#' + lastRow + ' .type_list  .objectDetails input[name="objectKey"]').val(  keys[k].listObjectKeyFunction );
							$('#' + lastRow + ' .type_list  .objectDetails input[name="objectTitle"]').val(  keys[k].listObjectTitleFunction );
						}	
							
						$('#' + lastRow ).find('input[name="showAdmin"]').prop("checked", keys[k].showAdmin);
						$('#' + lastRow ).find('input[name="useQuery"]').prop("checked", keys[k].useQuery);
						
					}
					
					/*
					{"mode":"form","keys":"%5B%7B%22name%22:%22name%22,%22label%22:%22Name:%22,%22type%22:%22text%22,%22required%22:true,%22errText%22:%22Name%20is%20a%20required%20field%22%7D,%7B%22name%22:%22age%22,%22label%22:%22Age:%22,%22type%22:%22number%22,%22required%22:true,%22errText%22:%22%22%7D,%7B%22name%22:%22email%22,%22label%22:%22Email:%22,%22type%22:%22email%22,%22required%22:true,%22errText%22:%22email%20required%22%7D%5D","classname":"User","listBy":true,"getBy":true,"defaultSize":"45"}
					*/
				
				}
				
				$('#defaultVarcharLength').val(  o.defaultSize );
				$('input[name="includeListby"]').prop("checked", o.listBy);
				$('input[name="includeGetby"]').prop("checked", o.getBy);
				if( o.buildCRUD ){
					$('input[name="buildCrud"]').click();
					if( o.buildAjax ){
						$('input[name="buildAjax"]').click();
					}
				}
				
			}
			
			
		}		
	});
	
	$('textarea').autosize();   

	makeCodeEditor("defaultCSS", "text/css");
	makeCodeEditor("generatedConn", "text/x-php");
	
	$('input:radio[name=mode]').filter(":checked").change();
	
	$('#downloadEverything').click(function(){
		$('a.download').click();
	});
	
	
});