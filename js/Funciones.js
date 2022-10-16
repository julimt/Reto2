const urlApiR="https://g2d5d2c0c150515-f5ef21sjufqknxtg.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/room/room"
const urlApiC="https://g2d5d2c0c150515-f5ef21sjufqknxtg.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/client/client"
const urlApiM="https://g2d5d2c0c150515-f5ef21sjufqknxtg.adb.us-phoenix-1.oraclecloudapps.com/ords/admin/message/message"

//METODOS TABLA HABITACIONES
function mostrarInformacionR() {
    $.ajax({
        url: urlApiR,
        type: 'GET',
        datatype: 'JSON',
        success: function(respuestaR){
            console.log(respuestaR);
            pintarRespuestaR(respuestaR.items);
        },
        error:function(xhr, status){
            console.log("Ha sucedido un problema! " + xhr.status + " " + status)
        },
        complete:function(xhr, status){
            console.log("Petición Realizada con Exito!!")
        }
    });
}

function pintarRespuestaR(items){
    let myTableR="<table cellspacing='5'cellpadding='5' border='2'>";
        myTableR+="<tr>" + "<td>" +"ID" + "</td>";
        myTableR+= "<td>" +"ROOM" + "</td>";
        myTableR+="<td>" +"STARS" + "</td>";
        myTableR+="<td>" +"CATEGORY_ID" + "</td>";
        myTableR+="<td>" +"DESCRIPTION" + "</td>" + "</tr>";

    for (i = 0; i < items.length; i++){
        myTableR +="<tr>"
        myTableR += "<td>" + items[i].id + "</td>";
        myTableR += "<td>" + items[i].room + "</td>";
        myTableR += "<td>" + items[i].stars + "</td>";
        myTableR += "<td>" + items[i].category_id + "</td>";
        myTableR += "<td>" + items[i].description + "</td>";
        myTableR += "<td> <button onclick='borrarElementoR(" + items[i].id + ")'>Borrar</button>";
        myTableR +="</tr>";
    }
    myTableR +="</table>";
    $("#resultadoR").append(myTableR);
}

function guardarInformacionR() {
    let myDataR = {
        id: $("#idroom").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val()
    };
    let dataSend = JSON.stringify(myDataR);

    $.ajax({
        url: urlApiR,
        type: 'POST',
        data: myDataR,
        datatype: 'JSON',
        complete: function (respuestaR){
            $("#resultadoR").empty();
            $("#idroom").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
        if (respuestaR.status == 201) {
            alert("Registro Guardado con Exito!")
        }
        else {
            alert("Registro ya Existe!!")
        }
        mostrarInformacionR();
        console.log(respuestaR.status)
        }
    });
}

function EditarInformacionR() {
    let myDataR = {
        id: $("#idroom").val(),
        room: $("#room").val(),
        stars: $("#stars").val(),
        category_id: $("#category_id").val(),
        description: $("#description").val()
    };
    console.log(myDataR);
    let dataSend = JSON.stringify(myDataR);

    $.ajax({
        url: urlApiR,
        type: 'PUT',
        data: dataSend,
        contentType: 'application/JSON',
        datatype: 'JSON',
        complete: function (respuestaR){
            $("#resultadoR").empty();
            $("#idroom").val("");
            $("#room").val("");
            $("#stars").val("");
            $("#category_id").val("");
            $("#description").val("");
            mostrarInformacionR();
            if (respuestaR.status == 201) {
                alert("Registro Actualizado con Exito!")
            }
            console.log(respuestaR.status)
        }
    });
}

function borrarElementoR(idRoom) {
    let myDataR = {
        id: idRoom
    };
    let dataSend = JSON.stringify(myDataR);

    $.ajax({
        url: urlApiR,
        type: 'DELETE',
        data: dataSend,
        contentType: 'application/JSON',
        datatype: 'JSON',
        success: function (respuestaR){
            $("#resultadoR").empty();
            mostrarInformacionR();
            alert("Registro Eliminado con Exito!")
        }
    });
}

//METODOS TABLA CLIENTES
function mostrarInformacion(){
    $.ajax({
        url: urlApiC,
        type: 'GET',
        datatype: 'JSON',
        success: function(respuesta){
            console.log(respuesta);
            pintarRespuesta(respuesta.items);
        },
        error:function(xhr, status){
            console.log("Ha sucedido un problema! " + xhr.status + " " + status)
        },
        complete:function(xhr, status){
            console.log("Petición Realizada con Exito!!")
        }
    });
}

function pintarRespuesta(items){
    let myTable="<table cellspacing='5'cellpadding='5' border='2'>";
        myTable += "<tr>" + "<td>" +"ID" + "</td>";
        myTable += "<td>" +"NAME" + "</td>";
        myTable += "<td>" +"EMAIL" + "</td>";
        myTable += "<td>" +"AGE" + "</td>" + "</tr>";

    for (i = 0; i < items.length; i++){
        myTable += "<tr>";
        myTable += "<td>" + items[i].id + "</td>";
        myTable += "<td>" + items[i].name + "</td>";
        myTable += "<td>" + items[i].email + "</td>";
        myTable += "<td>" + items[i].age + "</td>";
        myTable += "<td> <button onclick='borrarElemento(" + items[i].id + ")'>Borrar</button>";
        myTable+="</tr>";
    }
    myTable+="</table>";
    $("#resultado").append(myTable);
}

function guardarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val(),
    };
    let dataSend = JSON.stringify(myData);

    $.ajax({
        url: urlApiC,
        type: 'POST',
        data: myData,
        datatype: 'JSON',
        complete: function (respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
        if (respuesta.status == 201) {
            alert("Registro Guardado con Exito!")
        }
        else {
            alert("Registro ya Existe!!")
        }
        mostrarInformacion();
        console.log(respuesta.status)
        }
    });
}

function EditarInformacion() {
    let myData = {
        id: $("#id").val(),
        name: $("#name").val(),
        email: $("#email").val(),
        age: $("#age").val()
    };
    console.log(myData);
    let dataSend = JSON.stringify(myData);

    $.ajax({
        url: urlApiC,
        type: 'PUT',
        data: dataSend,
        contentType: 'application/JSON',
        datatype: 'JSON',
        complete: function (respuesta){
            $("#resultado").empty();
            $("#id").val("");
            $("#name").val("");
            $("#email").val("");
            $("#age").val("");
            mostrarInformacion();
            if (respuesta.status == 201) {
                alert("Registro Actualizado con Exito!")
            }
            console.log(respuesta.status)
        }
    });
}

function borrarElemento(idElemento) {
    let myData = {
        id: idElemento
    };
    let dataSend = JSON.stringify(myData);

    $.ajax({
        url: urlApiC,
        type: 'DELETE',
        data: dataSend,
        contentType: 'application/JSON',
        datatype: 'JSON',
        success: function (respuesta){
            $("#resultado").empty();
            mostrarInformacion();
            alert("Registro Eliminado con Exito!")
        }
    });
}

//METODOS TABLA MENSAJES
function mostrarInformacionM(){
    $.ajax({
        url: urlApiM,
        type: 'GET',
        datatype: 'JSON',
        success: function(respuestaM){
            console.log(respuestaM);
            pintarRespuestaM(respuestaM.items);
        },
        error:function(xhr, status){
            console.log("Ha sucedido un problema! " + xhr.status + " " + status)
        },
        complete:function(xhr, status){
            console.log("Petición Realizada con Exito!!")
        }
    });
}

function pintarRespuestaM(items){
    let myTableM="<table cellspacing='5'cellpadding='5' border='2'>";
        myTableM += "<tr>" + "<td>" +"ID" + "</td>";
        myTableM += "<td>" +"MEESAGETEXT" + "</td>" + "</tr>";
       
    for (i = 0; i < items.length; i++){
        myTableM += "<tr>";
        myTableM += "<td>" + items[i].id + "</td>";
        myTableM += "<td>" + items[i].messagetext + "</td>";
        myTableM += "<td> <button onclick='borrarElementoM(" + items[i].id + ")'>Borrar</button>";
        myTableM +="</tr>";
    }
    myTableM +="</table>";
    $("#resultadoM").append(myTableM);
}

function guardarInformacionM() {
    let myDataM = {
        id: $("#idmensaje").val(),
        messagetext: $("#messagetext").val(),
        
    };
    let dataSendM = JSON.stringify(myDataM);

    $.ajax({
        url: urlApiM,
        type: 'POST',
        data: myDataM,
        datatype: 'JSON',
        complete: function (respuestaM) {
            $("#resultadoM").empty();
            $("#idmensaje").val("");
            $("#messagetext").val("");
            
        if (respuestaM.status == 201) {
            alert("Registro Guardado con Exito!")
        }
        else {
            alert("Registro ya Existe!!")
        }
        mostrarInformacionM();
        console.log(respuestaM.status)
        }
    });
}

function EditarInformacionM() {
    let myDataM = {
        id: $("#idmensaje").val(),
        messagetext: $("#messagetext").val(),
    };
    console.log(myDataM);
    let dataSendM = JSON.stringify(myDataM);

    $.ajax({
        url: urlApiM,
        type: 'PUT',
        data: dataSendM,
        contentType: 'application/JSON',
        datatype: 'JSON',
        complete: function (respuestaM){
            $("#resultadoM").empty();
            $("#idmensaje").val("");
            $("#messagetext").val("");
            mostrarInformacionM();
            if (respuestaM.status == 201) {
                alert("Registro Actualizado con Exito!")
            }
            console.log(respuestaM.status)
        }
    });
}

function borrarElementoM(idMensaje) {
    let myDataM = {
        id: idMensaje
    };
    let dataSend = JSON.stringify(myDataM);

    $.ajax({
        url: urlApiM,
        type: 'DELETE',
        data: dataSend,
        contentType: 'application/JSON',
        datatype: 'JSON',
        success: function (respuestaM){
            $("#resultadoM").empty();
            mostrarInformacionM();
            alert("Registro Eliminado con Exito!")
        }
    });
}