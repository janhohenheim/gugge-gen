"use strict"

const identifiers = [
    "Sädel",
    "Gyre",
    "Bänkli",
    "Reppisch",
    "Schoggi",
    "Huere",
    "Styfeli",
    "Knacker"
]

const nouns = [
    "Sümpfer",
    "Geischter",
    "Knacker",
    "Blöser",
    "Chriesistei",
    "Höckler"
]

document.getElementById("generate").addEventListener("click", () => {
    const identifier = identifiers[Math.floor(Math.random() * identifiers.length)]
    const noun = nouns[Math.floor(Math.random() * nouns.length)]
    document.getElementById('identifier').textContent = identifier
    document.getElementById('noun').textContent = noun

    console.log(`${identifier} ${noun}`)
}); 
