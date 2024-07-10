let homeScore = 0
let guestScore = 0

function increment(side, points) {
    if (side == "home") {
        homeScore += points
    } else {
        guestScore += points
    }
    renderScore()
}

function renderScore() {
    document.getElementById("home-score").innerText = homeScore
    document.getElementById("guest-score").innerText = guestScore
}