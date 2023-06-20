let timer = 0;
let interval;

let ms = document.querySelector('#main-ms');
let seconds = document.querySelector('#main-seconds');
let minutes = document.querySelector('#main-min');
let hours= document.querySelector('#main-hours')

function start() {

        //interval = setInterval(function() { ... }, 10);


    interval = setInterval(function() {
        timer += 1; // Increment the timer by 1 second

        //calculates the value of milliseconds by taking the remainder of the timer divided by 100.
        // This ensures that msVal represents the value in the range 0-99.
        let msVal = Math.floor(timer % 100);


        /* This line calculates the value of seconds by dividing
          the timer by 100 to convert it to seconds and then taking
           the remainder of that value divided by 60. This ensures that 
          secVal represents the value in the range 0-59
         */
        let secVal = Math.floor((timer / 100) % 60);

       /* This line calculates the value of minutes by dividing the 
        timer by 6000 (100 * 60) to convert it to minutes. 
        It represents the whole number of minutes elapsed since the timer started.
        */
        let minVal = Math.floor(timer / 6000);
        
        let hoursVal =Math.floor(timer/360000);

        ms.textContent = msVal < 10 ? '0' + msVal.toString() : msVal;
        seconds.textContent = secVal < 10 ? '0' + secVal.toString() : secVal;
        minutes.textContent = minVal < 10 ? '0' + minVal.toString() : minVal;
        hours.textContent=hoursVal <10 ? '0'+ hoursVal.toString():hoursVal;
    }, 10); // Interval set to 10 milliseconds (for better accuracy)
}


function stop(){
    clearInterval(interval);
}
function reset(){
    clearInterval(interval);
    timer=0;

    ms.textContent='00';
    seconds.textContent='00';
    minutes.textContent='00';
    hours.textContent='00';
}

