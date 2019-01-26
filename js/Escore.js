var Escore = function (indice) {
	this.tempoProg = new Array(0,0,0,0,0,0,0);
	this.comandosProg = new Array(0,0,0,0,0,0,0);
	this.deletadosProg = new Array(0,0,0,0,0,0,0);
	this.limpouProg = new Array(0,0,0,0,0,0,0);
	this.playProg = new Array(0,0,0,0,0,0,0);
	this.pulouProg = new Array(false,false,false,false,false,false,false);
	
	
	this.tempoProgLoop = new Array(0,0);
	this.comandosProgLoop = new Array(0,0);
	this.deletadosProgLoop = new Array(0,0);
	this.limpouProgLoop = new Array(0,0);
	this.playProgLoop = new Array(0,0);
	this.loopInstProgLoop = new Array(0,0);
	this.loopProgLoop = new Array(0,0);
	this.pulouProgLoop = new Array(false,false);
	
	this.tempoPontos = new Array(0,0,0,0);
	this.cliquesPontos = new Array(0,0,0,0);
	this.limpouPontos = new Array(0,0,0,0);
	this.dicasPontos = new Array(0,0,0,0);
	this.pulouPontos = new Array(false,false,false,false);
	
	this.tempoMatch = new Array(0,0);
	this.cliquesMatch = new Array(0,0);
	this.girosMatch = new Array(0,0);
	this.dicasMatch = new Array(0,0);
	this.pulouMatch = new Array(false,false);
	
	this.tempoTangram = new Array(0,0);
	this.cliquesTangram = new Array(0,0);
	this.girosTangram = new Array(0,0);
	this.dicasTangram = new Array(0,0);
	this.pulouTangram = new Array(false,false);
	
	this.tempoSeq = new Array(0,0);
	this.tentativasSeq = new Array(0,0);
	this.dicasSeq = new Array(0,0);
	this.pulouSeq = new Array(false,false);
	
	this.tempoClas = 0;
	this.tentativasClas = 0;
	this.limpouClas = 0;
	this.dicasClas = 0;
	this.pulouClas=0;
	
	//RESULTADOS:
	
	this.progResult= new Array(0,0,0,0,0,0,0);
	this.progLoopResult= new Array(0,0);
	this.pontosResult = new Array(0,0,0,0);
	this.matchResult = new Array(0,0);
	this.tangramResult = new Array(0,0);
	this.seqResult = new Array(0,0);
	this.clasResult=0;
};

Escore.prototype.Programacao = function(fase,tempo,comandos,deletados,limpou,play,pulou){
	this.tempoProg[fase]=tempo;
	this.comandosProg[fase]=comandos;
	this.deletadosProg[fase]=deletados;
	this.limpouProg[fase]=limpou;
	this.playProg[fase]=play;
	this.pulouProg[fase]=pulou;
}

Escore.prototype.ProgramacaoLoop = function(fase,tempo,comandos,deletados,limpou,play,loop,loopInst,pulou){
	this.tempoProgLoop[fase]=tempo;
	this.comandosProgLoop[fase]=comandos;
	this.deletadosProgLoop[fase]=deletados;
	this.limpouProgLoop[fase]=limpou;
	this.playProgLoop[fase]=play;
	this.pulouProgLoop[fase]=pulou;
	this.loopProgLoop[fase]=loop;
	this.loopInstProgLoop[fase]=loopInst;
}

Escore.prototype.Pontos = function(fase,tempo,cliques,limpou,dicas,pulou){
	this.tempoPontos[fase]=tempo;
	this.cliquesPontos[fase]=cliques;
	this.limpouPontos[fase]=limpou;
	this.dicasPontos[fase]=dicas;
	this.pulouPontos[fase]=pulou;
}

Escore.prototype.Match = function(fase,tempo,cliques,giros,dicas,pulou){
	this.tempoMatch[fase]=tempo;
	this.cliquesMatch[fase]=cliques;
	this.girosMatch[fase]=giros;
	this.dicasMatch[fase]=dicas;
	this.pulouMatch[fase]=pulou;
}

