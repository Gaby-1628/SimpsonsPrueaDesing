document.addEventListener('DOMContentLoaded', async() => {
    charactersList.innerHTML = '<h1>Loading</h1>'
    const data = await showUrl()
    show = data
    showCharacters(show)
})

let show = []

const charactersList = document.querySelector('#container')
const input = document.querySelector('#search_input')

async function showUrl() {
    const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes?count=1000&character=$')
    return await response.json()
}

input.addEventListener('keyup', e => {
    const newData = show.filter(character => character.character.includes(input.value))
    showCharacters(newData)
})

const createCharacters = container => container.map(character => `<div><h2>${character.character}</h2><p>${character.quote}</p><img src="${character.image}"></div>`).join('')

function showCharacters(container) {
    const itemCharacters = createCharacters(container)
    charactersList.innerHTML = itemCharacters
}
