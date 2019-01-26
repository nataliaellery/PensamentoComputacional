var mouseImg = new Image();
mouseImg.src = "img/pointer.png";
var posMouseX=0;
var posMouseY=0;
var gameWidth=800;
var gameHeight=600;
var context;
var gameCanvas;
var escore = new Escore();
var touchDown = false;
var touchUp=false;
var delayTouch=50000;

var telaAtual = "EscolhaPersonagem";
//var telaAtual = "Programacao8";
var tela;
var genero=0;//0=menina//1=menino
var nomeJogador="";
var rect = 0;
var tdsImagens = new Array();

function begin() {
	gameCanvas = document.getElementById("gameCanvas");
	rect = gameCanvas.getBoundingClientRect();
    //context.drawImage(mouseImg, Math.random() * 800, Math.random() * 600);
	window.addEventListener('keydown',keyDown, false);
	//window.addEventListener('keyup',keyUp, false);
	gameCanvas.addEventListener("mousemove", mouseMove);
	gameCanvas.addEventListener("mousedown", mouseDown);
	gameCanvas.addEventListener("mouseup", mouseUp);
	gameCanvas.addEventListener("touchstart", handleStart, false);
	gameCanvas.addEventListener("touchend", handleEnd, false);
	gameCanvas.addEventListener("touchmove", handleMove, false);
	//VOU SER OBRIGADA A CARREGAR TODAS AS IMAGENS ANTES DE INICIAR PQ O SERVIDOR QUE TO USANDO
	//GRATUITO É MUITO LENTO, E NÃO CARREGA  DIREITINHO
	carregarImagens();
	tela = new TelaEscolha();
	//tela = new Programacao(8);
	draw();	
}

