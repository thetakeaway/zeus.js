window.zeus = (function(){

  Array.prototype.split = function(a){
  	var b = [];
  	for(i=0;i<this.length;i++){
  		for(j=0;j<this[i].split(a).length;j++){
  			b.push(this[i].split(a)[j]);
  		}
  	}
    return b;
  }
   
  Array.prototype.nth = function(a,b){
  	var c = [];
  	for(i=0;i<this.length;i++){
  		if(i%a==0){c.push(this[i+b]);}
  	}
  	return c;
  }

}());
