
//Detecting mouse click
let numberOfDrums = document.querySelectorAll(".drum").length 
for(let i = 0 ; i < numberOfDrums ; i++ )
{
    document.addEventListener("keypress",function(event){
    console.log(event.key);
    })
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
    let button_html = this.innerHTML;
    makeSound(button_html);
    button_animation(button_html);
});
}

//Detecting keyboard press
document.addEventListener("keydown",function(event){
    makeSound(event.key);
    button_animation(event.key);
})

function makeSound(key)
{
    switch (key) {
        case "w":
            var tom1 = new Audio('./sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('./sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('./sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('./sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('./sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var kick_bass = new Audio('./sounds/kick-bass.mp3');
            kick_bass.play();
            break;
        case "l":
            var crash = new Audio('./sounds/crash.mp3');
            crash.play();
            break;  
        default:
            break;
    }
}

function button_animation(key){
    let active_animation = document.querySelector("." + key);
    active_animation.classList.add("pressed");
    setTimeout(function(){
        active_animation.classList.remove("pressed");
    }
    ,100);
}