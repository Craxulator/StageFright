const Delay = ms => new Promise(res => setTimeout(res, ms));

const Songs = 
{
    "TestSong" : "./Assets/Audio/TestSong.mp3"
}


let Vinyl = null
let VinylCover = null



async function Play(SongName)
{
    // const SongPath = Songs[SongName]
    VinylCover.style.left = ""
    Vinyl.style.animation = "OpenVinyl 1s linear forwards"
    VinylCover.style.animation = "OpenCover 1s linear forwards"
    await Delay(1_000)
    Vinyl.style.animation = "Spin 30s linear forwards reverse infinite"
    Vinyl.style.left = "34.5vw"
}

async function Stop(SongName)
{
    VinylCover.style.right = "34.5vw"
    Vinyl.style.animation = "OpenCover 1s linear"
    VinylCover.style.animation = "OpenVinyl 1s linear"
    await Delay(1_000)
    Vinyl.style.left = "41.875vw"
    VinylCover.style.right = ""
}

async function Main()
{
    Vinyl = document.getElementById("vinyl")
    VinylCover = document.getElementById("vinyl-cover")
}

document.onreadystatechange = async function()
{
    Main()
    console.log("Execution Complete!")
}