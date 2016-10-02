function divide(num){
	return num/num;
}


function multiply(num){
	for(var i =0; i<13; i++){
  	num*=2;
  }
  return num;
}

function add(num){
	return Math.ceil(num/1000)*1000;
}

add(multiply(divide(235711)));