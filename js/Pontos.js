var Pontos = function (fase) {
  	//this.fundo = new Image();
	this.fase=fase;
	///this.fundo.src = "img/Pontos/FundoBase.png";
	this.ativo=true;
	this.pulou=false;
	this.errou = 0;
	this.perdeu = false;
	this.ganhou=false;
	this.tempo=0;
	this.contTempo=0;
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.botaoLimpar= new Imagem(700,560,86,36,"img/Pontos/LimparPontos.png");
	this.botaoDica= new Imagem(0,0,0,0,"img/Pontos/DicaPontos.png");
	this.dicaMostrada=new Array();
	this.dicaImagem=new Array();
	this.pontos=new Array();
	this.pontoAtivo=new Imagem(1000,560,28,28,"img/Pontos/PontoAtivo.png");
	this.pontosX=new Array();
	this.pontosY=new Array();
	this.dicaX=new Array();
	this.dicaY=new Array();
	this.indPonto=-1;
	this.dicas = 3;
	this.trace="";
	this.msg="";
	this.dicaAtual=-1;
	this.desenhosCorretos=new Array();
	this.retas=new Array(false,false,false,false,false,false,false,false,false,false);
	this.acertou=new Array(false,false,false);
	if(this.fase==1 || this.fase==2){
		//criando os pontos:
		for(this.i=0;this.i<7;this.i++){
			if(this.i<4)this.pontos.push(new Imagem(0,0,26,26,"img/Pontos/PontoGrande.png"));
			else this.pontos.push(new Imagem(0,0,13,13,"img/Pontos/PontoPequeno.png"));
		}
		if(this.fase==1){
			this.pontos[0].x=180; this.pontos[0].y=163;
			this.pontos[1].x=359; this.pontos[1].y=60;
			this.pontos[2].x=456; this.pontos[2].y=229;
			this.pontos[3].x=277; this.pontos[3].y=332;
			this.pontos[4].x=454; this.pontos[4].y=340;
			this.pontos[5].x=619; this.pontos[5].y=376;
			this.pontos[6].x=405; this.pontos[6].y=498;
			this.desenhosCorretos.push(new Imagem(193,73,0,0,"img/Pontos/Square1.png"));
			this.desenhosCorretos.push(new Imagem(412,348,0,0,"img/Pontos/Tri1.png"));
		}else{
			this.pontos[0].x=225; this.pontos[0].y=228;
			this.pontos[1].x=405; this.pontos[1].y=124;
			this.pontos[2].x=503; this.pontos[2].y=294;
			this.pontos[3].x=323; this.pontos[3].y=398;
			this.pontos[4].x=388; this.pontos[4].y=293;
			this.pontos[5].x=550; this.pontos[5].y=330;
			this.pontos[6].x=338; this.pontos[6].y=452;
			this.desenhosCorretos.push(new Imagem(237,137,0,0,"img/Pontos/Square1.png"));
			this.desenhosCorretos.push(new Imagem(345,300,0,0,"img/Pontos/Tri1.png"));
		}
	}else if(this.fase==3 || this.fase==4){
		//criando os pontos:
		for(this.i=0;this.i<10;this.i++){
			if((this.fase==4 && this.i<9) || this.fase==3)this.pontos.push(new Imagem(0,0,26,26,"img/Pontos/PontoGrande.png"));
		}
		if(this.fase==3){
			this.pontos[0].x=376; this.pontos[0].y=143;
			this.pontos[1].x=522; this.pontos[1].y=289;
			this.pontos[2].x=385; this.pontos[2].y=426;
			this.pontos[3].x=239; this.pontos[3].y=280;
			this.pontos[4].x=120; this.pontos[4].y=78;
			this.pontos[5].x=314; this.pontos[5].y=78;
			this.pontos[6].x=314; this.pontos[6].y=285;
			this.pontos[7].x=454; this.pontos[7].y=285;
			this.pontos[8].x=454; this.pontos[8].y=491;
			this.pontos[9].x=639; this.pontos[9].y=491;
			this.desenhosCorretos.push(new Imagem(252,158,0,0,"img/Pontos/Square5.png"));
			this.desenhosCorretos.push(new Imagem(132,87,0,0,"img/Pontos/Tri51.png"));
			this.desenhosCorretos.push(new Imagem(464,298,0,0,"img/Pontos/Tri52.png"));
		}else{
			this.pontos[0].x=277; this.pontos[0].y=187;
			this.pontos[1].x=481; this.pontos[1].y=188;
			this.pontos[2].x=481; this.pontos[2].y=380;
			this.pontos[3].x=278; this.pontos[3].y=380;
			this.pontos[4].x=235; this.pontos[4].y=144;
			this.pontos[5].x=385; this.pontos[5].y=285;//ponto em comum
			this.pontos[6].x=253; this.pontos[6].y=425;
			this.pontos[7].x=516; this.pontos[7].y=144;
			this.pontos[8].x=533; this.pontos[8].y=425;
			this.desenhosCorretos.push(new Imagem(290,200,0,0,"img/Pontos/Square6.png"));
			this.desenhosCorretos.push(new Imagem(240,148,0,0,"img/Pontos/Tri61.png"));
			this.desenhosCorretos.push(new Imagem(398,157,0,0,"img/Pontos/Tri62.png"));
		}
	}
};

