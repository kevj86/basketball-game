let homePoints = 0;
let guestPoints = 0;
let homeScore = document.getElementById("home-score");
let guestScore = document.getElementById("guest-score");

function leader() {
  if (homePoints > guestPoints) {
    homeScore.style.border = "3px solid green";
    guestScore.style.border = "3px solid black";
  } else {
    if (guestPoints > homePoints) {
      guestScore.style.border = "3px solid green";
      homeScore.style.border = "3px solid black";
    } else {
      if (guestPoints === homePoints) {
        guestScore.style.border = "3px solid black";
        homeScore.style.border = "3px solid black";
      }
    }
  }
}

function home1() {
  homePoints = homePoints + 1;
  homeScore.textContent = homePoints;
  leader();
}

function home2() {
  homePoints = homePoints + 2;
  homeScore.textContent = homePoints;
  leader();
}

function home3() {
  homePoints = homePoints + 3;
  homeScore.textContent = homePoints;
  leader();
}

function guest1() {
  guestPoints = guestPoints + 1;
  guestScore.textContent = guestPoints;
  leader();
}

function guest2() {
  guestPoints = guestPoints + 2;
  guestScore.textContent = guestPoints;
  leader();
}

function guest3() {
  guestPoints = guestPoints + 3;
  guestScore.textContent = guestPoints;
  leader();
}

function newgame() {
  guestPoints = 0;
  homePoints = 0;
  guestScore.textContent = guestPoints;
  homeScore.textContent = homePoints;
  leader();
}
