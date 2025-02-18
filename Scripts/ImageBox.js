function UpdateImageBoxes()
{
    let ImageBoxes = [...document.getElementsByClassName("image-box")]
    ImageBoxes.forEach(function(ImageBox) 
    {
        let ImageRect = ImageBox.getBoundingClientRect()
        let LeftSided = (ImageRect.x < window.innerWidth / 2)
        let MoveDirection = LeftSided ? -1 : 1

        let CalculatedDistance = Math.clamp(window.scrollY - ImageRect.y + ImageRect.height / 2.5, -1e3, (ImageRect.width + 25))
        //console.log(CalculatedDistance)
        let DistanceMagnitude = CalculatedDistance / ImageRect.width
        let MoveDistance = Math.nzoSoftClamp(DistanceMagnitude / 2, 0, 1, 3.4) * ImageRect.width + 50

        ImageBox.style.left = `${LeftSided ? 
            -(ImageRect.width - 25 - MoveDistance) : // Left-Side
            ImageRect.width - MoveDistance - 25 // Right-Side
        }px`
    })
}