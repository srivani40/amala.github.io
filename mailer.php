<?php
	print_r($_POST);
	mail("kj.harish19@gmail.com","Contact","Nmae :".$_POST["name"]."<br/>Message:".$_POST["message"]"<br/>Email:".$_POST["email"]);
?>