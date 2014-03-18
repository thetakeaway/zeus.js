window.zeus = (function(){

  Array.prototype.split = function(splitter){
  	var output = [];
  	for(i=0;i<this.length;i++){
  		for(j=0;j<this[i].split(splitter).length;j++){
  			output.push(this[i].split(splitter)[j]);
  		}
  	}
    return output;
  }
   
  Array.prototype.nth = function(str){
  	var a = (str=="even"||str=="odd" ? 2 : str.match(/\dn(\+\d)?/i) ? str.match(/\dn(\+\d)?/i)[0][0] : str.match(/\d/i) ? 0 : 0);
  	var b = (str=="even" ? 1 : str.match(/\dn(\+\d)?/i) ? str.match(/\dn(\+\d)?/i)[1][1] : str.match(/\d/i) ? str.match(/\d/i)[0]+"");
  	var output = [];
  	
  	if(a){
    	for(i=0;i<this.length;i++){
    		if(i%a==0){output.push(this[i+b]);}
    	}
  	}else{
  	  output.push(this[b]);
  	}
  	return output;
  }

}());
