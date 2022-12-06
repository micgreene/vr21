let cardNumber = 0;

document.querySelector("#create-button").addEventListener("click", (e) => {
    cardNumber++;

    let newColumn = document.createElement("div");
    newColumn.setAttribute("class", "col-md-3");

    let card = document.createElement("card");
    card.setAttribute("class", "meme-card");
    card.setAttribute("id", "meme-card"+cardNumber);

    let cardImg = document.createElement("img");
    let imageUrl = document.querySelector("#new-image").value
    cardImg.setAttribute("src", imageUrl);
    cardImg.setAttribute("class", "image"+cardNumber);

    let cardTextTop = document.createElement("h3");
    cardTextTop.setAttribute("class", "meme-top-text");
    cardTextTop.setAttribute("id", "meme-top"+cardNumber);
    let topTxt = document.querySelector("#text-top").value
    cardTextTop.innerText = topTxt;

    let cardTextBot = document.createElement("h3");
    cardTextBot.setAttribute("class", "meme-bot-text");
    cardTextBot.setAttribute("id", "meme-bot"+cardNumber);
    let botTxt = document.querySelector("#bot-text").value
    cardTextBot.innerText = botTxt;
    
    card.append(cardTextTop);
    card.append(cardImg);    
    card.append(cardTextBot);
    newColumn.append(card);

    document.querySelector(".row").append(newColumn);
})