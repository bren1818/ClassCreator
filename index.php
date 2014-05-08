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
	<style type="text/css">
		.CodeMirror{
			border: 1px solid #000;
		}
	</style>
	
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
	<script src="js/scripts.js" type="text/javascript"></script>
</head>
<body>
<div class="Frame">
	<div class="pageContentSection Expand">

		<div id="main_nav" class="wrapper">
			<div class="pageContent one-col">
				<div class="col">
					<h2>Bren's Simple Class Creator</h2>
					<p>Type in the variables you'll want your class to have. id, errors and connection will automatically be added</p>
					<input type="text" name="className" id="className" placeholder="Class Name" value="" /><br />
					<input type="checkbox" name="includeListby" value="1" /> Include List by Function<br />
					<input type="checkbox" name="includeGetby" value="1" /> Include Get by Function (limit 1)<br />
					<!--<input type="radio" name="mode" value="simple" checked/>Simple Mode<br />
					<input type="radio" name="mode" value="form" />Form Mode -->
					<textarea id="variables" style="width: 100%; min-height: 250px;" placeholder="Variables/properties of object seperated by new line"></textarea>
					
					<!--
					<div id="formMode">
						Form Mode
						<div class="formSection">
							<div class="formRow">
								<div class="item_type">
									Type: <select name="item"><option value="input">Input</option><option value="number">number</option><option value="email">email</option><option value="telephone">telephone</option><option value="textarea">textarea</option><option value="wysiwyg">wysiwyg</option><option value="code">code</option><option value="checkbox">checkbox</option><option value="select">Select</option><option value="selectMultiple">Select</option><option value="radioGroup">Radio Button Group</option><option value="checkGroup">Checkbox Group</option><option value="RegexText">Regex Text Group</option><option value="RepeatSection">Repeatable Section</option><option value="File">File</option></select>
								</div>
								<div class="item_required">							
									Required: <input type="checkbox" name="item_required">
								</div>
								<div class="type_text">
									-min,max
								</div>
								<div class="type_number">
									-min,max
								</div>
								<div class="type_range">
									-start, end
								</div>
								<div class="type_code">
									-code type
								</div>
								<div class="type_repeat_section">
									PUT SECTION CONTAINER HERE...
									Repeat N times
								</div>
								<button id="addFormInput">Add Form Input</button>
							</div>
							<button id="addFormInput">Add Form Section</button>
						</div>
					</div>
					-->
					<button id="generate">Generate Code</button>
				</div>
				
				<div class="col">
					<h2>Generated Class</h2>
					<textarea id="generatedCode" style="width: 100%; min-height: 250px; display:none;"></textarea>
					<p>Select editor and press F11 for full screen</p>
					<h2>Table SQL</h2>
					<textarea id="generatedSQL" style="width: 100%; min-height: 50px; display:none;"></textarea>
					<p>Select editor and press F11 for full screen</p>
					<!--
					<h2>Form PHP</h2>
					<textarea id="generatedPHP" style="width: 100%; min-height: 50px; display:none;"></textarea>
					--->
				</div>
				
				<div class="clear"></div>
				<p>Check out this Git Project here: <a target="_blank" href="https://github.com/bren1818/ClassCreator.git">https://github.com/bren1818/ClassCreator.git</a></p>
			</div>
		</div>
	</div>
	<div class="pageContentSection">
		<div class="wrapper" id="footer">
			Footer
			<div class="pageContent four-col">	
				<div class="col col25 col-left"></div>
				<div class="col col25"></div>
				<div class="col col25"></div>
				<div class="col col25 col-right"></div>
				<div class="clear"></div>
			</div>
		</div>
		
	</div>	
</div>	
</body>