var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");
var titulo = document.querySelector(".titulo");

titulo.style.display = "block"; // Asegúrate de que el título sea visible al principio

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Called you on the phone today", time: 9 },
  { text: "Just to ask you how you were", time: 12 },
  { text: "All I did was speak normally", time: 15.5 },
  { text: "Somehow I still struck a nerve", time: 21.5 },
  { text: "You got me fucked up in the head, boy", time: 25.0 },
  { text: "Never doubted myself so much", time: 30.3 },
  { text: "Like, am I pretty? Am I fun, boy?", time: 32.4 },
  { text: "I hate that I give you power over that kind of stuff", time: 39.5 },
  { text: "'Cause it's always one step forward and three steps back", time: 43.3 },
  { text: "I'm the love of your life until I make you mad", time: 51.5 },
  { text: "It's always one step forward and three steps back", time: 54.3 },
  { text: "Do you love me, want me, hate me? Boy, I don't understand", time: 62.5 },
  { text: "No, I don't understand", time: 66.0 },
  { text: "And maybe in some masochistic way", time: 70.0 },
  { text: "I kinda find it all exciting", time: 73.5 },
  { text: "Like, which lover will I get today?", time: 77.5 },
  { text: "Will you walk me to the door or send me home cryin'?", time: 81.8 },
  { text: "It's one step forward and three steps back", time: 86.0 },
  { text: "I'm the love of your life until I make you mad", time: 92.2 },
  { text: "It's always one step forward and three steps back", time: 97.9 },
  { text: "Do you love me, want me, hate me? Boy, I don't understand", time: 102.5 },
  { text: "No, it's back and forth, did I say something wrong?", time: 109.0 },
  { text: "It's back and forth, goin' over everything I said", time: 114.0 },
  { text: "It's back and forth, did I do something wrong?", time: 120.0 },
  { text: "It's back and forth, maybe this is all your fault", time: 125.0 },
  { text: "Instead it's one step forward and three steps back", time: 130.5 },
  { text: "And I'd leave you, but the roller coaster is all I've ever had", time: 136.0 },
  { text: "Yeah, it's one step forward and three steps back", time: 141.0 },
  { text: "Do you love me, want me, hate me? Boy", time: 146.6 },
  { text: "I don't understand", time: 151.0 },
  { text: "No, I don't understand", time: 155.0 },
  { text: "Te amo mucho <3", time: 157.0 }
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

function ocultarTitulo() {
  titulo.style.animation = "fadeOut 3s ease-in-out forwards"; 
    setTimeout(function () {
    titulo.style.display = "none"; 
  }, 3000); 
}

function mostrarTitulo() {
  titulo.style.display = "block";
  titulo.style.opacity = 0;
  titulo.style.animation = "fadeIn 3s ease-in-out forwards"; 
}

setTimeout(ocultarTitulo, 9000);

setTimeout(mostrarTitulo, 180000);

