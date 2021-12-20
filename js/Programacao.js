var Programacao = function (fase) {
	this.random=(Math.random()*101);
	this.random2=(Math.random()*101);
	this.fundo = new Image();
	this.fundo = tdsImagens[75];
	this.obst = new Image();
	this.obst = tdsImagens[76];
	this.cenario = new Image();
	this.cenario = tdsImagens[77];
	this.square = new Image();
	this.square = tdsImagens[78];
	this.botaoPlay = new Imagem(480,558,21,29,"");
	this.botaoPlay.img = tdsImagens[79];
	this.novaInter = new Imagem(15,350,770,249,"");
	this.novaInter.img = tdsImagens[80];
	this.botaoExclui = new Imagem(1000,400,17,17,"");
	this.botaoExclui.img = tdsImagens[81];
	this.botaoExcluiTudo = new Imagem(420,556,28,34,"");
	this.botaoExcluiTudo.img = tdsImagens[82];
	this.comandos = new Imagem(0,0,0,0,"nenhum");
	this.highlightCom= new Imagem(1000,388,69,40,"");
	this.highlightCom.img = tdsImagens[83];
	this.botaoPular= new Imagem(1000,560,86,36,"");
	this.botaoPular.img = tdsImagens[84];
	this.comandoPosicao = new Array();
	this.loopPosicao = new Array();
	this.comando = new Array();
	this.quantidade = new Array();
	this.quantidadeTotal = new Array();
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
	this.indice=0;
	//COISAS QUE O LOOP FEZ APARECER
	this.comTotalLoop = new Array();
	this.updateLoop=-1;
	this.updateLoopId=-1;
	this.botaoMais=new Imagem(1000,560,86,36,"");
	this.botaoMais.img = tdsImagens[85];
	this.botaoMenos=new Imagem(1000,560,86,36,"");
	this.botaoMenos.img = tdsImagens[86];
	this.multipleLoop=false;
	this.insideLoop=false;
	this.comAtualLoop=new Array();
	this.msgErro="";
	//DADOS PARA COLETAR---
	this.contInstrucoes=0;
	this.contApagouIndiv=0;
	this.contApagouAll=0;
	this.contPlay=0;
	this.pulou=false;
	this.imgPular= new Imagem(1000,560,0,0,"");
	this.imgPular.img = tdsImagens[87];
	this.contLoop=0;
	this.contInstrLoop=0;
//Dados para passar por parâmetro
	//prog1----------------------------------	
	this.fase=fase;
	if(this.fase==1){
		if(this.random<50){
			if(this.random<6.25){
				this.pontoInicialX=0;
				this.pontoFinalX=0;
			}else if(this.random<12.5){
				this.pontoInicialX=1;
				this.pontoFinalX=1;
			}else if(this.random<18.75){
				this.pontoInicialX=2;
				this.pontoFinalX=2;
			}else if(this.random<25){
				this.pontoInicialX=3;
				this.pontoFinalX=3;
			}else if(this.random<31.25){
				this.pontoInicialX=4;
				this.pontoFinalX=4;
			}else if(this.random<37.5){
				this.pontoInicialX=5;
				this.pontoFinalX=5;
			}else if(this.random<43.75){
				this.pontoInicialX=6;
				this.pontoFinalX=6;
			}else{
				this.pontoInicialX=7;
				this.pontoFinalX=7;
			}
			if(this.random2<12.5)this.pontoInicialY=0;
			else if(this.random2<25)this.pontoInicialY=1;
			else if(this.random2<37.5)this.pontoInicialY=2;
			else if(this.random2<50)this.pontoInicialY=3;
			else if(this.random2<62.5)this.pontoInicialY=7;
			else if(this.random2<75)this.pontoInicialY=6;
			else if(this.random2<87.5)this.pontoInicialY=5;
			else this.pontoInicialY=4;
			if(this.pontoInicialY<=3){	
				this.pontoFinalY=this.pontoInicialY+4;
				this.direcaoInicial="Down";
			}else{
				this.pontoFinalY=this.pontoInicialY-4;
				this.direcaoInicial="Up";
			}
		}else{
			if(this.random<56.25){
				this.pontoInicialY=0;
				this.pontoFinalY=0;
			}else if(this.random<62.5){
				this.pontoInicialY=1;
				this.pontoFinalY=1;
			}else if(this.random<68.75){
				this.pontoInicialY=2;
				this.pontoFinalY=2;
			}else if(this.random<75){
				this.pontoInicialY=3;
				this.pontoFinalY=3;
			}else if(this.random<81.25){
				this.pontoInicialY=4;
				this.pontoFinalY=4;
			}else if(this.random<87.5){
				this.pontoInicialY=5;
				this.pontoFinalY=5;
			}else if(this.random<93.75){
				this.pontoInicialY=6;
				this.pontoFinalY=6;
			}else{
				this.pontoInicialY=7;
				this.pontoFinalY=7;
			}
			if(this.random2<12.5)this.pontoInicialX=0;
			else if(this.random2<25)this.pontoInicialX=1;
			else if(this.random2<37.5)this.pontoInicialX=2;
			else if(this.random2<50)this.pontoInicialX=3;
			else if(this.random2<62.5)this.pontoInicialX=7;
			else if(this.random2<75)this.pontoInicialX=6;
			else if(this.random2<87.5)this.pontoInicialX=5;
			else this.pontoInicialX=4;
			if(this.pontoInicialX<=3){	
				this.pontoFinalX=this.pontoInicialX+4;
				this.direcaoInicial="Right";
			}else{
				this.pontoFinalX=this.pontoInicialX-4;
				this.direcaoInicial="Left";
			}	
		}
		this.status = new Array();
		for(this.i=0; this.i<8; this.i++){
			this.status[this.i]= new Matriz(8);
			for(this.j=0; this.j<8; this.j++){
				this.status[this.i].j[this.j].status="Vazio";
				if(this.random<6.25 && this.i==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=6.25 && this.random<12.5 && (this.i==2 || this.i==0))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=12.5 && this.random<18.75 && (this.i==3 || this.i==1))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=18.75 && this.random<25 && (this.i==4 || this.i==2))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=25 && this.random<31.25 && (this.i==5 || this.i==3))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=31.25 && this.random<37.5 && (this.i==6 || this.i==4))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=37.5 && this.random<43.75 && (this.i==7 || this.i==5))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=43.75 && this.random<50 && this.i==6)this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=50 && this.random<56.25 && this.random<56.25 && this.j==1)this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=56.25 && this.random<62.5 && (this.j==2 || this.j==0))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=62.5 && this.random<68.75 && (this.j==3 || this.j==1))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=68.75 && this.random<75 && (this.j==4 || this.j==2))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=75 && this.random<81.25 && (this.j==5 || this.j==3))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=81.25 && this.random<87.5 && (this.j==6 || this.j==4))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=87.5 && this.random<93.75 && (this.j==7 || this.j==5))this.status[this.i].j[this.j].status="Obst";
				else if(this.random>=93.75 && this.j==6)this.status[this.i].j[this.j].status="Obst";
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
		this.comLoop= new Imagem(625,550,69,39,"");	
		this.comLoop.img = tdsImagens[88];
		this.rectComLoop=new Imagem(625,550,69,39,"");
		this.highlightLoop= new Imagem(1000,388,83,49,"");
		this.highlightLoop.img = tdsImagens[89];
		this.insideLoop=false;
		this.multipleLoop=false;
		if(fase==8){
			this.pontoInicialX=7;
			this.pontoInicialY=7;
			this.pontoFinalX=0;
			this.pontoFinalY=0;	
			this.direcaoInicial="Left";
			this.status = new Array();
			for(this.i=0; this.i<8; this.i++){
				this.status[this.i]= new Matriz(8);
				for(this.j=0; this.j<8; this.j++){
					this.status[this.i].j[this.j].status="Vazio";	
					if(this.j==0 && this.i>0)this.status[this.i].j[this.j].status="Obst";
					if(this.j==1 && this.i>1)this.status[this.i].j[this.j].status="Obst";
					if(this.j==2 && this.i>2)this.status[this.i].j[this.j].status="Obst";
					if(this.j==3 && this.i>3)this.status[this.i].j[this.j].status="Obst";
					if(this.j==4 && this.i>4)this.status[this.i].j[this.j].status="Obst";
					if(this.j==5 && this.i>5)this.status[this.i].j[this.j].status="Obst";
					if(this.j==6 && this.i>6)this.status[this.i].j[this.j].status="Obst";
				}
			}
		}else if(fase==9){
			this.pontoInicialX=0;
			this.pontoInicialY=0;
			this.pontoFinalX=3;
			this.pontoFinalY=6;	
			this.direcaoInicial="Left";
			this.status = new Array();
			for(this.i=0; this.i<8; this.i++){
				this.status[this.i]= new Matriz(8);
				for(this.j=0; this.j<8; this.j++){
					this.status[this.i].j[this.j].status="Vazio";	
					if(this.j==0 && this.i>0)this.status[this.i].j[this.j].status="Obst";
					if(this.j==1 && this.i>1)this.status[this.i].j[this.j].status="Obst";
					if(this.j==2 && this.i>2)this.status[this.i].j[this.j].status="Obst";
					if(this.j==3 && this.i>3)this.status[this.i].j[this.j].status="Obst";
					if(this.j==4 && this.i>4)this.status[this.i].j[this.j].status="Obst";
					if(this.j==5 && this.i>5)this.status[this.i].j[this.j].status="Obst";
					if(this.j==6 && this.i>6)this.status[this.i].j[this.j].status="Obst";
				}
			}
		}
	}
	//---------------------
	this.ativo=true;
	this.comLeft=new Imagem(575,486,83,48,"");
	this.comLeft.img = tdsImagens[90];
	this.comRight=new Imagem(660,437,83,48,"");
	this.comRight.img = tdsImagens[91];
	this.comUp=new Imagem(575,437,83,48,"");
	this.comUp.img = tdsImagens[92];
	this.comDown=new Imagem(660,486,83,48,"");
	this.comDown.img = tdsImagens[93];
	this.rectComLeft=new Imagem(575,486,83,48,"");
	this.rectComRight=new Imagem(660,437,83,48,"");
	this.rectComUp=new Imagem(575,437,83,48,"");
	this.rectComDown=new Imagem(660,486,83,48,"");
	
	this.distX=182;
	this.distY=220;
	for(this.i=0; this.i<8; this.i++){
		this.pontos[this.i]= new Matriz(8);
		for(this.j=0; this.j<8; this.j++){
			this.pontos[this.i].j[this.j].img = tdsImagens[94];
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

Programacao.prototype.Draw = function(){
	
	if(this.ativo){
		context.drawImage(this.cenario, 80, -21);
		context.font="30px Georgia";

		if(this.ativo && !this.pulou && !this.ganhou)this.tempo+=0.02;
		this.contTempo+=0.02;
		if(this.tempo>=60)this.botaoPular.x=10;
		
		if(this.ganhou && !this.executaComando){
			//Essa parte é responsável por mostrar que está certo e ir pra próxima fase
			context.fillText("Correto",220,590);
			if(this.contTempo>this.tempo+1){
					this.ativo=false;
					this.tempo=0;
					this.contTempo=0;
			}
		}else{
			if(!this.pulou){
				//Aqui que acontece toda a movimentação
				this.VerificaRemoveuComando();
				this.MoveBonecoDemo();
				//Essa é a parte que avisa quando passa o mouse pelos comandos
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
					//Essa é a parte que faz o bonequinho de demonstração parar quando o mouse não está mais em cima
					//dos comandos
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
				//Aqui reinicia as variáveis que verificam se o mouse
				//está passando por cima de algum comando para esconder
				//o botão de excluir o comando
				this.excluiComando=-1;
				this.botaoExclui.x=1000;
				//Caso o mouse esteja clicado e esteja segurando algum comando (variável follow)
				//então essa parte faz o comando seguir o mouse
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
					//caso nenhum comando esteja seguindo o mouse, todos voltam pro lugar de origem
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
				}
				//Aqui começam as verificações das coisas que podem acontecer enquanto não está
				//sendo executado nenhum programa
				this.insideLoop=false;
				this.maisOver=false;
				this.menosOver=false;
				if(!this.executaComando){
					for(this.i=this.indice;this.i<this.comandoPosicao.length;this.i++){
						if(posMouseX>this.comandoPosicao[this.i].x && posMouseX<this.comandoPosicao[this.i].x+this.comandoPosicao[this.i].width && posMouseY>this.comandoPosicao[this.i].y && posMouseY<this.comandoPosicao[this.i].y+this.comandoPosicao[this.i].height){
							//Caso o mouse passar por algum comando, essa
							//variável vai confirmar qual é o comando que
							//o mouse está por cima
							this.excluiComando=this.i;
							if(this.follow=="none"){
								//Aqui faz o botão excluir ser posicionado em cima do comando
								this.botaoExclui.x=this.comandoPosicao[this.i].x;
								this.botaoExclui.y=this.comandoPosicao[this.i].y;
								if(this.fase>7 && this.comando[this.i].substring(0,4)=="Loop"){
									this.cont=this.i;
									this.cont2=this.i;
									if(this.comTotalLoop[this.i]==20000 || this.comTotalLoop[this.i]==0){
										if(this.comTotalLoop[this.i]==20000){
											this.cont2--;
											while(this.cont2>0 && this.comTotalLoop[this.cont2]==10000){
												this.cont2--;
											}
											if(posMouseX>(this.comandoPosicao[this.i].x+51) && posMouseX<(this.comandoPosicao[this.i].x+51+12) && posMouseY>(this.comandoPosicao[this.i].y) && posMouseY<(this.comandoPosicao[this.i].y+12)){
												this.maisOver=true;   
											}else if(posMouseX>(this.comandoPosicao[this.i].x+51) && posMouseX<(this.comandoPosicao[this.i].x+51+12) && posMouseY>(this.comandoPosicao[this.i].y) && posMouseY<(this.comandoPosicao[this.i].y+27+12)){
												this.menosOver=true;	
											}
										}else{
											if(posMouseX>(this.comandoPosicao[this.i].x+51) && posMouseX<(this.comandoPosicao[this.i].x+51+12) && posMouseY>(this.comandoPosicao[this.i].y) && posMouseY<(this.comandoPosicao[this.i].y+12)){
												this.maisOver=true;   
											}else if(posMouseX>(this.comandoPosicao[this.i].x+51) && posMouseX<(this.comandoPosicao[this.i].x+51+12) && posMouseY>(this.comandoPosicao[this.i].y) && posMouseY<(this.comandoPosicao[this.i].y+27+12)){
												this.menosOver=true;	
											}	 
										}
										this.updateLoop=this.cont;
										this.updateLoopId=this.cont2;
									}
								}
							//ESSA PARTE É PRA VER SE ALGUEM TÁ COLOCANDO O COMANDO DENTRO DO LOOP
							}else if(this.comando[this.i]=="Loop"){
								this.insideLoop=true;
								this.highlightLoop.x=this.comandoPosicao[this.i].x;
								this.highlightLoop.y=this.comandoPosicao[this.i].y;
							}else if(this.comando[this.i].substring(0,4)=="Loop"){
								this.multipleLoop=true;
								this.highlightLoop.x=this.comandoPosicao[this.i].x;
								this.highlightLoop.y=this.comandoPosicao[this.i].y;
							}
						}
					}
				}
				//Aqui é o código mais maluco que eu já fiz
				//responsável por mostrar na tela o programa
				//que o usuário fez executando
				if(this.executaComando){
					//Enquanto o indice for menor que os comandos 
					//executados, continua executando o programa
					if(this.indice<this.comando.length){
						//O ponto atual do personagem vai ficar vazio novamente
						this.pontos[this.pontoX].j[this.pontoY].status="Vazio";
						//O highlight vai ficar em cima do comando sendo executado
						this.highlightCom.x=this.comandoPosicao[this.indice+this.comAtualLoop[this.indice]].x;
						this.highlightCom.y=this.comandoPosicao[this.indice+this.comAtualLoop[this.indice]].y;
						//A animação do personagem deve ser na direção que o comando indica
						this.personagem.animaWalk(this.comando[this.indice+this.comAtualLoop[this.indice]]);
						//Essa partezinha prepara o ponto, pra verificar
						//se é possível ir para o próximo quadrado, caso contrário
						//ele vai fazer a animação mas vai ficar paradinho
						if(this.preparaPontos){
							if(this.comando[this.indice+this.comAtualLoop[this.indice]]=="Left" || this.comando[this.indice+this.comAtualLoop[this.indice]]=="LoopLeft"){
								if(this.pontoX-1>=0 && this.pontos[this.pontoX-1].j[this.pontoY].status=="Vazio")this.pontoX--;
								else this.andaParado=true;
							}else if(this.comando[this.indice+this.comAtualLoop[this.indice]]=="Right" || this.comando[this.indice+this.comAtualLoop[this.indice]]=="LoopRight"){
								if(this.pontoX+1<this.pontos.length && this.pontos[this.pontoX+1].j[this.pontoY].status=="Vazio")this.pontoX++;
								else this.andaParado=true;
							}else if(this.comando[this.indice+this.comAtualLoop[this.indice]]=="Up" || this.comando[this.indice+this.comAtualLoop[this.indice]]=="LoopUp"){
								if(this.pontoY-1>=0 && this.pontos[this.pontoX].j[this.pontoY-1].status=="Vazio")this.pontoY--;
								else this.andaParado=true;
							}else if(this.comando[this.indice+this.comAtualLoop[this.indice]]=="Down" || this.comando[this.indice+this.comAtualLoop[this.indice]]=="LoopDown"){
								if(this.pontoY+1<this.pontos[0].j.length && this.pontos[this.pontoX].j[this.pontoY+1].status=="Vazio")this.pontoY++;
								else this.andaParado=true;
							}
							this.preparaPontos=false;
						}else{
							//Depois de preparar os pontos vem pra cá
							//ele repete quantas vezes precisar cada comando (pros casos de Loop)
							if(this.quantidade[this.indice]>0){
								if(this.andaParado){
									//Se é um caminho impossível ele anda parado
									//por um tempinho heheheheh
									this.contAnda++;
								}else{
									//Se é um caminho possível ele anda em uma velocidade até
									//chegar à posição x e y do quadradinho
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
								//Se chegou no x e y certinho ou andou parado até 40, então faz as verificações finais
								if((this.xOk && this.yOk) || this.contAnda>40){
									//AQUI VERIFICA SE GANHOU OU NÃO
									if(this.pontoX==this.pontoFinalX && this.pontoY==this.pontoFinalY){
										if((this.indice+this.comTotalLoop[this.indice])==this.comando.length-1 && this.quantidade[this.indice]<=1){
											//Muda o quadrado pra verde se ganhou
											this.square = tdsImagens[95];
											this.ganhou=true;
										//Muda o quadrado pra verde se passou por cima
										//mas não parou no lugar certo
										}else this.square = tdsImagens[96];
									//Muda pra azul que é o normal se não conseguiu
									}else this.square = tdsImagens[97];
									//Zera tudo pra próxuma vez----
									this.contAnda=0;
									this.andaParado=false;
									this.xOk=false;
									this.yOk=false;
									this.preparaPontos=true;
									this.comAtualLoop[this.indice]++;
									//comAtual é dentro do lop qual comando está sendo executado - quando executam
									//tds dentro do loop, aí sim que diminue a "quantidade"
									if(this.comAtualLoop[this.indice]>this.comTotalLoop[this.indice]){
										this.comAtualLoop[this.indice]=0;									
										this.quantidade[this.indice]--;
										//pra mostrar bonitinho tbm na tela
										this.quantidade[this.indice+this.comTotalLoop[this.indice]]=this.quantidade[this.indice];
									}
									//quando passar por tds as "quantidades" aí tem que diminuir do indice
									//os comandos que estavam dentro do loop
									//caraca que coisa complexa e maneira
									if(this.quantidade[this.indice]<=0){
										this.indice+=this.comTotalLoop[this.indice]+1;
									}
								}
							}
						}
					}else{
						//Quando acabou de passar por todos os comandos
						//diz que não está mais executando, volta pro indice 0
						//e zera outras maluquices ali tbm
						this.executaComando=false;
						this.personagem.animaParado(this.comando[this.comando.length-1]);
							this.indice=0;
						for(this.i=0;this.i<this.comando.length;this.i++){
							this.comAtualLoop[this.i]=0;	
							//isso aqui é pq quando termina tem que colocar o valor
							//que tava antes de volta :0
							this.quantidade[this.i]=this.quantidadeTotal[this.i];
						}
						//o highlight sai da tela, bom, deveria voltar
						if(this.indice>0)this.highlightCom.x=this.comandoPosicao[this.indice-1].x;
						this.highlightCom.x=1000;
					}	
				}
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
			if(this.fase>7 && (this.comando[this.i]=="LoopRight" || this.comando[this.i]=="LoopLeft" || this.comando[this.i]=="LoopUp" || this.comando[this.i]=="LoopDown")){
				context.drawImage(this.loopPosicao[this.i].img, this.comandoPosicao[this.i].x, this.comandoPosicao[this.i].y);
				if(this.comTotalLoop[this.i]==20000 || this.comTotalLoop[this.i]==0){
					context.font="15px Georgia";
					if(this.quantidade[this.i]<0)this.txt=0;
					else this.txt=this.quantidade[this.i];
					context.fillText("" + this.txt,this.comandoPosicao[this.i].x+52,this.comandoPosicao[this.i].y+26);
					context.font="30px Georgia";
					context.drawImage(this.botaoMais.img, this.comandoPosicao[this.i].x+51,this.comandoPosicao[this.i].y,12,12);
					if(this.quantidade[this.i]>1)context.drawImage(this.botaoMenos.img, this.comandoPosicao[this.i].x+51, this.comandoPosicao[this.i].y+27,12,12);
				}
			}
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

				
		if(this.fase==8 || this.fase==9){
			context.font="24px Georgia";
			context.fillText("Tempo: " + Math.round(this.tempo),10,40);
			context.fillStyle="#556270";
			context.fillText("Comandos: " + this.contInstrucoes,140,40);
			context.fillStyle="#4ECDC4";
			context.fillText("Deletados: " + this.contApagouIndiv,290,40);
			context.fillStyle="#C7F464";
			context.fillText("Excluiu todos: " + this.contApagouAll,430,40);
			context.fillStyle="#FF6B6B";
			context.fillText("Play: " + this.contPlay,600,40);
			context.fillStyle="#C44D58";
			context.fillText("Loops: " + this.contLoop,700,40);
			context.fillStyle="black";
			context.fillText("Comandos em Loop: " + this.contInstrLoop,565,80);
		}else{
			context.font="28px Georgia";
			context.fillText("Tempo: " + Math.round(this.tempo),10,40);
			context.fillStyle="#FF003C";
			context.fillText("Comandos: " + this.contInstrucoes,160,40);
			context.fillStyle="#FF8A00";
			context.fillText("Deletados: " + this.contApagouIndiv,340,40);
			context.fillStyle="#FABE28";
			context.fillText("Excluiu todos: " + this.contApagouAll,500,40);
			context.fillStyle="#88C100";
			context.fillText("Play: " + this.contPlay,710,40)
		}
		context.fillStyle="black";
		context.font="30px Georgia";
		context.fillText("" + this.trace,150,70);
		context.fillText(" " + this.msgErro ,160,40);
		if(this.pulou){
			context.drawImage(this.imgPular.img, 0, 0, 800, 600);
		}
	}
}

Programacao.prototype.MouseDown = function(mouseEvent) {	
	if(!this.pulou){
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
}

Programacao.prototype.MouseUp = function(mouseEvent) {
	if(!this.pulou){
		if(!this.executaComando){
			if(!this.ganhou){
				//Se apertar no botão play
				if(posMouseX>this.botaoPlay.x && posMouseX<(this.botaoPlay.x + this.botaoPlay.width) && posMouseY>this.botaoPlay.y && posMouseY<(this.botaoPlay.y + this.botaoPlay.height)){

					this.loopVazio=false;
					for(this.i=0;this.i<this.comando.length;this.i++){
						if(this.comando[this.i]=="Loop")this.loopVazio=true;
					}
					if(this.loopVazio){
						this.loopVazio=false;
						this.msgErro="Você não pode executar um laço de repetição vazio.";
					}else if(this.comando.length>0){
						this.executaComando=true;
						this.contPlay++;
					}
				//Se apagar todos
				}else if(posMouseX>this.botaoExcluiTudo.x && posMouseX<(this.botaoExcluiTudo.x + this.botaoExcluiTudo.width) && posMouseY>this.botaoExcluiTudo.y && posMouseY<(this.botaoExcluiTudo.y + this.botaoExcluiTudo.height) && this.comando.length>0){
					this.contApagouAll++;			
					this.RemoveTudo();
				}
				//Apagar um comando individual
				if(posMouseX>this.botaoExclui.x && posMouseX<(this.botaoExclui.x + this.botaoExclui.width) && posMouseY>this.botaoExclui.y && posMouseY<(this.botaoExclui.y + this.botaoExclui.height)){
					this.removeUltimo=true;
					this.contApagouIndiv++;
				}
				//Aumentar as repetições
				if(this.maisOver || this.menosOver){
					if(this.maisOver)this.quantidade[this.excluiComando]++;
					else if(this.quantidade[this.excluiComando]>1)this.quantidade[this.excluiComando]--;
					this.quantidadeTotal[this.excluiComando]=this.quantidade[this.excluiComando];
					while(this.comTotalLoop[this.excluiComando]>=10000){
						this.excluiComando--;
						if(this.maisOver)this.quantidade[this.excluiComando]++;
						else if(this.quantidade[this.excluiComando]>1)this.quantidade[this.excluiComando]--;
						this.quantidadeTotal[this.excluiComando]=this.quantidade[this.excluiComando];
					}

				}
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
			}
		}
	}else{
		if(posMouseX>455 && posMouseX<590 && posMouseY>365 && posMouseY<445){
			this.pulou=false;
		}else if(posMouseX>210 && posMouseX<340 && posMouseY>365 && posMouseY<445){
			this.ativo=false;
		}
	}
	this.follow="none";
}

Programacao.prototype.KeyDown = function (keyCode){}

Programacao.prototype.VerificaRemoveuComando = function (){
	//TENHO QUE TESTAR MAIS ESSA PARTE POIS TAVA DANDO ERROS, RESOLVI A MAIORIA
	//MAS PODE TER OUTROS
	if(this.indice>0)this.highlightCom.x=this.comandoPosicao[this.indice-1].x;
	//10000 é o meio do loop//20000 é o fim do loop//0 é loop de um comando só
	//entre 1 e 1000 é a qtd certinha de comandos que tem em cada loop			
	if(this.removeUltimo){
		//Reorganizando os comandos para ficarem na ordem certa sem o que foi removido
		if(this.comTotalLoop[this.excluiComando]==20000 && this.excluiComando==(this.comando.length-1)){
			if(this.comTotalLoop[this.excluiComando-1]<10000)this.comTotalLoop[this.excluiComando-1]--;
			else{				
				this.contLoop=1;
				while(this.comTotalLoop[this.excluiComando-this.contLoop]>=10000)this.contLoop++;
				this.comTotalLoop[this.excluiComando-this.contLoop]--;
				this.comTotalLoop[this.excluiComando-1]=20000;
			}
		}else{
			for(this.i=this.excluiComando;this.i<this.comando.length-1;this.i++){
				this.comando[this.i]=this.comando[this.i+1];
				this.quantidade[this.i]=this.quantidade[this.i+1];
				this.quantidadeTotal[this.i]=this.quantidade[this.i];
				if(this.i==this.excluiComando && this.comTotalLoop[this.i]>0 && this.comTotalLoop[this.i]<10000){
					this.comTotalLoop[this.i]=this.comTotalLoop[this.i]-1;
				}else if(this.i==this.excluiComando && this.comTotalLoop[this.i]==20000){
					if(this.comTotalLoop[this.excluiComando-1]<10000)this.comTotalLoop[this.excluiComando-1]--;
					else{				
						this.contLoop=1;
						while(this.comTotalLoop[this.excluiComando-this.contLoop]>=10000)this.contLoop++;
						this.comTotalLoop[this.excluiComando-this.contLoop]--;
						this.comTotalLoop[this.excluiComando-1]=20000;
					}
					this.comTotalLoop[this.i]=this.comTotalLoop[this.i+1];	
				}else if(this.comTotalLoop[this.i+1]>0){
					this.contLoop=1;
					if(this.i==this.excluiComando){
						while(this.comTotalLoop[this.i-this.contLoop]>=10000)this.contLoop++;
						this.comTotalLoop[this.i-this.contLoop]--;
					}
					this.comTotalLoop[this.i]=this.comTotalLoop[this.i+1];	
				}else{
					this.comTotalLoop[this.i]=0;
				}
			}
		}
		this.comando.pop();
		this.quantidade.pop();
		this.quantidadeTotal.pop();
		this.comandoPosicao.pop();
		this.comTotalLoop.pop();
		this.removeUltimo=false;
		this.RepovoaComandos();
	}
}
Programacao.prototype.MoveBonecoDemo = function (){
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
Programacao.prototype.AddComando = function (stringComando){
	if(this.comandoPosicao.length<=(6*4)+3){
		this.contInstrucoes++;
		//Entra aqui quando é mais de um comando por loop:
		if(this.multipleLoop && this.excluiComando>-1){
			//10000 é o meio do loop//20000 é o fim do loop//0 é loop de um comando só
			//entre 1 e 1000 é a qtd certinha de comandos que tem em cada loop
			//essa informação ^ vai estar sempre no primeiro comTotalLoop do loop
			
			
			
			//Essa parte aqui é o seguinte: como a pessoa pode ter arrastado e soltado
			//em qualquer posição, então precisamos descobrir qual é a primeira posição do 
			//loop, que será no comTotalLoop< 10000, então enquanto for maior que 10000
			//vai voltando uma posição até achar o início do loop
			//eu to usando a variavel "excluiComando" por pura preguiça de criar outra 
			//especifica pra isso hehe
			while(this.comTotalLoop[this.excluiComando]>=10000){
				this.excluiComando--;
			}
			//Evitando tretas malucas que podem ocorrer (essa verificação >-1)
			if(this.excluiComando>-1){
				this.contInstrLoop++;
				//Criando mais um espaço né, já que foi adicionado um novo comando
				//mesmo que seja dentro do loop
				this.comando.push(this.comando[this.comando.length-1]);
				this.quantidade.push(this.quantidade[this.comando.length-1]);
				this.quantidadeTotal.push(this.quantidadeTotal[this.comando.length-1]);
				this.comTotalLoop.push(this.comTotalLoop[this.comando.length-1]);
				this.comAtualLoop.push(this.comAtualLoop[this.comando.length-1]);
				//Aqui eu to atribuindo as mesmas características do 
				//"Loop pai" pro novo loopzinho que foi criado agora
				for(this.i=this.comando.length-1;this.i>this.excluiComando+this.comTotalLoop[this.excluiComando];this.i--){
					this.comando[this.i]=this.comando[this.i-1];
					this.quantidade[this.i]=this.quantidade[this.i-1];
					this.quantidadeTotal[this.i]=this.quantidadeTotal[this.i-1];
					this.comTotalLoop[this.i]=this.comTotalLoop[this.i-1];
					this.comAtualLoop[this.i]=this.comAtualLoop[this.i-1];
				}
				this.comTotalLoop[this.excluiComando]++;
				if(this.comTotalLoop[this.excluiComando]>1)this.comTotalLoop[this.excluiComando+this.comTotalLoop[this.excluiComando]-1]=10000;
				this.comTotalLoop[this.excluiComando+this.comTotalLoop[this.excluiComando]]=20000;
				//Renomear os comandos pra na hora de repovoar eles no lugar certo
				//Saber que é uma partezinha dentro do loop :DD
				if(stringComando=="Up")this.comando[this.excluiComando+this.comTotalLoop[this.excluiComando]]="LoopUp";
				else if(stringComando=="Down")this.comando[this.excluiComando+this.comTotalLoop[this.excluiComando]]="LoopDown";
				else if(stringComando=="Left")this.comando[this.excluiComando+this.comTotalLoop[this.excluiComando]]="LoopLeft";
				else if(stringComando=="Right")this.comando[this.excluiComando+this.comTotalLoop[this.excluiComando]]="LoopRight";
				this.RepovoaComandos();
			}
		//Entra aqui quando tenta colocar 1 comando dentro de um loop vazio
		}else if(this.insideLoop && stringComando!="Loop"){
			this.contInstrLoop++;
			this.quantidade[this.excluiComando]=1;					
			this.quantidadeTotal[this.excluiComando]=1;					
			this.comTotalLoop[this.excluiComando]=0;
			this.comAtualLoop[this.excluiComando]=0;
			if(stringComando=="Up"){
				this.comando[this.excluiComando]="LoopUp";
				this.comandoPosicao[this.excluiComando] = new Imagem(this.comandoPosicao[this.excluiComando].x,this.comandoPosicao[this.excluiComando].y,69,40,"");
				this.comandoPosicao[this.excluiComando].img=tdsImagens[102];
			}else if(stringComando=="Down"){
				this.comando[this.excluiComando]="LoopDown";
				this.comandoPosicao[this.excluiComando] = new Imagem(this.comandoPosicao[this.excluiComando].x,this.comandoPosicao[this.excluiComando].y,69,40,"");
				this.comandoPosicao[this.excluiComando].img=tdsImagens[103];
			}else if(stringComando=="Left"){
				this.comando[this.excluiComando]="LoopLeft";
				this.comandoPosicao[this.excluiComando] = new Imagem(this.comandoPosicao[this.excluiComando].x,this.comandoPosicao[this.excluiComando].y,69,40,"");
				this.comandoPosicao[this.excluiComando].img=tdsImagens[104];
			}else if(stringComando=="Right"){
				this.comando[this.excluiComando]="LoopRight";
				this.comandoPosicao[this.excluiComando] = new Imagem(this.comandoPosicao[this.excluiComando].x,this.comandoPosicao[this.excluiComando].y,69,40,"");
				this.comandoPosicao[this.excluiComando].img=tdsImagens[105];
			}
		}else{
			this.comando.push(stringComando);
			this.comTotalLoop.push(0);
			this.comAtualLoop.push(0);
			this.quantidade.push(1);
			this.quantidadeTotal.push(1);
			this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
			this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[88];
			if(stringComando=="Up"){
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[98];
			}else if(stringComando=="Down"){
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[99];
			}else if(stringComando=="Left"){
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[100];
			}else if(stringComando=="Right"){
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[101];
			}else if(stringComando=="Loop"){
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[88];
				this.contLoop++;
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
		}
	}
}
Programacao.prototype.RepovoaComandos = function (){
	//As posições são todas zeradas =0
	this.comandoPosicao=new Array();
	this.loopPosicao=new Array();
	for(this.i=0;this.i<this.comando.length;this.i++){
		//Um novo comandinho, então uma nova posição hehe
		if(this.i<this.comando.length){
			if(this.comando[this.i]=="Up"){
				this.loopPosicao.push(new Imagem(10,10,"lalala"));
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[98];
			}else if(this.comando[this.i]=="Down"){
				this.loopPosicao.push(new Imagem(10,10,"lalala"));
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[99];
			}else if(this.comando[this.i]=="Left"){
				this.loopPosicao.push(new Imagem(10,10,"lalala"));
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[100];
			}else if(this.comando[this.i]=="Right"){
				this.loopPosicao.push(new Imagem(10,10,"lalala"));
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[101];
			}else if(this.comando[this.i]=="LoopUp"){								
				if(this.comTotalLoop[this.i]==0){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[106];
				}else if(this.comTotalLoop[this.i]==10000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[107];
				}else if(this.comTotalLoop[this.i]==20000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[108];
				}else{
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[109];
				}
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[102];
			}else if(this.comando[this.i]=="LoopDown"){
				if(this.comTotalLoop[this.i]==0){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[106];
				}else if(this.comTotalLoop[this.i]==10000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[107];
				}else if(this.comTotalLoop[this.i]==20000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[108];
				}else{
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[109];
				}
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[103];
			}else if(this.comando[this.i]=="LoopLeft"){
				if(this.comTotalLoop[this.i]==0){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[106];
				}else if(this.comTotalLoop[this.i]==10000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[107];
				}else if(this.comTotalLoop[this.i]==20000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[108];
				}else{
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[109];
				}
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[104];
			}else if(this.comando[this.i]=="LoopRight"){
				if(this.comTotalLoop[this.i]==0){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[106];
				}else if(this.comTotalLoop[this.i]==10000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[107];
				}else if(this.comTotalLoop[this.i]==20000){
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[108];
				}else{
					this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
					this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[109];
				}
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[105];
			}else if(this.comando[this.i]=="Loop"){
				this.loopPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.loopPosicao[this.loopPosicao.length-1].img=tdsImagens[106];
				this.comandoPosicao.push(new Imagem(this.comIniX,this.comIniY,69,40,""));
				this.comandoPosicao[this.comandoPosicao.length-1].img=tdsImagens[106];
			}
		}
		this.qtd=6;
		if(this.i>0){
			if(this.i<=this.qtd){
				this.comandoPosicao[this.i].y=this.comIniY;
				this.comandoPosicao[this.i].x=this.comandoPosicao[this.i-1].x+this.comDistX;
			}else if(this.i<=(this.qtd*2)+1){
				this.comandoPosicao[this.i].y=this.comIniY+this.comDistY;
				if(this.i==(this.qtd)+1)this.comandoPosicao[this.i].x=this.comIniX;
				else this.comandoPosicao[this.i].x=this.comandoPosicao[this.i-1].x+this.comDistX;
			}else if(this.i<=(this.qtd*3)+2){
				this.comandoPosicao[this.i].y=this.comIniY+(this.comDistY*2);
				if(this.i==(this.qtd*2)+2)this.comandoPosicao[this.i].x=this.comIniX;
				else this.comandoPosicao[this.i].x=this.comandoPosicao[this.i-1].x+this.comDistX;
			}else if(this.comandoPosicao.length-1<=(this.qtd*4)+3){
				this.comandoPosicao[this.i].y=this.comIniY+(this.comDistY*3);
				if(this.i==(this.qtd*3)+3)this.comandoPosicao[this.i].x=this.comIniX;
				else this.comandoPosicao[this.i].x=this.comandoPosicao[this.i-1].x+this.comDistX;
			}
		}else{
			this.comandoPosicao[this.i].x=this.comIniX;
			this.comandoPosicao[this.i].y=this.comIniY;
		}
	}
}
Programacao.prototype.RemoveTudo = function (){				
	this.comandoPosicao = new Array();
	this.comando = new Array();
	this.quantidade = new Array();
	this.quantidadeTotal = new Array();
	this.contInstrucoes = 0;
}