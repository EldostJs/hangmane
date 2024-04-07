let button = document.querySelectorAll(".harf-buton");

let pattern = document.getElementById('line')

let hP = document.querySelector('.hp')

let screen = document.querySelector('.screen')

let screenWin = document.querySelector('.screenWin');

let refresh = document.querySelector('.refres')

let refreshWin = document.querySelector('.refres-win')

let check = document.querySelector('.check')

let img = document.querySelector('.svg')

let buttonHide = document.querySelectorAll('.harf-buton');

let errorSound = document.querySelector('.error')

let correctSound = document.querySelector('.correct')

let winSound = document.querySelector('.win')

let losSound = document.querySelector('.los')

let heart = document.querySelector('.heart')

let alphabet = document.querySelector('.alphabet')

const arr = [
    "apple",
    "banana",
    "orange",
    "strawberry",
    "grape",
    "watermelon",
    "pineapple",
    "peach",
    "mango",
    "kiwi",
    "pear",
    "blueberry",
    "cherry",
    "lemon",
    "lime",
    "coconut",
    "avocado",
    "papaya",
    "plum",
    "raspberry"
];

let randomWord = arr[Math.floor(Math.random() * arr.length)];

let generatePattern = randomWord.split("").map(x => ""); // split разбивает слво на буквы(яблоко => я.б.л.о.к.о), map делает это для всех слов

pattern.textContent = randomWord.split("").map(x => '_').join(' ')// тут все так же но join в конце все соеденяет в один элэмент

console.log("First word" , randomWord);



//------SVG---------------

const imageList = [
    './svg/1.svg',
    './svg/2.svg',
    './svg/3.svg',
    './svg/4.svg',
    './svg/5.svg',
    './svg/6.svg',
    './svg/7.svg',
    './svg/8.svg',
]


//-----------------------



for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', function() {

        let letter = button[i].textContent.toLowerCase();

        let letterIndex = [];
        
        button[i].style.opacity = '0.5'; // когда нажимаешь кнопку делает ее невидимой

        button[i].disabled = true // что бы кнопка не нажималась повторно

        //-------------------------

        for (let j = 0; j < randomWord.length; j++) {
            if (randomWord[j] === letter) {
                letterIndex.push(j)
            }
        }
        // эти два кода если есть несколько одинаковых букв то они все выводят на экран либо если один то один

        if (letterIndex.length > 0) {
            for (let index of letterIndex) {
                generatePattern[index] = letter;
            } 
            correctSound.play();// эта функция воспроизвудит звук

        //----------------------

        }else {
            hP.textContent--;
            let currentHp = parseInt(hP.textContent);
            if (currentHp <= imageList.length) {
                img.src = imageList[imageList.length - currentHp];
            }
            // эта функция при каждом убывании моей жизни меняет фотографию

            errorSound.play();// эта функция воспроизвудит звук
        }
        if (hP.textContent == 0) {
            alphabet.style.display = 'none'// делает дивы невидимыми
            img.style.display = 'none'
            heart.style.display = 'none'// эта функция делает невидиой див
            screen.style.visibility = 'visible';
            losSound.play();// эта функция воспроизвудит звук
            // эта функция выводит на сайт окошко если я проиграл
        }

        if (generatePattern.join('') == randomWord) {
            alphabet.style.display = 'none'// делает дивы невидимыми
            img.style.display = 'none'

            heart.style.display = 'none'// эта функция делает невидиой див
            screenWin.style.visibility = 'visible';
            // эта функция выводит на сайт окошко если я выйграл
            winSound.play();// эта функция воспроизвудит звук
        }
        pattern.textContent = generatePattern.map(x => x ? x : "_").join(' ') // добавляет подчеркивания для каждой буквы в слове
        
        
    });
}


refresh.addEventListener('click', function () {
    screen.style.visibility = "hidden"
     randomWord = arr[Math.floor(Math.random() * arr.length)];
     console.log('lose random', randomWord);

//------------------------

     buttonHide.forEach(button => {
        button.style.opacity = '1' // делает кнопку обратно видимой
        button.removeAttribute('disabled'); // возвращает кнопку обратно и теперь можно повтороно нажимать
     });
     // этот код возвращает все кнопки обратно

//-------------------------

generatePattern = randomWord.split("").map(x => "");

pattern.textContent = randomWord.split("").map(x => '_').join(' ');

hP.textContent=8;


img.src = imageList[0];

heart.style.display = 'inline-block' // делает див обратно видимым

// вызывает все заного после нажатия кнопки refresh

    losSound.pause() // выключает музыку при нажатии на кнопку

    alphabet.style.display = 'block' //возвращает дивы и делает их видимыми
    img.style.display = 'block'


})



refreshWin.addEventListener('click', function () {
    screenWin.style.visibility = "hidden"
     randomWord = arr[Math.floor(Math.random() * arr.length)];
     console.log('win random', randomWord);

//------------------------

buttonHide.forEach(button => {
    button.style.opacity = '1' // делает кнопку обратно видимой
    button.removeAttribute('disabled'); // возвращает кнопку обратно и теперь можно повтороно нажимать
 });
 // этот код возвращает все кнопки обратно

//-------------------------



generatePattern = randomWord.split("").map(x => "");

pattern.textContent = randomWord.split("").map(x => '_').join(' ');

hP.textContent=8;


img.src = imageList[0];

heart.style.display = 'inline-block' // делает див обратно видимым


// вызывает все заного после нажатия кнопки refresh

winSound.pause(); // выключает музыку при нажатии на кнопку

alphabet.style.display = 'block' //возвращает дивы и делает их видимыми
img.style.display = 'block'


})