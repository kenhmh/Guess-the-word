const msg = document.querySelector('.msg');
const guess = document.querySelector('input');
const btn = document.querySelector('.btn');
let play = false;
let newWords = "";
let randWords = "";
// store all the word
let sWords = ['comfortable','succeed','deranged',
'double','explain','vanish','massive','thoughtful','delight','explode'];

const createNewWords = () => {
    let ranNum = Math.floor(Math.random()* sWords.length);
    let newTempSwords = sWords[ranNum];
    console.log(newTempSwords)
    return newTempSwords;
}

btn.addEventListener('click', function(){
    if(!play){
        play = true;
        btn.innerHTML = "Guess";
        guess.classList.toggle('hidden');
        newWords = createNewWords();
        //randomWords = scrambleWords(newWords);
    }
})
