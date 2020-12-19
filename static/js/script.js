async function main() {
    let answerList = [];
    let questionList = [];
    let answerCorrect = undefined;
    const responseDirectory = document.getElementById("response");
    const questDirectory = document.getElementById("unordered-list");
    const announceDirectory = document.getElementById("announce");
    const contDirectory = document.getElementById("contador");
    let contCorrect = 0;
    let contIndex = 0;
    let response = await fetch("http://localhost:8000/api/sentences")
    let data = await response.json();

    if(data) {
        shuffle(data);
        init();
    }
    function init() {
        console.log(data[contIndex % data.length].sentence);
        answerCorrect = data[contIndex % data.length].sentence;
        for(let word of data[contIndex % data.length].sentence.split(" ")){
            questionList.push(word);
        }
        shuffle(questionList);
        shuffle(questionList);
        shuffle(questionList);
    }
    function questionToAnswer(id) {
        answerList.push(id);
        questionList.splice(questionList.indexOf(id), 1);
        review();
    }
    function answerToQuestion(id) {
        questionList.push(id);
        answerList.splice(answerList.indexOf(id), 1);
        review();
    }
    function review() {
        responseDirectory.innerHTML = "";
        questDirectory.innerHTML = "";
        
        questionList.map(
            item => {
                return createElementWithSentence(questDirectory, item, questionToAnswer);
            }
        );
        answerList.map(
            item => {
                return createElementWithSentence(responseDirectory, item, answerToQuestion);
            }
        );
        if(questionList.length == 0 && answerList.length !== 0) {
            processCorrectingAnswer();
        }
    }

    function shuffle(array) {
        array.sort(() => Math.random() - 0.5);
    }

    function processCorrectingAnswer() {
        let answer = "";
        for(let word of answerList) {
            if(answer == "") {
                answer = word;
            } 
            else {
                answer = answer + " " + word;
            }
        }
        if(answer === answerCorrect) {
            createAnnounce(true);
            contCorrect += 1;
            contDirectory.innerText = `Correct: ${contCorrect} / ${data.length}`;
        } else {
            createAnnounce(false);
        }
    }
    function createAnnounce(answer) {
        
        if(answer) {
            announceDirectory.innerText = "Respuesta Correcta";
            announceDirectory.className = "correct";
        } else {
            announceDirectory.innerText = `Incorrecta: ${answerCorrect}`;
            announceDirectory.className =  "incorrect";
        }
        setTimeout(() => {
            announceDirectory.innerText = "";
            announceDirectory.className = "";
            answerList = []
            questionList = [];
            contIndex++;
            if(contIndex == data.length) {
                contIndex = 0;
                contCorrect = 0;
                shuffle(data);
            }
            init();
            review();
        }, 2000);
    }
    review();
}

const sentenceDirectory = document.getElementById("sentence");
const submitButton = document.getElementById("submit-button");

submitButton.addEventListener("click", event => {
    event.preventDefault();
    let temp = {};
    temp.sentence = sentenceDirectory.value;
    console.log(JSON.stringify(temp));
    fetch("http://localhost:8000/api/create/sentence", {
        "method": "POST", 
        "headers": {
        "Content-Type": "application/json"
        },
        "body": JSON.stringify(temp)
    }).then( res => res.json()).then( data => {
        if(data) {
            document.getElementById("alert").innerText = "Agregado exitosamente";
            document.getElementById("alert").className = "succesful"
        } else {
            document.getElementById("alert").innerText = "Ya se encuentra";
            document.getElementById("alert").className = "error";
        }
    });
    sentenceDirectory.value = "";
});

function createElementWithSentence(questDirectory, word, questionToAnswer) {
    let childTemp = document.createElement("button");
    childTemp.innerText = word;
    childTemp.className = "button-quest";
    childTemp.onclick = () => {
        return questionToAnswer(childTemp.innerText);
    };
    questDirectory.appendChild(childTemp);
}


main();
