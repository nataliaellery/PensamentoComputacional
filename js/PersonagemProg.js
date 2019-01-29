var PersonagemProg = function () {
	this.imagem =tdsImagens[110];
	this.x=0;
	this.y=0;
	this.width=28;
	this.height=70;
	if(genero==0)this.imagem=tdsImagens[110];
	else this.imagem =tdsImagens[130];
	this.isWalking = false;
	this.indice = 0;
	this.velocidade=0.4;
	this.contVel=0;
	this.maxVel=2;
};

PersonagemProg.prototype.animaParado = function(direcao){
	if(genero==0){
		if(direcao=="Left" || direcao=="LoopLeft")this.imagem =tdsImagens[110];
		else if(direcao=="Right" || direcao=="LoopRight")this.imagem =tdsImagens[115];
		else if(direcao=="Up" || direcao=="LoopUp")this.imagem =tdsImagens[120];
		else this.imagem =tdsImagens[125];
	}else{
		if(direcao=="Left" || direcao=="LoopLeft")this.imagem =tdsImagens[130];
		else if(direcao=="Right" || direcao=="LoopRight")this.imagem =tdsImagens[135];
		else if(direcao=="Up" || direcao=="LoopUp")this.imagem =tdsImagens[140];
		else this.imagem =tdsImagens[145];
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
			if(this.indice==0)this.imagem =tdsImagens[111];
			else if(this.indice==1)this.imagem =tdsImagens[112];
			else if(this.indice==2)this.imagem =tdsImagens[113];
			else if(this.indice==3)this.imagem =tdsImagens[114];
			else if(this.indice==4)this.imagem =tdsImagens[113];
		}else if(direcao=="Right" || direcao=="LoopRight"){
			if(this.indice==0)this.imagem =tdsImagens[116];
			else if(this.indice==1)this.imagem =tdsImagens[117];
			else if(this.indice==2)this.imagem =tdsImagens[118];
			else if(this.indice==3)this.imagem =tdsImagens[119];
			else if(this.indice==4)this.imagem =tdsImagens[118];
		}else if(direcao=="Up" || direcao=="LoopUp"){
			if(this.indice==0)this.imagem =tdsImagens[121];
			else if(this.indice==1)this.imagem =tdsImagens[122];
			else if(this.indice==2)this.imagem =tdsImagens[123];
			else if(this.indice==3)this.imagem =tdsImagens[124];
			else if(this.indice==4)this.imagem =tdsImagens[123];
		}else{
			if(this.indice==0)this.imagem =tdsImagens[126];
			else if(this.indice==1)this.imagem =tdsImagens[127];
			else if(this.indice==2)this.imagem =tdsImagens[128];
			else if(this.indice==3)this.imagem =tdsImagens[129];
			else if(this.indice==4)this.imagem =tdsImagens[128];
		}
	}else{
		if(direcao=="Left" || direcao=="LoopLeft"){
			if(this.indice==0)this.imagem =tdsImagens[131];
			else if(this.indice==1)this.imagem =tdsImagens[132];
			else if(this.indice==2)this.imagem =tdsImagens[133];
			else if(this.indice==3)this.imagem =tdsImagens[134];
			else if(this.indice==4)this.imagem =tdsImagens[133];
		}else if(direcao=="Right" || direcao=="LoopRight"){
			if(this.indice==0)this.imagem =tdsImagens[136];
			else if(this.indice==1)this.imagem =tdsImagens[137];
			else if(this.indice==2)this.imagem =tdsImagens[138];
			else if(this.indice==3)this.imagem =tdsImagens[139];
			else if(this.indice==4)this.imagem =tdsImagens[138];
		}else if(direcao=="Up" || direcao=="LoopUp"){
			if(this.indice==0)this.imagem =tdsImagens[141];
			else if(this.indice==1)this.imagem =tdsImagens[142];
			else if(this.indice==2)this.imagem =tdsImagens[143];
			else if(this.indice==3)this.imagem =tdsImagens[144];
			else if(this.indice==4)this.imagem =tdsImagens[143];
		}else{
			if(this.indice==0)this.imagem =tdsImagens[146];
			else if(this.indice==1)this.imagem =tdsImagens[147];
			else if(this.indice==2)this.imagem =tdsImagens[148];
			else if(this.indice==3)this.imagem =tdsImagens[149];
			else if(this.indice==4)this.imagem =tdsImagens[148];
		}
	}
}