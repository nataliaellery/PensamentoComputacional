var Tangram = function (fase) {
  	this.fundo = new Image();
	this.fase=fase;
	if(this.fase==1)this.fundo.src = "img/Match2/FundoMatch21.png";
	else if(this.fase==2)this.fundo.src = "img/Match2/FundoMatch22.png";
	this.ativo=true;
	this.pulou=false;
	this.ganhou=false;
	this.tempo=0;
	this.contTempo=0;
	this.botaoPular= new Imagem(1000,560,86,36,"img/Pontos/BotaoPular.png");
	this.botaoLeft= new Imagem(700,500,43,89,"img/Match/TurnH.png");
	this.botaoRight= new Imagem(640,500,43,89,"img/Match/TurnAntiH.png");
	this.botaoDica= new Imagem(0,0,0,0,"img/Pontos/DicaPontos.png");
	this.figs= new Array();
	//GAMBIARRA PQ AS FIGURAS TEM DIFERENTES TAMANHOS--
	this.tipoFigs = new Array();
	this.newPosRot0=new Array();
	this.newPosRot1=new Array();
	this.newPosRot2=new Array();
	this.newPosRot3=new Array();
	this.newPosRot4=new Array();
	this.newPosRot5=new Array();
	this.newPosRot6=new Array();
	this.newPosRot7=new Array();
	//----------------------------------
	this.rotacoes= new Array();
	this.locked=new Array();
	this.acertou=new Array();
	this.dicaMostrada=new Array();
	this.dicaImagem=new Array();
	this.dicaRotacao=new Array();
	this.dicas = 3;
	this.follow=-1;
	this.selected=-1;
	this.trace="";
	this.msg="";
	this.dicaAtual=-1;
	if(this.fase==1){
		//easy
		this.dicaRotacao=new Array(2,2,1);
		for(this.i=0;this.i<3;this.i++){
			this.tipoFigs.push(this.i);
			this.figs.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.dicaImagem.push(new Imagem(20,70, 179, 179,"img/Match2/Obj"+(this.i+1)+"MatchHigh2Fase1.png"));
			this.newPosRot0.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot1.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot2.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot3.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot4.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot5.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot6.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.newPosRot7.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase1.png"));
			this.rotacoes.push(0);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.figs[0].width=334;this.figs[0].height=85;
		this.figs[1].width=167;this.figs[1].height=85;
		this.figs[2].width=236;this.figs[2].height=118;
		//Gambiarra pq as figuras tem tamanhos diferentes em cada rotacao
		this.newPosRot0[0].x=0;this.newPosRot0[0].y=0;this.newPosRot0[0].width=334;this.newPosRot0[0].height=85;
		this.newPosRot1[0].x=60;this.newPosRot1[0].y=-50;this.newPosRot1[0].width=300;this.newPosRot1[0].height=270;
		this.newPosRot2[0].x=90;this.newPosRot2[0].y=0;this.newPosRot2[0].width=85;this.newPosRot2[0].height=334;
		this.newPosRot3[0].x=300;this.newPosRot3[0].y=50;this.newPosRot3[0].width=230;this.newPosRot3[0].height=270;
		this.newPosRot4[0].x=330;this.newPosRot4[0].y=90;this.newPosRot4[0].width=334;this.newPosRot4[0].height=85;
		this.newPosRot5[0].x=250;this.newPosRot5[0].y=300;this.newPosRot5[0].width=300;this.newPosRot5[0].height=230;
		this.newPosRot6[0].x=0;this.newPosRot6[0].y=330;this.newPosRot6[0].width=85;this.newPosRot6[0].height=334;
		this.newPosRot7[0].x=-50;this.newPosRot7[0].y=250;this.newPosRot7[0].width=250;this.newPosRot7[0].height=290;		
		this.newPosRot0[1].x=0;this.newPosRot0[1].y=0;this.newPosRot0[1].width=167;this.newPosRot0[1].height=85;
		this.newPosRot1[1].x=70;this.newPosRot1[1].y=0;this.newPosRot1[1].width=167;this.newPosRot1[1].height=170;
		this.newPosRot2[1].x=90;this.newPosRot2[1].y=0;this.newPosRot2[1].width=85;this.newPosRot2[1].height=167;
		this.newPosRot3[1].x=170;this.newPosRot3[1].y=60;this.newPosRot3[1].width=167;this.newPosRot3[1].height=167;
		this.newPosRot4[1].x=180;this.newPosRot4[1].y=80;this.newPosRot4[1].width=167;this.newPosRot4[1].height=85;
		this.newPosRot5[1].x=100;this.newPosRot5[1].y=180;this.newPosRot5[1].width=167;this.newPosRot5[1].height=167;
		this.newPosRot6[1].x=10;this.newPosRot6[1].y=167;this.newPosRot6[1].width=85;this.newPosRot6[1].height=167;
		this.newPosRot7[1].x=0;this.newPosRot7[1].y=120;this.newPosRot7[1].width=167;this.newPosRot7[1].height=167;		
		this.newPosRot0[2].x=0;this.newPosRot0[2].y=0;this.newPosRot0[2].width=236;this.newPosRot0[2].height=118;
		this.newPosRot1[2].x=0;this.newPosRot1[2].y=0;this.newPosRot1[2].width=160;this.newPosRot1[2].height=160;
		this.newPosRot2[2].x=100;this.newPosRot2[2].y=0;this.newPosRot2[2].width=100;this.newPosRot2[2].height=236;
		this.newPosRot3[2].x=170;this.newPosRot3[2].y=0;this.newPosRot3[2].width=150;this.newPosRot3[2].height=150;
		this.newPosRot4[2].x=240;this.newPosRot4[2].y=100;this.newPosRot4[2].width=236;this.newPosRot4[2].height=100;
		this.newPosRot5[2].x=150;this.newPosRot5[2].y=170;this.newPosRot5[2].width=150;this.newPosRot5[2].height=150;
		this.newPosRot6[2].x=0;this.newPosRot6[2].y=240;this.newPosRot6[2].width=118;this.newPosRot6[2].height=236;
		this.newPosRot7[2].x=0;this.newPosRot7[2].y=150;this.newPosRot7[2].width=170;this.newPosRot7[2].height=150;
		//Rever isso aqui----------------------------------------------
		this.dicaImagem[0].x=405;this.dicaImagem[0].y=115;
		this.dicaImagem[1].x=492;this.dicaImagem[1].y=282;
		this.dicaImagem[2].x=580;this.dicaImagem[2].y=280;
		for(this.i=0;this.i<3;this.i++){
			this.dicaImagem[this.i].width=this.figs[this.i].width;
			this.dicaImagem[this.i].height=this.figs[this.i].height;
		}
	}else if(this.fase==2){
		//easy
		this.dicaRotacao=new Array(0,2,2,2);
		for(this.i=0;this.i<4;this.i++){
			this.tipoFigs.push(this.i);
			this.figs.push(new Imagem(0,0, 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.dicaImagem.push(new Imagem(20,70, 179, 179,"img/Match2/Obj"+(this.i+1)+"MatchHigh2Fase2.png"));
			this.newPosRot0.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot1.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot2.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot3.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot4.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot5.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot6.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.newPosRot7.push(new Imagem(20,70+(150*this.i), 179, 179,"img/Match2/Obj"+(this.i+1)+"Match2Fase2.png"));
			this.rotacoes.push(0);
			//this.rotacoes.push(this.dicaRotacao[this.i]);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.figs[0].width=69;this.figs[0].height=98;this.figs[0].x=50;this.figs[0].y=100;
		this.figs[1].width=69;this.figs[1].height=69;this.figs[1].x=200;this.figs[1].y=100;
		this.figs[2].width=100;this.figs[2].height=100;this.figs[2].x=20;this.figs[2].y=300;
		this.figs[3].width=170;this.figs[3].height=340;this.figs[3].x=150;this.figs[3].y=200;
		//Gambiarra pq as figuras tem tamanhos diferentes em cada rotacao
		this.newPosRot0[0].x=0;this.newPosRot0[0].y=0;this.newPosRot0[0].width=69;this.newPosRot0[0].height=98;
		this.newPosRot1[0].x=70;this.newPosRot1[0].y=0;this.newPosRot1[0].width=100;this.newPosRot1[0].height=110;
		this.newPosRot2[0].x=98;this.newPosRot2[0].y=0;this.newPosRot2[0].width=95;this.newPosRot2[0].height=65;
		this.newPosRot3[0].x=110;this.newPosRot3[0].y=60;this.newPosRot3[0].width=80;this.newPosRot3[0].height=110;
		this.newPosRot4[0].x=69;this.newPosRot4[0].y=98;this.newPosRot4[0].width=65;this.newPosRot4[0].height=98;
		this.newPosRot5[0].x=50;this.newPosRot5[0].y=105;this.newPosRot5[0].width=100;this.newPosRot5[0].height=98;
		this.newPosRot6[0].x=0;this.newPosRot6[0].y=69;this.newPosRot6[0].width=80;this.newPosRot6[0].height=60;
		this.newPosRot7[0].x=0;this.newPosRot7[0].y=50;this.newPosRot7[0].width=105;this.newPosRot7[0].height=105;		
		this.newPosRot0[1].x=0;this.newPosRot0[1].y=0;this.newPosRot0[1].width=69;this.newPosRot0[1].height=69;
		this.newPosRot1[1].x=50;this.newPosRot1[1].y=-55;this.newPosRot1[1].width=80;this.newPosRot1[1].height=40;
		this.newPosRot2[1].x=69;this.newPosRot2[1].y=0;this.newPosRot2[1].width=69;this.newPosRot2[1].height=69;
		this.newPosRot3[1].x=100;this.newPosRot3[1].y=50;this.newPosRot3[1].width=50;this.newPosRot3[1].height=90;
		this.newPosRot4[1].x=69;this.newPosRot4[1].y=69;this.newPosRot4[1].width=69;this.newPosRot4[1].height=69;
		this.newPosRot5[1].x=40;this.newPosRot5[1].y=100;this.newPosRot5[1].width=69;this.newPosRot5[1].height=60;
		this.newPosRot6[1].x=0;this.newPosRot6[1].y=69;this.newPosRot6[1].width=69;this.newPosRot6[1].height=69;
		this.newPosRot7[1].x=-40;this.newPosRot7[1].y=35;this.newPosRot7[1].width=50;this.newPosRot7[1].height=75;		
		this.newPosRot0[2].x=0;this.newPosRot0[2].y=0;this.newPosRot0[2].width=100;this.newPosRot0[2].height=100;
		this.newPosRot1[2].x=60;this.newPosRot1[2].y=-65;this.newPosRot1[2].width=110;this.newPosRot1[2].height=80;
		this.newPosRot2[2].x=105;this.newPosRot2[2].y=0;this.newPosRot2[2].width=100;this.newPosRot2[2].height=100;
		this.newPosRot3[2].x=135;this.newPosRot3[2].y=60;this.newPosRot3[2].width=50;this.newPosRot3[2].height=130;
		this.newPosRot4[2].x=100;this.newPosRot4[2].y=100;this.newPosRot4[2].width=100;this.newPosRot4[2].height=100;
		this.newPosRot5[2].x=70;this.newPosRot5[2].y=140;this.newPosRot5[2].width=110;this.newPosRot5[2].height=70;
		this.newPosRot6[2].x=0;this.newPosRot6[2].y=100;this.newPosRot6[2].width=100;this.newPosRot6[2].height=100;
		this.newPosRot7[2].x=-70;this.newPosRot7[2].y=70;this.newPosRot7[2].width=60;this.newPosRot7[2].height=130;	
		this.newPosRot0[3].x=0;this.newPosRot0[3].y=0;this.newPosRot0[3].width=170;this.newPosRot0[3].height=340;
		this.newPosRot1[3].x=220;this.newPosRot1[3].y=-140;this.newPosRot1[3].width=330;this.newPosRot1[3].height=220;
		this.newPosRot2[3].x=340;this.newPosRot2[3].y=0;this.newPosRot2[3].width=340;this.newPosRot2[3].height=170;
		this.newPosRot3[3].x=340;this.newPosRot3[3].y=250;this.newPosRot3[3].width=210;this.newPosRot3[3].height=340;
		this.newPosRot4[3].x=170;this.newPosRot4[3].y=340;this.newPosRot4[3].width=170;this.newPosRot4[3].height=340;
		this.newPosRot5[3].x=100;this.newPosRot5[3].y=360;this.newPosRot5[3].width=340;this.newPosRot5[3].height=240;
		this.newPosRot6[3].x=0;this.newPosRot6[3].y=166;this.newPosRot6[3].width=340;this.newPosRot6[3].height=170;
		this.newPosRot7[3].x=-120;this.newPosRot7[3].y=105;this.newPosRot7[3].width=210;this.newPosRot7[3].height=350;
		//Rever isso aqui----------------------------------------------
		this.dicaImagem[0].x=413;this.dicaImagem[0].y=208;
		this.dicaImagem[1].x=413;this.dicaImagem[1].y=140;
		this.dicaImagem[2].x=477;this.dicaImagem[2].y=207;
		this.dicaImagem[3].x=413;this.dicaImagem[3].y=306;
		for(this.i=0;this.i<4;this.i++){
			this.dicaImagem[this.i].width=this.figs[this.i].width;
			this.dicaImagem[this.i].height=this.figs[this.i].height;
		}
	}
};

Tangram.prototype.Draw = function(){
	context.drawImage(this.fundo, 0, 0);
	context.font="40px Georgia";
	if(this.ativo && !this.pulou && !this.ganhou)this.tempo+=0.02;
	this.contTempo+=0.02;
	if(this.tempo>=60)this.botaoPular.x=10;
	
	context.drawImage(this.fundo, 0, 0);
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
	//Aqui mostra as dicas
	if(this.dicaAtual!=-1){
		context.save();
		if(this.dicaRotacao[this.dicaAtual]==1){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot1[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot1[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*4.5);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==2){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot2[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot2[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*1);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==3){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot3[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot3[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*1.5);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==4){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot4[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot4[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==5){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot5[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot5[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*2.5);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==6){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot6[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot6[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*3);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==7){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.newPosRot7[this.tipoFigs[this.dicaAtual]].x,this.dicaImagem[this.dicaAtual].y+this.newPosRot7[this.tipoFigs[this.dicaAtual]].y);
			context.rotate((Math.PI/2.0)*3.5);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}
		context.drawImage(this.dicaImagem[this.dicaAtual].img,this.dicaImagem[this.dicaAtual].x,this.dicaImagem[this.dicaAtual].y);
		context.restore();
	}
	
	//Aqui mostra as peças que são encaixadas
	//if(this.selected!=-1)this.trace=""+this.figs[this.selected].x+"-"+this.figs[this.selected].y;
	for(this.i=0;this.i<this.figs.length;this.i++){
		context.save();
		if(this.rotacoes[this.i]==1){
			context.translate(this.figs[this.i].x+this.newPosRot1[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot1[this.tipoFigs[this.i]].y);
			context.rotate((Math.PI/2.0)*4.5);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==2){
			context.translate(this.figs[this.i].x+this.newPosRot2[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot2[this.tipoFigs[this.i]].y);
			context.rotate((Math.PI/2.0)*1);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==3){
			context.translate(this.figs[this.i].x+this.newPosRot3[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot3[this.tipoFigs[this.i]].y);//ok
			context.rotate((Math.PI/2.0)*1.5);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==4){
			context.translate(this.figs[this.i].x+this.newPosRot4[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot4[this.tipoFigs[this.i]].y);//ok
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==5){
			context.translate(this.figs[this.i].x+this.newPosRot5[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot5[this.tipoFigs[this.i]].y);//ok
			context.rotate((Math.PI/2.0)*2.5);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==6){
			context.translate(this.figs[this.i].x+this.newPosRot6[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot6[this.tipoFigs[this.i]].y);//ok
			context.rotate((Math.PI/2.0)*3);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==7){
			context.translate(this.figs[this.i].x+this.newPosRot7[this.tipoFigs[this.i]].x,this.figs[this.i].y+this.newPosRot7[this.tipoFigs[this.i]].y);//ok
			context.rotate((Math.PI/2.0)*3.5);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}
		context.drawImage(this.figs[this.i].img,this.figs[this.i].x,this.figs[this.i].y);		
		context.restore();
	}
	
	//Aqui faz as peças clicadas seguirem o mouse
	if(this.follow!=-1){
		this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/2);
		this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/2);
		//this.trace="x:"+this.figs[this.follow].x+"   y:"+this.figs[this.follow].y+"   rot:"+this.rotacoes[this.follow];
	}
	
	//aqui mostra os botões das dicas
	for(this.i=0;this.i<this.dicas;this.i++){
		context.drawImage(this.botaoDica.img, 710-(this.i*60), 20);
	}
	
	context.drawImage(this.botaoLeft.img, this.botaoLeft.x, this.botaoLeft.y);
	context.drawImage(this.botaoRight.img, this.botaoRight.x, this.botaoRight.y);
	context.drawImage(this.botaoPular.img, this.botaoPular.x, this.botaoPular.y);
	
	context.fillText("" + this.trace,150,70);
	context.font="24px Georgia";
	context.fillText("" + this.msg,420,40);
	context.font="40px Georgia";
	context.fillText("Tempo: " + Math.round(this.tempo),10,40);
	
	//Desenha pontinhos delimitando a parte ativa das peças
	/*
	if(this.selected != -1){
		context.fillText("....",this.figs[this.selected].x,this.figs[this.selected].y);
		context.fillText(".",this.figs[this.selected].x+this.figs[this.selected].width,this.figs[this.selected].y);
		context.fillText("....",this.figs[this.selected].x,this.figs[this.selected].y+this.figs[this.selected].height);
		context.fillText(".",this.figs[this.selected].x+this.figs[this.selected].width,this.figs[this.selected].y+this.figs[this.selected].height);
	}*/
	
}

Tangram.prototype.MouseDown = function(mouseEvent) {	
	this.trace="";
	this.dicaAtual=-1;
	for(this.i=(this.figs.length-1);this.i>=0;this.i--){
		if(!this.locked[this.i]){
			if(posMouseX>this.figs[this.i].x && posMouseX<this.figs[this.i].x+this.figs[this.i].width && posMouseY>this.figs[this.i].y && posMouseY<this.figs[this.i].y+this.figs[this.i].height){
				//o que estiver selecionado vai pra frente da tela:
				//gravei no aux//
				this.aux=this.figs[this.figs.length-1];
				this.auxR=this.rotacoes[this.rotacoes.length-1];
				//Essa gambiarra aqui é pq tem umas figuras maiores que as outras, e atrapalha na hr
				//de selecionar -.-
				this.auxTipo=this.tipoFigs[this.tipoFigs.length-1];
				//o i recebe o ultimo//
				this.figs[this.figs.length-1]=this.figs[this.i];
				this.rotacoes[this.rotacoes.length-1]=this.rotacoes[this.i];
				this.tipoFigs[this.tipoFigs.length-1]=this.tipoFigs[this.i];
				//o ultimo recebe o aux//
				this.figs[this.i]=this.aux;
				this.rotacoes[this.i]=this.auxR;
				this.tipoFigs[this.i]=this.auxTipo;
				//o follow recebe o ultimo//
				this.follow=this.figs.length-1;
				this.selected=this.figs.length-1;
				break;
			}
		}
	}
	if(posMouseX>this.botaoRight.x && posMouseX<(this.botaoRight.x+this.botaoRight.width) && posMouseY>this.botaoRight.y && posMouseY<(this.botaoRight.y+this.botaoRight.height)){
		
	}else if(posMouseX>this.botaoLeft.x && posMouseX<this.botaoLeft.x+this.botaoLeft.width && posMouseY>this.botaoLeft.y && posMouseY<this.botaoLeft.y+this.botaoLeft.height){
		
	}else if(this.follow==-1){
		this.selected=-1;
	}
}

Tangram.prototype.MouseUp = function(mouseEvent) {
	if(this.selected==-1){
		//Pular a fase
		if(this.tempo>=60){
			if(posMouseX>this.botaoPular.x && posMouseX<(this.botaoPular.x + this.botaoPular.width) && posMouseY>this.botaoPular.y && posMouseY<(this.botaoPular.y + this.botaoPular.height)){
				this.pulou=true;
			}
		}
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
	}else{
		if(!this.locked[this.selected]){
			if(posMouseX>this.botaoRight.x && posMouseX<this.botaoRight.x+this.botaoRight.width && posMouseY>this.botaoRight.y && posMouseY<this.botaoRight.y+this.botaoRight.height){
				this.rotacoes[this.selected]++;				
				if(this.rotacoes[this.selected]>7)this.rotacoes[this.selected]=0;
			}else if(posMouseX>this.botaoLeft.x && posMouseX<this.botaoLeft.x+this.botaoLeft.width && posMouseY>this.botaoLeft.y && posMouseY<this.botaoLeft.y+this.botaoLeft.height){
				this.rotacoes[this.selected]--;
				if(this.rotacoes[this.selected]<0)this.rotacoes[this.selected]=7;
			}
			if(this.rotacoes[this.selected]==0){
				this.figs[this.selected].width=this.newPosRot0[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot0[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==1){
				this.figs[this.selected].width=this.newPosRot1[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot1[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==2){
				this.figs[this.selected].width=this.newPosRot2[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot2[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==3){
				this.figs[this.selected].width=this.newPosRot3[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot3[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==4){
				this.figs[this.selected].width=this.newPosRot4[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot4[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==5){
				this.figs[this.selected].width=this.newPosRot5[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot5[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==6){
				this.figs[this.selected].width=this.newPosRot6[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot6[this.tipoFigs[this.selected]].height;
			}else if(this.rotacoes[this.selected]==7){
				this.figs[this.selected].width=this.newPosRot7[this.tipoFigs[this.selected]].width;
				this.figs[this.selected].height=this.newPosRot7[this.tipoFigs[this.selected]].height;
			}
		}
		for(this.i=0; this.i<this.figs.length;this.i++){
			//Na fase 1 a figura tipo 1 tbm acerta se estiver na rotação 6
			if(this.figs[this.selected].x>this.dicaImagem[this.i].x-20 && this.figs[this.selected].x<this.dicaImagem[this.i].x+20 && this.figs[this.selected].y>this.dicaImagem[this.i].y-20 && this.figs[this.selected].y<this.dicaImagem[this.i].y+20 && (this.rotacoes[this.selected]==this.dicaRotacao[this.i] || (this.fase==1 && this.i==1 && this.rotacoes[this.selected]==6) || (this.fase==2 && this.i==2 && this.rotacoes[this.selected]==4)) && !this.acertou[this.i] && this.tipoFigs[this.selected]==this.i){
				this.TrancaFig(this.i);
				break;
			}
		}
	}
	this.follow=-1;
	
	//aqui tenho que fazer a verificação se tá na posicão certa
	this.ganhou=true;
	for(this.i=0;this.i<this.acertou.length;this.i++)if(!this.acertou[this.i])this.ganhou=false;
}

Tangram.prototype.KeyDown = function (keyCode){}

Tangram.prototype.MostraDica = function (indice){
	for(this.i=0;this.i<this.dicaMostrada.length;this.i++){
		if(!this.dicaMostrada[this.i]){
			this.dicaAtual=indice;
			this.dicaMostrada[this.i]=true;
			break;
		}
	}
}

Tangram.prototype.TrancaFig = function (indice){
	for(this.i=0;this.i<this.locked.length;this.i++){
		//Essa maluquice aqui é pura estética, os que já estão travados e corretos
		//vão ficar no fundo, enquanto os ativos vão indo pra frente da tela;
		if(!this.locked[this.i]){
			this.locked[this.i]=true;
			this.aux=this.figs[this.selected].img.src;
			this.auxTipo=this.tipoFigs[this.selected];			
			this.figs[this.selected].x=this.figs[this.i].x;
			this.figs[this.selected].y=this.figs[this.i].y;			
			this.figs[this.selected].width=this.figs[this.i].width;
			this.figs[this.selected].height=this.figs[this.i].height;
			this.figs[this.selected].img.src=this.figs[this.i].img.src;
			this.rotacoes[this.selected]=this.rotacoes[this.i];
			this.tipoFigs[this.selected]=this.tipoFigs[this.i];
			this.figs[this.i].x=this.dicaImagem[indice].x;
			this.figs[this.i].y=this.dicaImagem[indice].y;
			this.figs[this.i].img.src=this.aux;
			this.rotacoes[this.i]=this.dicaRotacao[indice];
			this.tipoFigs[this.i]=this.auxTipo;
			this.selected=-1;
			this.acertou[indice]=true;	
			this.dicaMostrada[indice]=true;	
			break;	
		}
	}
}