function adicionarItemLista(){
	var text = $("#new-text").val();
	$("#lista").append('<li>'+text+ ' <button class="delete"> Deletar </button><button class="mover"> Mover </button></li>');
	$("#new-text").val('');
}

function removerItemLista(){
	$(this).parent().remove();
}

function moverItemLista(){

	var text = $(this).parent().value();
	alert('text');

}

$(function(){
	
	$("#btn").on('click', adicionarItemLista);

	//$(".delete").on('click', removerItemLista);

	$(".mover").on('click', moverItemLista);
});


$(this).keypress(function(event){
	if(event.which == 13){
		adicionarItemLista();	
	}
});

$(document).ready(function() {
    $(document).on('click', '.delete', function() {
        $(this).parent().remove();
    });
	
	$(document).on('click','.mover',function(){
	var address = $(this).parent().clone().children().remove().end().text();
	 $(this).parent().remove();

	$("#listaAprendida").append('<li>'+address+'</li>');
});
});


