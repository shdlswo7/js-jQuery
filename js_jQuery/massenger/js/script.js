$('#send').on('click', sendText);

function sendText(){
	if($('textarea').val() != ''){
	var textContent = $('textarea').val().trim();
	/*.chatbox 의 마지막 자식에 넣기*/
	$('.chatbox').append('<div class="my-bubble">'+textContent+'</div>');	
	};
	$('textarea').val('');
}
