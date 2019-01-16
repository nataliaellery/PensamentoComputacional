var Sequencia = function (fase) {
  	this.fundo = new Image();
	this.fase=fase;
	if(this.fase==1)this.fundo.src = "img/Sequencia/FundoSequencia1.png";
	if(this.fase==2)this.fundo.src = "img/Sequencia/FundoSequencia2.png";
	this.ativo=true;
	this.pulou=false;
	this.errou = 0;
	this.perdeu = false;
	this.ganhou=false;
	this.tempo=0;
	this.contTempo=0;
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.botaoDica= new Imagem(0,0,0,0,"img/Pontos/DicaPontos.png");
	this.posRespCorreta = new Imagem(0,0,0,0,"");
	this.respCorreta = 0;
	this.dicaMostrada=new Array();
	this.dicaImagem=new Array();
	this.respostas=new Array();
	this.iRespostas = new Array();
	this.dicas = 3;
	this.follow=-1;
	this.selected=-1;
	this.trace="";
	this.msg="";
	this.msg2="";
	this.dicaAtual=-1;
	if(this.fase==1){
		for(this.i=0;this.i<4;this.i++)this.iRespostas.push(this.i);
		this.iRespostas = shuffle(this.iRespostas);
		for(this.i=0;this.i<4;this.i++){
			this.respostas.push(new Imagem(100+(this.i*160),400,111,114,"img/Sequencia/Sequencia1Answer"+(this.iRespostas[this.i]+2)+".png"));
		}
		this.posRespCorreta.x=546;
		this.posRespCorreta.y=136;
		this.respCorreta = 3;
	}else if(this.fase==2){
		for(this.i=0;this.i<8;this.i++)this.iRespostas.push(this.i);
		this.iRespostas = shuffle(this.iRespostas);
		for(this.i=0;this.i<8;this.i++){
			if(this.i<4)this.respostas.push(new Imagem(20,60+(this.i*133),111,114,"img/Sequencia/Sequencia2Answer"+(this.iRespostas[this.i]+1)+".png"));
			else this.respostas.push(new Imagem(670,60+((this.i-4)*133),111,114,"img/Sequencia/Sequencia2Answer"+(this.iRespostas[this.i]+1)+".png"));
		}
		this.posRespCorreta.x=520;
		this.posRespCorreta.y=280;
		this.respCorreta = 3;
	}
};

Sequencia.prototype.Draw = function(){
	context.drawImage(this.fundo, 0, 0);
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
	}else if(this.perdeu){
		//Essa parte é responsável por contar os erros
		context.fillText("Errado",220,590);
		this.msg="";
		this.follow=-1;
		if(this.contTempo>this.tempo+1){
			this.perdeu=false;
			this.iRespostas = shuffle(this.iRespostas);
			this.tempo=this.contTempo;
			this.respostas=new Array();
			for(this.i=0;this.i<8;this.i++){
				if(this.fase==1 && this.i<4){
					this.respostas.push(new Imagem(100+(this.i*160),400,111,114,"img/Sequencia/Sequencia1Answer"+(this.iRespostas[this.i]+2)+".png"));
				}else{
					if(this.i<4)this.respostas.push(new Imagem(20,60+(this.i*133),111,114,"img/Sequencia/Sequencia2Answer"+(this.iRespostas[this.i]+1)+".png"));
					else this.respostas.push(new Imagem(670,60+((this.i-4)*133),111,114,"img/Sequencia/Sequencia2Answer"+(this.iRespostas[this.i]+1)+".png"));
				}
			}
		}	
	}else{
		//Aqui faz as peças clicadas seguirem o mouse
		if(this.follow!=-1){
			this.respostas[this.follow].x=posMouseX-(this.respostas[this.follow].width/2);
			this.respostas[this.follow].y=posMouseY-(this.respostas[this.follow].height/2);
		//	this.trace=this.respostas[this.follow].x+"/"+this.respostas[this.follow].y;
		}else{
			for(this.i=0;this.i<this.respostas.length;this.i++){
				if(this.fase==1){
					this.respostas[this.i].x = 100+(this.i*160);
					this.respostas[this.i].y = 400;
				}
			}	
		}	
	}	
	
	//aqui mostra as opções de respostas
	for(this.i=0;this.i<this.respostas.length;this.i++){
		context.drawImage(this.respostas[this.i].img, this.respostas[this.i].x, this.respostas[this.i].y);
	}
	
	//aqui mostra os botões das dicas
	for(this.i=0;this.i<this.dicas;this.i++){
		context.drawImage(this.botaoDica.img, 710-(this.i*60), 20);
	}
	
	//Desenhando o botão pular
	context.drawImage(this.botaoPular.img, this.botaoPular.x, this.botaoPular.y);
	
	context.fillText("" + this.trace,150,70);
	context.font="24px Georgia";
	context.fillText("" + this.msg2,150,570);
	if(this.fase==1)context.fillText("" + this.msg,20,570);
	else context.fillText("" + this.msg,150,540);
	context.font="40px Georgia";
	context.fillText("Tempo: " + Math.round(this.tempo),10,40);
}

