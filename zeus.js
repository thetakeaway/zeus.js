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
  
  Array.prototype.rotate = function(p){
    for(var l = this.length, p = (Math.abs(p) >= l && (p %= l), p < 0 && (p += l), p), i, x; p; p = (Math.ceil(l / p) - 1) * p - l + (l = p))
        for(i = l; i > p; x = this[--i], this[i] = this[i - p], this[i - p] = x);
    return a;
  }
  
  function forEach(arr, callback, thisObj) {
        if (arr == null) {
            return;
        }
        var i = -1,
            n = arr.length;
        while (++i < n) {
            // we iterate over sparse items since there is no way to make it
            // work properly on IE 7-8. see #64
            if ( callback.call(thisObj, arr[i], i, arr) === false ) {
                break;
            }
        }
    }
    
    Array.prototype.max = function(iterator){
        if (this.length && !iterator) {
            return Math.max.apply(Math, this);
        } else if (!this.length) {
            return Infinity;
        } else {
            var result,
                compare = -Infinity,
                tmp;
            forEach(this, function(val, i, list){
                tmp = iterator(val, i, list);
                if (tmp > compare) {
                    compare = tmp;
                    result = val;
                }
            });
            return result;
        }
    }
    
    Array.prototype.append = function(arr2) {
        if (arr2 == null) {
            return this;
        }

        var pad = this.length,
            i = -1,
            len = arr2.length;
        while (++i < len) {
            this[pad + i] = arr2[i];
        }
        return this;
    }
    
    function collect(arr, callback, thisObj){
        callback = makeIterator(callback, thisObj);
        var results = [];
        if (arr == null) {
            return results;
        }

        var i = -1, len = arr.length;
        while (++i < len) {
            var value = callback(arr[i], i, arr);
            if (value != null) {
                append(results, value);
            }
        }

        return results;
    }
    
    function combine(arr1, arr2) {
        if (arr2 == null) {
            return arr1;
        }

        var i = -1, len = arr2.length;
        while (++i < len) {
            if (indexOf(arr1, arr2[i]) === -1) {
                arr1.push(arr2[i]);
            }
        }

        return arr1;
    }
    
    function compact(arr) {
        return filter(arr, function(val){
            return (val != null);
        });
    }
    
    function intersection(arr) {
    var arrs = Array.prototype.slice.call(arguments, 1),
      result = filter(unique(arr), function(needle){
        return every(arrs, function(haystack){
            return contains(haystack, needle);
        });
      });
    return result;
  }

}());
