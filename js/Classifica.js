var Classifica = function () {
  	this.fundo = new Image();
	this.fundo.src = "img/Classifica/FundoClassifica.png";
	this.ativo=true;
	this.pulou=false;
	this.errou = 0;
	this.perdeu = false;
	this.ganhou=false;
	this.tempo=0;
	this.contTempo=0;
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.botaoDica= new Imagem(0,0,0,0,"img/Pontos/DicaPontos.png");
	this.botaoLimpar= new Imagem(700,560,86,36,"img/Pontos/LimparPontos.png");
	this.posRespCorreta = new Imagem(0,0,0,0,"");
	this.dicaMostrada=new Array();
	this.dicaImagem=new Array();
	this.respostas=new Array();
	this.posRespostas = new Array();
	this.selecao= new Imagem(-1000,0,0,0,"img/Classifica/Selecionado.png");
	this.dicas = 3;
	this.follow=-1;
	this.trace="";
	this.msg="";
	this.titulo1="Analise os objetos e os organize na tabela considerando suas características";
	this.titulo2="em comum. As linhas devem representar uma característica e as colunas outra.";
	this.dicaAtual=-1;
	this.idTabela=new Array();
	//for(this.i=0;this.i<4;this.i++)this.iRespostas.push(this.i);
	//this.iRespostas = this.shuffle(this.iRespostas);
	for(this.i=0;this.i<9;this.i++){
		this.respostas.push(new ObjClassifica(100+(this.i*160),400,111,114,"img/Classifica/Bone.png","","",false,this.i));
		this.idTabela.push(new ObjClassifica(0,0,0,0,"","","",false,-1));
	}
	//121x121
	this.respostas[0].img.src="img/Classifica/Banana.png"; this.respostas[0].x=190; this.respostas[0].y=87; this.respostas[0].cor="yellow"; this.respostas[0].tipo="fruta";
	this.respostas[1].img.src="img/Classifica/Bone.png"; this.respostas[1].x=620; this.respostas[1].y=270; this.respostas[1].cor="red"; this.respostas[1].tipo="roupa";
	this.respostas[2].img.src="img/Classifica/Camisa.png"; this.respostas[2].x=50; this.respostas[2].y=270; this.respostas[2].cor="green"; this.respostas[2].tipo="roupa";
	this.respostas[3].img.src="img/Classifica/Chinelo.png"; this.respostas[3].x=330; this.respostas[3].y=87; this.respostas[3].cor="yellow"; this.respostas[3].tipo="roupa";
	this.respostas[4].img.src="img/Classifica/Leao.png"; this.respostas[4].x=50; this.respostas[4].y=450; this.respostas[4].cor="yellow"; this.respostas[4].tipo="animal";
	this.respostas[5].img.src="img/Classifica/Maca.png"; this.respostas[5].x=50; this.respostas[5].y=100; this.respostas[5].cor="red"; this.respostas[5].tipo="fruta";
	this.respostas[6].img.src="img/Classifica/Passaro.png"; this.respostas[6].x=480; this.respostas[6].y=87; this.respostas[6].cor="red"; this.respostas[6].tipo="animal";
	this.respostas[7].img.src="img/Classifica/Pera.png"; this.respostas[7].x=620; this.respostas[7].y=87; this.respostas[7].cor="green"; this.respostas[7].tipo="fruta";
	this.respostas[8].img.src="img/Classifica/Tartaruga.png"; this.respostas[8].x=620; this.respostas[8].y=450; this.respostas[8].cor="green"; this.respostas[8].tipo="animal";
	
	//AQUI TO CRIANDO UM CLONE DAS RESPOSTAS PRA TER A REFERÊNCIA DO LUGAR DELAS QUANDO A PESSOA SOLTAR O  MOUSE
	for(this.i=0;this.i<9;this.i++){
		this.posRespostas.push(new Imagem(this.respostas[this.i].x,this.respostas[this.i].y,121,121,this.respostas[this.i].img.src));
	}	
	
};

