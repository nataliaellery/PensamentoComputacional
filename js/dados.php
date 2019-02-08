<?php
	function Insere(){
		if (isset($_POST['variable'])) {
			return($_POST['variable']);

		}else return("não deu certo");
	}
	//$complex = array('more', 'complex', 'object', array('foo', 'bar'));
?>