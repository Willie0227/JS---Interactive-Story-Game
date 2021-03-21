var wholeBgm = new Audio('audio/Subnautica Main Theme.mp3')
var clickSound = new Audio('audio/Minecraft Button Sound Effects.mp3')
var reaperSound = new Audio('audio/Subnautica - Reaper leviathan sounds.mp3')
var loseSound = new Audio('audio/sounds_lose.mp3')
var winSound = new Audio('audio/sounds_win.mp3')

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


function ExploretheOcean() {

    clickSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/subnautica-coral-reef-zone.jpg')"
    document.querySelector(".title").innerHTML = "Welcome to a Peaceful Area"
    document.querySelector(".sub-title").innerHTML = "You have discover new places full of resources...."
    document.querySelector(".title").style.color = "black"
    document.querySelector(".sub-title").style.color = "black"
    document.querySelector(".groupLore2").classList.add("invisible")
    document.querySelector(".groupLore3").classList.add("invisible")
    document.querySelector(".story-pg1").classList.add("invisible")
    document.querySelector(".gif").classList.add("invisible")
    document.querySelector(".groupLore3-1").classList.remove("invisible")
    document.querySelector(".groupLore3-2").classList.remove("invisible")
    document.querySelector(".gifPeacefulZone").classList.remove("invisible")
    document.querySelector(".story-pg1-2").classList.remove("invisible")

}

function toTheTrench() {

    clickSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/BloodKelpZoneNorthTrue.png')"
    document.querySelector(".title").innerHTML = "Where's Here?"
    document.querySelector(".sub-title").innerHTML = "You make yourself living in danger condition...."
    document.querySelector(".title").style.color = "white"
    document.querySelector(".sub-title").style.color = "white"
    document.querySelector(".groupLore3-1").classList.add("invisible")
    document.querySelector(".groupLore3-2").classList.add("invisible")
    document.querySelector(".gifPeacefulZone").classList.add("invisible")
    document.querySelector(".story-pg1-2").classList.add("invisible")
    document.querySelector(".story-pg1-2-1").classList.remove("invisible")
    document.querySelector(".hungryImg").classList.remove("invisible")
    document.querySelector(".groupLore3-1-1").classList.remove("invisible")
}

function peacefulZone() {

    clickSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/20151214_SN_Wrecked_Backup1.jpg')"
    document.querySelector(".title").innerHTML = "WOWWW! What a big wreck of Aurora"
    document.querySelector(".sub-title").innerHTML = "Here are some clues that can help you escape from the planet...."
    document.querySelector(".title").style.color = "black"
    document.querySelector(".sub-title").style.color = "black"
    document.querySelector(".groupLore3-1").classList.add("invisible")
    document.querySelector(".groupLore3-2").classList.add("invisible")
    document.querySelector(".scanningImg").classList.remove("invisible")
    document.querySelector(".story-pg1-2").classList.add("invisible")
    document.querySelector(".story-pg1-2-2").classList.remove("invisible")
    document.querySelector(".hungryImg").classList.add("invisible")
    document.querySelector(".gifPeacefulZone").classList.add("invisible")
    document.querySelector(".groupLore3-1-1").classList.add("invisible")
    document.querySelector(".groupLore3-2-1").classList.remove("invisible")
    document.querySelector(".groupLore3-2-2").classList.remove("invisible")
}

function CollectBlueprints() {

    clickSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/Subnautica-Seamoth-Fragment.jpg')"
    document.querySelector(".title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".sub-title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".title").innerHTML = "CONGRATULATION! YOU FOUND ALL THE BLUEPRINTS"
    document.querySelector(".sub-title").innerHTML = "YOU ARE NOW ABLE TO BUILD A CYCLOPS...."
    document.querySelector(".title").style.color = "black"
    document.querySelector(".sub-title").style.color = "black"
    document.querySelector(".scanningImg").classList.add("invisible")
    document.querySelector(".groupLore3-2-1").classList.add("invisible")
    document.querySelector(".groupLore3-2-2").classList.add("invisible")
    document.querySelector(".story-pg1-2-2").classList.add("invisible")
    document.querySelector(".story-pg2-1").classList.remove("invisible")
    document.querySelector(".cyclopsImg").classList.remove("invisible")
    document.querySelector(".gifDying").classList.add("invisible")
    document.querySelector(".groupLore8").classList.remove("invisible")

}