Classifica.prototype.Draw = function(){
	context.drawImage(this.fundo, 200, 190);
	if(this.ativo && !this.pulou && !this.ganhou && !this.perdeu)this.tempo+=0.02;
	this.contTempo+=0.02;
	if(this.tempo>=60)this.botaoPular.x=10;
	
	context.font="40px Georgia";

	if(this.ganhou){
		//Essa parte é responsável por mostrar que está certo e ir pra próxima fase
		context.fillText("Correto",10,590);
		this.msg="";
		if(this.contTempo>this.tempo+1){
			this.ativo=false;
			this.tempo=0;
			this.contTempo=0;
		}
	}else if(this.perdeu){
		//Essa parte é responsável por contar os erros
		context.fillText("Errado",10,590);
		this.msg="";
		this.follow=-1;
		if(this.contTempo>this.tempo+1){
			this.perdeu=false;
			this.tempo=this.contTempo;
			this.idTabela = new Array();
			for(this.i=0;this.i<9;this.i++){
				this.respostas[this.i].posicionado=false;
				this.idTabela.push(new ObjClassifica(0,0,0,0,"","","",false,-1));
			}
		}	
	}else{
		//Aqui faz as peças clicadas seguirem o mouse
		if(this.follow!=-1){
			this.respostas[this.follow].x=posMouseX-(this.respostas[this.follow].width/2);
			this.respostas[this.follow].y=posMouseY-(this.respostas[this.follow].height/2);
		//	this.trace=this.respostas[this.follow].x+"/"+this.respostas[this.follow].y;
			if(this.respostas[this.follow].x>150 && this.respostas[this.follow].x<560 && this.respostas[this.follow].y>140 && this.respostas[this.follow].y<560){
				for(this.i=0;this.i<this.respostas.length; this.i++){
					if(this.i<3){
						this.line=this.i;	
						this.col=0;	
					}else if(this.i<6){
						this.line=this.i-3;
						this.col=1;	
					}else{
						this.line=this.i-6;
						this.col=2;	
					}
					if(this.respostas[this.follow].x>((this.line*121)+150) && this.respostas[this.follow].x<((this.line*121)+300) && this.respostas[this.follow].y>((this.col*121)+140) && this.respostas[this.follow].y<((this.col*121)+270)){
						this.selecao.x=(this.line*121)+212;
						this.selecao.y=(this.col*121)+202;
					}
				}
			}else this.selecao.x=-1000;
		}else{
			this.selecao.x=-1000;
			for(this.i=0;this.i<this.respostas.length;this.i++){
				if(!this.respostas[this.i].posicionado){
					this.respostas[this.i].x = this.posRespostas[this.i].x;
					this.respostas[this.i].y = this.posRespostas[this.i].y;
				}
			}
		}
	}	
	
	//Desenhando onde a resposta irá ser posicionada
	context.drawImage(this.selecao.img, this.selecao.x, this.selecao.y);
	
	//aqui mostra as opções de respostas
	for(this.i=0;this.i<this.respostas.length;this.i++){
		context.drawImage(this.respostas[this.i].img, this.respostas[this.i].x, this.respostas[this.i].y);
	}
	
	//aqui mostra os botões das dicas
	for(this.i=0;this.i<this.dicas;this.i++){
		context.drawImage(this.botaoDica.img, 710-(this.i*60), 5);
	}
	
	//Desenhando o botão pular
	context.drawImage(this.botaoPular.img, this.botaoPular.x, this.botaoPular.y);
	context.drawImage(this.botaoLimpar.img, this.botaoLimpar.x, this.botaoLimpar.y);
	
	context.fillText("" + this.trace,150,70);
	context.font="24px Georgia";
	context.fillText("" + this.titulo1,30,65);
	context.fillText("" + this.titulo2,15,90);
	context.fillText("" + this.msg,150,585);
	context.font="40px Georgia";
	context.fillText("Tempo: " + Math.round(this.tempo),10,30);
	//context.fillText("|"+this.idTabela[0].id+"|"+this.idTabela[1].id+"|"+this.idTabela[2].id+"|",20,520);
	//context.fillText("|"+this.idTabela[3].id+"|"+this.idTabela[4].id+"|"+this.idTabela[5].id+"|",20,550);
	//context.fillText("|"+this.idTabela[6].id+"|"+this.idTabela[7].id+"|"+this.idTabela[8].id+"|",20,570);
}

Classifica.prototype.MouseDown = function(mouseEvent) {
	if(!this.perdeu && !this.ganhou){
		for(this.i=(this.respostas.length-1);this.i>=0;this.i--){
			if(posMouseX>this.respostas[this.i].x && posMouseX<this.respostas[this.i].x+this.respostas[this.i].width && posMouseY>this.respostas[this.i].y && posMouseY<this.respostas[this.i].y+this.respostas[this.i].height){
				//o que estiver selecionado vai pra frente da tela:
				//gravei no aux//
				this.aux=this.respostas[this.respostas.length-1];
				this.auxPos=this.posRespostas[this.respostas.length-1];
				//o i recebe o ultimo//
				this.respostas[this.respostas.length-1]=this.respostas[this.i];
				this.posRespostas[this.respostas.length-1]=this.posRespostas[this.i]
				//o ultimo recebe o aux//
				this.respostas[this.i]=this.aux;
				this.posRespostas[this.i]=this.auxPos;
				//o follow recebe o ultimo//
				this.follow=this.respostas.length-1;
				break;
			}
		}
	}
}

