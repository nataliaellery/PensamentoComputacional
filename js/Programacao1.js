var Programacao1 = function (fase) {
	this.fundo = new Image();
	this.fundo.src = "img/Programacao/Fundo.png";
	this.obst = new Image();
	this.obst.src = "img/Programacao/ObstaculoProg.png";
	this.cenario = new Image();
	this.cenario.src = "img/Programacao/Cenario.png";	
	this.square = new Image();
	this.square.src = "img/Programacao/BlueSquare.png";
	this.botaoPlay = new Imagem(480,558,21,29,"img/Programacao/botaoPlayProgNew.png");
	this.novaInter = new Imagem(15,350,770,249,"img/Programacao/newInterfaceNoLoop.png");
	this.botaoExclui = new Imagem(1000,400,17,17,"img/Programacao/excluiProg.png");
	this.botaoExcluiTudo = new Imagem(420,556,28,34,"img/Programacao/excluiProgNew.png");
	this.comandos = new Imagem(0,0,0,0,"nenhum");
	this.highlightCom= new Imagem(1000,388,69,40,"img/Programacao/HighLightComandoProg.png");
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.comandoPosicao = new Array();
	this.comando = new Array();
	this.quantidade = new Array();
	this.pontos = new Array();
	this.executaComando = false;
	this.i = 0;
	this.j = 0;
	this.acertou=false;
	this.tempoAtual=0;
	this.contTempo=0;
	this.personagem= new PersonagemProg();
	this.demo= new PersonagemProg();
	this.xOk=false;
	this.yOk=false;
	this.preparaPontos=true;
	this.pontoX=0;
	this.pontoY=0;
	this.velocidadeX=0.9;
	this.velocidadeY=0.5;
	this.follow="none";
	this.mouseAntX=0;
	this.mouseAntY=0;
	this.deslocComando=0;
	this.isWalkingLeft=false;
	this.isWalkingRight=false;
	this.isWalkingUp=false;
	this.isWalkingDown=false;
	this.dirAnt="none";
	this.xOk2=false;
	this.yOk2=false;
	this.excluiComando=-1;
	this.removeUltimo=false;
	this.andaParado=false;
	this.contAnda=0;
	this.ganhou=false;
	this.tempo=0;
	this.comIniX=15;
	this.comIniY=388;
	this.comDistX=69;
	this.comDistY=40;
	this.contIniciou=0;
	this.trace="";
	//DADOS PARA COLETAR---
	this.contInstrucoes=0;
	this.contApagouIndiv=0;
	this.contApagouAll=0;
	this.contPlay=0;
	this.pulou=false;
//Dados para passar por parâmetro
	//prog1----------------------------------	
//	this.trace="fase:" + fase;
	this.fase=fase;
	if(this.fase==1){
		this.pontoInicialX=0;
		this.pontoInicialY=0;
		this.pontoFinalX=0;
		this.pontoFinalY=4;	
		this.direcaoInicial="Down";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				if(this.i==1)this.status[this.i].j[this.j].status="Obst";
				else this.status[this.i].j[this.j].status="Vazio";
			}
		}
	}else if(this.fase==2){
	//prog2--------------------------------------------
		this.pontoInicialX=0;
		this.pontoInicialY=4;
		this.pontoFinalX=4;
		this.pontoFinalY=4;	
		this.direcaoInicial="Down";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i>0 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				if(this.j==5)this.status[this.i].j[this.j].status="Obst";
				if(this.i==1 && this.j!=0 && this.j!=4)this.status[this.i].j[this.j].status="Obst";
				if(this.i<2 && this.j>4)this.status[this.i].j[this.j].status="Obst";
			}
		}
	}else if(this.fase==3){
	//prog3-------------------------------------------
		this.pontoInicialX=4;
		this.pontoInicialY=5;
		this.pontoFinalX=7;
		this.pontoFinalY=7;	
		this.direcaoInicial="Baixo";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i>0 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==1 && this.j>1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==0 && this.j>=6)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==3 && this.j>1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i>5 && this.j==6)this.status[this.i].j[this.j].status="Obst";//i=6-j=6 ->é aquela fonte :S
				else if(this.i==5 && this.j>1 && this.j<7)this.status[this.i].j[this.j].status="Obst";//i=6-j=6 ->é aquela fonte :S
			}
		}
	}else if(this.fase==4){
	//prog4--------------------------------------------
		this.pontoInicialX=7;
		this.pontoInicialY=7;
		this.pontoFinalX=6;
		this.pontoFinalY=5;	
		this.direcaoInicial="Left";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i>0 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==1 && this.j>1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==0 && this.j>=6)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==3 && this.j>1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i>5 && this.j==6)this.status[this.i].j[this.j].status="Obst";//i=6-j=6 ->é aquela fonte :S
			}
		}
	}else if(this.fase==5){
	//prog5--------------------------------------------
		this.pontoInicialX=6;
		this.pontoInicialY=5;
		this.pontoFinalX=0;
		this.pontoFinalY=0;	
		this.direcaoInicial="Left";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i>2 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==1 && this.j>1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==0 && this.j>=6)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==3 && this.j>1 && this.j<5)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==7 && this.j==6)this.status[this.i].j[this.j].status="Obst";
			}
		}
	}else if(this.fase==6){
	//prog6--------------------------------------------
		this.pontoInicialX=0;
		this.pontoInicialY=0;
		this.pontoFinalX=2;
		this.pontoFinalY=4;	
		this.direcaoInicial="Down";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i!=1 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==3 && (this.j==2 || this.j==3 || this.j>=5))this.status[this.i].j[this.j].status="Obst";
				else if(this.i==7 && this.j==6)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==1 && this.j==3)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==2 && this.j==2)this.status[this.i].j[this.j].status="Obst";
			}
		}
	}else if(this.fase==7){
	//prog7--------------------------------------------
		this.pontoInicialX=2;
		this.pontoInicialY=4;
		this.pontoFinalX=5;
		this.pontoFinalY=7;	
		this.direcaoInicial="Down";
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.i>1 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if((this.i==2 || this.i==5 || this.i==7) && this.j==6)this.status[this.i].j[this.j].status="Obst";
				else if((this.i==2 || this.i==3) && this.j==2)this.status[this.i].j[this.j].status="Obst";
				else if(this.i==3 && (this.j==3 || this.j==4))this.status[this.i].j[this.j].status="Obst";
				else if((this.i==4 && this.j==5) || (this.i==3 && this.j==7))this.status[this.i].j[this.j].status="Obst";
			}
		}
	}else if(this.fase>7){
		this.comLoop= new Imagem(625,550,69,39,"img/Programacao/ProgLoop1New.png");	
		this.rectComLoop=new Imagem(625,550,69,39,"");
		this.highlightLoop= new Imagem(1000,388,83,49,"img/Programacao/HighLightLoop.png");
		this.insideLoop=false;
		this.multipleLoop=false;
		if(fase==8){
			this.pontoInicialX=2;
			this.pontoInicialY=4;
			this.pontoFinalX=5;
			this.pontoFinalY=7;	
			this.direcaoInicial="Down";
			this.status = new Array();
			for(this.i=0; this.i<8; this.i++){
				this.status[this.i]= new Matriz(8);
				for(this.j=0; this.j<8; this.j++){
					this.status[this.i].j[this.j].status="Vazio";	
				}
			}
		}
	}
	//---------------------
	this.ativo=true;
	this.comLeft=new Imagem(575,486,83,48,"img/Programacao/BotaoLeftProg.png");
	this.comRight=new Imagem(660,437,83,48,"img/Programacao/BotaoRightProg.png");
	this.comUp=new Imagem(575,437,83,48,"img/Programacao/botaoUpProg.png");
	this.comDown=new Imagem(660,486,83,48,"img/Programacao/botaoDownProg.png");
	this.rectComLeft=new Imagem(575,486,83,48,"");
	this.rectComRight=new Imagem(660,437,83,48,"");
	this.rectComUp=new Imagem(575,437,83,48,"");
	this.rectComDown=new Imagem(660,486,83,48,"");
	
	this.distX=182;
	this.distY=220;
	for(this.i=0; this.i<8; this.i++){
		this.pontos[this.i]= new Matriz(8);
		for(this.j=0; this.j<8; this.j++){
			this.pontos[this.i].j[this.j].img.src="img/Programacao/bolota.png";
			this.pontos[this.i].j[this.j].x=(this.j*31)+this.distX;
			this.pontos[this.i].j[this.j].y=(this.j*18)+this.distY;
			this.pontos[this.i].j[this.j].status=this.status[this.i].j[this.j].status;
		}
		this.distX+=31;
		this.distY-=18;
	}
	this.personagem.x=this.pontos[this.pontoInicialX].j[this.pontoInicialY].x - (this.personagem.width/2);
	this.personagem.y=this.pontos[this.pontoInicialX].j[this.pontoInicialY].y - this.personagem.height;
	this.personagem.animaParado(this.direcaoInicial);
	
	this.demo.x=645;
	this.demo.y=425;
	
	this.pontoX=this.pontoInicialX;
	this.pontoY=this.pontoInicialY;
	this.tempo=0;
};

