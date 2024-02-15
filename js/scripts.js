function shake() {
    var myFortune = getFortune()
    displayFortune(myFortune)
}

function displayFortune(fortune) {
    //alert(fortune)
    document.getElementById("fortune-display").innerHTML = fortune
}

function getFortune() {
    var listOfFortunes = getListOfFortunes()
    var randomNumber = getRandomNumberLessThan(listOfFortunes.length)
    document.getElementById('fortune-display').style.fontSize = '25px';
    return listOfFortunes[randomNumber]
}

function getListOfFortunes() {
    return ["My reply is yes", "Outlook good", "It is certain", "Ask again later",  "Reply hazy", "My reply is no", "Very doubtful", "Don't count on it"]
}

function getRandomNumberLessThan(max) {
    var randomDecimal = (Math.random() * max)
    return Math.floor(randomDecimal)
}
