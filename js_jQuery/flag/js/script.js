$('#btn1').on('click', blueFlagsDown);
$('#btn2').on('click', whiteFlagDown);
$('#btn3').on('click', blueDotFlagsDown);


function blueFlagsDown(event){
	$('.blue').addClass('down');
	setTimeout(flagUp, 1000);	
};

function whiteFlagDown(event){
	$('.white').addClass('down');
	setTimeout(flagUp, 1000);
}

function blueDotFlagsDown(event){
	$('.dot:not(:nth-child(5))').addClass('down');
	setTimeout(flagUp, 1000);
}

function flagUp(){
	$('.flag').removeClass('down');
}