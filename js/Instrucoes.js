var Instrucoes = function (indice) {
	if(genero==0){
		if(indice==0){
			this.fundo1 = new Image();
			this.fundo1.src = "img/Instrucoes//Instrucoes1a.png";
			this.fundo2 = new Image();
			this.fundo2.src = "img/Instrucoes//Instrucoes1b.png";
		}
	}else{
		if(indice==0){
			this.fundo1 = new Image();
			this.fundo1.src = "img/Instrucoes//Instrucoes1c.png";
			this.fundo2 = new Image();
			this.fundo2.src = "img/Instrucoes//Instrucoes1d.png";
		}
	}
	this.cursor = new Image();
	this.cursor.src = "img/Nome/Cursor.png";	
	this.ativo=true;
	this.cont=0;
	this.fala=true;
};

Instrucoes.prototype.Draw = function(){
	this.cont++;
	if(this.cont>10){
		this.cont=0;
		this.fala=!this.fala;
	}
	if(this.fala)context.drawImage(this.fundo1, 0, 0);
	else context.drawImage(this.fundo2, 0, 0);
}

Instrucoes.prototype.MouseDown = function(mouseEvent){}

Instrucoes.prototype.MouseUp = function(mouseEvent) {
	this.ativo=false;
}

Instrucoes.prototype.KeyDown = function (keyCode){}