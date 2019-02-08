<?php
	function Insere(){
		$nome = "nenhum";
		if(isset($_POST['foo']))return($_POST['foo']);
		else return($nome);
	}
	//$complex = array('more', 'complex', 'object', array('foo', 'bar'));
?>