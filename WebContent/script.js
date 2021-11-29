$(document).ready(
	function(){
					
		$("#codigo-fonte").focusout(
			function(){
							
				var codigo= $("#codigo-fonte").val();				
				$("#previa").html(codigo);
				
			}		
		);
	}		
);