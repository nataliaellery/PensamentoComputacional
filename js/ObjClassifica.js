var ObjClassifica = function (x,y,width,height,src,cor,tipo,posicionado,id) {
	this.x = x;
	this.y = y;
	this.cor = cor;
	this.tipo = tipo;
	this.posicionado = posicionado;
	this.id = id;
	this.width=width;
	this.height=height;
	this.img= new Image();
	if(src!="nenhum")this.img.src=src;
};