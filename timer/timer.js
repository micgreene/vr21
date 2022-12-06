let timerId;
let counter = 0;
let running = false;

function start(){
    running = true;
    document.querySelector("#pause").innerText = " -PAUSED-"
    if(!timerId){
        timerId = setInterval(() => {
            counter++;
            document.querySelector(".count").innerText = counter;
            console.log(running);

            if(running === true){
                // document.querySelector("#pause").innerText = " -PAUSED-";
                console.log("should update");
            } else {
                document.querySelector("#pause").innerText = "RUNNING";
                console.log("should update");
            }
        }, 100);
    }

    if(!running){
        document.querySelector("#pause").innerText = "RUNNING";
    }
}

function stop(){
    running = false;
    clearInterval(timerId);
    timerId = null;

    if(!running){
        document.querySelector("#pause").innerText = " -PAUSED-";
    }
}

function reset(){
    counter = 0;
    document.querySelector(".count").innerText = counter;

    if(!running){
        document.querySelector("#pause").innerText = " -PAUSED-";
    } else {
        document.querySelector("#pause").innerText = "RUNNING";
    }
}