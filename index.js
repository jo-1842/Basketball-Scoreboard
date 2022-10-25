let homeScore = 0;
let guestScore = 0;



function addPointsHome(points) {
    homeScore += points;
    document.getElementById("home-score").textContent = homeScore;
}


function addPointsGuest(points) {
    guestScore += points;
    document.getElementById("guest-score").textContent = guestScore;
}

function resetScore() {
    guestScore = 0;
    homeScore = 0;
    document.getElementById("home-score").textContent = homeScore;
    document.getElementById("guest-score").textContent = guestScore;
    document.getElementById("home-leading").textContent = "";
    document.getElementById("guest-leading").textContent = "";

}


let homeLead 
let guestLead 


function indicateLeader() {
    if (guestScore > homeScore){
        guestLead = "\\o/";
        homeLead = "";
    } else if (guestScore < homeScore){
        guestLead = "" ;
        homeLead = "\\o/";
    } else {
        guestLead = "" ;
        homeLead = "" ;
    }
    document.getElementById("home-leading").textContent = homeLead;
    document.getElementById("guest-leading").textContent = guestLead;
}

