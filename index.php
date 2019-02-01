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
        <link rel="stylesheet" href="css/style.css" />
    </head>
    <body>
        <canvas id="gameCanvas" width="800" height="600">
			<script>
				begin();
			</script>
		</canvas>
		<?php
			try{
				$pg_conn = pg_connect("host=ec2-54-83-17-151.compute-1.amazonaws.com dbname=dfcnomqkfc6nng user=gwdcijtyhvwnnc password=346eae8e68ed1902b1f768662c80579ebe927e8194ae0ee9f787e15802fbb144");
				//$sqlResultado = pg_query($pg_conn, "CREATE TABLE resultadosNovos(id SERIAL PRIMARY KEY, aluno VARCHAR(200) NOT NULL, pontosDica0 INT, pontosClicks0 INT, pontosTempo0 INT, pontosLimpar0 INT,pontosDica1 INT, pontosClicks1 INT, pontosTempo1 INT, pontosLimpar1 INT, pontosDica4 INT, pontosClicks4 INT, pontosTempo4 INT, pontosLimpar4 INT, pontosDica5 INT, pontosClicks5 INT, pontosTempo5 INT, pontosLimpar5 INT, matchDica0 INT, matchClicks0 INT, matchTempo0 INT, matchGiros0 INT, matchDica1 INT, matchClicks1 INT, matchTempo1 INT, matchGiros1 INT, matchDica5 INT, matchClicks5 INT, matchTempo5 INT, matchGiros5 INT, matchDica6 INT, matchClicks6 INT, matchTempo6 INT, matchGiros6 INT,classificaTempo INT, classificaDica INT, classificaTentativa INT, classificaLimpar INT, sequenciaTempo0 INT, sequenciaDica0 INT, sequenciaTentativa0 INT, sequenciaTempo1 INT, sequenciaDica1 INT, sequenciaTentativa1 INT, palitoTempo0 INT, palitoDica0 INT, palitoClicks0 INT, palitoGira0 INT, palitoTentativa0 INT, palitoLimpar0 INT, palitoTempo1 INT, palitoDica1 INT, palitoClicks1 INT, palitoGira1 INT, palitoTentativa1 INT, palitoLimpar1 INT, progTempo0 INT, progInstrucoes0 INT, progApagou0 INT, progApagouAll0 INT, progPlay0 INT, progTempo1 INT, progInstrucoes1 INT, progApagou1 INT, progApagouAll1 INT, progPlay1 INT, progTempo2 INT, progInstrucoes2 INT, progApagou2 INT, progApagouAll2 INT, progPlay2 INT , progTempo3 INT, progInstrucoes3 INT, progApagou3 INT, progApagouAll3 INT, progPlay3 INT, progTempo4 INT, progInstrucoes4 INT, progApagou4 INT, progApagouAll4 INT, progPlay4 INT, progTempo5 INT, progInstrucoes5 INT, progApagou5 INT, progApagouAll5 INT, progPlay5 INT, progTempo6 INT, progInstrucoes6 INT, progApagou6 INT, progApagouAll6 INT, progPlay6 INT, progTempoLoop0 INT, progInstrucoesLoop0 INT, progApagouLoop0 INT, progApagouAllLoop0 INT, progPlayLoop0 INT, progLoopLoop0 INT, progInstrucoesLoopLoop0 INT, progTempoLoop1 INT, progInstrucoesLoop1 INT, progApagouLoop1 INT, progApagouAllLoop1 INT, progPlayLoop1 INT, progLoopLoop1 INT, progInstrucoesLoopLoop1 INT)") or die("Error in query: $query." . pg_last_error($pg_conn)); 
			}catch(Exception $ex){
				echo "erro" . $ex->getMessage();
			}
		?>
	</body>
</html>
