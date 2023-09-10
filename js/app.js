let playGameBtn = document.getElementById('play_game_btn')
let gameBox = document.getElementById('game_box');
let playerOne = document.getElementById('player_one');
let playerTwo = document.getElementById('player_two');
let inputOne = document.getElementById('input_one');
let inputTwo = document.getElementById('input_two');
let submitBtnOne = document.getElementById('submit_btn_one');
let submitBtnTwo = document.getElementById('submit_btn_two');
let mainPage = document.getElementById('main_page')

function startGame(){
    gameBox.style.display ="flex"
    mainPage.style.display ="none"
    inputOne.focus()
}

// playGame.addEventListener('click', function(){
//     if(playGame){
//         gameBox.style.display ="block"
//     }
// });
// playGameBtn.addEventListener('click', function(){
//     console.log("hello")
// });

submitBtnOne.addEventListener('click', function(){
    if(submitBtnOne){
        if(inputOne.value ==""){
            alert("enter your number")
        }
        else if(inputOne.value <0){
            alert("enter valide number")
        }
        else if(inputOne.value >11){
            alert("enter  a number lessthen 10")
        }
        else{
            playerOne.style.display ="none"
            playerTwo.style.display ="block"
            submitBtnTwo.style.display ="block"
            inputTwo.focus()
            submitBtnTwo.addEventListener('click', function(){
                if(submitBtnTwo){
                    if(inputTwo.value == ""){
                        alert("enter your number")
                    }
                    else if(inputOne.value <0){
                        alert("enter valide number")
                    }
                    else if(inputOne.value >11){
                        alert("enter  a number lessthen 10")
                    }
                    else if(inputOne.value != inputTwo.value){
                        alert("try agin")
                    }
                    else{
                        alert("you win")
                        window.location=("index.html")
                    }
                }
            })
        }
    }
});