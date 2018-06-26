const start = document.querySelector('.btn__reset');
const overlay = document.getElementById('overlay');
let lives = 5;
const phrases = [
                  'Show me the code',
                  'Focus and win',
                  'Never give up',
                  'Yes you can',
                  'Seize the day'
                ];
let phrase = phrases[Math.floor(Math.random() * phrases.length)];
let phraseSplit = phrase.split();
const ul = document.getElementById("phrase").firstElementChild;

function getRandomPhraseAsArray(phrases) {
  return phrases[Math.floor(Math.random() * phrases.length)].split("");
}

function addPhraseToDisplay() {
  for(let i = 0; i < phrase.length; i++) {
    let li = document.createElement('li')
    li.appendChild(document.createTextNode(phrase[i]));
    if (phrase[i] !== " "){
      li.setAttribute("class", "letter");
    };
    ul.appendChild(li)
  };
};

function checkLetter(guess){
  let liList = document.getElementsByClassName('letter');
  console.log(liList.innerHTML);
  for(let i = 0; i < phrase.length; i++){
    if(liList[i] === guess) {
      liList[i].setAttribute("class", "show");
      return liList[i];
    };
  };
  return null;
};

start.addEventListener('click', (e) => {
  overlay.style.display = 'none';
  addPhraseToDisplay(phrase);
});

document.addEventListener('click', (e) => {
  console.log("click");
  let guess = event.target;
  e.target.setAttribute('class', 'chosen');
  console.log(guess);
  checkLetter(guess);
});

// ul.addEventListener('click', (e) => {
//   console.log("click");
//   let guess = event.target;
//   e.target.setAttribute('class', 'chosen');
//   console.log(guess);
//   checkLetter(guess);
// });



console.log(getRandomPhraseAsArray(phrases));
