var PersonagemProg = function () {
	this.imagem = new Image(0,0,28,70,"img/Programacao/GirLeft0.png");
	this.x=0;
	this.y=0;
	this.width=28;
	this.height=70;
	if(genero==0)this.imagem.src = "img/Programacao/GirLeft0.png";
	else this.imagem.src = "img/Programacao/BoyLeft0.png";
	this.isWalking = false;
	this.indice = 0;
	this.velocidade=0.4;
	this.contVel=0;
	this.maxVel=2;
};

PersonagemProg.prototype.animaParado = function(direcao){
	if(genero==0){
		if(direcao=="Left" || direcao=="LoopLeft")this.imagem.src = "img/Programacao/GirLeft0.png";
		else if(direcao=="Right" || direcao=="LoopRight")this.imagem.src = "img/Programacao/GirlRight0.png";
		else if(direcao=="Up" || direcao=="LoopUp")this.imagem.src = "img/Programacao/GirlUp0.png";
		else this.imagem.src = "img/Programacao/GirlDown0.png";
	}else{
		if(direcao=="Left" || direcao=="LoopLeft")this.imagem.src = "img/Programacao/BoyLeft0.png";
		else if(direcao=="Right" || direcao=="LoopRight")this.imagem.src = "img/Programacao/BoyRight0.png";
		else if(direcao=="Up" || direcao=="LoopUp")this.imagem.src = "img/Programacao/BoyUp0.png";
		else this.imagem.src = "img/Programacao/BoyDown0.png";
	}
}

PersonagemProg.prototype.animaWalk = function(direcao) {	
	this.contVel+=this.velocidade;
	if(this.contVel>=this.maxVel){
		this.contVel=0;
		this.indice++;
		if(this.indice>=5)this.indice=0;
	}
	if(genero==0){
		if(direcao=="Left" || direcao=="LoopLeft"){
			if(this.indice==0)this.imagem.src = "img/Programacao/GirLeft1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/GirLeft2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/GirLeft3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/GirLeft4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/GirLeft3.png";
		}else if(direcao=="Right" || direcao=="LoopRight"){
			if(this.indice==0)this.imagem.src = "img/Programacao/GirlRight1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/GirlRight2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/GirlRight3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/GirlRight4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/GirlRight3.png";
		}else if(direcao=="Up" || direcao=="LoopUp"){
			if(this.indice==0)this.imagem.src = "img/Programacao/GirlUp1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/GirlUp2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/GirlUp3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/GirlUp4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/GirlUp3.png";
		}else{
			if(this.indice==0)this.imagem.src = "img/Programacao/GirlDown1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/GirlDown2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/GirlDown3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/GirlDown4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/GirlDown3.png";
		}
	}else{
		if(direcao=="Left" || direcao=="LoopLeft"){
			if(this.indice==0)this.imagem.src = "img/Programacao/BoyLeft1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/BoyLeft2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/BoyLeft3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/BoyLeft4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/BoyLeft3.png";
		}else if(direcao=="Right" || direcao=="LoopRight"){
			if(this.indice==0)this.imagem.src = "img/Programacao/BoyRight1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/BoyRight2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/BoyRight3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/BoyRight4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/BoyRight3.png";
		}else if(direcao=="Up" || direcao=="LoopUp"){
			if(this.indice==0)this.imagem.src = "img/Programacao/BoyUp1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/BoyUp2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/BoyUp3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/BoyUp4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/BoyUp3.png";
		}else{
			if(this.indice==0)this.imagem.src = "img/Programacao/BoyDown1.png";
			else if(this.indice==1)this.imagem.src = "img/Programacao/BoyDown2.png";
			else if(this.indice==2)this.imagem.src = "img/Programacao/BoyDown3.png";
			else if(this.indice==3)this.imagem.src = "img/Programacao/BoyDown4.png";
			else if(this.indice==4)this.imagem.src = "img/Programacao/BoyDown3.png";
		}
	}
}