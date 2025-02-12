let MouseHilightSize = new Vector2(20, 30) // 0-100

let HilightClamp = 1

function CalculateHilightWidth(x) 
{
    x = Math.abs(x) < HilightClamp ? HilightClamp : Math.abs(x)
    x *= 1 / 1e2
    //console.log(x)
    // let Return = 1 / Math.sqrt(Math.factorial(Math.sqrt(x) + 0.5))
    //return (1 / (Math.pow(x * 10, 2) + 1)) * m + 1
    //return 10 / Math.factorial(Math.log2(Math.sqrt(x) + 1) + 0.5) + 1
    return (Math.E / 1.25) / Math.sqrt(Math.factorial(Math.sqrt(x) + 0.5)) + 1
}

function UpdateMouseHilight(Position)
{
    let MouseHilight = [...document.getElementsByTagName("cursor-hilight")][0]
    let Distance = new Vector2(Position.X - (window.innerWidth / 2), Position.Y - (window.innerHeight / 2.3))
    let HilightWidth = CalculateHilightWidth(Distance.Pythag)
    //console.log(HilightWidth)
    MouseHilightSize.X =  HilightWidth * 10
    MouseHilightSize.Y =  HilightWidth * 15
    MouseHilight.style.backgroundImage = `radial-gradient(circle at ${Position.X}px ${Position.Y + window.scrollY}px, rgba(0, 0, 0, 0) ${MouseHilightSize.X}vh, rgba(0, 0, 0, 0.7) ${MouseHilightSize.Y}vh)`
}

function Main() 
{
    document.addEventListener('mousemove', (Event) => {
        // UpdateSpotLights(SpotLights, Event)
        UpdateMouseHilight(new Vector2(Event.x, Event.y))
    })

    UpdateMouseHilight(new Vector2(0, 0))
    
    document.addEventListener('scroll', (Event) => {
        UpdateImageBoxes()
        let BottomScrollIndicator = document.getElementById("bottom-scroll-indicator")
        BottomScrollIndicator.style.bottom = `${-window.scrollY}px`
    })
}

document.onreadystatechange = Main;
