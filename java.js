let numberOfButtons = document.querySelectorAll(".button").length;

for (let i = 0; i < numberOfButtons; i++) {

document.querySelectorAll(".button")[i]
    .addEventListener("click", function() {
    const buttonStyle = this.innerHTML;
    sound(buttonStyle);
    animation(buttonStyle);
});
}


document.addEventListener("keypress", function(event) {
    sound(event.key);
    animation(event.key);
});

function sound(key) {
    switch (key) {
    case "1":
        let boom = new Audio("sounds/boom.wav");
        boom.play();
        break;

    case "2":
    let clap = new Audio("sounds/clap.wav");
    clap.play();
    break;
    
    case "3":
        let hiHat = new Audio("sounds/hihat.wav");
        hiHat.play();
        break;

    case "4":
        let kick = new Audio("sounds/kick.wav");
        kick.play();
        break;

    case "5":
        let openHat = new Audio("sounds/openhat.wav");
        openHat.play();
        break;

    case "6":
        let ride = new Audio("sounds/ride.wav");
        ride.play();
        break;

    case "7":
        let snare = new Audio("sounds/snare.wav")
        snare.play();
        break;

    case "8":
        let tink = new Audio("sounds/tink.wav")
        tink.play();
        break;

    case "9":
        let tom = new Audio("sounds/tom.wav")
        tom.play();
        break;

        default: console.log(key);
}
}



function animation(currentKey) {
    let activeButton = document.querySelector("." + currentKey);
    
    activeButton.classList.add("animation");
    
    setTimeout(function() {
    activeButton.classList.remove("animation");
    }, 100);
}