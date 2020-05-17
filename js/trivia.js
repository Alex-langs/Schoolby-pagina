var preguntas = [
	"Quien descubrio america",
	"Quien es superheroe",
	"Por que los pajaros pian",

	];
	var respuestas = [
    ["Colon","Goku","Tu mismo"],
    ["Spiderman","Obama","El chapo"],
    ["Hambre","Frio","Sed"]

	];

	jugar();

	var indice_respuesta_correcta;

	function jugar (){
			var indice_aleatorio = Math.floor(Math.random()*preguntas.length);

	var respuestas_posibles = respuestas[indice_aleatorio];

	var posiciones = [0,1,2];
	var respuestas_reordenadas = [];

	var ya_se_metio = false;
    
	for(i in respuestas_posibles){
		var posicion_aleatoria = Math.floor(Math.random()*posiciones.length);
		if (posicion_aleatoria==0 && ya_se_metio == false){
			indice_respuesta_correcta = i;
			ya_se_metio = true;
		}
		respuestas_reordenadas[i] = respuestas_posibles[posiciones[posicion_aleatoria]];
		posiciones.splice(posicion_aleatoria, 1);
	}

	var txt_respuestas="";

	for (i in respuestas_reordenadas){
		txt_respuestas += '<input type="radio" name="pp" value='+i+'><label>'+respuestas_reordenadas[i]+'</label><br>';
	}

	document.getElementById("pregunta").innerHTML = preguntas[indice_aleatorio];
	document.getElementById("respuestas").innerHTML = txt_respuestas;
	}
	function comprobar (){
		var respuesta = $("input[type=radio]:checked").val();
		if (respuesta==indice_respuesta_correcta){
			alert("Que bien!");
		}else{
			alert("Me tiro por un puente");
		}
		jugar();
	}
