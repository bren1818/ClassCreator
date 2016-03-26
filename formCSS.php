<?php /*Form CSS styling*/ ?>
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

.item_restrict_dates{
	width: 100%;

}