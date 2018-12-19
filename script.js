'use strict'

const identifiers = [
    'Sädel',
    'Gyre',
    'Bänkli',
    'Reppisch',
    'Schoggi',
    'Huere',
    'Styfeli',
    'Chriesistei',
    'Tinitus',
]

const nouns = [
    'Sümpfer',
    'Geischter',
    'Knacker',
    'Blöser',
    'Höckler',
    'Mongos',
    'Fäger',
    'Clique',
    'Klecksler',
]

document.getElementById('generate').addEventListener('click', () => {
    const identifierIndex = Math.floor(Math.random() * (identifiers.length + 1))
    const isNumericalIdentifier = identifierIndex === identifiers.length

    const identifier = isNumericalIdentifier ? generateNumericalIdentifier() : identifiers[identifierIndex]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]

    const generatedName = isNumericalIdentifier ? `${identifier} ${noun}` : `${identifier}${noun.toLowerCase()}`
    document.getElementById('generated-name').textContent = generatedName

    console.log(`${identifier} ${noun}`)
});

document.getElementById("js-magic").addEventListener("click", () => {

    document.getElementById('generated-name').style.color = getRandomColor()
    
    



});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

function generateNumericalIdentifier() {
    const randomNumber = Math.floor(Math.random() * 100)
    return `${randomNumber}-er`
}