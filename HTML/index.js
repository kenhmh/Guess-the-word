
    const msg = document.querySelector('.msg');
    const guess = document.querySelector('input');
    const btn = document.querySelector('.btn');
    let play = false;
    let newWords = "";
    let randomWords = "";
    var scores = 0;
    // store all the word
        let sWords = ['comfortable','succeed','deranged',
'double','explain','vanish','massive','thoughtful','delight','explode','cooking','incredible','extraordinary','starbucks'];

    const createNewWords = () => {
    let ranNum = Math.floor(Math.random()* sWords.length);
    let newTempSwords = sWords[ranNum];
    console.log(newTempSwords)
    return newTempSwords;
}
    const scrambleWords = (arr) =>{
    for (let i = arr.length-1; i>0; i--){
        let temp = arr[i];
        let j = Math.floor(Math.random()*(i+1));
        arr[i] = arr[j];
        arr[j] = temp;

        return arr;
    }
}

    btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        randomWords = scrambleWords(newWords.split("")).join("");
        msg.innerHTML = randomWords;
    }
    else{
        let tempWord  = guess.value;
        if (tempWord === newWords){
            play = false;
            msg.innerHTML = `Congrats you solved it! The word is ${newWords}`;
            btn.innerHTML = "Next Question";
            guess.classList.toggle('hidden');
            guess.value = '';
            updateScore()
            scores +=1   
            document.getElementsByClassName('score').innerHTML = scores;
        }
        else{
            msg.innerHTML = `Sorry, it is incorrect, Try again. The word is ${randomWords}`;
        }
    }
})

    const startingMinutes = 3;
    let time= startingMinutes * 60;

    const countdownEl = document.getElementById('countdown');


    let refreshIntervalId = setInterval(updateCountdown, 1000);//update every 1 second


    function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    countdownEl.innerHTML = `${minutes}:${seconds}`

    time--;

    if (time < 0) { //stop the setInterval when time = 0 to avoid negative time
        clearInterval(refreshIntervalId);
    }
}


    function answer() {
    var scores = 0;
    let tempWord  = guess.value;
    if (tempWord === newWords) {
        scores += 1;
        document.getElementsByClassName('scores').value = scores
    
    } 

  }
    function updateScore(){
        $("#Score").text(scores);
        scores.innerHTML = `${scores}`
    }