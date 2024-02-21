var count = 0;
var counterElement = document.getElementById("counter");
var clickButton = document.getElementById("clickButton");

function incrementCounter() {
  count++;
  counterElement.textContent = count;

  if (count % 2 !== 0) {
    document.body.classList.add("escudo_neuquen");
    document.body.style.backgroundImage = "url('Images/escudo-neuquen.webp')"; // Agregar el escudo de Neuquén como fondo
  } else {
    document.body.classList.remove("escudo_neuquen");
    var color1 = '#' + Math.floor(Math.random()*16777215).toString(16);
    var color2 = '#' + Math.floor(Math.random()*16777215).toString(16);
    var color3 = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundImage = "linear-gradient(to right, " + color1 + ", " + color2 + ", " + color3 + ")";
  }
}

clickButton.addEventListener("click", incrementCounter);