function draw(){
	requestAnimationFrame(draw);
	context = gameCanvas.getContext('2d');
    context.clearRect(0, 0, gameWidth, gameHeight); 
	/*--------------AQUI DESENHA O JOGO OU ANIMAÇÃO--------------------------------*/
	tela.Draw(context);
	if(!tela.ativo){
		if(telaAtual=="EscolhaPersonagem"){
			tela = new TelaNome();
			telaAtual="EscolhaNome";
		}else if(telaAtual=="EscolhaNome"){
			tela = new Instrucoes(1);
			telaAtual="Instrucoes1";
		}else if(telaAtual=="Instrucoes1"){
			tela = new Programacao(1);
			telaAtual="Programacao1";
		}else if(telaAtual=="Programacao1"){
			escore.Programacao(0, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(2);
			telaAtual="Instrucoes2";
		}else if(telaAtual=="Instrucoes2"){
			tela = new Pontos(1);
			telaAtual="Pontos1";
		}else if(telaAtual=="Pontos1"){
			escore.Pontos(0,Math.round(tela.tempo),tela.cliques,tela.limpou,tela.contDicas,tela.pulou);
			tela = new Pontos(2);
			telaAtual="Pontos2";
		}else if(telaAtual=="Pontos2"){
			escore.Pontos(1,Math.round(tela.tempo),tela.cliques,tela.limpou,tela.contDicas,tela.pulou);
			tela = new Instrucoes(4);
			telaAtual="Instrucoes4";
		}else if(telaAtual=="Instrucoes4"){
			tela = new Programacao(2);
			telaAtual="Programacao2";
		}else if(telaAtual=="Programacao2"){
			escore.Programacao(1, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(3);
			telaAtual="Instrucoes3";
		}else if(telaAtual=="Instrucoes3"){
			tela = new Pontos(3);
			telaAtual="Pontos3";
		}else if(telaAtual=="Pontos3"){
			escore.Pontos(2,Math.round(tela.tempo),tela.cliques,tela.limpou,tela.contDicas,tela.pulou);
			tela = new Pontos(4);
			telaAtual="Pontos4";
		}else if(telaAtual=="Pontos4"){
			escore.Pontos(3,Math.round(tela.tempo),tela.cliques,tela.limpou,tela.contDicas,tela.pulou);
			tela = new Instrucoes(6);
			telaAtual="Instrucoes6";
		}else if(telaAtual=="Instrucoes6"){
			tela = new Programacao(3);
			telaAtual="Programacao3";
		}else if(telaAtual=="Programacao3"){
			escore.Programacao(2, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(5);
			telaAtual="Instrucoes5";
		}else if(telaAtual=="Instrucoes5"){
			//Eu programei o tutorial como fase 1, mas não faz sentido se já deu a resposta no tutorial
			//então vamos começar com a fase 2
			tela = new Match(2);
			telaAtual="Match1";
		}else if(telaAtual=="Match1"){
			escore.Match(0, Math.round(tela.tempo),tela.cliques,tela.giros,tela.contDicas,tela.pulou);
			tela = new Match(3);
			telaAtual="Match2";
			//Existem a fase 4,5 e 6 - para caso quiserem aumentar o número de fases, basta
			//colocar na sequencia os Match4, Match5 e Match6
		}else if(telaAtual=="Match2"){
			escore.Match(1, Math.round(tela.tempo),tela.cliques,tela.giros,tela.contDicas,tela.pulou);
			tela = new Instrucoes(9);
			telaAtual="Instrucoes9";
		}else if(telaAtual=="Instrucoes9"){
			tela = new Programacao(4);
			telaAtual="Programacao4";
		}else if(telaAtual=="Programacao4"){
			escore.Programacao(3, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(7);
			telaAtual="Instrucoes7";
		}else if(telaAtual=="Instrucoes7"){
			tela = new Tangram(1);
			telaAtual="Tangram1";
		}else if(telaAtual=="Tangram1"){
			escore.Tangram(0, Math.round(tela.tempo),tela.cliques,tela.giros,tela.contDicas,tela.pulou);
			tela = new Tangram(2);
			telaAtual="Tangram2";
		}else if(telaAtual=="Tangram2"){
			escore.Tangram(1, Math.round(tela.tempo),tela.cliques,tela.giros,tela.contDicas,tela.pulou);
			tela = new Instrucoes(8);
			telaAtual="Instrucoes8";
		}else if(telaAtual=="Instrucoes8"){
			tela = new Instrucoes(11);
			telaAtual="Instrucoes11";
		}else if(telaAtual=="Instrucoes11"){
			tela = new Programacao(5);
			telaAtual="Programacao5";
		}else if(telaAtual=="Programacao5"){
			escore.Programacao(4, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(10);
			telaAtual="Instrucoes10";
		}else if(telaAtual=="Instrucoes10"){
			tela = new Sequencia(1);
			telaAtual="Sequencia1";
		}else if(telaAtual=="Sequencia1"){
			escore.Sequencia(0, Math.round(tela.tempo),tela.errou,tela.contDicas,tela.pulou);
			tela = new Sequencia(2);
			telaAtual="Sequencia2";
		}else if(telaAtual=="Sequencia2"){
			escore.Sequencia(1, Math.round(tela.tempo),tela.errou,tela.contDicas,tela.pulou);
			tela = new Instrucoes(13);
			telaAtual="Instrucoes13";
		}else if(telaAtual=="Instrucoes13"){
			tela = new Programacao(6);
			telaAtual="Programacao6";
		}else if(telaAtual=="Programacao6"){
			escore.Programacao(5, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(12);
			telaAtual="Instrucoes12";
		}else if(telaAtual=="Instrucoes12"){
			escore.Classifica(Math.round(tela.tempo),tela.errou, tela.limpou,tela.contDicas,tela.pulou);
			tela = new Classifica();
			telaAtual="Classifica";
		}else if(telaAtual=="Classifica"){
			tela = new Instrucoes(14);
			telaAtual="Instrucoes14";
		}else if(telaAtual=="Instrucoes14"){
			tela = new Programacao(7);
			telaAtual="Programacao7";
		}else if(telaAtual=="Programacao7"){
			escore.Programacao(6, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.pulou);
			tela = new Instrucoes(15);
			telaAtual="Instrucoes15";
		}else if(telaAtual=="Instrucoes15"){
			tela = new Programacao(8);
			telaAtual="Programacao8";
		}else if(telaAtual=="Programacao8"){
			escore.ProgramacaoLoop(0, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.contLoop,tela.contInstrLoop,tela.pulou);
			tela = new Programacao(9);
			telaAtual="Programacao9";
		}else if(telaAtual=="Programacao9"){
			escore.ProgramacaoLoop(1, Math.round(tela.tempo),tela.contInstrucoes,tela.contApagouIndiv,tela.contApagouAll,tela.contPlay,tela.contLoop,tela.contInstrLoop,tela.pulou);
			tela = new Instrucoes(16);
			telaAtual="Instrucoes16";
		}else if(telaAtual=="Instrucoes16"){
			tela = new Instrucoes(17);
			telaAtual="Instrucoes17";
		}
	}	
	//verificando se a tela tem ficado ativa ou não
	//context.fillText(" " + tela.ativo ,160,40);
	//tem que fazer a verificação se houve pulo e apresentar a tela de confirmação
	context.drawImage(mouseImg, posMouseX, posMouseY,12,19);
	/*-----------------------------------------------------------------------------*/
	/*if(touchDown){
		context.font="60px Georgia";
		context.fillText("UEPA"+qtdTouch,0,440);		
	}*/	
	if(touchDown && touchUp){
		if(delayTouch>0)delayTouch--;
		else{
			tela.MouseUp(touchAtual);
			touchDown=false;
			touchUp=false;
			delayTouch=50000;
		}
	}
}

function handleStart(touchEvent) {
	posMouseX=touchEvent.touches[0].clientX - rect.left;
	posMouseY=touchEvent.touches[0].clientY - rect.top;
	tela.MouseDown(touchEvent);
	touchAtual=touchEvent;
	touchDown=true;
}
function handleEnd(touchEvent) {
	if(touchDown)touchUp=true;
}
function handleMove(touchEvent) {
	posMouseX=touchEvent.touches[0].clientX - rect.left;
	posMouseY=touchEvent.touches[0].clientY - rect.top;
}

function mouseMove(mouseEvent) {
	posMouseX=mouseEvent.offsetX;
	posMouseY=mouseEvent.offsetY;
}
function mouseDown(mouseEvent) {
	tela.MouseDown(mouseEvent);
}
function mouseUp(mouseEvent) {
	tela.MouseUp(mouseEvent);
}
function keyDown(e) {
	//alert("entered here");
	//var code = e.keyCode;	
	tela.KeyDown(e.keyCode);
    switch (code) {
        //case 37: posX--; break; //Left key
        //case 38: alert("Up"); break; //Up key
        //case 39: posX++; break; //Right key
        //case 40: alert("Down"); break; //Down key
        //default: alert(code); //Everything else
    }
}/*
window.onerror = function(msg, url, linenumber) {
    alert('Error message: '+msg+'\nURL: '+url+'\nLine Number: '+linenumber);
    return true;
}*/

function carregarImagens() {
	for(var i=0;i<200;i++)tdsImagens[i]= new Image();
	tdsImagens[0].src = "img/Nome/Campo.png";
	tdsImagens[1].src = "img/Nome/Cursor.png";
	tdsImagens[2].src = "img/Nome/Instrucoes0a.png";
	tdsImagens[3].src = "img/Nome/Instrucoes0b.png";
	tdsImagens[4].src = "img/Nome/Instrucoes0c.png";	
	tdsImagens[5].src = "img/Nome/Instrucoes0d.png";
	tdsImagens[6].src = "img/Nome/BotaoContinuar.png";	
	tdsImagens[7].src = "img/Nome/BotaoContinuarOver.png";
	tdsImagens[8].src = "img/SelecaoPersonagem/personagem_boy_selecao.png";
	tdsImagens[9].src = "img/SelecaoPersonagem/personagem_girl_selecao.png";
	tdsImagens[10].src = "img/SelecaoPersonagem/tela.png";
	tdsImagens[11].src = "img/Instrucoes/Instrucoes1a.png";
	tdsImagens[12].src = "img/Instrucoes/Instrucoes1b.png";
	tdsImagens[13].src = "img/Instrucoes/Instrucoes2a.png";
	tdsImagens[14].src = "img/Instrucoes/Instrucoes2b.png";
	tdsImagens[15].src = "img/Instrucoes/Instrucoes4a.png";
	tdsImagens[16].src = "img/Instrucoes/Instrucoes4b.png";
	tdsImagens[17].src = "img/Instrucoes/Instrucoes6a.png";
	tdsImagens[18].src = "img/Instrucoes/Instrucoes6b.png";
	tdsImagens[19].src = "img/Instrucoes/Instrucoes7a.png";
	tdsImagens[20].src = "img/Instrucoes/Instrucoes7b.png";
	tdsImagens[21].src = "img/Instrucoes/Instrucoes9a.png";
	tdsImagens[22].src = "img/Instrucoes/Instrucoes9b.png";
	tdsImagens[23].src = "img/Instrucoes/Instrucoes10a.png";
	tdsImagens[24].src = "img/Instrucoes/Instrucoes10b.png";
	tdsImagens[25].src = "img/Instrucoes/Instrucoes11a.png";
	tdsImagens[26].src = "img/Instrucoes/Instrucoes11b.png";
	tdsImagens[27].src = "img/Instrucoes/Instrucoes12a.png";
	tdsImagens[28].src = "img/Instrucoes/Instrucoes12b.png";
	tdsImagens[29].src = "img/Instrucoes/Instrucoes13a.png";
	tdsImagens[30].src = "img/Instrucoes/Instrucoes13b.png";
	tdsImagens[31].src = "img/Instrucoes/Instrucoes15a.png";
	tdsImagens[32].src = "img/Instrucoes/Instrucoes15b.png";
	tdsImagens[33].src = "img/Instrucoes/Instrucoes16a.png";
	tdsImagens[34].src = "img/Instrucoes/Instrucoes16b.png";
	tdsImagens[35].src = "img/Instrucoes/Instrucoes17a.png";
	tdsImagens[36].src = "img/Instrucoes/Instrucoes17b.png";
	tdsImagens[37].src = "img/Instrucoes/Instrucoes19a.png";
	tdsImagens[38].src = "img/Instrucoes/Instrucoes19b.png";
	tdsImagens[39].src = "img/Instrucoes/Instrucoes21a.png";
	tdsImagens[40].src = "img/Instrucoes/Instrucoes21b.png";
	tdsImagens[41].src = "img/Instrucoes/Instrucoes22a.png";
	tdsImagens[42].src = "img/Instrucoes/Instrucoes22b.png";
	tdsImagens[43].src = "img/Instrucoes/Instrucoes1c.png";
	tdsImagens[44].src = "img/Instrucoes/Instrucoes1d.png";
	tdsImagens[45].src = "img/Instrucoes/Instrucoes2c.png";
	tdsImagens[46].src = "img/Instrucoes/Instrucoes2d.png";
	tdsImagens[47].src = "img/Instrucoes/Instrucoes4c.png";
	tdsImagens[48].src = "img/Instrucoes/Instrucoes4d.png";
	tdsImagens[49].src = "img/Instrucoes/Instrucoes6c.png";
	tdsImagens[50].src = "img/Instrucoes/Instrucoes6d.png";
	tdsImagens[51].src = "img/Instrucoes/Instrucoes7c.png";
	tdsImagens[52].src = "img/Instrucoes/Instrucoes7d.png";
	tdsImagens[53].src = "img/Instrucoes/Instrucoes9c.png";
	tdsImagens[54].src = "img/Instrucoes/Instrucoes9d.png";
	tdsImagens[55].src = "img/Instrucoes/Instrucoes10c.png";
	tdsImagens[56].src = "img/Instrucoes/Instrucoes10d.png";
	tdsImagens[57].src = "img/Instrucoes/Instrucoes11c.png";
	tdsImagens[58].src = "img/Instrucoes/Instrucoes11d.png";
	tdsImagens[59].src = "img/Instrucoes/Instrucoes12c.png";
	tdsImagens[60].src = "img/Instrucoes/Instrucoes12d.png";
	tdsImagens[61].src = "img/Instrucoes/Instrucoes13c.png";
	tdsImagens[62].src = "img/Instrucoes/Instrucoes13d.png";
	tdsImagens[63].src = "img/Instrucoes/Instrucoes15c.png";
	tdsImagens[64].src = "img/Instrucoes/Instrucoes15d.png";
	tdsImagens[65].src = "img/Instrucoes/Instrucoes16c.png";
	tdsImagens[66].src = "img/Instrucoes/Instrucoes16d.png";
	tdsImagens[67].src = "img/Instrucoes/Instrucoes17c.png";
	tdsImagens[68].src = "img/Instrucoes/Instrucoes17d.png";
	tdsImagens[69].src = "img/Instrucoes/Instrucoes19c.png";
	tdsImagens[70].src = "img/Instrucoes/Instrucoes19d.png";
	tdsImagens[71].src = "img/Instrucoes/Instrucoes21c.png";
	tdsImagens[72].src = "img/Instrucoes/Instrucoes21d.png";
	tdsImagens[73].src = "img/Instrucoes/Instrucoes22c.png";
	tdsImagens[74].src = "img/Instrucoes/Instrucoes22d.png";
	tdsImagens[75].src = "img/Programacao/Fundo.png";
	tdsImagens[76].src = "img/Programacao/ObstaculoProg.png";
	tdsImagens[77].src = "img/Programacao/Cenario.png";	
	tdsImagens[78].src = "img/Programacao/OrangeSquare.png";
	tdsImagens[79].src = "img/Programacao/botaoPlayProgNew.png";
	tdsImagens[80].src = "img/Programacao/newInterfaceNoLoop.png";
	tdsImagens[81].src = "img/Programacao/excluiProg.png";
	tdsImagens[82].src = "img/Programacao/excluiProgNew.png";
	tdsImagens[83].src = "img/Programacao/HighLightComandoProg.png";
	tdsImagens[84].src = "img/Pontos/BotaoPular.png";
	tdsImagens[85].src = "img/Programacao/Mais.png";
	tdsImagens[86].src = "img/Programacao/Menos.png";
	tdsImagens[87].src = "img/TelaConfirma.png";
	tdsImagens[88].src = "img/Programacao/ProgLoop1New.png";
	tdsImagens[89].src = "img/Programacao/HighLightLoop.png";
	tdsImagens[90].src = "img/Programacao/BotaoLeftProg.png";
	tdsImagens[91].src = "img/Programacao/BotaoRightProg.png";
	tdsImagens[92].src = "img/Programacao/botaoUpProg.png";
	tdsImagens[93].src = "img/Programacao/botaoDownProg.png";
	tdsImagens[94].src = "img/Programacao/bolota.png";
	tdsImagens[95].src = "img/Programacao/GreenSquare.png";
	tdsImagens[96].src = "img/Programacao/YellowSquare.png";
	tdsImagens[97].src = "img/Programacao/OrangeSquare.png";
	tdsImagens[98].src="img/Programacao/botaoUpProgMenor.png";
	tdsImagens[99].src="img/Programacao/botaoDownProgMenor.png";
	tdsImagens[100].src="img/Programacao/BotaoLeftProgMenor.png";
	tdsImagens[101].src="img/Programacao/BotaoRightProgMenor.png";
	tdsImagens[102].src="img/Programacao/botaoUpProgMenorNew.png";
	tdsImagens[103].src="img/Programacao/botaoDownProgMenorNew.png";
	tdsImagens[104].src="img/Programacao/BotaoLeftProgMenorNew.png";
	tdsImagens[105].src="img/Programacao/BotaoRightProgMenorNew.png";
	tdsImagens[106].src="img/Programacao/ProgLoop1New.png";
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}