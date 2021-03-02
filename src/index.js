import "./styles.css";

var inputButton = document.querySelector("#btn-translate");
var inputText = document.querySelector("#input-txt");
var outputText = document.querySelector("#output-txt");
var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json";

function translatedURL(intext) {
  return serverURL + "?" + "text=" + intext;
}

function errorHandler(error) {
  console.log("error ocured!", error);
}

function clickHandler() {
  var input = inputText.value;
  console.log(input);

  fetch(translatedURL(input))
    .then((response) => response.json())
    .then((json) => {
      var output = json.contents.translated;
      console.log(output);
      outputText.innerText = output;
    })
    .catch(errorHandler);
}

inputButton.addEventListener("click", clickHandler);