Sequencia.prototype.MouseDown = function(mouseEvent) {
	if(!this.perdeu && !this.ganhou){
		for(this.i=(this.respostas.length-1);this.i>=0;this.i--){
			if(posMouseX>this.respostas[this.i].x && posMouseX<this.respostas[this.i].x+this.respostas[this.i].width && posMouseY>this.respostas[this.i].y && posMouseY<this.respostas[this.i].y+this.respostas[this.i].height){
				//o que estiver selecionado vai pra frente da tela:
				//gravei no aux//
				this.aux=this.respostas[this.respostas.length-1];
				this.auxI=this.iRespostas[this.respostas.length-1];
				//o i recebe o ultimo//
				this.respostas[this.respostas.length-1]=this.respostas[this.i];
				this.iRespostas[this.respostas.length-1]=this.iRespostas[this.i]
				//o ultimo recebe o aux//
				this.respostas[this.i]=this.aux;
				this.iRespostas[this.i]=this.auxI;
				//o follow recebe o ultimo//
				this.follow=this.respostas.length-1;
				break;
			}
		}
	}
}

Sequencia.prototype.MouseUp = function(mouseEvent) {
	if(!this.perdeu && !this.ganhou){
		if(this.follow!=-1){
			//Pular a fase
			if(this.tempo>=60){
				if(posMouseX>this.botaoPular.x && posMouseX<(this.botaoPular.x + this.botaoPular.width) && posMouseY>this.botaoPular.y && posMouseY<(this.botaoPular.y + this.botaoPular.height)){
					this.pulou=true;
				}
			}
			if(this.respostas[this.follow].x>this.posRespCorreta.x-40 && this.respostas[this.follow].x<this.posRespCorreta.x+40 && this.respostas[this.follow].y>this.posRespCorreta.y-40 && this.respostas[this.follow].y<this.posRespCorreta.y+40){
				//VERIFICA SE EH O LOCAL E A FIGURA CORRETA;
				if(this.iRespostas[this.follow]==this.respCorreta){
					this.ganhou=true;
				}else{
					this.perdeu=true;
					this.errou++;
				}
				this.respostas[this.follow].x=this.posRespCorreta.x;
				this.respostas[this.follow].y=this.posRespCorreta.y;
			}	
		}
		this.follow=-1;

		for(this.i=0;this.i<this.dicas;this.i++){
			if(posMouseX>710-(this.i*60) && posMouseX<710-(this.i*60)+56 && posMouseY>20  && posMouseY<20+34){
				this.dicas--;
				if(this.fase==1){
					if(this.dicas==2)this.msg="O último quadro representa o próximo passo da direção do quadrado e círculo.";
					else if(this.dicas==1)this.msg="Verifique a direção que o círculo laranja avança em cada quadro.";
					else if(this.dicas==0)this.msg="Verifique a direção que o quadrado azul avança em cada quadro.";
				}else{
					if(this.dicas==2){
						this.msg="Perceba que na sequência da esquerda para a direita";
						this.msg2="uma coluna desaparece a cada passo.";
					}else if(this.dicas==1){
						this.msg="Perceba que na sequência de cima para baixo";
						this.msg2="uma linha é inserida ao final em cada passo.";
					}else if(this.dicas==0){
						this.msg="A resposta tem uma coluna a menos que seu vizinho";
						this.msg2="da esquerda e uma linha a mais que o vizinho de cima";
					}
				}
				break;
			}
		}
	}
}

Sequencia.prototype.KeyDown = function (keyCode){}

//Função para randomizar array que peguei na internet
function shuffle(array) {
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
