function range(start, end, step) {
    var arr = [];
   
    // 코드를 작성해주세요.
    arr.push(start);
    
	for(var i= 1; i<end; i++){      
          	var num=0; 
       		num = start+ step;
      	 	start = num;
        if(num<end){
        	arr.push(num);         
        }
    }
    return arr;
}

// 테스트 코드
console.log(range(1, 10, 1));
console.log(range(-1, 10, 3));
console.log(range(10, -10, -4));