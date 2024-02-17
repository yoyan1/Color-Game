let colors = ['red', 'green', 'yellow', 'blue', 'white', 'magenta']
let jackpot = document.querySelectorAll(".box");
let jackpotColor = Math.floor(Math.random() * 6);
jackpot.forEach((jackpot) => {
    jackpot.style.background = colors[jackpotColor];
})

let box1 =document.querySelector(".box1");
let box2 =document.querySelector(".box2");
let box3 =document.querySelector(".box3");

let colorBox = document.querySelectorAll(".color-box");
let coin = Number(100000);
document.getElementById("coin").innerHTML = coin;

bet += 1;
document.getElementById("bet").addEventListener("change", () => {
    bet = Number(document.getElementById("bet").value);

})

colorBox.forEach((box) => {
    box.addEventListener("click", () => {
        var total = Number(box.innerHTML) + bet;
        if(coin >= bet){
            box.innerHTML = total;  
            totalBet(bet);
        } else{
            document.getElementById("err").innerHTML="not enough balance"
            setTimeout(() => {
                document.getElementById("err").innerHTML=""
            }, 3000)
        }
    })
});
function roll(){

        colorBox.forEach((box) => {
            box.style.pointerEvents = 'none';
        });
        let stopCount = 0;
        var box1Background = box1.style.background;
        var box2Background = box2.style.background;
        var box3Background = box3.style.background;
        
    
        let set = setInterval(() =>{
                        stopCount+=1;
                    
                        var boxRandom1 = Math.floor(Math.random() * 6);
                        var boxRandom2 = Math.floor(Math.random() * 6);
                        var boxRandom3 = Math.floor(Math.random() * 6);
                        if(stopCount <= 20){
                        
                        } else{
                            stop(boxRandom1, boxRandom2, boxRandom3);
                        }
                        box1.style.background = colors[boxRandom1];
                        box2.style.background = colors[boxRandom2];
                        box3.style.background = colors[boxRandom3];
                    }, 500);
        function stop(color1, color2, color3) {
            clearInterval(set);
            let bet = 0;
            colorBox.forEach((box) => {
                var allBox = Number(box.innerHTML);
                var boxColor = box.style.background;
                if(allBox > 0){
                    if(boxColor == colors[color1] || boxColor == colors[color2] || boxColor == colors[color3]){
                        if(boxColor == colors[color2] && boxColor == colors[color1] || boxColor == colors[color2] && boxColor == colors[color3 || boxColor == colors[color3] && boxColor == colors[color1] ]){
                            if(boxColor == colors[color1] && boxColor == colors[color2] && boxColor == colors[color3]){
                                if(boxColor == colors[jackpotColor]){
                                    bet += allBox * 20;
                                    box.innerHTML = "";
    
                                } else{

                                    bet += allBox * 4;
                                    box.innerHTML = "";
    
                                }
                            } else{
                                bet += allBox * 3;
                                box.innerHTML = "";

                            }
                        } else{
                            bet += allBox * 2;
                            box.innerHTML = "";
                        }
                        
                    } else{
                        box.innerHTML = "";
                    }
                } else{
                    
                }
            })
            addCoinBal(bet);
            loop();
        }

}
function loop() {
    let seconds = 60;
    document.getElementById("err").innerHTML = "";
    const counting = setInterval(() => {
        seconds-=1;
        document.getElementById("count").innerHTML = "start betting<br>";
        colorBox.forEach((box) => {
            box.style.pointerEvents = 'auto';
        });

        if(seconds <= 0){
            document.getElementById("count").innerHTML = "Roll";
            stopCount();
        } else if(seconds <= 10 && seconds >=1 ){
            document.getElementById("count").innerHTML = "stop betting";
            colorBox.forEach((box) => {
                box.style.pointerEvents = 'none';
                document.getElementById("err").innerHTML = "Stop Betting";
            });
        }
        else{
            document.getElementById("count").innerHTML += seconds;
        }
    }, 1000)

    function stopCount() {
        clearInterval(counting);
        roll();
    }
}

loop();

function totalBet(bet) {
    coin -= bet
    document.getElementById("coin").innerHTML = coin;
}

let winCredit = Number(0);
function addCoinBal(credit){
    if (credit > 0) {
        const setWinCount = setInterval(() => {
            if (winCredit >= credit) {
                winCredit = credit;
                stopWinCount();
            } else{
                if(winCredit <= 10000){
                    coin += 50;
                    winCredit = winCredit + 50;
                    document.querySelector("#winCount").innerHTML ='Big Win';
                } else if(winCredit <= 50000){
                    coin += 100;
                    winCredit = winCredit +  100;
                    document.querySelector("#winCount").innerHTML ='Mega Win';
                } else if(winCredit <= 100000){
                    coin += 1000;
                    winCredit = winCredit + 1000;
                    document.querySelector("#winCount").innerHTML ='Super Win';
                } else if(winCredit >= 100000){
                    coin += 10000;
                    winCredit = winCredit + 10000;
                    document.querySelector("#winCount").innerHTML ='Super Win';
                } else if(winCredit >= 100000){
                    coin += 10000;
                    winCredit = winCredit + 10000;
                    document.querySelector("#winCount").innerHTML ='Super Win';
                }  else{
                    coin += 1;
                    winCredit ++;
                }
               
            }
            document.getElementById("coin").innerHTML = coin;
            document.querySelector(".win").style.display ='block';
            document.getElementById("credit").innerHTML = winCredit;
        }, 1);

        function stopWinCount() {
            clearInterval(setWinCount);
            setTimeout(() => {
                document.querySelector(".win").style.display ='none';
                winCredit = 0
            }, 3000);
        }
    }
}