const scoreboard = document.getElementById("score");
const scoreboard2 = document.getElementById("score2");
const escoreboard = document.getElementById("enemy");
const splitt = document.getElementById("Splitt");
const DoubleDown = document.getElementById("DoubleDown");
const Next = document.getElementById("Next");
const container = document.querySelector(".maincontainer");
const prize = document.getElementById("prize");
const InputBox = document.getElementById("Input");
const allButtons = document.querySelectorAll(".buttons");
const info = document.getElementById("Info");

score = 0
escore = 0
ddCheck = -1
ace = 0
first = 1
eace = 0
firste = 1
bet = 100
firstti = 1
worthinsuring = 0
Insure = 0
money = 100
let tempo;
// https://www.youtube.com/watch?v=OV8MVmtgmoY - Card Flip
// https://ivoryred.itch.io/pixel-poker-cards - Cards
// https://gamebetweenthelines.itch.io/2d-top-down-pixel-art-tileset-casino - Tileset

// Add sound, add deck, add advanced blackjack, add animation

document.addEventListener("keydown", function(event) {
    if (firstti == 1) {
        if (event.key === "Enter") {
            allButtons.forEach(button => {
                button.disabled = false;
            })
            InputBox.disabled = true;
            RandomCard(0, 0);

            setTimeout(() => {
                RandomCard(1, 0);
            }, 500);

            setTimeout(() => {
                RandomCard(0, 1);
            }, 250);

            setTimeout(() => {
                ldc = RandomCard(1, 1);
            }, 750);

            firstti = 0;
        }
    }  
});

momo = 0;
function RandomCard(x, m, z = momo) {
    //let r = Math.floor(Math.random() * 52);
    r = 9;
    console.log(r, r % 13);
    const card = document.createElement("div");
    card.classList.add("thecard");

    card.style.top = "50%";
    card.style.left = "20vw";
    card.style.transform = "translate(-50%, -50%) rotateY(180deg)";

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

    container.append(card);

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            card.style.transform = "rotateY(180deg)";
            card.style.left = `${x * 72 - 72}px`;
            card.style.top = `${m * -420 + 200}px`;
        });        
    });

    if (m == 1) {
        if (firste == 0 && document.getElementById("Insurance").style.display == "inline" && r % 13 >= 9) {
            worthinsuring = 1;
        } else if (firste == 1) {
            if (r % 13 == 0) {
                document.getElementById("Insurance").style.display = "inline";
            }
            firste = 0;
        }
    };

    HitandMiss();
    console.log(scoreboard.textContent, scoreboard2.textContent);
    if (m == 0) {
        if (ddCheck != -1 && first == 1) {
            if (ddCheck == r % 13) {
                tempo = card;
                console.log("Do you want to double down?");
                splitt.style.display = "inline";  
            } else {
                first = 0;
                splitt.style.display = "";  
            }
        };

        if (z == 2) {
            if (t == 0) {
                if (scoreboard.textContent < 0 && scoreboard2.textContent < 0) {
                    alert("Both hands lost!")
                }
                if (score2 + 11 > 21) {
                    score2 += 1;
                } else {
                    score2 += 11;
                    ace =+ 1;
                }
            } else if (1 <= (t) && (t) < 10) {
                score2 += r % 13 + 1
            } else {
                alert("bruh2");
                score2 += 10
            }
            scoreboard2.textContent = score2;
            if (ace >= 1) {
                scoreboard2.textContent = score2 + " / " + (score2 - (10));
            };
            console.log(score2);
            YouLose2();
            function YouLose2() {
                if (score2 > 21) {
                    if (ace >= 1) {
                        score2 -= 10;
                        ace -= 1;
                        scoreboard2.textContent = score2;
                        YouLose2();
                    } else if (score < 21) {
                        score2 = -10000000;
                        momo = 0;
                    } else {
                        money -= InputBox.value;
                        info.innerHTML = "Bad Luck! You've busted. <br>You've lost " + (InputBox.value || 0) + " chips.";
                        End();
                    }
                }            
            };
            return;
        }

        ddCheck = r % 13;
        t = r % 13
        if (t == 0) {
            if (scoreboard.textContent < 0 && scoreboard2.textContent < 0) {
                alert("Both hands lost!")
            }
            if (score + 11 > 21) {
                score += 1;
            } else {
                score += 11;
                ace =+ 1;
            }
        } else if (1 <= (t) && (t) < 10) {
            score += r % 13 + 1
        } else {
            alert("bruh2");
            score += 10
        }
        scoreboard.textContent = score;
        if (ace >= 1) {
            scoreboard.textContent = score + " / " + (score - (10));
        };
        YouLose();
        function YouLose() {
            if (score > 21) {
                if (ace >= 1) {
                    score -= 10;
                    ace -= 1;
                    scoreboard.textContent = score;
                    YouLose();
                } else if (score2 < 21) {
                    score = -10000000;
                    momo = 2;
                } else {
                    money -= InputBox.value;
                    info.innerHTML = "Bad Luck! You've busted. <br>You've lost " + (InputBox.value || 0) + " chips.";
                    End();
                }
            }            
        };
    } else {
        t = r % 13
        if (t == 0) {
            if (escore + 11 > 21) {
                escore += 1
            } else {
                escore += 11;
                eace =+ 1;
            }
        } else if (1 <= (t) && (t) < 10) {
            escore += r % 13 + 1
        } else {
            escore += 10
        }
        escoreboard.textContent = escore;
        DealerLose();
        function DealerLose() {
            if (escore > 21) {
                if (eace >= 1) {
                    escore -= 10;
                    eace -= 1;
                    escoreboard.textContent = score;
                    DealerLose();
                } else {
                    money += InputBox.value;
                    info.innerHTML = "Congratulations! Dealer busted!<br>You've earned " + (InputBox.value || 0) + " chips.";
                    End();

                }
            }            
        };
    }

    if (x == 1 && m == 1) {
        return card;
    } else {
        setTimeout(() => {
            card.style.transform = "rotateY(0deg)";
        }, 1700);      
    }
}

