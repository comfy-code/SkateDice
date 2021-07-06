"use strict";

const rules = document.querySelector(".rules");
const rulesDiv = document.querySelector(".rules-div");
const overlay = document.querySelector(".overlay");
const rulesDivExit = document.querySelector(".rules-div-exit");
const btnClose = document.querySelector(".btn-close")

const dice1 = document.querySelector(".dice1");
const dice2 = document.querySelector(".dice2");
const dice3 = document.querySelector(".dice3");
const dice4 = document.querySelector(".dice4");

const trickName = document.querySelector(".trick-name")

const btnRoll = document.querySelector(".btn-roll");

// Function to close modal 
const closeModal = function(){
    rulesDiv.classList.toggle("hidden");
    overlay.classList.toggle("hidden");
};

// variables to hold dice number value 
let random1, random2, random3, random4;

//variables hold trick name value based on dice roll 
let name1, name2,name3, name4; 

rules.addEventListener("click", function(){
    closeModal();

    overlay.addEventListener("click", closeModal);

    document.addEventListener("keydown", function(e){
        if(e.key === "Escape" && !rulesDiv.classList.contains("hidden")){
            closeModal();
        }
    })
});

rulesDivExit.addEventListener("click", closeModal);

btnClose.addEventListener("click", closeModal);


// onclick randomizes dice and displays trick name 
btnRoll.addEventListener("click", function(){

    //Dice 1 Randomization 
    random1 = Math.floor(Math.random() * 5) + 1 ;
    console.log(random1);
    dice1.src = `d1${random1}.png`;

    //Dice 2 Randomization 
    random2 = Math.floor(Math.random() * 3) + 1;
    dice2.src = `d2${random2}.png`;

    //Dice 3 Randomization
    random3 = Math.floor(Math.random() * 3 ) + 1;
    dice3.src = `d3${random3}.png`;

    //Dice 4 Randomization 
    random4 = Math.floor(Math.random() * 4) + 1;
    dice4.src = `d4${random4}.png`;

   
   
    //Reading the trick name

    //Reading Dice 1 
    switch(random1) {
        case 1: //random1 = 1
        random1 = "Regular";
        break;
        case 2: 
        random1 = "Switch";
        break; 
        case 3: 
        random1 = "Nollie"
        break;
        case 4: 
        random1 = "Fakie"
        break;
        case 5: 
        random1 = ""
    }

    switch(random2) {
        case 1:
        random2 = "Frontside";
        break;
        case 2: 
        random2 = "Backside";
        break;
        case 3: 
        random2 = "";   
    }

    switch(random3) {
        case 1:
        random3 = "360";
        break;
        case 2: 
        random3 = "180";
        break;
        case 3: 
        random3 = "";    
    }

    switch(random4){
        case 1:
        random4 = "Kickflip";
        break;
        case 2: 
        random4 = "Heelflip";
        break;
        case 3: 
        random4 = "Shoveit"
        break;
        case 4: 
        random4 = ""; 
    }

    // Set the trick name 
    trickName.textContent = `${random1}   ${random2}  ${random3}  ${random4}`;
})