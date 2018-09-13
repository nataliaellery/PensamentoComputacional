var Sequencia = function (fase) {
  	this.fundo = new Image();
	this.fase=fase;
	if(this.fase==1)this.fundo.src = "img/Sequencia/FundoSequencia1.png";
	this.ativo=true;
	this.pulou=false;
	this.ganhou=false;
	this.tempo=0;
	this.contTempo=0;
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.botaoDica= new Imagem(0,0,0,0,"img/Pontos/DicaPontos.png");
	this.dicaMostrada=new Array();
	this.dicaImagem=new Array();
	this.dicaRotacao=new Array();
	this.resposta = new Array();//Respostas possíveis de arrastar
	this.locais = new Array();//Local onde pode arrastar as respostas
	this.dicas = 3;
	this.follow=-1;
	this.selected=-1;
	this.trace="";
	this.msg="";
	this.dicaAtual=-1;
	if(this.fase==1){
		this.resposta.push(new Imagem(300,400, 22, 22,"img/Sequencia/Square.png"));
		this.resposta.push(new Imagem(400,400, 22, 22,"img/Sequencia/Ball.png"));
	}else if(this.fase==2){
		
	}
};

Sequencia.prototype.Draw = function(){
	context.drawImage(this.fundo, 100, 150);
	context.font="40px Georgia";
	if(this.ativo && !this.pulou && !this.ganhou)this.tempo+=0.02;
	this.contTempo+=0.02;
	if(this.tempo>=60)this.botaoPular.x=10;
	
	context.font="40px Georgia";
	if(this.ganhou){
		//Essa parte é responsável por mostrar que está certo e ir pra próxima fase
		context.fillText("Correto",220,590);
		if(this.contTempo>this.tempo+1){
			this.ativo=false;
			this.tempo=0;
			this.contTempo=0;
		}
	}
	
	
	//Aqui faz as peças clicadas seguirem o mouse
	if(this.follow!=-1){
		this.resposta[this.follow].x=posMouseX-(this.resposta[this.follow].width/2);
		this.resposta[this.follow].y=posMouseY-(this.resposta[this.follow].height/2);
	}
	
	//aqui mostra as respostas
	for(this.i=0;this.i<this.resposta.length;this.i++){
		context.drawImage(this.resposta[this.i].img, this.resposta[this.i].x, this.resposta[this.i].y);
	}
	
	//aqui mostra os botões das dicas
	for(this.i=0;this.i<this.dicas;this.i++){
		context.drawImage(this.botaoDica.img, 710-(this.i*60), 20);
	}
	
	context.fillText("" + this.trace,150,70);
	context.font="24px Georgia";
	context.fillText("" + this.msg,420,40);
	context.font="40px Georgia";
	context.fillText("Tempo: " + Math.round(this.tempo),10,40);
}

Sequencia.prototype.MouseDown = function(mouseEvent) {	
	for(this.i=(this.resposta.length-1);this.i>=0;this.i--){
		if(posMouseX>this.resposta[this.i].x && posMouseX<this.resposta[this.i].x+this.resposta[this.i].width && posMouseY>this.resposta[this.i].y && posMouseY<this.resposta[this.i].y+this.resposta[this.i].height){
			//o que estiver selecionado vai pra frente da tela:
			//gravei no aux//
			this.aux=this.resposta[this.resposta.length-1];
			//o i recebe o ultimo//
			this.resposta[this.resposta.length-1]=this.resposta[this.i];
			//o ultimo recebe o aux//
			this.resposta[this.i]=this.aux;
			//o follow recebe o ultimo//
			this.follow=this.resposta.length-1;
			break;
		}
	}
}

Sequencia.prototype.MouseUp = function(mouseEvent) {
	if(this.follow!=-1){
		for(this.i=0; this.i<this.locais.length;this.i++){
			if(this.resposta[this.follow].x>this.locais[this.i].x-20 && this.resposta[this.follow].x<this.locais[this.i].x+20 && this.resposta[this.follow].y>this.locais[this.i].y-20 && this.resposta[this.follow].y<this.locais[this.i].y+20){
				//VERIFICA SE EH O LOCAL E A FIGURA CORRETA;
				break;
			}
		}
	}
	this.follow=-1;
	
	for(this.i=0;this.i<this.dicas;this.i++){
		if(posMouseX>710-(this.i*60) && posMouseX<710-(this.i*60)+56 && posMouseY>20  && posMouseY<20+34){
			this.dicas--;
			this.haDicas=false;
			for(this.j=0;this.j<this.dicaMostrada.length;this.j++){
				if(!this.dicaMostrada[this.j]){
					this.haDicas=true;
					break;
				}
			}
			if(this.haDicas){
				this.MostraDica(this.j);	
			}else{
				this.dicas=0;
				this.msg="Acabaram as dicas";
			}
			break;
		}
	}
	//aqui tenho que fazer a verificação se tá na posicão certa
	this.ganhou=true;
	for(this.i=0;this.i<this.acertou.length;this.i++)if(!this.acertou[this.i])this.ganhou=false;
}

Sequencia.prototype.KeyDown = function (keyCode){}

Sequencia.prototype.MostraDica = function (idDica){
	//VER QUAL EH A DICA DESSE DESAFIO
}

