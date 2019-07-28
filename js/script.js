window.onload = function(){
    var boton_enviar = document.getElementById('boton_enviar');
    boton_enviar.onclick = agregar;
    document.getElementById('pie').style.position = String(window.screen.height);
    document.getElementById('b1').className = "bt_none";
    document.getElementById('b2').className = "bt_none";
    contador =0;
    id_fila = "";
}

function agregar(){
    //validamos que el formulario no este vacio
    var formulario = document.getElementById('formulario');
    for(var i = 0; i<formulario.length; i++){
        if(formulario[i].value == null || formulario[i].value.length == 0){
            alert("falta rellenar algun campo");
            return;
        }
    } 
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var edad = document.getElementById('edad');
    
    var hilera = document.createElement('tr');
    var celda = document.createElement('td');
    var texto = document.createTextNode(nombre.value);
    celda.appendChild(texto);
    celda.style.fontWeight = "initial";

    var celda2 = document.createElement('td');
    texto = document.createTextNode(correo.value);
    celda2.appendChild(texto);
    celda2.style.fontWeight = "initial";

    var celda3 = document.createElement('td');
    texto = document.createTextNode(edad.value);
    celda3.appendChild(texto);
    celda3.style.fontWeight = "initial";

    hilera.appendChild(celda);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3);

    contador++;
    hilera.id = "tr_"+contador;
    hilera.onclick = mostrar;
    hilera.onmouseover = mostrar;

    var tabla = document.getElementById('tabla_datos');
    tabla.appendChild(hilera);

    alert("Datos Agregados");

    nombre.value = "";
    correo.value = "";
    edad.value = "";

    return false;

}

function mostrar(){
    var fila = document.getElementById(this.id);

    id_fila = this.id;

    var tds = fila.getElementsByTagName('td');
    
    var nombre = document.getElementById('nombre');
    nombre.value = tds[0].innerHTML;

    var correo = document.getElementById('correo');
    correo.value = tds[1].innerHTML;

    var edad = document.getElementById('edad');
    edad.value = tds[2].innerHTML;


    //activar botones
    var b1 = document.getElementById('b1');
    b1.innerHTML = "Borrar";
    b1.style.display = "block";
    b1.onclick = borrar;
    b1.className = "bt";
    
    var b2 = document.getElementById('b2');
    b2.innerHTML = "Editar";
    b2.style.display = "block";
    b2.onclick = editar;
    b2.className = "bt";
    
}

function editar(){
    var formulario = document.getElementById('formulario');
    for(var i = 0; i<formulario.length; i++){
        if(formulario[i].value == null || formulario[i].value.length == 0){
            alert("falta rellenar algun campo");
            return;
        }
    } 
    var nombre = document.getElementById('nombre');
    var correo = document.getElementById('correo');
    var edad = document.getElementById('edad');
    
    var hilera = document.createElement('tr');
    var celda = document.createElement('td');
    var texto = document.createTextNode(nombre.value);
    celda.appendChild(texto);
    celda.style.fontWeight = "initial";

    var celda2 = document.createElement('td');
    texto = document.createTextNode(correo.value);
    celda2.appendChild(texto);
    celda2.style.fontWeight = "initial";

    var celda3 = document.createElement('td');
    texto = document.createTextNode(edad.value);
    celda3.appendChild(texto);
    celda3.style.fontWeight = "initial";

    hilera.appendChild(celda);
    hilera.appendChild(celda2);
    hilera.appendChild(celda3); 
    
    hilera.id = id_fila;
    hilera.onclick = mostrar;

    var tabla = document.getElementById('tabla_datos');
    var fila_antigua = document.getElementById(id_fila);
    tabla.replaceChild(hilera,fila_antigua);

    alert("Datos Editados");

    nombre.value = "";
    correo.value = "";
    edad.value = "";


}

function borrar(){
    var tabla = document.getElementById('tabla_datos');
    var fila_borrar = document.getElementById(id_fila);
    tabla.removeChild(fila_borrar);

    alert("Datos Borrados");

    nombre.value = "";
    correo.value = "";
    edad.value = "";
}


