'use strict';

const inputText = document.getElementById('input-text');
const output = document.getElementById('output');
const btnTranslate = document.getElementById('translate');
const selected = document.getElementById('languages');

let languages = 'yoda';

// functions
async function translateText(){
  const input = inputText.value;
  console.log(input);

  if (input == '' || input == null){
    alert('Text Requird');
  }else{
    const url = `https://api.funtranslations.com/translate/${languages}.json?text=${input}`

    console.log(url);
    const data = await fetch(url);
    const result = await data.json();
    console.log(result);

    output.innerText = result.contents.translated;
  }
}

// to check enter key and translate the text 
function checkKey(e){
  // console.log(e.key);
  if (e.key === 'Enter'){
    translateText();
  }
}

// eventlisterner
btnTranslate.addEventListener('click', translateText);
document.addEventListener('keydown', checkKey);
selected.addEventListener('change', e =>{
  languages = (e.target.value);
  console.log(languages)
})

console.log(languages);