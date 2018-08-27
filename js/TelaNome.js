var TelaNome = function () {
	this.campo = new Image();
	this.campo.src = "img/Nome/Campo.png";	
	this.cursor = new Image();
	this.cursor.src = "img/Nome/Cursor.png";	
	this.instrucaoMenina1 = new Image();
	this.instrucaoMenina1.src = "img/Nome/Instrucoes0a.png";	
	this.instrucaoMenina2 = new Image();
	this.instrucaoMenina2.src = "img/Nome/Instrucoes0b.png";	
	this.instrucaoMenino1 = new Image();
	this.instrucaoMenino1.src = "img/Nome/Instrucoes0c.png";	
	this.instrucaoMenino2 = new Image();
	this.instrucaoMenino2.src = "img/Nome/Instrucoes0d.png";	
	this.botaoContinuar = new Image();
	this.botaoContinuar.src = "img/Nome/BotaoContinuar.png";	
	this.botaoContinuarOver = new Image();
	this.botaoContinuarOver.src = "img/Nome/BotaoContinuarOver.png";	
	this.ativo=true;
	this.cont=0;
	this.fala=true;
	this.contCursor=0;
	this.mostraCursor=true;
	this.keyCode="none";
	this.clicouContinuar=false;
};

TelaNome.prototype.Draw = function(){
	this.cont++;
	if(this.cont>10){
		this.cont=0;
		this.fala=!this.fala;
	}
	this.contCursor++;
	if(this.contCursor>20){
		this.contCursor=0;
		this.mostraCursor=!this.mostraCursor;
	}
	if(genero==0){		
		if(this.fala)context.drawImage(this.instrucaoMenina1, 0, 0);
		else context.drawImage(this.instrucaoMenina2, 0, 0);
	}else{		
		if(this.fala)context.drawImage(this.instrucaoMenino1, 0, 0);
		else context.drawImage(this.instrucaoMenino2, 0, 0);
	}
	context.font="40px Georgia";
	context.drawImage(this.campo, 100, 250);
	if(nomeJogador==""){
		if(this.mostraCursor)context.drawImage(this.cursor, 120, 268);
	}
	context.fillText(nomeJogador,130,320);
	context.drawImage(this.botaoContinuar, 400, 500);
	if(this.clicouContinuar)context.drawImage(this.botaoContinuarOver, 400, 500);
}

TelaNome.prototype.MouseDown = function(mouseEvent){
	if(posMouseX>400 && posMouseX<697 && posMouseY>500 && posMouseY<544){
		clicouContinuar=true;
	}
}

TelaNome.prototype.MouseUp = function(mouseEvent) {
	if(posMouseX>400 && posMouseX<697 && posMouseY>500 && posMouseY<544){
		clicouContinuar=false;
		this.ativo=false;
	}
}

TelaNome.prototype.KeyDown = function (keyCode){
	this.keyCode=keyCode;
	if(nomeJogador.length<18){
		switch (this.keyCode) {
			case 81: nomeJogador+="q"; break;
			case 87: nomeJogador+="w"; break;
			case 69: nomeJogador+="e"; break;
			case 82: nomeJogador+="r"; break;
			case 84: nomeJogador+="t"; break;
			case 89: nomeJogador+="y"; break;
			case 85: nomeJogador+="u"; break;
			case 73: nomeJogador+="i"; break;
			case 79: nomeJogador+="o"; break;
			case 80: nomeJogador+="p"; break;
			case 65: nomeJogador+="a"; break;
			case 83: nomeJogador+="s"; break;
			case 68: nomeJogador+="d"; break;
			case 70: nomeJogador+="f"; break;
			case 71: nomeJogador+="g"; break;
			case 72: nomeJogador+="h"; break;
			case 74: nomeJogador+="j"; break;
			case 75: nomeJogador+="k"; break;
			case 76: nomeJogador+="l"; break;
			case 186: nomeJogador+="ç"; break;
			case 90: nomeJogador+="z"; break;
			case 88: nomeJogador+="x"; break;
			case 67: nomeJogador+="c"; break;
			case 86: nomeJogador+="v"; break;
			case 66: nomeJogador+="b"; break;
			case 78: nomeJogador+="n"; break;
			case 77: nomeJogador+="m"; break;
			case 32: nomeJogador+=" "; break;
			case 13: this.ativo=false; break;
			case 8: var newName=""; for(var i=0; i<nomeJogador.length-1; i++){ newName+= nomeJogador.charAt(i);} nomeJogador=newName; break;
		}
	}
}