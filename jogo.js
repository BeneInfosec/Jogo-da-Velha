var x = true;
var jogadas = 0;
var z = 2;

function primeiro_alerta(){
	alert("Achou que ia começar o jogo?\nACHOU ERRADO, OTÁRIO!");
}

function segundo_alerta(){
	alert("Olá, este é o famoso jogo da velha.\n     O jogador X começa o jogo!");
}

function swap(id){
	if(x == true){
    document.getElementById(id).setAttribute("src", "x.jpg");
    x = false;
		return verifica(id);
  }
  else{
    document.getElementById(id).setAttribute("src", "0.jpeg");
    x = true;
		return verifica(id);
  }
}

function verifica(id){
		jogadas++;
	if( (document.getElementById(1).getAttribute("src") == "x.jpg" &&
			 document.getElementById(2).getAttribute("src") == "x.jpg") &&
			(document.getElementById(3).getAttribute("src") == "x.jpg") ||
			(document.getElementById(1).getAttribute("src") == "0.jpeg" &&
		 	 document.getElementById(2).getAttribute("src") == "0.jpeg")&&
			(document.getElementById(3).getAttribute("src") == "0.jpeg")){
			 		if( document.getElementById(1).getAttribute("src") == "x.jpg"){
						window.confirm("O jogador X venceu!");
					}
					else{
						window.confirm("O jogador O venceu!");
					}
				jogadas = 0;
				resetar();
	 }

	 else if( (document.getElementById(1).getAttribute("src") == "x.jpg" &&
		 				document.getElementById(4).getAttribute("src") == "x.jpg") &&
						(document.getElementById(7).getAttribute("src") == "x.jpg") ||
						(document.getElementById(1).getAttribute("src") == "0.jpeg" &&
		 				document.getElementById(4).getAttribute("src") == "0.jpeg")&&
						(document.getElementById(7).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(4).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
		}

		else if( (document.getElementById(3).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(6).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(9).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(3).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(6).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(9).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(3).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(7).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(8).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(9).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(7).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(8).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(9).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(7).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(2).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(5).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(8).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(2).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(5).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(8).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(2).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(1).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(5).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(9).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(1).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(5).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(9).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(1).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(3).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(5).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(7).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(3).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(5).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(7).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(3).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(4).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(5).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(6).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(4).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(5).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(6).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(4).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if( (document.getElementById(4).getAttribute("src") == "x.jpg" &&
 		 				document.getElementById(5).getAttribute("src") == "x.jpg") &&
 						(document.getElementById(6).getAttribute("src") == "x.jpg") ||
 						(document.getElementById(4).getAttribute("src") == "0.jpeg" &&
 		 				document.getElementById(5).getAttribute("src") == "0.jpeg")&&
 						(document.getElementById(6).getAttribute("src") == "0.jpeg")){
							if( document.getElementById(4).getAttribute("src") == "x.jpg"){
								window.confirm("O jogador X venceu!");
							}
							else{
								window.confirm("O jogador O venceu!");
							}
							jogadas = 0;
							resetar();
 		}

		else if(jogadas == 9){
				window.confirm("Deu velha");
				jogadas = 0;
				resetar();
		}

}

function resetar(){
	for(i = 1; i <= 9 ; i++ ){
		if(i == 5){
			document.getElementById(i).setAttribute("src", "fantasma.gif")
		}
		else{
			document.getElementById(i).setAttribute("src", "pac.png")
		}
	}
}
