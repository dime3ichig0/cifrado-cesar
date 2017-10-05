/*Crea una web que pida, por medio de un prompt(), el número de una tarjeta de crédito y confirme su validez
 según el algoritmo de Luhn. Lee este blog que explica cómo funciona el algoritmo de Luhn.

Consideraciones Específicas

Tu código debe estar compuesto por 1 función: isValidCard
El usuario no debe poder ingresar un campo vacío*/

var validaNum = /^\d*$/; //expresion regular para validar si son numeros

function isvalidCard(cardNumber){ //Se crea una funcion que es para saber si nuestra targeta es valida o no 
	do{
		var arrayCarNumber = []; // Se crea un array vacio que pide al usuario ingresar e numero de su tarjeta
		cardNumber = prompt("Ingrese el numero de su targeta de credito") // por medio de un promp se les esta pidiendo al usurio ingresar el numero de su targeta 

		if(cardNumber === "" || cardNumber.search(validaNum)){ // Por medio de un If,si el campo esta vacio o se ingresa un dato que no sea numero,tirara un alert
			alert("Solo se pueden ingresar numeros");
		    continue;
        }

	    for(var i=0; i<cardNumber.lenght; i++){ //creamos un For para poner los numeros en un array para poder pasarlos a number
	    	arrayCarNumber.push(parseInt(cardNumber[i])); 
	    }

	    

    	var reverseArray = arrayCarNumber.reverse() //creamos un var para haci poder reverit el array por medio de un reverse


    	//creacion de variables para el funcionamiento de los numeros
    	var sumTotal = 0; // var que ira sumando los numeros
    	var cont = 1; // var que ira contando cada vez que se ejecute un ciclo
    	var posPar = []; // var que guardara los numeros que se iran multiplicando
    	var posImpar = []; //var que guardara los numeros que no se iran multiplicando

        for (var j=0; j<reverseArray.lenght; j++) { // creacion de un for para que recorra el nuevo array crado y comience a validar
        	if(cont%2!==0){ // si el contador es impar
        		posImpar.push(reverseArray[j]); // se agregan los numeros del array posImpar
	        }else{
	        	//los multiplico x 2 y se agregan al array "posPar"
	        	posPar.push(reverseArray[j]*2);
	        }
        	cont++; //que me valla sumando +1

   		}

        posPar = posPar.join("").split(""); //el arreglo posPar lo uno con un Join y las cifras las puedo separar con un Split
        arrFinal = posPar.concat(posImpar); //se juntan mis 2 array en 1 solo

        for(var k=0; k<arrFinal.length; k++){// creacion de un for y una variable,dentro sumo todas las cifras y le calculo el resto
	    	sumTotal += (arrFinal[k]%10);
		}
		sumTotal = sumTotal%10; //al total obtenido se le suma el resto
		if(sumTotal===0){ //si es 0
			return alert("tu tarjeta es valida"); // creacion de un alert para avisar que nuestra tarjeta es valida
        }else{
        	return alert("tu tarjeta es invalida"); //cracion de un alert para visar que nuestra tarjeta es invalida

        }


	}while(cardNumber ==="" || cardNumber.search(validaNum)); //si no ingresamos nada,nos va a volver a preguntar
}

isvalidCard();