Classifica.prototype.MouseUp = function(mouseEvent) {
	if(!this.perdeu && !this.ganhou){
		if(this.follow!=-1){
			//Verificar se a resposta foi inserida dentro da tabela
			this.dentroTabela=false;
			//Pular a fase
			if(this.tempo>=60){
				if(posMouseX>this.botaoPular.x && posMouseX<(this.botaoPular.x + this.botaoPular.width) && posMouseY>this.botaoPular.y && posMouseY<(this.botaoPular.y + this.botaoPular.height)){
					this.pulou=true;
				}
			}
			//this.msg="x:"+this.respostas[this.follow].x+"-y:"+this.respostas[this.follow].y;
			for(this.i=0;this.i<this.respostas.length; this.i++){
				if(this.i<3){
					this.line=this.i;	
					this.col=0;	
				}else if(this.i<6){
					this.line=this.i-3;
					this.col=1;	
				}else{
					this.line=this.i-6;
					this.col=2;	
				}
				if(this.respostas[this.follow].x>((this.line*121)+150) && this.respostas[this.follow].x<((this.line*121)+300) && this.respostas[this.follow].y>((this.col*121)+140) && this.respostas[this.follow].y<((this.col*121)+270)){
					this.dentroTabela=true;
					this.respostas[this.follow].x=(this.line*121)+210;
					this.respostas[this.follow].y=(this.col*121)+200;
					this.respostas[this.follow].posicionado=true;
					
					//verifica se este objeto estava em outro lugar antes, e limpa o lugar
					for(this.j=0;this.j<this.respostas.length;this.j++){
						if(this.idTabela[this.j].id==this.respostas[this.follow].id)this.idTabela[this.j]=new ObjClassifica(0,0,0,0,"","","",false,-1);
					}
					
					//Se já tiver alguém neste lugar, joga ele de volta pra posição inicial
					if(this.idTabela[this.i].id!=-1){
						for(this.j=0;this.j<this.respostas.length;this.j++){
							if(this.idTabela[this.i].id==this.respostas[this.j].id)this.respostas[this.j].posicionado=false;
						}
					}
					this.idTabela[this.i]=this.respostas[this.follow];
					//Verificando se ganhou:
					if(this.idTabela[0].id!=-1 && this.idTabela[1].id!=-1 && this.idTabela[2].id!=-1 && this.idTabela[3].id!=-1 && this.idTabela[4].id!=-1 && this.idTabela[5].id!=-1 && this.idTabela[6].id!=-1 && this.idTabela[7].id!=-1 && this.idTabela[8].id!=-1){
						if((this.idTabela[0].cor==this.idTabela[1].cor && this.idTabela[0].cor==this.idTabela[2].cor && this.idTabela[3].cor==this.idTabela[4].cor && this.idTabela[3].cor==this.idTabela[5].cor && this.idTabela[6].cor==this.idTabela[7].cor && this.idTabela[6].cor==this.idTabela[8].cor && this.idTabela[0].tipo==this.idTabela[3].tipo && this.idTabela[0].tipo==this.idTabela[6].tipo && this.idTabela[1].tipo==this.idTabela[4].tipo && this.idTabela[1].tipo==this.idTabela[7].tipo && this.idTabela[2].tipo==this.idTabela[5].tipo && this.idTabela[2].tipo==this.idTabela[8].tipo) || (this.idTabela[0].tipo==this.idTabela[1].tipo && this.idTabela[0].tipo==this.idTabela[2].tipo && this.idTabela[3].tipo==this.idTabela[4].tipo && this.idTabela[3].tipo==this.idTabela[5].tipo && this.idTabela[6].tipo==this.idTabela[7].tipo && this.idTabela[6].tipo==this.idTabela[8].tipo && this.idTabela[0].cor==this.idTabela[3].cor && this.idTabela[0].cor==this.idTabela[6].cor && this.idTabela[1].cor==this.idTabela[4].cor && this.idTabela[1].cor==this.idTabela[7].cor && this.idTabela[2].cor==this.idTabela[5].cor && this.idTabela[2].cor==this.idTabela[8].cor)){
							this.ganhou=true;
						}else this.perdeu=true;
					}
				}
			}
			if(!this.dentroTabela){
				this.respostas[this.follow].posicionado=false;
				for(this.j=0;this.j<this.respostas.length;this.j++){
					if(this.idTabela[this.j].id==this.respostas[this.follow].id)this.idTabela[this.j]=new ObjClassifica(0,0,0,0,"","","",false,-1);
				}
			}
		}else if(posMouseX>this.botaoLimpar.x && posMouseX<(this.botaoLimpar.x + this.botaoLimpar.width) && posMouseY>this.botaoLimpar.y && posMouseY<(this.botaoLimpar.y + this.botaoLimpar.height)){
			this.idTabela = new Array();
			for(this.i=0;this.i<9;this.i++){
				this.respostas[this.i].posicionado=false;
				this.idTabela.push(new ObjClassifica(0,0,0,0,"","","",false,-1));
			}
		}
		this.follow=-1;

		for(this.i=0;this.i<this.dicas;this.i++){
			if(posMouseX>710-(this.i*60) && posMouseX<710-(this.i*60)+56 && posMouseY>20  && posMouseY<20+34){
				this.dicas--;
				if(this.dicas==2)this.msg="Verifique as cores das figuras.";
				else if(this.dicas==1)this.msg="Verifique o tipo das figuras.";
				else if(this.dicas==0)this.msg="Tente criar uma sequências utilizando as cores e tipo.";
				break;
			}
		}
	}
}

Classifica.prototype.KeyDown = function (keyCode){}

//Função para randomizar array que peguei na internet
Classifica.prototype.shuffle = function (array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