Pontos.prototype.Draw = function(){
	//context.drawImage(this.fundo, 0, 0);
	context.font="40px Georgia";
	if(this.ativo && !this.pulou && !this.ganhou && !this.perdeu)this.tempo+=0.02;
	this.contTempo+=0.02;
	if(this.tempo>=60)this.botaoPular.x=10;
	
	context.font="40px Georgia";

	if(this.ganhou){
		//Essa parte é responsável por mostrar que está certo e ir pra próxima fase
		context.fillText("Correto",220,590);
		this.msg="";
		if(this.contTempo>this.tempo+1){
			this.ativo=false;
			this.tempo=0;
			this.contTempo=0;
		}
	}
	
	//aqui mostra quando o desenho está correto
	for(this.i=0;this.i<this.desenhosCorretos.length;this.i++){
		if(this.acertou[this.i])context.drawImage(this.desenhosCorretos[this.i].img, this.desenhosCorretos[this.i].x, this.desenhosCorretos[this.i].y);
		if(this.acertou[0]){
			for(this.j=0;this.j<4;this.j++){
				context.beginPath();
				context.lineWidth = 10;
				if(this.j<3){
					context.moveTo(this.pontos[this.j].x+13, this.pontos[this.j].y+13);
					context.lineTo(this.pontos[this.j+1].x+13, this.pontos[this.j+1].y+13);
				}else{
					context.moveTo(this.pontos[this.j].x+13, this.pontos[this.j].y+13);
					context.lineTo(this.pontos[0].x+13, this.pontos[0].y+13);
				}
				context.strokeStyle='rgba(0,0,0,1)';
				context.stroke();
			}
		}if(this.acertou[1]){
			if(this.fase<3)this.tam=7;
			else this.tam=13;
			for(this.j=4;this.j<7;this.j++){
				context.beginPath();
				context.lineWidth = 10;
				if(this.j<6){
					context.moveTo(this.pontos[this.j].x+this.tam, this.pontos[this.j].y+this.tam);
					context.lineTo(this.pontos[this.j+1].x+this.tam, this.pontos[this.j+1].y+this.tam);
				}else{
					context.moveTo(this.pontos[this.j].x+this.tam, this.pontos[this.j].y+this.tam);
					context.lineTo(this.pontos[4].x+this.tam, this.pontos[4].y+this.tam);
				}
				context.strokeStyle='rgba(0,0,0,1)';
				context.stroke();
			}
		}if(this.acertou[2]){
			if(this.fase==3){
				for(this.j=7;this.j<10;this.j++){
					context.beginPath();
					context.lineWidth = 10;
					if(this.j<9){
						context.moveTo(this.pontos[this.j].x+13, this.pontos[this.j].y+13);
						context.lineTo(this.pontos[this.j+1].x+13, this.pontos[this.j+1].y+13);
					}else{
						context.moveTo(this.pontos[this.j].x+13, this.pontos[this.j].y+13);
						context.lineTo(this.pontos[7].x+13, this.pontos[7].y+13);
					}
					context.strokeStyle='rgba(0,0,0,1)';
					context.stroke();
				}
			}else{
				for(this.j=0;this.j<3;this.j++){
					context.beginPath();
					context.lineWidth = 10;
					if(this.j==0){
						context.moveTo(this.pontos[5].x+13, this.pontos[5].y+13);
						context.lineTo(this.pontos[7].x+13, this.pontos[7].y+13);
					}else if(this.j==1){
						context.moveTo(this.pontos[7].x+13, this.pontos[7].y+13);
						context.lineTo(this.pontos[8].x+13, this.pontos[8].y+13);
					}else{
						context.moveTo(this.pontos[8].x+13, this.pontos[8].y+13);
						context.lineTo(this.pontos[5].x+13, this.pontos[5].y+13);
					}
					context.strokeStyle='rgba(0,0,0,1)';
					context.stroke();
				}	
			}
		}
	}
	
	//aqui desenha as linhas
	for(this.i=1;this.i<this.pontosX.length;this.i++){
		context.beginPath();
		context.lineWidth = 5;
		context.moveTo(this.pontosX[this.i-1], this.pontosY[this.i-1]);
		context.lineTo(this.pontosX[this.i], this.pontosY[this.i]);
		context.strokeStyle='rgba(0,0,0,1)';
		context.stroke();
	}
	
	//aqui desenha as dicas
	for(this.i=1;this.i<this.dicaX.length;this.i++){
		context.beginPath();
		context.lineWidth = 10;
		context.moveTo(this.dicaX[this.i-1], this.dicaY[this.i-1]);
		context.lineTo(this.dicaX[this.i], this.dicaY[this.i]);
		context.strokeStyle='rgba(0,255,0,0.5)';
		context.stroke();
	}
	
	//aqui mostra os pontos
	for(this.i=0;this.i<this.pontos.length;this.i++){
		if(posMouseX>this.pontos[this.i].x && posMouseX<this.pontos[this.i].x+this.pontos[this.i].width && posMouseY>this.pontos[this.i].y && posMouseY<this.pontos[this.i].y+this.pontos[this.i].height){
			context.drawImage(this.pontos[this.i].img, this.pontos[this.i].x, this.pontos[this.i].y, this.pontos[this.i].width+2, this.pontos[this.i].height+2);
		}else{
			context.drawImage(this.pontos[this.i].img, this.pontos[this.i].x, this.pontos[this.i].y, this.pontos[this.i].width, this.pontos[this.i].height);
		}
	}
	context.drawImage(this.pontoAtivo.img, this.pontoAtivo.x, this.pontoAtivo.y, this.pontoAtivo.width, this.pontoAtivo.height);
	
	
	//aqui mostra os botões das dicas
	for(this.i=0;this.i<this.dicas;this.i++){
		context.drawImage(this.botaoDica.img, 710-(this.i*60), 20);
	}
	
	//Desenhando o botão pular
	context.drawImage(this.botaoPular.img, this.botaoPular.x, this.botaoPular.y);
	context.drawImage(this.botaoLimpar.img, this.botaoLimpar.x, this.botaoLimpar.y);
	
	context.fillText("" + this.trace,150,70);
	context.font="24px Georgia";
	//MENSAGEM AVISANDO SE PERDEU OU GANHOU
	context.fillText("" + this.msg,150,540);
	context.font="40px Georgia";
	context.fillText("Tempo: " + Math.round(this.tempo),10,40);
}

