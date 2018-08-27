var Matriz = function(num){
	this.j= new Array();
	this.obs= new Array();
	this.stat = "vazio";
	this.i=0;
	for(this.i=0; this.i<num; this.i++){
		this.j[this.i]=new Imagem(0,0,0,0,"nenhum");
		this.obs[this.i]=new Imagem(0,0,0,0,"nenhum");
	}
};