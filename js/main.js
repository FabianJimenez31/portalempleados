(function(){
	// Variables
	var lista = document.getElementById("lista"),
		empleoInput = document.getElementById("empleoInput"),
		btnNuevaTarea = document.getElementById("btn-agregar");

	// Funciones
	var agregarTarea = function(){
		var tarea = empleoInput.value,
			nuevaTarea = document.createElement("li"),
			enlace = document.createElement("a"),
			contenido = document.createTextNode(tarea);

		if (tarea === "") {
			empleoInput.setAttribute("placeholder", "Agrega un empleo valido");
			empleoInput.className = "error";
			return false;
		}

		// Agregamos el contenido al enlace
		enlace.appendChild(contenido);
		// Le establecemos un atributo href
		enlace.setAttribute("href", "#");
		// Agrergamos el enlace (a) a la nueva tarea (li)
		nuevaTarea.appendChild(enlace);
		// Agregamos la nueva tarea a la lista
		lista.appendChild(nuevaTarea);

		empleoInput.value = "";

		for (var i = 0; i <= lista.children.length -1; i++) {
			lista.children[i].addEventListener("click", function(){
				this.parentNode.removeChild(this);
			});
		}

	};


	var comprobarInput = function(){
		empleoInput.className = "";
		tareaInput.setAttribute("placeholder", "Agrega tu empleo");
	};

	var eleminarTarea = function(){
		this.parentNode.removeChild(this);
	};

	// Eventos

	// Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);

	// Comprobar Input
	empleoInput.addEventListener("click", comprobarInput);

	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}




	 var mostrar_lista = function (){
	 	var array = document.getElementById("lista");
	 	console.log(array);

	 	for (var i = 0; i < array.children.length; i++){
	 	console.log(array[i]);
	 		document.write (array[i] + "</br>")
	 	}
	 	show_empleos.addEventListener("click",mostrar_lista);
		

		 {
		 	lista.children[i].addEventListener("click", function(){
		 		this.parentNode.removeChild(this);
		 	});
	 	}
		console.log(i);
	 };

		mostrar_lista();
		document.write(lista.lastChild;

}())