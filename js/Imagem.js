var Imagem = function (x,y,width,height,src) {
	this.x = x;
	this.y = y;
	this.width=width;
	this.height=height;
	this.img= new Image();
	if(src!="nenhum")this.img.src=src;
};