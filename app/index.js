module.exports = {	
	findMinMax: function(arr){

		var largestElement = function(arr){
		var largest = arr[0];
		for(var i = 0; i < arr.length; i++){
		  if (arr[i] > largest){
		    largest = arr[i];
		  }
		}
		return largest;
		};

		var smallestElement = function(arr){
		var smallest = arr[0];
		for(var i = 0; i < arr.length; i++){
		  if (arr[i] < smallest){
		    smallest = arr[i];
		  }
		}
		return smallest; 
		}
		var smallest = smallestElement(arr), largest = largestElement(arr);
  		if (smallest === largest){
    		return [smallest];
    	}
		return [smallestElement(arr) , largestElement(arr)];
	}
}