const nameElement = document.getElementById('name-place')
const nameButton = document.getElementById('name-button')
const input = document.getElementById('name-input')

nameButton.addEventListener('click', () => {
    nameElement.textContent = input.value;
    // post-click logic goes here!
});

const backgroundColor = document.getElementById('background-color')
const backgroundButtonYellow = document.getElementById('background-button-yellow')

backgroundButtonYellow.addEventListener('click', () => {

    backgroundColor.style.background = 'yellow'
    console.log('works?')
    // post-click logic goes here!
});

const backgroundButtonPink = document.getElementById('background-button-pink')

backgroundButtonPink.addEventListener('click', () => {

    backgroundColor.style.background = 'hotpink'
    console.log('works?')
    // post-click logic goes here!
});

const backgroundButtonOrange = document.getElementById('background-button-orange')

backgroundButtonOrange.addEventListener('click', () => {

    backgroundColor.style.background = 'orange'
    console.log('works?')
    // post-click logic goes here!
});

const nametagColor = document.getElementById('nametag-color')
const pinkNametagColor = document.getElementById('pink-nametag')

pinkNametagColor.addEventListener('click', () => {

    nametagColor.style.background = 'pink'
    console.log('works?')
    // post-click logic goes here!
});

const greenNametagColor = document.getElementById('green-nametag')

greenNametagColor.addEventListener('click', () => {

    nametagColor.style.background = 'yellowgreen'
    console.log('works?')
    // post-click logic goes here!
});

const pronounElement = document.getElementById('pronoun-place')
const pronounButton = document.getElementById('pronoun-button')
const inputPronoun = document.getElementById('pronoun-input')

pronounButton.addEventListener('click', () => {
    pronounElement.textContent = inputPronoun.value;
    // post-click logic goes here!
});

