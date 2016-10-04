<!DOCTYPE html>
<head>
	<title>
		Bren's Simple Class Creator
	</title>
	<link rel="stylesheet" href="css/style.css" />
	<?php $CMPATH = "js/codemirror-4.0"; ?>
	<link rel="stylesheet" href="<?php echo $CMPATH; ?>/lib/codemirror.css">
	<link rel="stylesheet" href="<?php echo $CMPATH; ?>/addon/hint/show-hint.css">
	<link rel="stylesheet" href="<?php echo $CMPATH; ?>/addon/display/fullscreen.css">
	
	
	<script src="http://code.jquery.com/jquery-1.11.0.min.js"></script>
	<script src="js/jquery.autosize.min.js" type="text/javascript"></script>
	<script src="<?php echo $CMPATH; ?>/lib/codemirror.js"></script>
	<script src="<?php echo $CMPATH; ?>/addon/hint/show-hint.js"></script>
	<script src="<?php echo $CMPATH; ?>/addon/hint/xml-hint.js"></script>
	<script src="<?php echo $CMPATH; ?>/addon/hint/html-hint.js"></script>
	<script src="<?php echo $CMPATH; ?>/addon/edit/matchbrackets.js"></script>
	<script src="<?php echo $CMPATH; ?>/addon/display/fullscreen.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/htmlmixed/htmlmixed.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/xml/xml.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/javascript/javascript.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/css/css.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/clike/clike.js"></script>
	<script src="<?php echo $CMPATH; ?>/mode/php/php.js"></script>
	<script src="js/array2json.js" type="text/javascript"></script>
	<script src="js/json_sans_eval.js" type="text/javascript"></script>
	<script src="js/CRUD.js" type="text/javascript"></script>
	<script src="js/scripts.js" type="text/javascript"></script>
