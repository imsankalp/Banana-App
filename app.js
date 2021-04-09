var textinput = document.querySelector("#txt-input");
var buttonTranslate = document.querySelector("#btn-translate");
var output = document.querySelector("#output");
var serverapi = "https://api.funtranslations.com/translate/minion.json";

function serverUrlApiGenerator(text){
    return serverapi + "?" + "text=" + text;
}

function apiResponseOncClickHandler(){
    fetch(serverUrlApiGenerator(textinput.value)).then(response => response.json()).then(
        json =>{
            var translatedResponse = json.contents.translated;
            output.innerHTML = translatedResponse;
        
        }).catch(errorHandler)
    
}

buttonTranslate.addEventListener("click", apiResponseOncClickHandler)
