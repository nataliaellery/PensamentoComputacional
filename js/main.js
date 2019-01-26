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
var tela = new TelaEscolha();
//var telaAtual = "Instrucoes17";
//var tela = new Instrucoes(17);
//var telaAtual = "Tangram1";
//var tela = new Tangram(1);
var genero=0;//0=menina//1=menino
var nomeJogador="";
var rect = 0;

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