Programacao1.prototype.Draw = function(){
	
	context.drawImage(this.fundo, -10, -10,850,650);
	context.drawImage(this.cenario, 80, -21);
	context.font="30px Georgia";
	
	if(this.ativo && !this.pulou && !this.ganhou)this.tempo+=0.02;
	this.contTempo+=0.02;
	if(this.tempo>=60)this.botaoPular.x=10;
	
	/*if(this.errou){
		if(this.contTempo+1<this.tempo){
			this.personagem.x=this.pontos[this.pontoInicialX].j[this.pontoInicialY].x - (this.personagem.width/2);
			this.personagem.y=this.pontos[this.pontoInicialX].j[this.pontoInicialY].y - this.personagem.height;
			this.personagem.animaParado(this.direcaoInicial);
			this.pontoX=pontoInicialX;
			this.pontoY=pontoInicialY;
			this.errou=false;
		}
	}else */if(this.ganhou && !this.executaComando){
		//Essa parte é responsável por mostrar que está certo e ir pra próxima fase
		context.fillText("Correto",220,590);
		//this.trace="cont"+this.contTempo+"-tempo"+this.tempo;
		if(this.contTempo>this.tempo+1){
				this.ativo=false;
				this.tempo=0;
				this.contTempo=0;
		}
	}else{
		//Aqui que acontece toda a movimentação
		this.VerificaRemoveuComando();
		this.MoveBonecoDemo();
		//Teoricamente essa é a parte de quando passa o mouse pelos comandos
		if(posMouseX>this.rectComUp.x && posMouseX<(this.rectComUp.x + this.rectComUp.width) && posMouseY>this.rectComUp.y && posMouseY<(this.rectComUp.y + this.rectComUp.height)){
			this.isWalkingUp=true;				
			this.isWalkingLeft=false;
			this.isWalkingDown=false;
			this.isWalkingRight=false;
		}else if(posMouseX>this.rectComDown.x && posMouseX<(this.rectComDown.x + this.rectComDown.width) && posMouseY>this.rectComDown.y && posMouseY<(this.rectComDown.y + this.rectComDown.height)){
			this.isWalkingRight=false;				
			this.isWalkingLeft=false;
			this.isWalkingDown=true;
			this.isWalkingUp=false;
		}else if(posMouseX>this.rectComRight.x && posMouseX<(this.rectComRight.x + this.rectComRight.width) && posMouseY>this.rectComRight.y && posMouseY<(this.rectComRight.y + this.rectComRight.height)){
			this.isWalkingLeft=false;
			this.isWalkingRight=true;
			this.isWalkingDown=false;
			this.isWalkingUp=false;
		}else if(posMouseX>this.rectComLeft.x && posMouseX<(this.rectComLeft.x + this.rectComLeft.width) && posMouseY>this.rectComLeft.y && posMouseY<(this.rectComLeft.y + this.rectComLeft.height)){
			this.isWalkingUp=false;
			this.isWalkingRight=false;
			this.isWalkingDown=false;
			this.isWalkingLeft=true;
		}else{
			if(this.isWalkingLeft){
				this.isWalkingLeft=false;
				this.demo.animaParado("Left");
			}else if(this.isWalkingRight){
				this.isWalkingRight=false;
				this.demo.animaParado("Right");
			}else if(this.isWalkingUp){
				this.isWalkingUp=false;
				this.demo.animaParado("Up");
			}else if(this.isWalkingDown){
				this.isWalkingDown=false;
				this.demo.animaParado("Down");
			}
			this.isWalkingLeft=false;
			this.isWalkingUp=false;
			this.isWalkingRight=false;
			this.isWalkingDown=false;
			this.demo.x=645;
			this.demo.y=425;
		}
		this.excluiComando=-1;
		this.botaoExclui.x=1000;
		if(this.follow=="Up"){
			this.comUp.x+=posMouseX-this.mouseAntX;
			this.comUp.y+=posMouseY-this.mouseAntY;
			this.mouseAntX=posMouseX;
			this.mouseAntY=posMouseY;
		}else if(this.follow=="Down"){
			this.comDown.x+=posMouseX-this.mouseAntX;
			this.comDown.y+=posMouseY-this.mouseAntY;
			this.mouseAntX=posMouseX;
			this.mouseAntY=posMouseY;
		}else if(this.follow=="Left"){
			this.comLeft.x+=posMouseX-this.mouseAntX;
			this.comLeft.y+=posMouseY-this.mouseAntY;
			this.mouseAntX=posMouseX;
			this.mouseAntY=posMouseY;
		}else if(this.follow=="Right"){
			this.comRight.x+=posMouseX-this.mouseAntX;
			this.comRight.y+=posMouseY-this.mouseAntY;
			this.mouseAntX=posMouseX;
			this.mouseAntY=posMouseY;
		}else if(this.fase>7 && this.follow=="Loop"){
			this.comLoop.x+=posMouseX-this.mouseAntX;
			this.comLoop.y+=posMouseY-this.mouseAntY;
			this.mouseAntX=posMouseX;
			this.mouseAntY=posMouseY;
		}else{
			this.comUp.x=this.rectComUp.x;
			this.comUp.y=this.rectComUp.y;
			this.comDown.x=this.rectComDown.x;
			this.comDown.y=this.rectComDown.y;
			this.comLeft.x=this.rectComLeft.x;
			this.comLeft.y=this.rectComLeft.y;
			this.comRight.x=this.rectComRight.x;
			this.comRight.y=this.rectComRight.y;
			if(this.fase>7){				
				this.comLoop.x=this.rectComLoop.x;
				this.comLoop.y=this.rectComLoop.y;
			}
			if(!this.executaComando){
				for(this.i=this.indice;this.i<this.comandoPosicao.length;this.i++){
					if(posMouseX>this.comandoPosicao[this.i].x && posMouseX<this.comandoPosicao[this.i].x+this.comandoPosicao[this.i].width && posMouseY>this.comandoPosicao[this.i].y && posMouseY<this.comandoPosicao[this.i].y+this.comandoPosicao[this.i].height){
						this.excluiComando=this.i;
						if(this.follow=="none"){
							this.botaoExclui.x=this.comandoPosicao[this.i].x;
							this.botaoExclui.y=this.comandoPosicao[this.i].y;
							if(this.comando[this.i].substring(0,4)=="Loop"){
								
							}
						}
					}
				}
			}
		}
		this.insideLoop=false;
		this.multipleLoop=false;
		if(this.executaComando){
			if(this.indice<this.comando.length){
				this.pontos[this.pontoX].j[this.pontoY].status="Vazio";
				this.highlightCom.x=this.comandoPosicao[this.indice].x;
				this.highlightCom.y=this.comandoPosicao[this.indice].y;
				this.personagem.animaWalk(this.comando[this.indice]);
				if(this.preparaPontos){
					if(this.comando[this.indice]=="Left"){
						if(this.pontoX-1>=0 && this.pontos[this.pontoX-1].j[this.pontoY].status=="Vazio")this.pontoX--;
						else this.andaParado=true;
					}else if(this.comando[this.indice]=="Right"){
						if(this.pontoX+1<this.pontos.length && this.pontos[this.pontoX+1].j[this.pontoY].status=="Vazio")this.pontoX++;
						else this.andaParado=true;
					}else if(this.comando[this.indice]=="Up"){
						if(this.pontoY-1>=0 && this.pontos[this.pontoX].j[this.pontoY-1].status=="Vazio")this.pontoY--;
						else this.andaParado=true;
					}else if(this.comando[this.indice]=="Down"){
						if(this.pontoY+1<this.pontos[0].j.length && this.pontos[this.pontoX].j[this.pontoY+1].status=="Vazio")this.pontoY++;
						else this.andaParado=true;
					}
					this.preparaPontos=false;
				}else{
					if(this.quantidade[this.indice]>0){
						if(this.andaParado){
							this.contAnda++;
						}else{
							if(this.personagem.x>(this.pontos[this.pontoX].j[this.pontoY].x-(this.personagem.width/2))+1){
								this.personagem.x-=this.velocidadeX;
							}else if(this.personagem.x<(this.pontos[this.pontoX].j[this.pontoY].x-(this.personagem.width/2))-1){
								this.personagem.x+=this.velocidadeX;
							}else this.xOk=true;
							if(this.personagem.y>(this.pontos[this.pontoX].j[this.pontoY].y-this.personagem.height)){
								this.personagem.y-=this.velocidadeY;
							}else if(this.personagem.y<(this.pontos[this.pontoX].j[this.pontoY].y-this.personagem.height)-1){
								this.personagem.y+=this.velocidadeY;
							}else this.yOk=true;
						}
						if((this.xOk && this.yOk) || this.contAnda>40){
							//AQUI VERIFICA SE GANHOU OU NÃO
							if(this.pontoX==this.pontoFinalX && this.pontoY==this.pontoFinalY){
								if(this.indice==this.comando.length-1){
									this.square.src="img/Programacao/GreenSquare.png";
									this.ganhou=true;
								}else this.square.src="img/Programacao/YellowSquare.png";
							}else this.square.src="img/Programacao/BlueSquare.png";
							//Zera tudo pra próxuma vez----
							this.contAnda=0;
							this.andaParado=false;
							this.quantidade[this.indice]--;
							this.xOk=false;
							this.yOk=false;
							this.preparaPontos=true;
							if(this.quantidade[this.indice]<=0){
								//here
								this.quantidade[this.indice]=1;
								this.indice++;
							}
						}
					}
				}
			}else{
				this.executaComando=false;
				this.personagem.animaParado(this.comando[this.comando.length-1]);
				if(!this.ganhou){
					this.errou=true;
				}
			}
		}else{
			//QUALQUER COISA TIRAR ISSO DEPOIS (pq? não lembro pq escrevi isso -.-)
			this.indice=0;
			if(this.indice>0)this.highlightCom.x=this.comandoPosicao[this.indice-1].x;
			this.highlightCom.x=1000;
		}
	}
	
	context.drawImage(this.novaInter.img, this.novaInter.x, this.novaInter.y);
	context.drawImage(this.square, this.pontos[this.pontoFinalX].j[this.pontoFinalY].x-34, this.pontos[this.pontoFinalX].j[this.pontoFinalY].y-25,75,42);//55,31
	for(this.i=7; this.i>=0; this.i--){
		for(this.j=0; this.j<8; this.j++){
			if(this.pontos[this.i].j[this.j].status=="Obst")context.drawImage(this.obst, this.pontos[this.i].j[this.j].x-24, this.pontos[this.i].j[this.j].y-34);//50,43
		}
	}
	context.drawImage(this.botaoPlay.img, this.botaoPlay.x, this.botaoPlay.y);
	context.drawImage(this.botaoExcluiTudo.img, this.botaoExcluiTudo.x, this.botaoExcluiTudo.y);
	context.drawImage(this.personagem.imagem, this.personagem.x, this.personagem.y);
	context.drawImage(this.botaoPular.img, this.botaoPular.x, this.botaoPular.y);
	for(this.i=0; this.i<this.comandoPosicao.length; this.i++){
		context.drawImage(this.comandoPosicao[this.i].img, this.comandoPosicao[this.i].x, this.comandoPosicao[this.i].y);
	}
	context.drawImage(this.highlightCom.img, this.highlightCom.x, this.highlightCom.y,this.highlightCom.width,this.highlightCom.height);
	context.drawImage(this.botaoExclui.img, this.botaoExclui.x, this.botaoExclui.y);
	context.drawImage(this.comLeft.img, this.comLeft.x, this.comLeft.y);
	context.drawImage(this.comRight.img, this.comRight.x, this.comRight.y);
	context.drawImage(this.comUp.img, this.comUp.x, this.comUp.y);
	context.drawImage(this.comDown.img, this.comDown.x, this.comDown.y);
	if(this.fase>7){
		context.drawImage(this.comLoop.img, this.comLoop.x, this.comLoop.y);	
	}
	context.drawImage(this.demo.imagem, this.demo.x, this.demo.y);
	
	context.fillText("Tempo: " + Math.round(this.tempo),10,40);
	context.fillText(" " + this.trace,150,70);
	
}

