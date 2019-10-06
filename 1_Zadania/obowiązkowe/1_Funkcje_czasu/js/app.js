function cointHello(num) {
    let counter = 1;
    let intervalHandle = setInterval(() => {
        console.log("Hello " + counter);
        if(num == counter)
        {
            clearInterval(intervalHandle);
        }
        counter++;
    }, 500);
}

countHello(4)