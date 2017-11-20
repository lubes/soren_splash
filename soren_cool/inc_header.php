<?php 
//$path = $_SERVER['DOCUMENT_ROOT'];

// Determine whether we're working on a local server
// or on the real server:
if (stristr($_SERVER['HTTP_HOST'], 'local') || (substr($_SERVER['HTTP_HOST'], 0, 7) == '192.168')) {
	$local = TRUE;
} else {
	$local = FALSE;
}

// Determine location of files and the URL of the site:
// Allow for development on different servers.
if ($local) {
	// Always debug when running locally:
	$debug = TRUE;
	// Define the constants:
	define ('BASE_URI', ''.$_SERVER['DOCUMENT_ROOT'].'/flare');
	define ('BASE_URL',	'http://localhost:8888/soren_cool');	
} else {
	define ('BASE_URI', ''.$_SERVER['DOCUMENT_ROOT'].'');
	define ('BASE_URL',	'http://soren.truf.biz/v3/');
}
$uri_link =  BASE_URL;
?>

<!DOCTYPE html>

<html lang="en">
<head>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="Soren">
    <meta name="author" content="">
    <title>Soren</title>
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
    
    <link rel="stylesheet" type="text/css" href="https://cloud.typography.com/6954596/7114992/css/fonts.css" />
    
    <link rel="stylesheet" type="text/css" media="screen" href="<?php echo $uri_link;?>/dist/css/all.min.css">
    
    <!--<link rel="stylesheet" type="text/css" media="screen" href="<?php echo $uri_link;?>/assets/scss/slider.css">-->
    
    <link rel="stylesheet" type="text/css" media="screen" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
    
    <link rel="stylesheet" type="text/css" media="screen" href="http://ionicons.com/css/ionicons.min.css?v=2.0.1">
    
    <!-- Tympanus Slider -->
    <script src="https://tympanus.net/Tutorials/CSSMaskTransition/js/modernizr-custom.js"></script>
    
</head>
<body class="demo-2">
<!-- Side Menu -->
<div id="side_nav" class="">
    <div class="nav-content">
    <a class="logo-wrapper" href="#home">
        <img src="<?php echo $uri_link;?>/assets/images/logo_vertical.svg" class="img-fluid" />
    </a>
    <span class="nav_title">EXPERIENTIAL TALENT AGENCY</span>
    <a id="menu_toggle" class="">
        <div class="hammies">
            <span></span>
            <span></span>
            <span></span>
        </div>
    </a>   
    <div class="nav_wrap">
        <ul class="nav_list list-unstyled">
            <li><a rel="relativeanchor" href="#about">About</a></li>
            <li><a rel="relativeanchor" href="#roster">Roster</a></li>
            <li><a rel="relativeanchor" href="#clients">Clients</a></li>
            <li><a rel="relativeanchor" href="#contact">Contact</a></li>
        </ul>
    </div>
    </div>
</div>