Programacao1.prototype.MouseDown = function(mouseEvent) {	
	//Para verificar se está clicando em um comando e poder levar ele pro programa
	if(posMouseX>this.rectComUp.x && posMouseX<(this.rectComUp.x + this.rectComUp.width) && posMouseY>this.rectComUp.y && posMouseY<(this.rectComUp.y + this.rectComUp.height)){
		this.mouseAntX=posMouseX;
		this.mouseAntY=posMouseY;
		this.follow="Up";
	}else if(posMouseX>this.rectComDown.x && posMouseX<(this.rectComDown.x + this.rectComDown.width) && posMouseY>this.rectComDown.y && posMouseY<(this.rectComDown.y + this.rectComDown.height)){
		this.mouseAntX=posMouseX;
		this.mouseAntY=posMouseY;
		this.follow="Down";
	}else if(posMouseX>this.rectComRight.x && posMouseX<(this.rectComRight.x + this.rectComRight.width) && posMouseY>this.rectComRight.y && posMouseY<(this.rectComRight.y + this.rectComRight.height)){
		this.mouseAntX=posMouseX;
		this.mouseAntY=posMouseY;
		this.follow="Right";
	}else if(posMouseX>this.rectComLeft.x && posMouseX<(this.rectComLeft.x + this.rectComLeft.width) && posMouseY>this.rectComLeft.y && posMouseY<(this.rectComLeft.y + this.rectComLeft.height)){
		this.mouseAntX=posMouseX;
		this.mouseAntY=posMouseY;
		this.follow="Left";
	}else if(this.fase>7 && posMouseX>this.rectComLoop.x && posMouseX<(this.rectComLoop.x + this.rectComLoop.width) && posMouseY>this.rectComLoop.y && posMouseY<(this.rectComLoop.y + this.rectComLoop.height)){
		this.mouseAntX=posMouseX;
		this.mouseAntY=posMouseY;
		this.follow="Loop";
	}
}

