$('#popup-trigger').on('click', getCoupon);
$('#close-btn').on('click', closePopup);
$(document).on('keydown', closePopup);

function getCoupon(){
	$('#popup').fadeIn(1000);
}

function closePopup(){
	if(event.type === "keydown"){
		if(event.which == 27){
			$('#popup').fadeOut(1000);	
		}			
	} else if(event.type=="click"){
		$('#popup').fadeOut(1000);
	}
}