</head>
<body>
<div class="Frame">
	<div class="pageContentSection Expand">
		<div id="main_nav" class="wrapper">
			<div class="pageContent one-col">
				<div class="col">
					<h2>Bren's Simple Class Creator</h2>
					
					<button id="loadConfig">Load Config</button>
					
					<p>Type in the variables you'll want your class to have. id, errors and connection will automatically be added</p>
					<input type="text" name="className" id="className" placeholder="ClassName" style="text-transform: Capitalize;" value="" pattern="^[a-zA-Z0-9\S]{1,}$" title="This needs to be filled in, min of 5 characters" required="required"/><br />
					
					
					<br />
					<input type="radio" name="mode" value="simple" />Simple Mode<br />
					<input type="radio" name="mode" value="advanced" />Advanced Mode<br />
					<input type="radio" name="mode" value="form" checked/>Form Mode (incomplete)
					
					
					<div id="advancedMode" style="display:none; line-height: 1em;">
						<p>After a variable name add a , and corresponding letter to indicate type<br />
						<b>i</b> = INT <br />
						<b>v</b> = VARCHAR( default length ) <br />
						<b>t</b> = TEXT <br />
						<b>d</b> = DATE ex: 2014-05-12<br />
						<b>c</b> = CHAR( 10 ) <br />
						<b>mt</b> = MEDIUMTEXT <br />
						<b>lt</b> = LONGTEXT <br />
						<b>dt</b>  = DATETIME ex: 2014-04-10 06:15:30<br />
						<b>ts</b>  = TIMESTAMP ex: 2014-05-12 23:28:41 (current)<br />
						<b>ti</b> = TIME ex: 12:55:22 (HH:MM:SS)<br />
						<b>y</b>  = YEAR ex: 2014<br />
						<b>b</b> = BIT( 1 ) <br />
						<b>bool</b> = BOOLEAN NOT NULL<br />
						<b>r (repeat)</b> [special syntax]  variable, r, (num times), type<br />
						</p>
					</div>
					
					<textarea id="variables" style="width: 100%; min-height: 250px;" placeholder="Variables/properties of object seperated by new line"></textarea>	
					
					<div id="formMode" style="border: 1px solid #000; display: none;">
						
					
						
						<button id="addFormInput" style="display: none;" onClick="addFormRow()">Add Form Section</button>
					</div>
					<div class="clear"></div>
					
					
					<br />
					<input type="checkbox" id="includeListby" name="includeListby" value="1" checked/><label for="includeListby">Include List by Function</label><br />
					<input type="checkbox" id="includeGetby" name="includeGetby" value="1" checked/><label for="includeGetby">Include Get by Function (limit 1)</label><br />
					
					
					<label for="">Default varchar:</label><input type="number" name="defaultVarcharLength" id="defaultVarcharLength" min=1" value="45" />
					<br /><br />
					<input type="checkbox" name="buildCrud" value="1" id="buildCrud" checked/><label for="buildCrud">Build CRUD interfaces</label>
					<br />
					<input type="checkbox" name="headerfooter" value="1" id="headerfooter" checked/><label for="headerfooter">Include Header & Footer in templates</label>
					<br />
					
					<div id="buildAjaxControls" >
						<input type="checkbox" name="buildAjax" value="1" id="buildAjax" checked/><label for="buildAjax">Build Ajax Table interfaces and show toggles</label><br/>
						<input type="checkbox" name="multiDelete" value="1" id="multiDelete" checked/><label for="multiDelete">Enable Multi Delete</label>
					</div>
					<br />
					
					<button id="generate">Generate Code</button>
					<br /><br />
				</div>
				<button id="downloadEverything" style="display:none;">Download Everything!</button>
				
				<div class="col">
					<h2>Generated Class</h2>
					<p>Select editor and press F11 for full screen</p>
					<textarea id="generatedCode" style="width: 100%; min-height: 250px;"></textarea>
					<a class="download" onClick="adminPageDownload('Class')">Download Class</a>
					
					<h2>Table SQL</h2>
					<textarea id="generatedSQL" style="width: 100%; min-height: 50px; "></textarea>
					<a class="download" onClick="adminPageDownload('SQL')">Download SQL Script</a>
				
					
					<h2 id="genFormTitle" style="display: none;">Generated Form</h2>
					<textarea id="generatedFORM" style="width: 100%; min-height: 50px;"></textarea>
					
					<div id="crudInterfaces" ">
						<h2><u>Admin</u></h2>
						<textarea id="AdminPage" style="width: 100%; min-height: 50px;"></textarea>
						<a class="download" onClick="adminPageDownload('Admin')">Download Admin Page</a>
						
						<h2><u>CR</u>eate</h2>
						<textarea id="CreatePage" style="width: 100%; min-height: 50px; "></textarea>
						<a class="download" onClick="adminPageDownload('Create')">Download Create Page</a>
						
						<h2><u>U</u>pdate</h2>
						<textarea id="UpdatePage" style="width: 100%; min-height: 50px; "></textarea>
						<a class="download" onClick="adminPageDownload('Update')">Download Update Page</a>
						
						<h2><u>D</u>elete</h2>
						<textarea id="DeletePage" style="width: 100%; min-height: 50px; "></textarea>
						<a class="download" onClick="adminPageDownload('Delete')">Download Delete Page</a>
						
						<div class="ajaxCode">
							<h2><u>A</u>jax</h2>
							<textarea id="GenAjaxCode" style="width: 100%; min-height: 50px; "></textarea>
							<a class="download" onClick="adminPageDownload('Ajax')">Download Ajax Page</a>
						</div>
						
						<div class="apiCode">
							<h2>A<u>P</u>I</h2>
							<textarea id="GenAPICode" style="width: 100%; min-height: 50px;"></textarea>
							<a class="download" onClick="adminPageDownload('API')">Download API Page</a>
						</div>
						
						<h2>Export Code</h2>
						<textarea id="ExportCode" style="width: 100%; min-height: 50px; "></textarea>
						<a class="download" onClick="adminPageDownload('Export')">Download Export (CSV) Page</a>
						
						
					</div>
					
					<h2>Default CSS</h2>					
					<textarea id="defaultCSS"><style type="text/css"><?php include "formCSS.php"; ?></style></textarea>
					
					
					<h2>Default DB Driver for connection (passed into object)</h2>
					<textarea id="generatedConn" style="width: 100%; min-height: 50px; display:none;">
					</textarea>
					
					<p style="color: #5a5;">
					/* Example usage<br />
					$conn = getConnection();<br />
					$someClass = new someClass($conn);<br />
					$someClass = $someClass->load( $someID );<br />
					*/
					</p>
					
					<a class="download" onClick="adminPageDownload('Include')">Download Include File</a>
					
					<h2>Config String</h2>
					<textarea id="saveString"></textarea>

				</div>
				
				<div id="preview"></div>
				
				<div class="clear"></div>
				<p>Check out this Git Project here: <a target="_blank" href="https://github.com/bren1818/ClassCreator.git">https://github.com/bren1818/ClassCreator.git</a></p>
			</div>
		</div>
	</div>
</div>	
</body>