Programacao1.prototype.MouseUp = function(mouseEvent) {
	//Verificar se soltou um comando no programa
	if(posMouseX>this.novaInter.x && posMouseX<(this.novaInter.x + 520) && posMouseY>this.novaInter.y && posMouseY<(this.novaInter.y + 200)){
		if(this.follow!="none")this.AddComando(this.follow);
	}
	//Pular a fase
	if(this.tempo>=60){
		if(posMouseX>this.botaoPular.x && posMouseX<(this.botaoPular.x + this.botaoPular.width) && posMouseY>this.botaoPular.y && posMouseY<(this.botaoPular.y + this.botaoPular.height)){
			this.pulou=true;
		}
	}
	
	if(!this.executaComando){
		if(!this.ganhou){
			//Se apertar no botão play
			if(posMouseX>this.botaoPlay.x && posMouseX<(this.botaoPlay.x + this.botaoPlay.width) && posMouseY>this.botaoPlay.y && posMouseY<(this.botaoPlay.y + this.botaoPlay.height)){
				this.executaComando=true;
				this.contPlay++;
			//Se apagar todos
			}else if(posMouseX>this.botaoExcluiTudo.x && posMouseX<(this.botaoExcluiTudo.x + this.botaoExcluiTudo.width) && posMouseY>this.botaoExcluiTudo.y && posMouseY<(this.botaoExcluiTudo.y + this.botaoExcluiTudo.height)){
				this.contApagouAll++;
				this.RemoveTudo();
			}
			//Apagar um comando individual
			if(posMouseX>this.botaoExclui.x && posMouseX<(this.botaoExclui.x + this.botaoExclui.width) && posMouseY>this.botaoExclui.y && posMouseY<(this.botaoExclui.y + this.botaoExclui.height)){
				//this.trace="mandou apagar essa bosta";
				this.removeUltimo=true;
				this.contApagouIndiv++;
			}
		}
	}
	this.follow="none";
}

