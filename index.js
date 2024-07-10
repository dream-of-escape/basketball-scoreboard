let homeScore = 0
let awayScore = 0

function increment(side, points) {
    if (side == "home") {
        homeScore += points
    } else {
        awayScore += points
    }
    renderScore()
}

function renderScore() {
    document.getElementById("home-score").innerText = homeScore
    document.getElementById("away-score").innerText = awayScore
}