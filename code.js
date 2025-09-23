const scoreboard = document.getElementById("score");
const escoreboard = document.getElementById("enemy");
score = 0
escore = 0

// https://www.youtube.com/watch?v=OV8MVmtgmoY - Card Flip
// https://ivoryred.itch.io/pixel-poker-cards - Cards

function RandomCard(x, m) {
    let r = Math.floor(Math.random() * 52);
    console.log(r, r % 13);
    const card = document.createElement("div");
    card.classList.add("thecard");
    card.style.transform = "rotateY(180deg)"

    card.style.left = `${x * 72 + 200}px`;
    card.style.top = `${m * 220 + 200}px`
    // Showing the right card + animation
    const front = document.createElement("div");
    front.classList.add("thefront");
    front.classList.add("wrapper");
    front.style.backgroundImage = "url('Poker/Cards.png')";
    front.style.height = "192px";
    front.style.width = "144px";
    front.style.backgroundPosition = `-${((r % 13) * 48) * 3}px -${(Math.floor(r / 13) * 64) * 3}px`;
    front.style.backgroundSize = "2832px 1155px";

    const back = document.createElement("div");
    back.classList.add("theback");
    back.classList.add("wrapper");
    back.style.backgroundImage = "url('Poker/Cards.png')";
    back.style.height = "192px";
    back.style.width = "144px";
    back.style.backgroundPosition = "0px -768px";
    back.style.backgroundSize = "2832px 1155px";

    card.appendChild(front);
    card.appendChild(back);

    const container = document.querySelector(".maincontainer")
    container.append(card);

    if (m == 0) {
        t = r % 13
        if (t == 0) {
            score += 1
        } else if (1 <= (t) && (t) < 10) {
            score += r % 13 + 1
        } else {
            score += 10
        }
        scoreboard.textContent = score;
        if (score > 21) {
            alert("You lose!")
        }
    } else {
        t = r % 13
        if (t == 0) {
            escore += 1
        } else if (1 <= (t) && (t) < 10) {
            escore += r % 13 + 1
        } else {
            escore += 10
        }
        if (escore > 21) {
            alert("Dealer lost!")
        }
        escoreboard.textContent = escore;
    }

    if (x == 1 && m == 1) {
        return card;
    } else {
        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 200);      
    }
}
l = 0;
RandomCard(l, 0);
l += 1;
RandomCard(l, 0);

r = 0
RandomCard(r, 1);
r += 1;
const ldc = RandomCard(r, 1);

document.getElementById("Hit").onclick = function() {
    l += 1
    RandomCard(l, 0);
}

document.getElementById("Stand").onclick = function() {
    ldc.style.transform = "rotateY(0deg)";
    while (escoreboard.textContent < 17) {
        r += 1;
        RandomCard(r, 1);
    }
    if (escoreboard.textContent > 21 || scoreboard.textContent > 21) {

    } else if (escoreboard.textContent > scoreboard.textContent) {
        alert("Dealer wins!")
    } else if (scoreboard.textContent > escoreboard.textContent) {
        alert("Player wins!")
    } else {
        alert("Draw!")
    }
}