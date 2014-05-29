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
		
		.formRow > div{
			width: 23%;
			float: left;
			display: block;
			min-height: 40px;
			padding: 0px 1%;
			clear: both;
		}
		
		.formRow{
			clear: both;
			width: 100%;
			margin: 10px 0px;
			overflow: hidden;
			border-top: 1px solid #000;
			border-bottom: 1px solid #000;
		}
		
		#formMode .formRow:first-child{
			border-top: none;
		}
		
		
		input:invalid,
		input:required {
			box-shadow: 3px 1px 5px rgba(200, 0, 0, 0.85);
			border: 1px solid rgb(200,0,0);
		}
		
		input:valid{
			box-shadow: none;
			background-repeat: no-repeat;
			border: 1px solid #0f0;
		}
		
		input[type="text"]{ padding-left: 5px; }
		
		#preview{
			padding: 10px;
		}
		
		#preview > form .formRow{
			border: none;
		}
		
		#preview > form{
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
					<input type="text" name="className" id="className" placeholder="Class Name" value="" pattern=".{5,}" title="This needs to be filled in, min of 5 characters" required="required"/><br />
					
					
					<br />
					<input type="radio" name="mode" value="simple" checked/>Simple Mode<br />
					<input type="radio" name="mode" value="advanced" />Advanced Mode<br />
					<input type="radio" name="mode" value="form" />Form Mode (incomplete)
					
					
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
						
					
						
						
					</div>
					<div class="clear"></div>
					<button id="addFormInput" style="display: none;" onClick="addFormRow()">Add Form Section</button>
					<br />
					<input type="checkbox" name="includeListby" value="1" /> Include List by Function<br />
					<input type="checkbox" name="includeGetby" value="1" /> Include Get by Function (limit 1)<br />
					Default varchar: <input type="number" name="defaultVarcharLength" id="defaultVarcharLength" min=1" value="45" />
					
					
					<button id="generate">Generate Code</button>
				</div>
				
				<div class="col">
					<h2>Generated Class</h2>
					<textarea id="generatedCode" style="width: 100%; min-height: 250px; display:none;"></textarea>
					<p>Select editor and press F11 for full screen</p>
					<h2>Table SQL</h2>
					<textarea id="generatedSQL" style="width: 100%; min-height: 50px; display:none;"></textarea>
					<p>Select editor and press F11 for full screen</p>
					
					<h2>Generated Form</h2>
					<textarea id="generatedFORM" style="width: 100%; min-height: 50px; display:none;"></textarea>
<h2>Default CSS</h2>					
<textarea id="defaultCSS">
<style type="text/css">
.formRow{
	clear: both;
	width: 780px;
	padding: 10px 10px;
	margin: 0 auto;
}
.rowLabel{ float: left; width: 49%; clear: left; }
.rowField{ float: right; width: 49%; clear: right; }
.rowCenter{ width: 100%; clear: both; text-align: center; }

.rowCenter input[type="submit"],
.rowCenter input[type="reset"]{
	margin: 0px 10px; cursor: pointer;
}

input.login:valid,
input.empty:valid{
	box-shadow: none;
	background-image: none;
	border: 1px solid #000;
}

select:required,
select:invalid,
input:invalid,
input:required {
	box-shadow: 3px 1px 5px rgba(200, 0, 0, 0.85);
	border: 1px solid rgb(200,0,0);
}

select:valid{
	box-shadow: none;
	border: 1px solid #000;
}

input:valid{
	box-shadow: none;
	background-image: url('images/correct.png');
	background-position: 95%;
	background-repeat: no-repeat;
	border: 1px solid #0f0;
}

textarea{
	min-height: 100px;
}

.button{
	cursor: pointer;
	-moz-box-shadow:inset 0px 1px 0px 0px #97c4fe;
	-webkit-box-shadow:inset 0px 1px 0px 0px #97c4fe;
	box-shadow:inset 0px 1px 0px 0px #97c4fe;
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #3d94f6), color-stop(1, #1e62d0) );
	background:-moz-linear-gradient( center top, #3d94f6 5%, #1e62d0 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#3d94f6', endColorstr='#1e62d0');
	background-color:#3d94f6;
	border: 1px solid #3d94f6!important;
	-webkit-border-top-left-radius:4px;
	-moz-border-radius-topleft:4px;
	border-top-left-radius:4px;
	-webkit-border-top-right-radius:4px;
	-moz-border-radius-topright:4px;
	border-top-right-radius:4px;
	-webkit-border-bottom-right-radius:4px;
	-moz-border-radius-bottomright:4px;
	border-bottom-right-radius:4px;
	-webkit-border-bottom-left-radius:4px;
	-moz-border-radius-bottomleft:4px;
	border-bottom-left-radius:4px;
	text-indent:0;
	border:1px solid #337fed;
	display:inline-block;
	color:#ffffff;
	font-family:Arial;
	font-size:13px;
	font-weight:normal;
	font-style:normal;
	height:auto;
	line-height:22px;
	width:auto;
	text-decoration:none;
	text-align:center;
	text-shadow:1px 1px 0px #1570cd;
	padding: 5px 20px;
}

.button:hover {
	background:-webkit-gradient( linear, left top, left bottom, color-stop(0.05, #1e62d0), color-stop(1, #3d94f6) );
	background:-moz-linear-gradient( center top, #1e62d0 5%, #3d94f6 100% );
	filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#1e62d0', endColorstr='#3d94f6');
	background-color:#1e62d0;
}

.button:active {
	position:relative;
	top:1px;
}
</style>
</textarea>
					
					
					<h2>Default DB Driver for connection (passed into object)</h2>
<textarea id="generatedConn">
&lt;?php
//some instances may bark if date isn't set
date_default_timezone_set("America/New_York");

function getConnection() {
	$mode = 1;
	if( $mode == 1 ){
		$dbName = "localDB"; 			//Database Name
		$dbUser = "localUser"; 			//Database User
		$dbPass = "awesomePassword"; 	//Database Password
		$dbHost = "localhost";
	}else if( $mode == 2 ){	
		$dbName = "stagingDB"; 			//Database Name
		$dbUser = "stagingUser"; 		//Database User
		$dbPass = "stagingPassword"; 	//Database Password
		$dbHost = "stagingHost";
	}else if( $mode == 3 ){
		//prod connection
	}
	
	$dbc = null;
	try {
		$dbc = new PDO('mysql:host='.$dbHost.';dbname='.$dbName, $dbUser, $dbPass);
		$dbc->setAttribute( PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION );
	}
	catch(PDOException $e) {
		echo "<h2>An error has occurred connecting to the database</h2>";
		echo "<p>".$e->getMessage()."</p>";
		file_put_contents('PDOErrorsLog.txt', $e->getMessage(), FILE_APPEND);
	}
	return $dbc;
}

//example
$conn = getConnection();
$someClass = new someClass($conn);
$someClass = $someClass->load( $someID );

?&gt;
</textarea>
				</div>
				
				
				<div id="preview"></div>
				
				
				
				
				
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