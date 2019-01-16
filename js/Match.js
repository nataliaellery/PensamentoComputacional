var Match = function (fase) {
  	this.fundo = new Image();
	this.fase=fase;
	if(this.fase==1)this.fundo.src = "img/Match/FundoMatch1.png";
	else if(this.fase==2)this.fundo.src = "img/Match/FundoMatch2.png";
	else if(this.fase==3)this.fundo.src = "img/Match/FundoMatch3.png";
	else if(this.fase==4)this.fundo.src = "img/Match/FundoMatch4.png";
	else if(this.fase==5)this.fundo.src = "img/Match/FundoMatch5.png";
	else if(this.fase==6)this.fundo.src = "img/Match/FundoMatch6.png";
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
		this.dicaRotacao=new Array(0,2,4,6);
		for(this.i=0;this.i<4;this.i++){
			this.figs.push(new Imagem(20,70, 179, 179,"img/Match/Match1.png"));
			this.dicaImagem.push(new Imagem(20,70, 179, 179,"img/Match/MatchHigh1.png"));
			this.rotacoes.push(0);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=458;this.dicaImagem[0].y=211;
		this.dicaImagem[1].x=310;this.dicaImagem[1].y=357;
		this.dicaImagem[2].x=164;this.dicaImagem[2].y=211;
		this.dicaImagem[3].x=311;this.dicaImagem[3].y=65;
	}else if(this.fase==2){
		//hard
		this.dicaRotacao=new Array(6,2,0,4,0,4,6,2);
		for(this.i=0;this.i<8;this.i++){
			this.figs.push(new Imagem(20,70, 169, 169,"img/Match/Match2.png"));
			this.dicaImagem.push(new Imagem(20,70, 169, 169,"img/Match/MatchHigh2.png"));
			this.rotacoes.push(0);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=231;this.dicaImagem[0].y=131;
		this.dicaImagem[1].x=231;this.dicaImagem[1].y=131;
		this.dicaImagem[2].x=400;this.dicaImagem[2].y=131;
		this.dicaImagem[3].x=400;this.dicaImagem[3].y=131;
		this.dicaImagem[4].x=231;this.dicaImagem[4].y=301;
		this.dicaImagem[5].x=231;this.dicaImagem[5].y=301;
		this.dicaImagem[6].x=400;this.dicaImagem[6].y=301;
		this.dicaImagem[7].x=400;this.dicaImagem[7].y=301;
	}else if(this.fase==3){
		//hard
		this.dicaRotacao=new Array(0,1,2,3,4,5,6,7);
		for(this.i=0;this.i<8;this.i++){
			this.figs.push(new Imagem(20,70, 161, 161,"img/Match/Match3.png"));
			this.dicaImagem.push(new Imagem(20,70, 161, 161,"img/Match/MatchHigh3.png"));
			this.rotacoes.push(0);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=320;this.dicaImagem[0].y=88;
		this.dicaImagem[1].x=397;this.dicaImagem[1].y=148;
		this.dicaImagem[2].x=451;this.dicaImagem[2].y=221;
		this.dicaImagem[3].x=396;this.dicaImagem[3].y=300;
		this.dicaImagem[4].x=319;this.dicaImagem[4].y=352;
		this.dicaImagem[5].x=240;this.dicaImagem[5].y=300;
		this.dicaImagem[6].x=184;this.dicaImagem[6].y=219;
		this.dicaImagem[7].x=242;this.dicaImagem[7].y=142;
	}else if(this.fase==4){
		//medio
		this.dicaRotacao=new Array(0,0,0,4,4,4);
		for(this.i=0;this.i<6;this.i++){
			this.figs.push(new Imagem(20,300, 288, 288,"img/Match/Match4.png"));
			this.dicaImagem.push(new Imagem(20,300, 288, 288,"img/Match/MatchHigh4.png"));
			this.rotacoes.push(0);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=208;this.dicaImagem[0].y=219;
		this.dicaImagem[1].x=240;this.dicaImagem[1].y=178;
		this.dicaImagem[2].x=273;this.dicaImagem[2].y=138;
		this.dicaImagem[3].x=240;this.dicaImagem[3].y=175;
		this.dicaImagem[4].x=273;this.dicaImagem[4].y=135;
		this.dicaImagem[5].x=304;this.dicaImagem[5].y=94;
	}else if(this.fase==5){
		//easy
		this.dicaRotacao=new Array(6,6,2,2);
		for(this.i=0;this.i<4;this.i++){
			this.figs.push(new Imagem(20,40, 252, 252,"img/Match/Match5.png"));
			this.dicaImagem.push(new Imagem(20,40, 252, 252,"img/Match/MatchHigh5.png"));
			//ARRUMAR AQUI DEPOIS TBM
			//this.rotacoes.push(this.dicaRotacao[this.i]);
			this.rotacoes.push(8);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=-11;this.dicaImagem[0].y=246;
		this.dicaImagem[1].x=233;this.dicaImagem[1].y=246;
		this.dicaImagem[2].x=312;this.dicaImagem[2].y=246;
		this.dicaImagem[3].x=559;this.dicaImagem[3].y=246;
		//PRA CONFERIR SE TÁ CERTO, TIRAR DEPOIS
		//for(this.i=0;this.i<4;this.i++)this.figs[this.i]=this.dicaImagem[this.i];
	}else if(this.fase==6){
		//easy
		this.dicaRotacao=new Array(8,9,10,11,12,13,14,15,16);
		for(this.i=0;this.i<9;this.i++){
			this.figs.push(new Imagem(20,40, 86, 86,"img/Match/Match6.png"));
			this.dicaImagem.push(new Imagem(20,40, 86, 86,"img/Match/MatchHigh6.png"));
			//ARRUMAR AQUI DEPOIS TBM
			//this.rotacoes.push(this.dicaRotacao[this.i]);
			this.rotacoes.push(8);
			this.locked.push(false);
			this.acertou.push(false);
			this.dicaMostrada.push(false);
		}
		this.dicaImagem[0].x=357;this.dicaImagem[0].y=390;
		this.dicaImagem[1].x=273;this.dicaImagem[1].y=355;
		this.dicaImagem[2].x=228;this.dicaImagem[2].y=278;
		this.dicaImagem[3].x=242;this.dicaImagem[3].y=198;
		this.dicaImagem[4].x=315;this.dicaImagem[4].y=139;
		this.dicaImagem[5].x=402;this.dicaImagem[5].y=143;
		this.dicaImagem[6].x=474;this.dicaImagem[6].y=198;
		this.dicaImagem[7].x=492;this.dicaImagem[7].y=281;
		this.dicaImagem[8].x=443;this.dicaImagem[8].y=356;
		//PRA CONFERIR SE TÁ CERTO, TIRAR DEPOIS
		//for(this.i=0;this.i<9;this.i++)this.figs[this.i]=this.dicaImagem[this.i];
	}
};

Match.prototype.Draw = function(){
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
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width/5*3),this.dicaImagem[this.dicaAtual].y-(this.dicaImagem[this.dicaAtual].height/3));
			context.rotate((Math.PI/2.0)*4.5);//ok
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==2){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.dicaImagem[this.dicaAtual].width,this.dicaImagem[this.dicaAtual].y);
			context.rotate((Math.PI/2.0)*1);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==3){
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width+(this.dicaImagem[this.dicaAtual].width/3)),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/5*3));
			context.rotate((Math.PI/2.0)*1.5);//ok
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==4){
			context.translate(this.dicaImagem[this.dicaAtual].x+this.dicaImagem[this.dicaAtual].width,this.dicaImagem[this.dicaAtual].y+this.dicaImagem[this.dicaAtual].height);
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==5){
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width/5*2),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height+(this.dicaImagem[this.dicaAtual].height/5*1.5)));
			context.rotate((Math.PI/2.0)*2.5);//ok
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==6){
			context.translate(this.dicaImagem[this.dicaAtual].x,this.dicaImagem[this.dicaAtual].y+this.dicaImagem[this.dicaAtual].height);
			context.rotate((Math.PI/2.0)*3);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==7){
			context.translate(this.dicaImagem[this.dicaAtual].x-(this.dicaImagem[this.dicaAtual].width/5*1.5),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/5*2));
			context.rotate((Math.PI/2.0)*3.5);//ok
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==8){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+this.dicaImagem[this.dicaAtual].width,this.dicaImagem[this.dicaAtual].y+this.dicaImagem[this.dicaAtual].height);
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==9){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width/2),this.dicaImagem[this.dicaAtual].y+this.dicaImagem[this.dicaAtual].height+(this.dicaImagem[this.dicaAtual].height/4));
			context.rotate((Math.PI/2.0)*2.444444444);//angulo: 0,444444444
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==10){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x,this.dicaImagem[this.dicaAtual].y+this.dicaImagem[this.dicaAtual].height+(this.dicaImagem[this.dicaAtual].height/10));
			context.rotate((Math.PI/2.0)*2.888888888);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==11){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x-(this.dicaImagem[this.dicaAtual].width/4),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/5*3));
			context.rotate((Math.PI/2.0)*3.333333332);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==12){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x-(this.dicaImagem[this.dicaAtual].width/5),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/8));
			context.rotate((Math.PI/2.0)*3.777777776);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==13){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width/4),this.dicaImagem[this.dicaAtual].y-(this.dicaImagem[this.dicaAtual].height/4));
			context.rotate((Math.PI/2.0)*4.22222222);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==14){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+(this.dicaImagem[this.dicaAtual].width/7*5),this.dicaImagem[this.dicaAtual].y-(this.dicaImagem[this.dicaAtual].height/4));
			context.rotate((Math.PI/2.0)*4.666666664);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==15){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+this.dicaImagem[this.dicaAtual].width+(this.dicaImagem[this.dicaAtual].width/10),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/10));
			context.rotate((Math.PI/2.0)*5.111111108);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}else if(this.dicaRotacao[this.dicaAtual]==16){//FASE 6 DEL DIABLO
			context.translate(this.dicaImagem[this.dicaAtual].x+this.dicaImagem[this.dicaAtual].width+(this.dicaImagem[this.dicaAtual].width/4),this.dicaImagem[this.dicaAtual].y+(this.dicaImagem[this.dicaAtual].height/5*3));
			context.rotate((Math.PI/2.0)*5.555555552);
			context.translate(-(this.dicaImagem[this.dicaAtual].x), -(this.dicaImagem[this.dicaAtual].y)); 
		}
		context.drawImage(this.dicaImagem[this.dicaAtual].img,this.dicaImagem[this.dicaAtual].x,this.dicaImagem[this.dicaAtual].y);
		context.restore();
	}
	
	//Aqui mostra as peças que são encaixadas
	for(this.i=0;this.i<this.figs.length;this.i++){
		context.save();
		if(this.rotacoes[this.i]==1){
			context.translate(this.figs[this.i].x+(this.figs[this.i].width/5*3),this.figs[this.i].y-(this.figs[this.i].height/3));
			context.rotate((Math.PI/2.0)*4.5);//ok
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==2){
			context.translate(this.figs[this.i].x+this.figs[this.i].width,this.figs[this.i].y);
			context.rotate((Math.PI/2.0)*1);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==3){
			context.translate(this.figs[this.i].x+(this.figs[this.i].width+(this.figs[this.i].width/3)),this.figs[this.i].y+(this.figs[this.i].height/5*3));
			context.rotate((Math.PI/2.0)*1.5);//ok
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==4){
			context.translate(this.figs[this.i].x+this.figs[this.i].width,this.figs[this.i].y+this.figs[this.i].height);
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==5){
			context.translate(this.figs[this.i].x+(this.figs[this.i].width/5*2),this.figs[this.i].y+(this.figs[this.i].height+(this.figs[this.i].height/5*1.5)));
			context.rotate((Math.PI/2.0)*2.5);//ok
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==6){
			context.translate(this.figs[this.i].x,this.figs[this.i].y+this.figs[this.i].height);
			context.rotate((Math.PI/2.0)*3);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==7){
			context.translate(this.figs[this.i].x-(this.figs[this.i].width/5*1.5),this.figs[this.i].y+(this.figs[this.i].height/5*2));
			context.rotate((Math.PI/2.0)*3.5);//ok
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==8){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+this.figs[this.i].width,this.figs[this.i].y+this.figs[this.i].height);
			context.rotate((Math.PI/2.0)*2);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==9){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+(this.figs[this.i].width/2),this.figs[this.i].y+this.figs[this.i].height+(this.figs[this.i].height/4));
			context.rotate((Math.PI/2.0)*2.444444444);//angulo: 0,444444444
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==10){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x,this.figs[this.i].y+this.figs[this.i].height+(this.figs[this.i].height/10));
			context.rotate((Math.PI/2.0)*2.888888888);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==11){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x-(this.figs[this.i].width/4),this.figs[this.i].y+(this.figs[this.i].height/5*3));
			context.rotate((Math.PI/2.0)*3.333333332);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==12){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x-(this.figs[this.i].width/5),this.figs[this.i].y+(this.figs[this.i].height/8));
			context.rotate((Math.PI/2.0)*3.777777776);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==13){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+(this.figs[this.i].width/4),this.figs[this.i].y-(this.figs[this.i].height/4));
			context.rotate((Math.PI/2.0)*4.22222222);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==14){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+(this.figs[this.i].width/7*5),this.figs[this.i].y-(this.figs[this.i].height/4));
			context.rotate((Math.PI/2.0)*4.666666664);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==15){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+this.figs[this.i].width+(this.figs[this.i].width/10),this.figs[this.i].y+(this.figs[this.i].height/10));
			context.rotate((Math.PI/2.0)*5.111111108);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}else if(this.rotacoes[this.i]==16){//FASE 6 DEL DIABLO
			context.translate(this.figs[this.i].x+this.figs[this.i].width+(this.figs[this.i].width/4),this.figs[this.i].y+(this.figs[this.i].height/5*3));
			context.rotate((Math.PI/2.0)*5.555555552);
			context.translate(-(this.figs[this.i].x), -(this.figs[this.i].y)); 
		}
		context.drawImage(this.figs[this.i].img,this.figs[this.i].x,this.figs[this.i].y);
		context.restore();
	}
	
	//Aqui faz as peças clicadas seguirem o mouse
	if(this.follow!=-1){
		//this.trace="x:"+this.figs[this.follow].x+"-y:"+this.figs[this.follow].y;
		if(this.fase==1){
			if(this.rotacoes[this.follow]==0){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*7);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*5);		
			}else if(this.rotacoes[this.follow]==2){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*5);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*7);		
			}else if(this.rotacoes[this.follow]==4){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*3);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*5);		
			}else if(this.rotacoes[this.follow]==6){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*5);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*3);		
			}
		}else if(this.fase==2){
			if(this.rotacoes[this.follow]==0){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*3);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*3);		
			}else if(this.rotacoes[this.follow]==2){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*7);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*3);		
			}else if(this.rotacoes[this.follow]==4){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*7);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*7);		
			}else if(this.rotacoes[this.follow]==6){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*3);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*7);		
			}
		}else if(this.fase==4){
			if(this.rotacoes[this.follow]==0){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/7*2);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/9*7);		
			}else if(this.rotacoes[this.follow]==2){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*2);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*3);		
			}else if(this.rotacoes[this.follow]==4){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*7);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*2);		
			}else if(this.rotacoes[this.follow]==6){
				this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/10*8);
				this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/10*7);		
			}
		}else{
			this.figs[this.follow].x=posMouseX-(this.figs[this.follow].width/2);
			this.figs[this.follow].y=posMouseY-(this.figs[this.follow].height/2);
		}
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
}

