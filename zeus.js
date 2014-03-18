window.zeus = (function(){
  
  //fetches mout array
  var head= document.getElementsByTagName('head')[0];
  var script= document.createElement('script');
  script.type= 'text/javascript';
  script.src= 'https://rawgithub.com/mout/mout/master/src/array.js';
  head.appendChild(script);

  Array.prototype.split = function(splitter){
  	var result = [];
  	for(i=0;i<this.length;i++){
  		for(j=0;j<this[i].split(splitter).length;j++){
  			result.push(this[i].split(splitter)[j]);
  		}
  	}
    return result;
  }
   
  Array.prototype.nths = function(a,b){
	  var result = [];
	  for(i=0;i<this.length;i++){
		  if(i%a==0){result.push(this[i+b]);}
	  }
	  return result;
  }
  
  Array.prototype.evens = function(){
    var result = [];
	  for(i=0;i<this.length;i++){
		  if(i%2==0){result.push(this[i+1]);}
	  }
	  if(result[result.length-1]==undefined){result = result.slice(0,result.length-1);}
	  return result;
  }
  
  Array.prototype.odds = function(){
    var result = [];
	  for(i=0;i<this.length;i++){
		  if(i%2==0){result.push(this[i]);}
	  }
	  return result;
  }
  
  Array.prototype.move = function (old_index, new_index){
  	if (new_index >= this.length) {
  		var k = new_index - this.length;
  		while ((k--) + 1) {
  			this.push(undefined);
  		}
  	}
  	this.splice(new_index, 0, this.splice(old_index, 1)[0]);
  	return this; // for testing purposes
  }

}());
