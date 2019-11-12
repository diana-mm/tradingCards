const cardBody = document.querySelector('.cards')

fetch('http://localhost:3000/cards')
    .then(handleRespone)
    .then(showCardName)

function handleRespone(response){
    return response.json()
}

function showCardName(cards){
    cards.map(card => {
        cardName = document.createElement('h2')
        cardName.innerText = card.name
        cardBody.appendChild(cardName)
    })
}