let counter = 1;
setInterval(() => {
    let radio = document.querySelector("#radio" + counter);
    radio.checked = true;
    counter++;
    if (counter > 4) {
        counter = 1;
    }
}, 5000);