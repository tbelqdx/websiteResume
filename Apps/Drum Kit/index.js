var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for(var i=0;i<numberOfDrumButtons;i++)
{
    document.querySelectorAll(".drum")[i].addEventListener("click", handleClick); //get first button and add a listener
}

    //Detecting button click
function handleClick(){

    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);
}

    //Detecting keybord press
document.addEventListener("keypress" , function(event){
    makeSound(event.key);

    buttonAnimation(event.key);
})

function makeSound(key)
{
    switch(key)
    {
        case "a":
            var tom1 = new Audio("/Apps/Drum Kit/sounds/tom-1.mp3");
            tom1.play();
            break;

        case "z":
            var tom2 = new Audio("/Apps/Drum Kit/sounds/tom-2.mp3");
            tom2.play();
            break;

        case "e":
                var tom3 = new Audio("/Apps/Drum Kit/sounds/tom-3.mp3");
                tom3.play();
                break;

        case "r":
                var tom4 = new Audio("/Apps/Drum Kit/sounds/tom-4.mp3");
                tom4.play();
                break;

        case "t":
                var snare = new Audio("/Apps/Drum Kit/sounds/snare.mp3");
                snare.play();
                break;

        case "y":
                var crash = new Audio("/Apps/Drum Kit/sounds/crash.mp3");
                crash.play();
                break; 

        case "u":
                var kick = new Audio("/Apps/Drum Kit/sounds/kick-bass.mp3");
                kick.play();
                break;     
                
        default: console.log(buttonInnerHTML);
    }
}

function buttonAnimation(key){
    var activeButton = document.querySelector("." + key);
    console.log(key);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100)
}