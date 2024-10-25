// ==UserScript==
// @name         SMS GET
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Obtiene datos de FakeNameGenerator
// @match        https://crowdtap.com/*
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js
// @grant        GM_xmlhttpRequest
// @connect      daisysms.com
// ==/UserScript==

setTimeout(verified,10000);
function verified(){

var muestra = document.querySelector("#main-content > article > div.center-column > h1")
if(muestra){
if(muestra.innerText==="Let’s get you verified"){

var balance = "https://daisysms.com/stubs/handler_api.php?api_key=vUwcZpeVYuDygxflOYhJsceZullKpW&action=getBalance"
var crow_tmo = "https://daisysms.com/stubs/handler_api.php?api_key=vUwcZpeVYuDygxflOYhJsceZullKpW&action=getNumber&service=sx&carriers=tmo"
var crow_att = "https://daisysms.com/stubs/handler_api.php?api_key=vUwcZpeVYuDygxflOYhJsceZullKpW&action=getNumber&service=sx&carriers=att"
var crow_vz = "https://daisysms.com/stubs/handler_api.php?api_key=vUwcZpeVYuDygxflOYhJsceZullKpW&action=getNumber&service=sx&carriers=vz"
var inputEvent = new Event('input', {
    bubbles: true,
    cancelable: true,
});

GM_xmlhttpRequest({
    method: "GET",
    url: crow_tmo,
    onload: function(response) {
        console.log("Solicitud Exitosa");
        var bodyContent = response.responseText; // Obtiene el contenido de la respuesta
        var match = bodyContent.split(":"); // Busca el patrón en el contenido

        const originalNumber = match[2];
        const newNumber = originalNumber.toString().slice(1);
        console.log("Solicitud Exitosa", match[2]);

        var inputField = document.querySelector('.form-control');
        inputField.value = newNumber;
        inputField.dispatchEvent(inputEvent);

setTimeout( function(){document.querySelector("#main-content > article > div.center-column > section > form > section.text-center > button").click()},1000)

setTimeout( function get_code(){
GM_xmlhttpRequest({
    method: "GET",
    url: 'https://daisysms.com/stubs/handler_api.php?api_key=unSpOrrT7ebF3H1GhT3ibpUDuLPKfk&action=getStatus&id=' + match[1],
    onload: function(response) {
        console.log(response.responseText)
        var bodyContent = response.responseText; // Obtiene el contenido de la respuesta
        var match = bodyContent.split(":"); // Busca el patrón en el contenido

if(bodyContent == "STATUS_WAIT_CODE"){

}else{
        var inputField = document.querySelector('input.block');
    if(inputField){
        inputField.value = match[1];
        inputField.dispatchEvent(inputEvent);
        setTimeout( function(){
document.querySelector("#main-content > article > div.center-column > section > form > section.text-center > button").click()
//marcar como realizado
GM_xmlhttpRequest({
    method: "GET",
    url: `https://daisysms.com/stubs/handler_api.php?api_key=unSpOrrT7ebF3H1GhT3ibpUDuLPKfk&action=setStatus&id=${match[1]}&status=6`,
    onload: function(response) {

        console.log(response.responseText)
}
});
},1000)
    }
}

}
});
},40000);
    }
});
}

    }
else{setTimeout(verified,5000);
    }
}
