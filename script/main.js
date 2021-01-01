//This shows the rules button when clicked
const showRule = document.querySelector("footer button");
const rule = document.querySelector(".show__rule ");
const answerPicked = document.querySelector(".answer__picked");

//This shows the rules button when clicked

//The bg traingle 
const traingle = document.querySelector(".js-tri img");

//THe div that contains the images(Rock Paper And Scissors)
const gameContainer = document.querySelector(".js-flex");
const mainGame = document.querySelectorAll(".js-flex");

// When Rock Paper and scissors is Pressed
mainGame.forEach(game => {
    game.addEventListener("click", rockOrPaperOrScissorsClicked)
});

// When Either Of Them Is Clicked
function rockOrPaperOrScissorsClicked() {
    showStepTwo();
}
showRule.addEventListener("click", openRules)

// OPens and closes rule button.
function openRules() {
    rule.classList.toggle("active");

    if (rule.classList.contains("active")) {
        //When the Rules Button is clicked,thsi happens
        this.style.border = "transparent";
        this.style.fontSize = "20px";
        this.style.fontWeight = "300";
        this.innerHTML = "X";
        this.style.transition = "0.4s ease border,0.4s ease color"
        this.style.color = "hsl(229, 25%, 31%)";
        return;
    }
    //When the Rules Button is clicked again (X) ,this happens

    this.style.border = ` 3px solid hsl(229, 25%, 31%)`;
    this.style.transition = "0.4s ease border,0.4s ease color"
    this.style.fontSize = "12px";
    this.innerHTML = "rules";
    this.style.fontWeight = "700";
    this.style.color = "#3b4363";
    this.style.letterSpacing = "1px";
}
// When rock or paper or scisors is clicked 

function showStepTwo() {
    gameContainer.style.opacity = "0";
    gameContainer.style.margin = "0px";
    traingle.style.opacity = "0";
    answerPicked.style.display = "flex";

}