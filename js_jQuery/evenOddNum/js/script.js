$('#even-btn').on('click', function(){
	changeColor(0);	
});
$('#odd-btn').on('click', function(){
	changeColor(1);	
});


function changeColor(i){	
	$('.card').each(function(){
		$(this).removeClass('selected');
		var numberValue = Number($(this).text());
		if(numberValue % 2 == i){
			/*console.log(numberValue);*/
			$(this).addClass('selected');
		}
	});
};