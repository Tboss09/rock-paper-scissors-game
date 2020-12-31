//This shows the rules button when clicked
const showRule = document.querySelector("footer button");
const rule = document.querySelector(".show__rule ");

//This happens when paper,scissors,rock button is clicked 
const mainGame = document.querySelector(".main_games");

showRule.addEventListener("click", openRules)

// OPens and closes rule.
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