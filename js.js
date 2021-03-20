var wholeBgm = new Audio('audio/Subnautica Main Theme.mp3')
var clickSound = new Audio('audio/Minecraft Button Sound Effects.mp3')
var reaperSound = new Audio('audio/Subnautica - Reaper leviathan sounds.mp3')
var loseSound = new Audio('audio/sounds_lose.mp3')

let explorer;


function bgm() {
    if (document.querySelector('#bgm-switch').checked) {
        wholeBgm.play();
    } else {
        wholeBgm.pause();
    }
}

function start() {

    clickSound.play()
    explorer = prompt("Before we start, please enter the explorer' name:")
    document.querySelector(".container").style.backgroundImage = "url('images/t128df6htj7z.jpg')"
    document.querySelector(".story-intro").classList.add("invisible")
    document.querySelector(".story-pg1").classList.remove("invisible")
    document.querySelector(".groupLore1").classList.add("invisible")
    document.querySelector(".groupLore2").classList.remove("invisible")
    document.querySelector(".groupLore3").classList.remove("invisible")
    document.querySelector(".title").innerHTML = `${explorer}'s Journey Under the Ocean`
    document.querySelector(".sub-title").innerHTML = `Lefting Alone in the unknown...`
    document.querySelector(".gif").classList.remove("invisible")
}

function SwimTowardAurora() {

    clickSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/maxresdefault.jpg')"
    document.querySelector(".title").innerHTML = `${explorer} swims toward the Aurora...`
    document.querySelector(".sub-title").innerHTML = `Ready to face something dangerous...`
    document.querySelector(".story-pg1").classList.add("invisible")
    document.querySelector(".groupLore2").classList.add("invisible")
    document.querySelector(".groupLore3").classList.add("invisible")
    document.querySelector(".gif").classList.add("invisible")
    document.querySelector(".story-pg2").classList.remove("invisible")
    document.querySelector(".groupLore4").classList.remove("invisible")
}

function KeepGoingOn() {

    clickSound.play()
    reaperSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/956004687_preview_20170618222709_1.jpg')"
    document.querySelector(".title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".sub-title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".title").style.color = "black"
    document.querySelector(".sub-title").style.color = "black"
    document.querySelector(".title").innerHTML = `Watch out ${explorer}, SUDDEN ATTACK FROM THE REAPER!!!`
    document.querySelector(".sub-title").innerHTML = `A DANGEROUS LEVIATHAN BESIDE YOUR SPACESHIP`
    document.querySelector(".story-pg2").classList.add("invisible")
    document.querySelector(".story-pg3").classList.remove("invisible")
    document.querySelector(".groupLore4").classList.add("invisible")
    document.querySelector(".groupLore5").classList.remove("invisible")
    document.querySelector(".groupLore6").classList.remove("invisible")
}

function IgnoreTheCreatureAndGoOn() {

    clickSound.play()
    reaperSound.pause()
    loseSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/the-terrors-of-the-deep-a-subnautica-game-review.png')"
    document.querySelector(".story-pg3").classList.add("invisible")
    document.querySelector(".story-pg4").classList.remove("invisible")
    document.querySelector(".groupLore5").classList.add("invisible")
    document.querySelector(".groupLore6").classList.add("invisible")
    document.querySelector(".gifDying").classList.remove("invisible")
    document.querySelector(".title").innerHTML = ` ${explorer}, YOU FAIL TO ESCAPE FROM THE PLANET!!!`
    document.querySelector(".sub-title").innerHTML = `BETTER LUCK NEXT TIME AND DON'T GET BEAT UP BY REAPER`
    document.querySelector(".groupLore7").classList.remove("invisible")
}

function ReturnToStart() {

    document.querySelector(".container").style.backgroundImage = "url('images/how-to-get-into-the-aurora-in-subnautica.jpg')"
    document.querySelector(".title").innerHTML = "Journey Under the Ocean"
    document.querySelector(".sub-title").innerHTML = "An adventurous and unpredictable journey...."
    document.querySelector(".title").style.backgroundColor = "unset"
    document.querySelector(".sub-title").style.backgroundColor = "unset"
    document.querySelector(".title").style.color = "white"
    document.querySelector(".sub-title").style.color = "white"
    document.querySelector(".groupLore1").classList.remove("invisible")
    document.querySelector(".story-pg4").classList.add("invisible")
    document.querySelector(".story-intro").classList.remove("invisible")
    document.querySelector(".gifDying").classList.add("invisible")
    document.querySelector(".groupLore7").classList.add("invisible")
    wholeBgm.load()
}