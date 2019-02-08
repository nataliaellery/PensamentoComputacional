<?php
include 'js/dados.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Pensamento Computacional</title>
        <script src="js/Matriz.js"></script>
        <script src="js/Imagem.js"></script>
        <script src="js/Programacao.js"></script>
        <script src="js/Match.js"></script>
        <script src="js/Pontos.js"></script>
        <script src="js/Tangram.js"></script>
        <script src="js/Escore.js"></script>
        <script src="js/Sequencia.js"></script>
        <script src="js/Classifica.js"></script>
        <script src="js/ObjClassifica.js"></script>
        <script src="js/PersonagemProg.js"></script>
        <script src="js/TelaEscolha.js"></script>
        <script src="js/TelaNome.js"></script>
        <script src="js/Instrucoes.js"></script>
        <script src="js/main.js"></script>		
  		<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
		<br>
		Teste PHP 8
		<br>
        <canvas id="gameCanvas" width="800" height="600">
			<script>
				begin();
			</script>
		</canvas>
		<br>
		<br>
		<?php
			try{
				$pg_conn = pg_connect("host=ec2-54-83-17-151.compute-1.amazonaws.com dbname=dfcnomqkfc6nng user=gwdcijtyhvwnnc password=346eae8e68ed1902b1f768662c80579ebe927e8194ae0ee9f787e15802fbb144");
				//$sqlResultado = pg_query($pg_conn, "CREATE TABLE resultadosNovos(id SERIAL PRIMARY KEY, dataHora VARCHAR(200) NOT NULL, aluno VARCHAR(200) NOT NULL, pontosGeral0 INT, pontosDica0 INT, pontosClicks0 INT, pontosTempo0 INT, pontosLimpar0 INT, pontosPulou0 INT, pontosGeral1 INT,pontosDica1 INT, pontosClicks1 INT, pontosTempo1 INT, pontosLimpar1 INT, pontosPulou1 INT, pontosGeral2 INT, pontosDica2 INT, pontosClicks2 INT, pontosTempo2 INT, pontosLimpar2 INT, pontosPulou2 INT, pontosGeral3 INT, pontosDica4 INT, pontosClicks4 INT, pontosTempo4 INT, pontosLimpar4 INT, pontosPulou4 INT, matchGeral0 INT, matchDica0 INT, matchClicks0 INT, matchTempo0 INT, matchGiros0 INT, matchPulou0 INT, matchGeral1 INT, matchDica1 INT, matchClicks1 INT, matchTempo1 INT, matchGiros1 INT, matchPulou1 INT, tangramGeral0 INT, tangramDica0 INT, tangramClicks0 INT, tangramTempo0 INT, tangramGiros0 INT, tangramPulo0 INT, tangramGeral1 INT, tangramDica1 INT, tangramClicks1 INT, tangramTempo1 INT, tangramGiros1 INT, tangramPulou1 INT, classificaGeral INT,classificaTempo INT, classificaDica INT, classificaTentativa INT, classificaLimpar INT, classificaPulou INT, sequenciaGeral0 INT, sequenciaTempo0 INT, sequenciaDica0 INT, sequenciaTentativa0 INT, sequenciaPulou0 INT, sequenciaGeral1 INT, sequenciaTempo1 INT, sequenciaDica1 INT, sequenciaTentativa1 INT, sequenciaPulou1 INT, progGeral0 INT, progTempo0 INT, progInstrucoes0 INT, progApagou0 INT, progApagouAll0 INT, progPlay0 INT, progPulou0 INT, progGeral1 INT, progTempo1 INT, progInstrucoes1 INT, progApagou1 INT, progApagouAll1 INT, progPlay1 INT, progPulou1 INT, progGeral2 INT, progTempo2 INT, progInstrucoes2 INT, progApagou2 INT, progApagouAll2 INT, progPlay2 INT, progPulou2 INT, progGeral3 INT, progTempo3 INT, progInstrucoes3 INT, progApagou3 INT, progApagouAll3 INT, progPlay3 INT, progPulou3 INT, progGeral4 INT, progTempo4 INT, progInstrucoes4 INT, progApagou4 INT, progApagouAll4 INT, progPlay4 INT, progPulou4 INT, progGeral5 INT, progTempo5 INT, progInstrucoes5 INT, progApagou5 INT, progApagouAll5 INT, progPlay5 INT, progPulou5 INT, progGeral6 INT, progTempo6 INT, progInstrucoes6 INT, progApagou6 INT, progApagouAll6 INT, progPlay6 INT, progPulou6 INT, progLoopGeral0 INT, progTempoLoop0 INT, progInstrucoesLoop0 INT, progApagouLoop0 INT, progApagouAllLoop0 INT, progPlayLoop0 INT, progLoopLoop0 INT, progInstrucoesLoopLoop0 INT, progPulouLoop0 INT, progLoopGeral1 INT, progTempoLoop1 INT, progInstrucoesLoop1 INT, progApagouLoop1 INT, progApagouAllLoop1 INT, progPlayLoop1 INT, progLoopLoop1 INT, progInstrucoesLoopLoop1 INT, progPulouLoop1 INT, abstracao INT, decomposicao INT, reconhecimento INT, programacao INT)") or die("Error in query: $query." . pg_last_error($pg_conn)); 
				echo "conexão com banco de dados succedida";
				//echo "tabela criada com sucesso";
			}catch(Exception $ex){
				echo "erro" . $ex->getMessage();
			}
		?>
		teste
	</body>
</html>
