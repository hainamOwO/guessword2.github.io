const inputs = document.querySelector(".inputs"),
hintTag = document.querySelector(".hint span"),
guessLeft = document.querySelector(".guess-left span"),
wrongLetter = document.querySelector(".wrong-letter span"),
resetBtn = document.querySelector(".reset-btn"),
typingInput = document.querySelector(".typing-input");
let word, maxGuesses, incorrectLetters = [], correctLetters = [];

const wordhint = [
    {
        word:"baocoda",
        hint:"grass"
    },
    {
        word:"khoilocxoay",
        hint:"natural disaster"
    },
    {
        word:"thichtungdich",
        hint:"love s3x"
    },
    {
        word:"nguyendinhcuongquocnamchau",
        hint:"mạnh"
    },
    {
        word:"khoangtrong",
        hint:"vacant"
    },
    {
        word:"phamdaohainam",
        hint:"nguuuuuuuu"
    },
    {
        word:"vantenghiasicangiuoc",
        hint:"Nguyễn Đình Chiểu"
    },
    {
        word:"amongus",
        hint:"lying"
    },
    {
        word:"binhnguyenvotan",
        hint:"infinite"
    },
    {
        word:"nguyenquanganh",
        hint:"tồi :(((((((("
    },
    {
        word:"hientaihoanthanh",
        hint:"(thì)past and present"
    },
    {
        word:"quakhuhoanthanhtiepdien",
        hint:"(thì)past until past"
    },
    {
        word:"freefire",
        hint:"piu piuuuu"
    },
    {
        word:"island",
        hint:"letter s is silent"
    },
    {
        word:"SSEC",
        hint:"se duyên cờ lubb"
    },
    {
        word:"nguyenthingocbich",
        hint:"quan trọng là bao nhiu điểm"
    },
    {
        word:"suspicious",
        hint:"among us"
    },
    {
        word:"thailand",
        hint:"(đất nước) cườiiiiii"
    },
    {
        word:"aroma",
        hint:"synonym of smells"
    },
    {
        word:"1710",
        hint:"sinh nhật 2 ngườii"
    },
    {
        word:"newzealand",
        hint:"góc phải bản đồ"
    },
    {
        word:"bùa xanh",
        hint:"bên phải hoặc bên trái bản đồ"
    },
    {
        word:"nguyenxuanvinhngonzaitandohetcacem",
        hint:"GD"
    },
    {
        word:"Tram",
        hint:"Quốc"
    },
    {
        word:"superidol",
        hint:"bo oh oh wa oh"
    }
  ];

function randomWord() {
    let ranItem = wordhint[Math.floor(Math.random() * wordhint.length)];
    word = ranItem.word;
    maxGuesses = word.length >= 5 ? 8 : 6;
    correctLetters = []; incorrectLetters = [];
    hintTag.innerText = ranItem.hint;
    guessLeft.innerText = maxGuesses;
    wrongLetter.innerText = incorrectLetters;
    let html = "";
    for (let i = 0; i < word.length; i++) {
        html += `<input type="text" disabled>`;
        inputs.innerHTML = html;
    }
}
randomWord();
function initGame(e) {
    let key = e.target.value.toLowerCase();
    if(key.match(/^[A-Za-z]+$/) && !incorrectLetters.includes(` ${key}`) && !correctLetters.includes(key)) {
        if(word.includes(key)) {
            for (let i = 0; i < word.length; i++) {
                if(word[i] == key) {
                    correctLetters += key;
                    inputs.querySelectorAll("input")[i].value = key;
                }
            }
        } else {
            maxGuesses--;
            incorrectLetters.push(` ${key}`);
        }
        guessLeft.innerText = maxGuesses;
        wrongLetter.innerText = incorrectLetters;
    }
    typingInput.value = "";
    setTimeout(() => {
        if(correctLetters.length === word.length) {
            alert(`Congrats! You found the word ${word.toUpperCase()}`);
            return randomWord();
        } else if(maxGuesses < 1) {
            alert("Game over! You don't have remaining guesses");
            for(let i = 0; i < word.length; i++) {
                inputs.querySelectorAll("input")[i].value = word[i];
            }
        }
    }, 100);
}
resetBtn.addEventListener("click", randomWord);
typingInput.addEventListener("input", initGame);
inputs.addEventListener("click", () => typingInput.focus());
document.addEventListener("keydown", () => typingInput.focus());