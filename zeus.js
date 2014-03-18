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
   
  Array.prototype.nths = function(a,b){
	  var output = [];
	  for(i=0;i<this.length;i++){
		  if(i%a==0){output.push(this[i+b]);}
	  }
	  return output;
  }
  
  Array.prototype.evens = function(){
    var output = [];
	  for(i=0;i<this.length;i++){
		  if(i%2==0){output.push(this[i+1]);}
	  }
	  if(output[output.length-1]==undefined){output = output.slice(0,output.length-1);}
	  return output;
  }
  
  Array.prototype.odds = function(){
    var output = [];
	  for(i=0;i<this.length;i++){
		  if(i%2==0){output.push(this[i]);}
	  }
	  return output;
  }

}());
