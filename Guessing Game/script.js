'use strict';
/*
//querySelector is a method that is availavble on the document object
//Again the textContent method reads from the selected document object
console.log(document.querySelector(".message").textContent);  // textContent = "Start Guessing"
//console.log(document.querySelector(".highscore").textContent);

// using this method we can manipulate text contents easily. 
document.querySelector(".message").textContent = "Correct Number"; // textContent = "Start Guessing" will change to "Correct Number"
document.querySelector(".guess").value = 100;

// we use addEventListener to execute a function. Here, we wrote a function and used it to handle click events
document.querySelector(".check").addEventListener("click", function(){
    console.log(document.querySelector(".guess").value);
    document.querySelector(".message").textContent = "Nice!!";
})

// const number = Math.trunc(Math.random());   // trunc removes the decimals
*/

// Implementing the game logic

const secretnumber = Math.trunc(Math.random()*20) + 1;  //Here, 20 is placed because we have to guess the number from (1-20) but 20 as a limit can't give us the input 20 as (0-19) will be counted in function. So, we have added +1 so that we can guess (1-20)
let score = 20;
let highscore = 0;
//document.querySelector(".number").textContent = secretnumber;   

const displaymessage = function(messages){
    document.querySelector(".message").textContent = messages;
}

document.querySelector(".check").addEventListener("click", function(){
    const guess = Number(document.querySelector(".guess").value);   // Storing a value into a variable
    console.log(guess, typeof(guess));

    if (!guess) {
        displaymessage("⛔ No Number!"); 
    }

    else if (guess!=secretnumber){
        if (score > 0){
            displaymessage((guess < secretnumber) ? "🤷‍♂️ Too low" : "🤷 Too high");
            score -= 1 ;
            document.querySelector(".score").textContent = score;
        }
        else{
            displaymessage("🚩 You lost the game!");
            document.querySelector("body").style.backgroundColor = "red";
        }
    }

    else if (guess === secretnumber){
        displaymessage("💥 Congrats! Correct Number!");
        document.querySelector(".number").textContent = secretnumber;   
        document.querySelector("body").style.backgroundColor = "#60b347";   // .style helps to manipulate CSS
        document.querySelector(".number").style.width = "30rem";
        // Setting Highscore
        if (score > highscore){
            highscore = score;
            document.querySelector(".highscore").textContent = highscore;
            console.log(highscore);
        };
    }
});

// Resetting the page with Again button 
/*
document.querySelector(".again").addEventListener("click", function(){
    score = 20;
    secretnumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector(".message").textContent="Start Guessing.....";
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";
    document.querySelector(".guess").value = "";
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector(".number").style.width = "15rem";
});
*/

document.querySelector(".again").addEventListener("click",function(){
    document.querySelector("body").style.backgroundColor= "#222";
    document.querySelector(".message").textContent = "Start Guessing...";
    // Fixing secretnumber & Score
    score = 20; 
    document.querySelector(".score").textContent = score;
    document.querySelector(".number").textContent = "?";     
    document.querySelector(".guess").value= "";
}); 



