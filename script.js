"use strict"

const identifiers = [
    "Sädel",
    "Gyre",
    "Bänkli",
    "Reppisch",
    "Schoggi",
    "Huere",
    "Styfeli",
    "Knacker",
]

const nouns = [
    "Sümpfer",
    "Geischter",
    "Knacker",
    "Blöser",
    "Chriesistei",
    "Höckler",
]

document.getElementById("generate").addEventListener("click", () => {
    const identifierIndex = Math.floor(Math.random() * (identifiers.length + 1))
    const identifier = (identifierIndex === identifiers.length) ? generateNumericalIdentifier() : identifiers[identifierIndex]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    document.getElementById('identifier').textContent = identifier
    document.getElementById('noun').textContent = noun

    console.log(`${identifier} ${noun}`)
});

function generateNumericalIdentifier() {
    const randomNumber = Math.floor(Math.random() * 100)
    return `${randomNumber}-er`
}