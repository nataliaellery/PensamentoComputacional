var TelaEscolha = function () {
	this.menino = new Image();
	this.menino.src = "img/SelecaoPersonagem/personagem_boy_selecao.png";
	this.menina = new Image();
	this.menina.src = "img/SelecaoPersonagem/personagem_girl_selecao.png";
  	this.fundo = new Image();
	this.fundo.src = "img/SelecaoPersonagem/tela.png";
	this.showMenino = false;
	this.showMenina = false;
	this.ativo=true;
};

TelaEscolha.prototype.Draw = function(){
	context.drawImage(this.fundo, 0, 0);
	context.font="40px Georgia";
	context.fillText("Escolha seu personagem:",150,70);
	if(this.showMenino){
		context.drawImage(this.menino, 16, 137);
	}else if(this.showMenina){
		context.drawImage(this.menina, 486, 150);
	}
}

TelaEscolha.prototype.MouseDown = function(mouseEvent) {	
	if(posMouseX>16 && posMouseX<411 && posMouseY>137){
		this.showMenino=true;
		this.showMenina=false;
	}else if(posMouseX>486 && posMouseX<784 && posMouseY>150){
		this.showMenino=false;
		this.showMenina=true;
	}else{
		this.showMenino=false;
		this.showMenina=false;
	}
}

TelaEscolha.prototype.MouseUp = function(mouseEvent) {
	if(posMouseX>16 && posMouseX<411 && posMouseY>137){
		genero=1;
		this.ativo=false;
	}else if(posMouseX>486 && posMouseX<784 && posMouseY>150){
		genero=0;
		this.ativo=false;
	}	
	this.showMenino=false;
	this.showMenina=false;
}

TelaEscolha.prototype.KeyDown = function (keyCode){}