Match.prototype.MouseDown = function(mouseEvent) {	
	for(this.i=(this.figs.length-1);this.i>=0;this.i--){
		if(!this.locked[this.i]){			
			if(posMouseX>this.figs[this.i].x && posMouseX<this.figs[this.i].x+this.figs[this.i].width && posMouseY>this.figs[this.i].y && posMouseY<this.figs[this.i].y+this.figs[this.i].height){
				//o que estiver selecionado vai pra frente da tela:
				//gravei no aux//
				this.aux=this.figs[this.figs.length-1];
				this.auxR=this.rotacoes[this.rotacoes.length-1];
				//o i recebe o ultimo//
				this.figs[this.figs.length-1]=this.figs[this.i];
				this.rotacoes[this.rotacoes.length-1]=this.rotacoes[this.i];
				//o ultimo recebe o aux//
				this.figs[this.i]=this.aux;
				this.rotacoes[this.i]=this.auxR;
				//o follow recebe o ultimo//
				this.follow=this.figs.length-1;
				this.selected=this.figs.length-1;
				//arruma o negocio do selecionado//
				if(this.fase==1){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match1.png";
					this.figs[this.follow].img.src="img/Match/MatchSel1.png";
				}else if(this.fase==2){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match2.png";
					this.figs[this.follow].img.src="img/Match/MatchSel2.png";
				}else if(this.fase==3){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match3.png";
					this.figs[this.follow].img.src="img/Match/MatchSel3.png";
				}else if(this.fase==4){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match4.png";
					this.figs[this.follow].img.src="img/Match/MatchSel4.png";
				}else if(this.fase==5){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match5.png";
					this.figs[this.follow].img.src="img/Match/MatchSel5.png";
				}else if(this.fase==6){
					for(this.j=0;this.j<this.figs.length;this.j++)this.figs[this.j].img.src="img/Match/Match6.png";
					this.figs[this.follow].img.src="img/Match/MatchSel6.png";
				}
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

Match.prototype.MouseUp = function(mouseEvent) {
	if(this.selected==-1){
		if(this.fase==1)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match1.png";
		else if(this.fase==2)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match2.png";
		else if(this.fase==3)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match3.png";
		else if(this.fase==4)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match4.png";
		else if(this.fase==5)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match5.png";
		else if(this.fase==6)for(this.i=0;this.i<this.figs.length;this.i++)this.figs[this.i].img.src="img/Match/Match6.png";
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
				if(this.fase==3){
					this.rotacoes[this.selected]++;
					if(this.rotacoes[this.selected]>7)this.rotacoes[this.selected]=0;
				}else if(this.fase==6){
					this.rotacoes[this.selected]++;
					if(this.rotacoes[this.selected]>16)this.rotacoes[this.selected]=8;
				}else{
					this.rotacoes[this.selected]+=2;
					if(this.rotacoes[this.selected]>6)this.rotacoes[this.selected]=0;
				}
			}else if(posMouseX>this.botaoLeft.x && posMouseX<this.botaoLeft.x+this.botaoLeft.width && posMouseY>this.botaoLeft.y && posMouseY<this.botaoLeft.y+this.botaoLeft.height){
				if(this.fase==3){
					this.rotacoes[this.selected]--;
					if(this.rotacoes[this.selected]<0)this.rotacoes[this.selected]=7;
				}else if(this.fase==6){
					this.rotacoes[this.selected]--;
					if(this.rotacoes[this.selected]<8)this.rotacoes[this.selected]=16;
				}else{
					this.rotacoes[this.selected]-=2;
					if(this.rotacoes[this.selected]<0)this.rotacoes[this.selected]=6;
				}
			}
		}
		for(this.i=0; this.i<this.figs.length;this.i++){
			if(this.figs[this.selected].x>this.dicaImagem[this.i].x-20 && this.figs[this.selected].x<this.dicaImagem[this.i].x+20 && this.figs[this.selected].y>this.dicaImagem[this.i].y-20 && this.figs[this.selected].y<this.dicaImagem[this.i].y+20 && this.rotacoes[this.selected]==this.dicaRotacao[this.i] && !this.acertou[this.i]){
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

Match.prototype.KeyDown = function (keyCode){}

Match.prototype.MostraDica = function (indice){
	for(this.i=0;this.i<this.dicaMostrada.length;this.i++){
		if(!this.dicaMostrada[this.i]){
			this.dicaAtual=indice;
			this.dicaMostrada[this.i]=true;
			break;
		}
	}
}

Match.prototype.TrancaFig = function (indice){
	for(this.i=0;this.i<this.locked.length;this.i++){
		//Essa maluquice aqui é pura estética, os que já estão travados e corretos
		//vão ficar no fundo, enquanto os ativos vão indo pra frente da tela;
		if(!this.locked[this.i]){
			this.locked[this.i]=true;					
			this.figs[this.selected].x=this.figs[this.i].x;
			this.figs[this.selected].y=this.figs[this.i].y;
			this.rotacoes[this.selected]=this.rotacoes[this.i];
			this.figs[this.i].x=this.dicaImagem[indice].x;
			this.figs[this.i].y=this.dicaImagem[indice].y;
			this.rotacoes[this.i]=this.dicaRotacao[indice];
			if(this.fase==1)this.figs[this.selected].img.src="img/Match/Match1.png";
			else if(this.fase==2)this.figs[this.selected].img.src="img/Match/Match2.png";
			else if(this.fase==3)this.figs[this.selected].img.src="img/Match/Match3.png";
			else if(this.fase==4)this.figs[this.selected].img.src="img/Match/Match4.png";
			else if(this.fase==5)this.figs[this.selected].img.src="img/Match/Match5.png";
			else if(this.fase==6)this.figs[this.selected].img.src="img/Match/Match6.png";
			this.selected=-1;
			break;	
		}
	}
	this.acertou[indice]=true;	
	this.dicaMostrada[indice]=true;	
}