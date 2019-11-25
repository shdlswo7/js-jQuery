function factorial(num) {
    var factorialValue = 1;
    // 코드를 작성하세요.
  	if(num>1){
  		for(var i=1; i<=num; i++){
  			factorialValue = factorialValue *i;
  		}
  	}
    return factorialValue;
}

console.log(factorial(10));
console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(0));