function RandomCard() {
    let r = Math.floor(Math.random() * 52);
    console.log(r);
    const card = document.createElement("div");
    card.classList.add("thecard");
    card.style.transform = "rotateY(180deg)"

    const front = document.createElement("div");
    front.classList.add("thefront");
    front.style.backgroundImage = "url('Poker/Cards.png')";
    front.style.height = "64px";
    front.style.width = "48px";
    front.style.backgroundPosition = `-${(r % 13) * 48}px -${Math.floor(r / 13) * 64}px`;
    front.style.backgroundSize = "auto";

    const back = document.createElement("div");
    back.classList.add("theback");
    back.style.backgroundImage = "url('Poker/Cards.png')";
    back.style.height = "64px";
    back.style.width = "48px";
    back.style.backgroundPosition = "0px -256px";
    back.style.backgroundSize = "auto";

    card.appendChild(front);
    card.appendChild(back);

    const container = document.querySelector(".maincontainer")
    container.append(card);

    setTimeout(() => {
        card.style.transform = "rotateY(0deg)";
    }, 2000);
}
RandomCard()