Programacao1.prototype.KeyDown = function (keyCode){}

Programacao1.prototype.VerificaRemoveuComando = function (){
	if(this.indice>0)this.highlightCom.x=this.comandoPosicao[this.indice-1].x;
	if(this.removeUltimo){
		//Reorganizando os comandos para ficarem na ordem certa sem o que foi removido
		for(this.i=this.excluiComando;this.i<this.comando.length-1;this.i++){
			this.comando[this.i]=this.comando[this.i+1];
			this.quantidade[this.i]=this.quantidade[this.i+1];
			if(this.comando[this.i]=="Up"){
				this.comandoPosicao[this.i].img.src=("img/Programacao/botaoUpProgMenor.png");
			}else if(this.comando[this.i]=="Down"){
				this.comandoPosicao[this.i].img.src=("img/Programacao/botaoDownProgMenor.png");
			}else if(this.comando[this.i]=="Left"){
				this.comandoPosicao[this.i].img.src=("img/Programacao/BotaoLeftProgMenor.png");
			}else if(this.comando[this.i]=="Right"){
				this.comandoPosicao[this.i].img.src=("img/Programacao/BotaoRightProgMenor.png");
			}else if(this.comando[this.i]=="Right"){
				this.comandoPosicao[this.i].img.src=("img/Programacao/BotaoRightProgMenor.png");
			}
		}
		this.comando.pop();
		this.quantidade.pop();
		this.comandoPosicao.pop();
		this.removeUltimo=false;
	}
}
Programacao1.prototype.MoveBonecoDemo = function (){
	if(this.isWalkingDown){
		this.dirAtual="Down";
		if(this.demo.x<695){
			this.demo.x+=this.velocidadeX;
		}this.xOk2=true;
		if(this.demo.y<455){
			this.demo.y+=this.velocidadeY;
		}else this.yOk2=true;
		if(this.xOk2 && this.yOk2){
			this.xOk2=false;
			this.yOk2=false;
			this.demo.x=645;
			this.demo.y=425;
		}
		this.demo.animaWalk("Down");
	}else if(this.isWalkingLeft){
		this.dirAtual="Left";
		if(this.demo.x>591){
			this.demo.x-=this.velocidadeX;
		}this.xOk2=true;
		if(this.demo.y<455){
			this.demo.y+=this.velocidadeY;
		}else this.yOk2=true;
		if(this.xOk2 && this.yOk2){
			this.xOk2=false;
			this.yOk2=false;
			this.demo.x=645;
			this.demo.y=425;
		}
		this.demo.animaWalk("Left");
	}else if(this.isWalkingUp){
		this.dirAtual="Up";
		if(this.demo.x>581){
			this.demo.x-=this.velocidadeX;
		}this.xOk2=true;
		if(this.demo.y>400){
			this.demo.y-=this.velocidadeY;
		}else this.yOk2=true;
		if(this.xOk2 && this.yOk2){
			this.xOk2=false;
			this.yOk2=false;
			this.demo.x=645;
			this.demo.y=425;
		}
		this.demo.animaWalk("Up");
	}else if(this.isWalkingRight){
		this.dirAtual="Right";
		if(this.demo.x<705){
			this.demo.x+=this.velocidadeX;
		}this.xOk2=true;
		if(this.demo.y>390){
			this.demo.y-=this.velocidadeY;
		}else this.yOk2=true;
		if(this.xOk2 && this.yOk2){
			this.xOk2=false;
			this.yOk2=false;
			this.demo.x=645;
			this.demo.y=425;
		}
		this.demo.animaWalk("Right");
	}else{
		this.demo.x=645;
		this.demo.y=425;
	}
	if(this.dirAtual!=this.dirAnt){
		this.xOk2=false;
		this.yOk2=false;
		this.demo.x=645;
		this.demo.y=425;
		this.dirAnt=this.dirAtual;
	}
}
Programacao1.prototype.AddComando = function (stringComando){
	if(this.comandoPosicao.length<=(6*4)+3){
		this.contInstrucoes++;
		this.comando.push(stringComando);
		this.quantidade.push(1);
		if(stringComando=="Up"){
			this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,"img/Programacao/botaoUpProgMenor.png"));
		}else if(stringComando=="Down"){
			this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,"img/Programacao/botaoDownProgMenor.png"));
		}else if(stringComando=="Left"){
			this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,"img/Programacao/BotaoLeftProgMenor.png"));
		}else if(stringComando=="Right"){
			this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,"img/Programacao/BotaoRightProgMenor.png"));
		}
		this.qtd=7;
		if(this.comandoPosicao.length>1){
				if(this.comandoPosicao.length<=this.qtd){
					this.comandoPosicao[this.comandoPosicao.length-1].y=this.comIniY;
					this.comandoPosicao[this.comandoPosicao.length-1].x=this.comandoPosicao[this.comandoPosicao.length-2].x+this.comDistX;
				}else if(this.comandoPosicao.length<=(this.qtd*2)){
					this.comandoPosicao[this.comandoPosicao.length-1].y=this.comIniY+40;
					if(this.comandoPosicao.length==(this.qtd)+1)this.comandoPosicao[this.comandoPosicao.length-1].x=this.comIniX;
					else this.comandoPosicao[this.comandoPosicao.length-1].x=this.comandoPosicao[this.comandoPosicao.length-2].x+this.comDistX;
				}else if(this.comandoPosicao.length<=(this.qtd*3)){
					this.comandoPosicao[this.comandoPosicao.length-1].y=this.comIniY+(40*2);
					if(this.comandoPosicao.length==(this.qtd*2)+1)this.comandoPosicao[this.comandoPosicao.length-1].x=this.comIniX;
					else this.comandoPosicao[this.comandoPosicao.length-1].x=this.comandoPosicao[this.comandoPosicao.length-2].x+this.comDistX;
				}else if(this.comandoPosicao.length<=(this.qtd*4)){
					this.comandoPosicao[this.comandoPosicao.length-1].y=this.comIniY+(40*3);
					if(this.comandoPosicao.length==(this.qtd*3)+1)this.comandoPosicao[this.comandoPosicao.length-1].x=this.comIniX;
					else this.comandoPosicao[this.comandoPosicao.length-1].x=this.comandoPosicao[this.comandoPosicao.length-2].x+this.comDistX;
				}
		}
		//this.trace="entrou em add comando";
	}
}
Programacao1.prototype.RemoveTudo = function (){
	this.comandoPosicao = new Array();
	this.comando = new Array();
	this.quantidade = new Array();
	this.contInstrucoes = 0;
}