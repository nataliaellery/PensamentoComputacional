var mouseImg = new Image();
mouseImg.src = "img/pointer.png";
var posMouseX=0;
var posMouseY=0;
var gameWidth=800;
var gameHeight=600;
var context;
var gameCanvas;

var telaAtual = "EscolhaPersonagem";
var tela = new TelaEscolha();
//var telaAtual = "Instrucoes16";
//var tela = new Instrucoes(17);
var genero=0;//0=menina//1=menino
var nomeJogador="";

function begin() {
	gameCanvas = document.getElementById("gameCanvas");
    //context.drawImage(mouseImg, Math.random() * 800, Math.random() * 600);
	window.addEventListener('keydown',keyDown, false);
	//window.addEventListener('keydown',keyUp, false);
	gameCanvas.addEventListener("mousemove", mouseMove);
	gameCanvas.addEventListener("mousedown", mouseDown);
	gameCanvas.addEventListener("mouseup", mouseUp);
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
			tela = new Instrucoes(2);
			telaAtual="Instrucoes2";
		}else if(telaAtual=="Instrucoes2"){
			tela = new Pontos(1);
			telaAtual="Pontos1";
		}else if(telaAtual=="Pontos1"){
			tela = new Pontos(2);
			telaAtual="Pontos2";
		}else if(telaAtual=="Pontos2"){
			tela = new Instrucoes(4);
			telaAtual="Instrucoes4";
		}else if(telaAtual=="Instrucoes4"){
			tela = new Programacao(2);
			telaAtual="Programacao2";
		}else if(telaAtual=="Programacao2"){
			tela = new Instrucoes(3);
			telaAtual="Instrucoes3";
		}else if(telaAtual=="Instrucoes3"){
			tela = new Pontos(3);
			telaAtual="Pontos3";
		}else if(telaAtual=="Pontos3"){
			tela = new Pontos(4);
			telaAtual="Pontos4";
		}else if(telaAtual=="Pontos4"){
			tela = new Instrucoes(6);
			telaAtual="Instrucoes6";
		}else if(telaAtual=="Instrucoes6"){
			tela = new Programacao(3);
			telaAtual="Programacao3";
		}else if(telaAtual=="Programacao3"){
			tela = new Instrucoes(5);
			telaAtual="Instrucoes5";
		}else if(telaAtual=="Instrucoes5"){
			//Eu programei o tutorial como fase 1, mas não faz sentido se já deu a resposta no tutorial
			//então vamos começar com a fase 2
			tela = new Match(2);
			telaAtual="Match1";
		}else if(telaAtual=="Match1"){
			tela = new Match(3);
			telaAtual="Match2";
			//Existem a fase 4,5 e 6 - para caso quiserem aumentar o número de fases, basta
			//colocar na sequencia os Match4, Match5 e Match6
		}else if(telaAtual=="Match2"){
			tela = new Instrucoes(9);
			telaAtual="Instrucoes9";
		}else if(telaAtual=="Instrucoes9"){
			tela = new Programacao(4);
			telaAtual="Programacao4";
		}else if(telaAtual=="Programacao4"){
			tela = new Instrucoes(7);
			telaAtual="Instrucoes7";
		}else if(telaAtual=="Instrucoes7"){
			tela = new Tangram(1);
			telaAtual="Tangram1";
		}else if(telaAtual=="Tangram1"){
			tela = new Tangram(2);
			telaAtual="Tangram2";
		}else if(telaAtual=="Tangram2"){
			tela = new Instrucoes(8);
			telaAtual="Instrucoes8";
		}else if(telaAtual=="Instrucoes8"){
			tela = new Instrucoes(11);
			telaAtual="Instrucoes11";
		}else if(telaAtual=="Instrucoes11"){
			tela = new Programacao(5);
			telaAtual="Programacao5";
		}else if(telaAtual=="Programacao5"){
			tela = new Instrucoes(10);
			telaAtual="Instrucoes10";
		}else if(telaAtual=="Instrucoes10"){
			tela = new Sequencia(1);
			telaAtual="Sequencia1";
		}else if(telaAtual=="Sequencia1"){
			tela = new Sequencia(2);
			telaAtual="Sequencia2";
		}else if(telaAtual=="Sequencia2"){
			tela = new Instrucoes(13);
			telaAtual="Instrucoes13";
		}else if(telaAtual=="Instrucoes13"){
			tela = new Programacao(6);
			telaAtual="Programacao6";
		}else if(telaAtual=="Programacao6"){
			tela = new Instrucoes(12);
			telaAtual="Instrucoes12";
		}else if(telaAtual=="Instrucoes12"){
			tela = new Classifica();
			telaAtual="Classifica";
		}else if(telaAtual=="Classifica"){
			tela = new Instrucoes(14);
			telaAtual="Instrucoes14";
		}else if(telaAtual=="Instrucoes14"){
			tela = new Programacao(7);
			telaAtual="Programacao7";
		}else if(telaAtual=="Programacao7"){
			tela = new Instrucoes(15);
			telaAtual="Instrucoes15";
		}else if(telaAtual=="Instrucoes15"){
			tela = new Programacao(8);
			telaAtual="Programacao8";
		}else if(telaAtual=="Programacao8"){
			tela = new Programacao(9);
			telaAtual="Programacao9";
		}else if(telaAtual=="Programacao9"){
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