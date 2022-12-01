// server call

function getMeaning() {
    console.log("hy im working...");

    // get user input and log tp console

    var userInput = document.getElementById("userInput").value

    var answerDiv = document.getElementById("answer")
    var erroMsg = document.getElementById("erroMsg")

    var answerTitle = document.getElementById("answerTitle")
    var answerGrammer = document.getElementById("answerGrammer")
    var answerMeaning = document.getElementById("answerMeaning")

    var dataUri = `https://api.dictionaryapi.dev/api/v2/entries/en/${userInput}`

    // send the valur tp server

    var serverRequest = new XMLHttpRequest();

    serverRequest.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            // console.log(this.responseText);
            // 1. Object 2. Raw data
            // if data is raw
            var jsonData = JSON.parse(this.responseText)
            answerTitle.innerHTML = jsonData[0].word
            answerGrammer.innerHTML = jsonData[0].meanings[0].partOfSpeech
            answerMeaning.innerHTML= jsonData[0].meanings[0].definitions[0].definition
            answerDiv.style.display = "block"
            erroMsg.style.display = "none"

        }
        else {
            erroMsg.style.display = "block"
        }
    };

    serverRequest.open("GET", dataUri, true);
    serverRequest.send();
}



