const emojis = [
  "👾",
  "👾",
  "🎮",
  "🎮",
  "🕹️",
  "🕹️",
  "💻",
  "💻",
  "📱",
  "📱",
  "🧠",
  "🧠",
  "🎲",
  "🎲",
  "🏆",
  "🏆",
];

let openCards = [];
let moves = 0; // contador de jogadas
let seconds = 0; // tempo em segundos


// Inicia o cronômetro
const timer = setInterval(() => {
  seconds++;
  document.getElementById("timer").textContent = `⏱️ Tempo: ${seconds}s`;
}, 1000);

// Atualiza o contador de jogadas na tela
function updateMoveCounter() {
  document.getElementById("moves").textContent = `🎯 Jogadas: ${moves}`;
}

let shuflleEmojis = emojis.sort(() =>(Math.random() > 0.5 ? 2: -1));

for(let i = 0; i < emojis.length; i++)
{
   let box = document.createElement("div");
   box.className = "item";
   box.innerHTML = shuflleEmojis[i];
   box.onclick = handleClick;
   document.querySelector(".game").appendChild(box);
}

function handleClick() {
  if(openCards.length < 2) {
    this.classList.add("boxOpen");
    openCards.push(this);
    moves++;
    updateMoveCounter();

  }
  
  if(openCards.length == 2) {
   setTimeout(checkMatch, 500);
  }
}

function checkMatch() {
  if(openCards[0].innerHTML === openCards[1].innerHTML) {
    openCards[0].classList.add ("boxMatch");
    openCards[1].classList.add ("boxMatch");
  } else {
    openCards[0].classList.remove ("boxOpen");
    openCards[1].classList.remove ("boxOpen");
  }

  openCards = [];

  if(document.querySelectorAll(".boxMatch").length === emojis.length) {
    clearInterval(timer);
    setTimeout(() => {
      alert(`🎉 Você venceu!\nTempo: ${seconds}s\nJogadas: ${moves}`);
    }, 300);
  }
}



