var mouseImg = new Image();
mouseImg.src = "img/pointer.png";
var posMouseX=0;
var posMouseY=0;
var gameWidth=800;
var gameHeight=600;
var context;
var gameCanvas;

//var telaAtual = "EscolhaPersonagem";
//var tela = new TelaEscolha();
var telaAtual = "Tamgram";
var tela = new Tangram(2);
var genero=1;//0=menina//1=menino
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
			tela = new Instrucoes(0);
			telaAtual="Instrucoes1";
		}else if(telaAtual=="Instrucoes1"){
			tela = new Programacao(1);
			telaAtual="Programacao1";
		}else if(telaAtual=="Programacao1"){
			tela = new Programacao1(2);
			telaAtual="Programacao2";
		}else if(telaAtual=="Programacao2"){
			tela = new Programacao1(3);
			telaAtual="Programacao3";
		}else if(telaAtual=="Programacao3"){
			tela = new Programacao1(4);
			telaAtual="Programacao4";
		}else if(telaAtual=="Programacao4"){
			tela = new Programacao1(5);
			telaAtual="Programacao5";
		}else if(telaAtual=="Programacao5"){
			tela = new Programacao1(6);
			telaAtual="Programacao6";
		}else if(telaAtual=="Programacao6"){
			tela = new Programacao(7);
			telaAtual="Programacao7";
		}else if(telaAtual=="Programacao7"){
			tela = new Programacao(8);
			telaAtual="Programacao8";
		}else if(telaAtual=="Programacao8"){
			tela = new Programacao(9);
			telaAtual="Programacao9";
		}
	}	
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