let ldc;

l = 1;
r = 1;

document.getElementById("Hit").onclick = function() {
    l += 1
    DoubleDown.style.display = "none";
    RandomCard(l, 0);
}

document.getElementById("Hit2").onclick = function() {
    l += 1
    DoubleDown.style.display = "none";
    RandomCard(l + 6, 0, 2);
}

function HitandMiss() {
    if (scoreboard.textContent < 0 && scoreboard2.textContent < 0) {
        alert("Both hands lost!")
    }
}

document.getElementById("Stand").onclick = function() {
    ldc.style.transform = "rotateY(0deg)";
    while (escoreboard.textContent < 17) {
        r += 1;
        RandomCard(r, 1);
    }
    if (typeof scoreboard.textContent !== "number") {
        scoreboard.textContent = parseInt(scoreboard.textContent.split("/")[0].trim())
        console.log(scoreboard.textContent);
    }
    if (escoreboard.textContent > 21 || scoreboard.textContent > 21) {

    } else if (escoreboard.textContent > scoreboard.textContent) {
        money -= InputBox.value;
        info.innerHTML = "Bad Luck! The dealer beat <br>you " + escoreboard.textContent + ". You've lost " + (InputBox.value || 0) + " chips.";
        End();
    } else if (scoreboard.textContent > escoreboard.textContent) {
        money += InputBox.value;
        info.innerHTML = "Congratulations! You've beat <br> the dealer. You've earned " + (InputBox.value || 0) + " chips.";
        End();
    } else {
        alert("Draw!")
        End();
    }
}

splitt.onclick = function() {
    tempo.style.left = "288px";
    score = score / 2;
    score2 = score;
    scoreboard.textContent = score;
    scoreboard2.textContent = score2;
    RandomCard(1, 0);
    RandomCard(6, 0, 2);
}

document.getElementById("Insurance").onclick = function() {
    alert("You've been insured!")
    Insure = Math.ceil(InputBox.value / 2);
}

DoubleDown.onclick = function() {
    alert("You've double down!")
    document.getElementById("Hit").click();
    document.getElementById("Stand").click();
}

Next.onclick = function() {
    document.getElementById("Insurance").style.display = "none";
    splitt.style.display = "none";
    DoubleDown.style.display = "";
    allButtons.forEach(button => {
        button.disabled = false;
    })
    Next.style.display = "";
    InputBox.disabled = true;
    l = 1;
    r = 1;
    score = 0;
    firstti = 1
    worthinsuring = 0
    first = 1
    firste = 1
    Insure = 0
    scoreboard.textContent = 0;

    escore = 0;
    escoreboard.textContent = 0;

    container.innerHTML = "";

    RandomCard(0, 0);

    setTimeout(() => {
        RandomCard(1, 0);
    }, 500);

    setTimeout(() => {
        RandomCard(0, 1);
    }, 250);

    setTimeout(() => {
        ldc = RandomCard(1, 1);
    }, 750);
}

let Chips = document.getElementById("Chip");
Chips.style.backgroundImage = "url('Slots/Chips.png')";
Chips.style.width = "85px";
Chips.style.height = "85px";
Chips.style.backgroundSize = "85px 681px";

InputBox.value = "";

InputBox.oninput = function() {
    InputBox.value = InputBox.value.replace(/[^0-9]/g,"");
    InputBox.style.color = "white";
    if (InputBox.value > money) {
        alert("You can't bet that it's too much!")
        InputBox.value = "";
    }
    InputBox.title = InputBox.value;
    if (InputBox.value >= 500) {
        Chips.style.backgroundPosition = "0px -595px";
    } else if (InputBox.value >= 250) {
        Chips.style.backgroundPosition = "0px -510px";
    } else if (InputBox.value >= 100) {
        Chips.style.backgroundPosition = "0px -425px";
    } else if (InputBox.value >= 25) {
        Chips.style.backgroundPosition = "0px -340px";
    } else if (InputBox.value >= 10) {
       Chips.style.backgroundPosition = "0px -255px";
    } else if (InputBox.value >= 5) {
        Chips.style.backgroundPosition = "0px -170px";
    } else if (InputBox.value >= 2) {
        Chips.style.backgroundPosition = "0px -85px";
        InputBox.style.color = "black";
    } else {
        Chips.style.backgroundPosition = "0px 0px";
        InputBox.style.color = "black";
    }
};

function End() {
    Next.style.display = "inline";
    InputBox.disabled = false;
    console.log(Insure)
    if (worthinsuring == 1 && Insure > 0) {
        money += InputBox.value + Insure;
        info.innerHTML = "You're in luck! Even though you lost, <br> your insurance works and you <br> get back" + ((InputBox.value + Insure) || 0) + " chips.";
    }
    if (InputBox.value > money) {
        InputBox.value = "";
    }
    allButtons.forEach(button => {
        button.disabled = true;
    })
};