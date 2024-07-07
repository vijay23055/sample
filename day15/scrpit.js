countdown = 10

const message = function()
{
    let timer = document.getElementById("timer")
    if(countdown> 0 )
    {
    countdown--
    timer.innerHTML = `<h2>Countdown Begins ${countdown}</h2>`
    setTimeout(message, 1000)
    }
    
    if (countdown == 0){
        timer.innerHTML ="<h1>Happy Independence Day</h1>"
        console.log("happy")
    }
    
};

message();

// let countdown = 10;

// const updateCountdown = function() {
//     let timer = document.getElementById("timer");
    
//     if (countdown > 0) {
//         timer.innerHTML = `<h1>Countdown: ${countdown}</h1>`;
//         countdown--;
//         setTimeout(updateCountdown, 1000);
//     } else {
//         timer.innerHTML = `<h1>Happy Independence Day!</h1>`;
//         console.log("Happy Independence Day");
//     }
// };