Pontos.prototype.MouseDown = function(mouseEvent) {}

Pontos.prototype.MouseUp = function(mouseEvent) {
	if(!this.perdeu && !this.ganhou){
		//Pular a fase
		if(this.tempo>=60){
			if(posMouseX>this.botaoPular.x && posMouseX<(this.botaoPular.x + this.botaoPular.width) && posMouseY>this.botaoPular.y && posMouseY<(this.botaoPular.y + this.botaoPular.height)){
				this.pulou=true;
			}
		}
		if(posMouseX>this.botaoLimpar.x && posMouseX<(this.botaoLimpar.x + this.botaoLimpar.width) && posMouseY>this.botaoLimpar.y && posMouseY<(this.botaoLimpar.y + this.botaoLimpar.height)){
			this.pontosX=new Array();	
			this.pontosY=new Array();
			this.dicaX=new Array();	
			this.dicaY=new Array();
			this.pontoAtivo.x=1000;
			this.indPonto=-1;
			if(!this.acertou[0]){
				this.retas[0]=false;	
				this.retas[1]=false;	
				this.retas[2]=false;	
				this.retas[3]=false;	
			}if(!this.acertou[1]){
				this.retas[4]=false;
				this.retas[5]=false;
				this.retas[6]=false;
			}
			if((this.fase==3 || this.fase==4) && !this.acertou[2]){
				this.retas[7]=false;
				this.retas[8]=false;
				this.retas[9]=false;
			}
		}else{
			for(this.i=0;this.i<this.pontos.length;this.i++){
				if(posMouseX>this.pontos[this.i].x && posMouseX<this.pontos[this.i].x+this.pontos[this.i].width && posMouseY>this.pontos[this.i].y && posMouseY<this.pontos[this.i].y+this.pontos[this.i].height){
					this.pontoAtivo.x=this.pontos[this.i].x-3;
					this.pontoAtivo.y=this.pontos[this.i].y-3;
					this.pontoAtivo.width=this.pontos[this.i].width+6;
					this.pontoAtivo.height=this.pontos[this.i].height+6;
					this.pontosX.push(this.pontoAtivo.x+(this.pontos[this.i].width/2));
					this.pontosY.push(this.pontoAtivo.y+(this.pontos[this.i].height/2));
					
					//AQUI FAZ A VERIFICAÇÃO SE FORMOU UMA RETA CORRETA OU NÃO.
					if(this.indPonto!=-1){
						this.dicaX=new Array();	
						this.dicaY=new Array();

						if((this.i==0 && this.indPonto==1) || (this.i==1 && this.indPonto==0))this.retas[0]=true;
						if((this.i==2 && this.indPonto==1) || (this.i==1 && this.indPonto==2))this.retas[1]=true;
						if((this.i==2 && this.indPonto==3) || (this.i==3 && this.indPonto==2))this.retas[2]=true;
						if((this.i==0 && this.indPonto==3) || (this.i==3 && this.indPonto==0))this.retas[3]=true;
						if((this.i==4 && this.indPonto==5) || (this.i==5 && this.indPonto==4))this.retas[4]=true;
						if((this.i==6 && this.indPonto==5) || (this.i==5 && this.indPonto==6))this.retas[5]=true;
						if((this.i==6 && this.indPonto==4) || (this.i==4 && this.indPonto==6))this.retas[6]=true;
						if((this.i==7 && this.indPonto==8) || (this.i==8 && this.indPonto==7))this.retas[7]=true;
						if(this.fase==3){
							if((this.i==9 && this.indPonto==8) || (this.i==8 && this.indPonto==9))this.retas[8]=true;
							if((this.i==9 && this.indPonto==7) || (this.i==7 && this.indPonto==9))this.retas[9]=true;
						}else if(this.fase==4){
							if((this.i==5 && this.indPonto==8) || (this.i==8 && this.indPonto==5))this.retas[8]=true;
							if((this.i==5 && this.indPonto==7) || (this.i==7 && this.indPonto==5))this.retas[9]=true;
						}
						this.indPonto=this.i;
						if(this.retas[0] && this.retas[1] && this.retas[2] && this.retas[3] && !this.acertou[0]){
							this.pontosX=new Array();	
							this.pontosY=new Array();
							this.dicaX=new Array();	
							this.dicaY=new Array();	
							this.acertou[0]=true;
							this.pontoAtivo.x=1000;
							this.indPonto=-1;
						}else if(this.retas[4] && this.retas[5] && this.retas[6] && !this.acertou[1]){
							this.pontosX=new Array();	
							this.pontosY=new Array();
							this.dicaX=new Array();	
							this.dicaY=new Array();
							this.acertou[1]=true;
							this.pontoAtivo.x=1000;
							this.indPonto=-1;
						}else if(this.retas[7] && this.retas[8] && this.retas[9] && !this.acertou[2]){
							this.pontosX=new Array();	
							this.pontosY=new Array();
							this.dicaX=new Array();	
							this.dicaY=new Array();
							this.acertou[2]=true;
							this.pontoAtivo.x=1000;
							this.indPonto=-1;
						}
						if(this.fase==3 || this.fase==4){
							if(this.acertou[0] && this.acertou[1] && this.acertou[2])this.ganhou=true;
						}else{
							if(this.acertou[0] && this.acertou[1])this.ganhou=true;
						}
					}else this.indPonto=this.i;
					//APÓS VERIFICAR SE FORMOU UMA RETA CORRETA OU NÃO, SALVA O ULTIMO PONTO CLICADO
					break;
				}
			}
		}
	}
	//MUDAR A PARTE DAS DICAS DEPOIS:
	for(this.i=0;this.i<this.dicas;this.i++){
		if(posMouseX>710-(this.i*60) && posMouseX<710-(this.i*60)+56 && posMouseY>20  && posMouseY<20+34){
			this.dicas--;
			if(!this.retas[0]){
				this.dicaX.push(this.pontos[0].x+(this.pontos[0].width/2));
				this.dicaY.push(this.pontos[0].y+(this.pontos[0].height/2));
				this.dicaX.push(this.pontos[1].x+(this.pontos[1].width/2));
				this.dicaY.push(this.pontos[1].y+(this.pontos[1].height/2));
			}else if(!this.retas[1]){
				this.dicaX.push(this.pontos[1].x+(this.pontos[1].width/2));
				this.dicaY.push(this.pontos[1].y+(this.pontos[1].height/2));
				this.dicaX.push(this.pontos[2].x+(this.pontos[2].width/2));
				this.dicaY.push(this.pontos[2].y+(this.pontos[2].height/2));
			}else if(!this.retas[2]){
				this.dicaX.push(this.pontos[2].x+(this.pontos[2].width/2));
				this.dicaY.push(this.pontos[2].y+(this.pontos[2].height/2));
				this.dicaX.push(this.pontos[3].x+(this.pontos[3].width/2));
				this.dicaY.push(this.pontos[3].y+(this.pontos[3].height/2));
			}else if(!this.retas[3]){
				this.dicaX.push(this.pontos[0].x+(this.pontos[0].width/2));
				this.dicaY.push(this.pontos[0].y+(this.pontos[0].height/2));
				this.dicaX.push(this.pontos[3].x+(this.pontos[3].width/2));
				this.dicaY.push(this.pontos[3].y+(this.pontos[3].height/2));
			}else if(!this.retas[4]){
				this.dicaX.push(this.pontos[4].x+(this.pontos[4].width/2));
				this.dicaY.push(this.pontos[4].y+(this.pontos[4].height/2));
				this.dicaX.push(this.pontos[5].x+(this.pontos[5].width/2));
				this.dicaY.push(this.pontos[5].y+(this.pontos[5].height/2));
			}else if(!this.retas[5]){
				this.dicaX.push(this.pontos[5].x+(this.pontos[5].width/2));
				this.dicaY.push(this.pontos[5].y+(this.pontos[5].height/2));
				this.dicaX.push(this.pontos[6].x+(this.pontos[6].width/2));
				this.dicaY.push(this.pontos[6].y+(this.pontos[6].height/2));
			}else if(!this.retas[6]){
				this.dicaX.push(this.pontos[6].x+(this.pontos[6].width/2));
				this.dicaY.push(this.pontos[6].y+(this.pontos[6].height/2));
				this.dicaX.push(this.pontos[4].x+(this.pontos[4].width/2));
				this.dicaY.push(this.pontos[4].y+(this.pontos[4].height/2));
			}else{
				if(this.fase==3){
					if(!this.retas[7]){
						this.dicaX.push(this.pontos[7].x+(this.pontos[7].width/2));
						this.dicaY.push(this.pontos[7].y+(this.pontos[7].height/2));
						this.dicaX.push(this.pontos[8].x+(this.pontos[8].width/2));
						this.dicaY.push(this.pontos[8].y+(this.pontos[8].height/2));
					}else if(!this.retas[8]){
						this.dicaX.push(this.pontos[8].x+(this.pontos[8].width/2));
						this.dicaY.push(this.pontos[8].y+(this.pontos[8].height/2));
						this.dicaX.push(this.pontos[9].x+(this.pontos[9].width/2));
						this.dicaY.push(this.pontos[9].y+(this.pontos[9].height/2));
					}else if(!this.retas[9]){
						this.dicaX.push(this.pontos[9].x+(this.pontos[9].width/2));
						this.dicaY.push(this.pontos[9].y+(this.pontos[9].height/2));
						this.dicaX.push(this.pontos[7].x+(this.pontos[7].width/2));
						this.dicaY.push(this.pontos[7].y+(this.pontos[7].height/2));
					}
				}else if(this.fase==4){
					if(!this.retas[7]){
						this.dicaX.push(this.pontos[7].x+(this.pontos[7].width/2));
						this.dicaY.push(this.pontos[7].y+(this.pontos[7].height/2));
						this.dicaX.push(this.pontos[8].x+(this.pontos[8].width/2));
						this.dicaY.push(this.pontos[8].y+(this.pontos[8].height/2));
					}else if(!this.retas[8]){
						this.dicaX.push(this.pontos[8].x+(this.pontos[8].width/2));
						this.dicaY.push(this.pontos[8].y+(this.pontos[8].height/2));
						this.dicaX.push(this.pontos[5].x+(this.pontos[5].width/2));
						this.dicaY.push(this.pontos[5].y+(this.pontos[5].height/2));
					}else if(!this.retas[9]){
						this.dicaX.push(this.pontos[5].x+(this.pontos[5].width/2));
						this.dicaY.push(this.pontos[5].y+(this.pontos[5].height/2));
						this.dicaX.push(this.pontos[7].x+(this.pontos[7].width/2));
						this.dicaY.push(this.pontos[7].y+(this.pontos[7].height/2));
					}
				}
			}
			break;
		}
	}
}

Pontos.prototype.KeyDown = function (keyCode){}
