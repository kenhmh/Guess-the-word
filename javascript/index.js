const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
// store all the word
let sWords = ['comfortable','succeed','deranged',
'double','explain','vanish','massive','thoughtful','delight','explode','cooking','incredible','extraordinary','brillant','villan','starbucks','symptoms',];

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
    }else{
        let tempWord  = guess.value;
        if (tempWord === newWords){
            play = false;
            msg.innerHTML = `Congrats you solved it! The word is ${newWords}`;
            btn.innerHTML = "Next Question";
            guess.classList.toggle('hidden');
            guess.value = '';
        }
        else{
            msg.innerHTML = `Sorry, it is incorrect. Try again`;
        }
    }
})