Escore.prototype.Tangram = function(fase,tempo,cliques,giros,dicas,pulou){
	this.tempoTangram[fase]=tempo;
	this.cliquesTangram[fase]=cliques;
	this.girosTangram[fase]=giros;
	this.dicasTangram[fase]=dicas;
	this.pulouTangram[fase]=pulou;
}

Escore.prototype.Sequencia = function(fase, tempo, tentativas, dicas, pulou){
	this.tempoSeq[fase]=tempo;
	this.tentativasSeq[fase]=tentativas;
	this.dicasSeq[fase]=dicas;
	this.pulouSeq[fase]=pulou;
}

Escore.prototype.Classifica = function(tempo,tentativas,limpou,dicas,pulou){
	this.tempoClas = 0;
	this.tentativasClas = 0;
	this.limpouClas = 0;
	this.dicasClas = 0;
	this.pulouClas=0;	
}

Escore.prototype.Calcula = function(){
//Programação: 
	context.fillStyle="#FF8A00";
	context.font="20px Georgia";
	context.fillText("Fase Programação",30,140);
	for(this.i=0;this.i<this.progResult.length;this.i++){
		if(this.pulouProg[this.i])this.progResult[this.i]=0;
		else{
			if(this.i==0 || this.i==1){
				if(this.playProg[this.i]==1) {
					this.Imin=4;
					this.Pmax=1;
				}else if(this.playProg[this.i]==2 || this.playProg[this.i]==3){
					this.Imin=2;
					this.Pmax=2;
				}else{
					this.Imin=1;
					this.Pmax=4;
				}
			}else if(this.i==2){
				if(this.playProg[this.i]==1){
					this.Imin=5;
					this.Pmax=1;
				}else if(this.playProg[this.i]>=2 && this.playProg[this.i]<=4){
					this.Imin=4;
					this.Pmax=2;
				}else{
					this.Imin=2;
					this.Pmax=5;
				}
			}else if(this.i==3){
				if(this.playProg[this.i]==1){
					this.Imin=5;
					this.Pmax=1;
				}else if(this.playProg[this.i]==2){
					this.Imin=4;
					this.Pmax=2;
				}else{
					this.Imin=3;
					this.Pmax=3;
				}
			}else if(this.i==4){
				if(this.playProg[this.i]==1){
					this.Imin=11;
					this.Pmax=1;
				}else if(this.playProg[this.i]==2){
					this.Imin=8;
					this.Pmax=2;
				}else if(this.playProg[this.i]==3){
					this.Imin=6;
					this.Pmax=3;
				}else if(this.playProg[this.i]>=4 && this.playProg[this.i]<=6){
					this.Imin=4;
					this.Pmax=4;
				}else if(this.playProg[this.i]>=7 && this.playProg[this.i]<=8){
					this.Imin=3;
					this.Pmax=7;
				}else{
					this.Imin=2;
					this.Pmax=9;
				}
			}else if(this.i==5){
				if(this.playProg[this.i]==1){
					this.Imin=8;
					this.Pmax=1;
				}else if(this.playProg[this.i]>=2 && this.playProg[this.i]<=3){
					this.Imin=6;
					this.Pmax=2;
				}else if(this.playProg[this.i]>=4 && this.playProg[this.i]<=5){
					this.Imin=5;
					this.Pmax=4;
				}else{
					this.Imin=4;
					this.Pmax=6;
				}
			}else if(this.i==6){
				if(this.playProg[this.i]==1){
					this.Imin=6;
					this.Pmax=1;
				}else if(this.playProg[this.i]==2){
					this.Imin=4;
					this.Pmax=2;
				}else{
					this.Imin=2;
					this.Pmax=3;
				}
			}
			this.progResult[this.i] = 1-((this.comandosProg[this.i]-this.Imin)*0.001)-(this.comandosProg[this.i]*0.05)-(this.limpouProg[this.i]*0.001)-((this.playProg[this.i]-this.Pmax)*0.01)-(this.tempoProg[this.i]*0.01);
		}
		context.font="20px Georgia";
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.progResult[this.i]*10) ,50,170+(30*this.i));
	}
	context.fillStyle="#FF003C";
	context.font="20px Georgia";
	context.fillText("Fase Programação (Loop)",30,440);
	for(this.i=0;this.i<this.progLoopResult.length;this.i++){
		if(this.pulouProgLoop[this.i])this.progLoopResult[this.i]=0;
		else{
			if(this.loopInstProgLoop[this.i]==0){
				if(this.i==0){
					if(this.playProgLoop[this.i]==1) {
						this.Imin=14;
						this.Pmax=1;
					}else if(this.playProgLoop[this.i]==2){
						this.Imin=8;
						this.Pmax=2;
					}else if(this.playProgLoop[this.i]==3){
						this.Imin=6;
						this.Pmax=3;
					}else if(this.playProgLoop[this.i]==4 || this.playProgLoop[this.i]==5){
						this.Imin=4;
						this.Pmax=4;
					}else{
						this.Imin=2;
						this.Pmax=7;
					}
				}else if(this.i==1){
					if(this.playProgLoop[this.i]==1){
						this.Imin=9;
						this.Pmax=1;
					}else if(this.playProgLoop[this.i]==2){
						this.Imin=5;
						this.Pmax=2;
					}else if(this.playProgLoop[this.i]>=3 && this.playProgLoop[this.i]<=5){
						this.Imin=3;
						this.Pmax=3;
					}else{
						this.Imin=2;
						this.Pmax=6;
					}
				}
				this.progLoopResult[this.i] = 0.7-((this.comandosProgLoop[this.i]-this.Imin)*0.001)-(this.deletadosProgLoop[this.i]*0.001)-(this.limpouProgLoop[this.i]*0.001)-((this.playProgLoop[this.i]-this.Pmax)*0.001)-(this.tempoProgLoop[this.i]*0.001)-(this.loopProgLoop[this.i]*0.001);
			}else if(this.loopInstProgLoop[this.i]>0){
				if(this.i==0){
					this.Lomin=1;
					if(this.loopInstProgLoop[this.i]==1) {
						this.M=0.85;
						this.ILomin=1;
						if(this.playProgLoop[this.i]==1) {
							this.Imin=9;
						}else if(this.playProgLoop[this.i]==2){
							this.Imin=6;
						}else if(this.playProgLoop[this.i]==3){
							this.Imin=5;
						}else if(this.playProgLoop[this.i]>=4 && this.playProgLoop[this.i]<=6){
							this.Imin=4;
						}else{
							this.Imin=3;
						}
					}else{
						this.M=1;
						this.ILomin=2;
						this.Imin=3;
					}
				}else if(this.i==1){
					if(this.loopInstProgLoop[this.i]==1) {
						this.M=0.85;
						this.ILomin=1;
						this.Lomin=1;
						if(this.playProgLoop[this.i]==1) {
							this.Imin=5;
						}else if(this.playProgLoop[this.i]==2){
							this.Imin=4;
						}else{
							this.Imin=3;
						}
					}else{
						this.M=1;
						this.Lomin=2;
						this.ILomin=2;
						this.Imin=4;
					}
				}
				this.progLoopResult[this.i]=this.M-((this.comandosProgLoop[this.i]-this.Imin)*0.001)-(this.deletadosProgLoop[this.i]*0.001)-(this.limpouProgLoop[this.i]*0.001)-((this.playProgLoop[this.i]-1)*0.001)-((this.loopProgLoop[this.i]-this.Lomin)*0.001)-((this.loopInstProgLoop[this.i]-this.ILomin)* 0.001)-(this.tempoProgLoop[this.i]*0.001);
			}	
		}
		context.font="20px Georgia";
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.progLoopResult[this.i]*10),50,470+(30*this.i));
	}
	context.fillStyle="#C44D58";
	context.font="20px Georgia";
	context.fillText("Fase Pontos",330,140);
	for(this.i=0;this.i<this.pontosResult.length;this.i++){
		if(this.pulouPontos[this.i])this.pontosResult[this.i]=0;
		else{
			if(this.i<2)this.Cmin=9;
			else this.Cmin=13;
			this.pontosResult[this.i]=1-((this.cliquesPontos[this.i]-this.Cmin)*0.001)-(this.dicasPontos[this.i]*0.5)-(this.limpouPontos[this.i]*0.001)-(this.tempoPontos[this.i]*0.01);
		}
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.pontosResult[this.i]*10),330,140+(30*(this.i+1)));
	}
	context.fillStyle="#FF6B6B";
	context.font="20px Georgia";
	context.fillText("Fase Formas geométricas",550,140);
	for(this.i=0;this.i<this.matchResult.length;this.i++){
		if(this.pulouMatch[this.i])this.matchResult[this.i]=0;
		else{
			//TALVEZ COM AS MELHORIAS QUE EU FIZ NO CÓDIGO VAI ACABAR DIMINUINDO MAIS AINDA O VALOR MINIMO DE CLIQUES
			//POIS AGORA É POSSÍVEL POSICIONAR NO LUGAR, GIRAR, E SE GIRAR E TIVER NO LUGAR CERTO JÁ FICA
			//SEM PRECISAR CLICAR UMA SEGUNDA VEZ... PRECISAMOS FAZER VÁRIOS TESTES PRA CONFIRMAR ISSO
			
			if(this.i==0){
				this.Gmin=8;
				this.Cmin=8;
			}else{
				this.Gmin=16;
				this.Cmin=14;
			}
			this.matchResult[this.i]=1-((this.cliquesMatch[this.i]-this.Cmin)*0.001)-((this.girosMatch[this.i]-this.Gmin)*0.001)-(this.dicasMatch[this.i]*0.05)-(this.tempoMatch[this.i]*0.01);
		}
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.matchResult[this.i]*10),550,140+(30*(this.i+1)));
	}
	context.fillStyle="#C7F464";
	context.font="20px Georgia";
	context.fillText("Fase Tangram",550,280);
	for(this.i=0;this.i<this.tangramResult.length;this.i++){
		if(this.pulouTangram[this.i])this.tangramResult[this.i]=0;
		else{
			//TALVEZ COM AS MELHORIAS QUE EU FIZ NO CÓDIGO VAI ACABAR DIMINUINDO MAIS AINDA O VALOR MINIMO DE CLIQUES
			//POIS AGORA É POSSÍVEL POSICIONAR NO LUGAR, GIRAR, E SE GIRAR E TIVER NO LUGAR CERTO JÁ FICA
			//SEM PRECISAR CLICAR UMA SEGUNDA VEZ... PRECISAMOS FAZER VÁRIOS TESTES PRA CONFIRMAR ISSO
			if(this.i==0){
				this.Cmin=5;
				this.Gmin=5;
			}else{
				this.Cmin=6;
				this.Gmin=6;
			}
			this.tangramResult[this.i]=1-((this.cliquesTangram[this.i]-this.Cmin)*0.001)-((this.girosTangram[this.i]-this.Gmin)*0.001)-(this.dicasTangram[this.i]*0.2)-(this.tempoTangram[this.i]*0.005);
		}
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.tangramResult[this.i]*10),550,280+(30*(this.i+1)));
	}
	context.fillStyle="#4ECDC4";
	context.font="20px Georgia";
	context.fillText("Fase Sequência",330,440);
	for(this.i=0;this.i<this.seqResult.length;this.i++){
		if(this.pulouSeq[this.i])this.seqResult[this.i]=0;
		else this.seqResult[this.i]=1-(this.tentativasSeq[this.i]*0.001)-(this.dicasSeq[this.i]*0.5)-(this.tempoSeq[this.i]*0.01);
		context.fillText("Nível "+(this.i+1)+": " + Math.round(this.seqResult[this.i]*10),330,440+(30*(this.i+1)));
	}
	context.fillStyle="#556270";
	context.font="20px Georgia";
	context.fillText("Fase Classificação",550,440);
	if(this.pulouClas)this.clasResult = 0;
	else this.clasResult = 1-(this.tentativasClas*0.01)-(this.limpouClas*0.001)-(this.dicasClas*0.4)-(this.tempoClas*0.001);
	context.fillText("Nível único: "+ Math.round(this.clasResult*10),550,470);
	
	context.fillStyle="black";

	this.algoritmo=(((this.progResult[0]*0.4)+(this.progResult[1]*0.4)+(this.progResult[2]*0.4)+(this.progResult[3]*0.4)+(this.progResult[4]*0.4)+(this.progResult[5]*0.4)+(this.progResult[6]*0.4)+(this.progLoopResult[0]*0.4)+(this.progLoopResult[1]*0.4))/3.6);
	this.abstracao=(((this.progResult[0]*0.1)+(this.progResult[1]*0.1)+(this.progResult[2]*0.1)+(this.progResult[3]*0.1)+(this.progResult[4]*0.1)+(this.progResult[5]*0.1)+(this.progResult[6]*0.1)+(this.progLoopResult[0]*0.1)+(this.progLoopResult[1]*0.1)+(this.pontosResult[0]*0.4)+(this.pontosResult[1]*0.4)+(this.pontosResult[2]*0.4)+(this.pontosResult[3]*0.4)+(this.matchResult[0]*0.2)+(this.matchResult[1]*0.2)+(this.tangramResult[0]*0.2)+(this.tangramResult[1]*0.2)+(this.seqResult[0]*0.2)+(this.seqResult[1]*0.2)+(this.clasResult*0.4))/4.1);
	this.decomposicao=(((this.progResult[0]*0.45)+(this.progResult[1]*0.45)+(this.progResult[2]*0.45)+(this.progResult[3]*0.45)+(this.progResult[4]*0.45)+(this.progResult[5]*0.45)+(this.progResult[6]*0.45)+(this.progLoopResult[0]*0.4)+(this.progLoopResult[1]*0.4)+(this.pontosResult[0]*0.2)+(this.pontosResult[1]*0.2)+(this.pontosResult[2]*0.2)+(this.pontosResult[3]*0.2)+(this.matchResult[0]*0.4)+(this.matchResult[1]*0.4)+(this.tangramResult[0]*0.4)+(this.tangramResult[1]*0.4)+(this.seqResult[0]*0.4)+(this.seqResult[1]*0.4)+(this.clasResult*0.3))/7.45);
	this.reconhecimento=(((this.progResult[0]*0.1)+(this.progResult[1]*0.1)+(this.progResult[2]*0.1)+(this.progResult[3]*0.1)+(this.progResult[4]*0.1)+(this.progResult[5]*0.1)+(this.progResult[6]*0.1)+(this.progLoopResult[0]*0.1)+(this.progLoopResult[1]*0.1)+(this.pontosResult[0]*0.4)+(this.pontosResult[1]*0.4)+(this.pontosResult[2]*0.4)+(this.pontosResult[3]*0.4)+(this.matchResult[0]*0.4)+(this.matchResult[1]*0.4)+(this.tangramResult[0]*0.4)+(this.tangramResult[1]*0.4)+(this.seqResult[0]*0.4)+(this.seqResult[1]*0.4)+(this.clasResult*0.3))/5.2);
	
	context.font="22px Georgia";
	context.fillText("Algoritmo:" + Math.round(this.algoritmo*10) + "    Abstração: "+ Math.round(this.abstracao*10) + "    Decomposição:"+ Math.round(this.decomposicao*10) + "     Reconhecimento de padrões:" + Math.round(this.reconhecimento*10) ,10,90); 
	
	context.font="40px Georgia";
	context.fillText("Escore geral: " + Math.round((this.algoritmo+this.abstracao+this.decomposicao+this.reconhecimento)/4*10),260,40); 
}