function buildingRocket() {

    clickSound.play()
    winSound.play()
    document.querySelector(".container").style.backgroundImage = "url('images/cyclops_1.jpg')"
    document.querySelector(".title").innerHTML = "YOU WIN THE GAME!!!"
    document.querySelector(".sub-title").innerHTML = "YOU ARE NOW ABLE TO BUILD A ROCKET...."
    document.querySelector(".groupLore1").classList.remove(".invisible")
    document.querySelector(".story-pg2-1").classList.add("invisible")
    document.querySelector(".story-pg2-1-1").classList.remove("invisible")
    document.querySelector(".launchImg").classList.remove("invisible")
    document.querySelector(".cyclopsImg").classList.add("invisible")
    document.querySelector(".groupLore8").classList.add("invisible")
    document.querySelector(".groupLore7").classList.remove("invisible")

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

function retreatBack() {

    clickSound.play()
    loseSound.play()
    reaperSound.pause()
    document.querySelector(".container").style.backgroundImage = "url('images/7nb3y2tc59e01.jpg')"
    document.querySelector(".title").style.backgroundColor = "unset"
    document.querySelector(".sub-title").style.backgroundColor = "unset"
    document.querySelector(".title").style.color = "white"
    document.querySelector(".sub-title").style.color = "white"
    document.querySelector(".title").innerHTML = `Watch out ${explorer}, HAVE A BETTER CONTROL OF YOUR OXYGEN!!!`
    document.querySelector(".sub-title").innerHTML = `NOT TO DROWN IN THE OCEAN AGAIN....`
    document.querySelector(".story-pg3").classList.add("invisible")
    document.querySelector(".scanningImg").classList.add("invisible")
    document.querySelector(".groupLore7").classList.remove("invisible")
    document.querySelector(".story-pg2-2").classList.remove("invisible")
    document.querySelector(".gifDying").classList.remove("invisible")
    document.querySelector(".groupLore5").classList.add("invisible")
    document.querySelector(".groupLore6").classList.add("invisible")
}

function CollectMaterial() {

    clickSound.play()
    reaperSound.pause()
    winSound.play()
    document.querySelector(".container").style.backgroundImage = " url('images/maxresdefault (2).jpg')"
    document.querySelector(".title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".sub-title").style.backgroundColor = "rgba(255, 255, 255, 0.8)"
    document.querySelector(".title").style.color = "black"
    document.querySelector(".sub-title").style.color = "black"
    document.querySelector(".title").innerHTML = `${explorer}, LOOK WHAT YOU HAVE BUILT!!!`
    document.querySelector(".sub-title").innerHTML = `THIS BASE IS SOOOO BEAUTIFUL.... INCREDIBLE`
    document.querySelector(".scanningImg").classList.add("invisible")
    document.querySelector(".story-pg3").classList.add('invisible')
    document.querySelector(".story-pg5").classList.remove('invisible')
    document.querySelector(".groupLore3-2-1").classList.add('invisible')
    document.querySelector(".groupLore3-2-2").classList.add('invisible')
    document.querySelector(".groupLore7").classList.remove('invisible')
    document.querySelector(".story-pg1-2-2").classList.add('invisible')
    document.querySelector(".baseImg").classList.remove('invisible')


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

    document.querySelector(".groupLore3-1").classList.add("invisible")
    document.querySelector(".groupLore3-2").classList.add("invisible")
    document.querySelector(".gifPeacefulZone").classList.add("invisible")
    document.querySelector(".story-pg1-2").classList.add("invisible")
    document.querySelector(".story-pg1-2-1").classList.add("invisible")
    document.querySelector(".hungryImg").classList.add("invisible")
    document.querySelector(".groupLore3-1-1").classList.add("invisible")
}

function ReturnToStart() {

    clickSound.play()
    winSound.pause()
    winSound.load()
    loseSound.pause()
    loseSound.load()
    reaperSound.load()
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
    document.querySelector(".story-pg2-1-1").classList.add("invisible")
    document.querySelector(".launchImg").classList.add("invisible")
    document.querySelector(".story-pg2-2").classList.add("invisible")
    document.querySelector(".story-pg5").classList.add('invisible')
    document.querySelector(".baseImg").classList.add('invisible')

    wholeBgm.load()
}