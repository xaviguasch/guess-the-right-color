const colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll(".square")
const pickedColor = pickColor()
const colorDisplay = document.getElementById("colorDisplay")
const messageDisplay = document.querySelector("#message")

colorDisplay.textContent = pickedColor

for(let i = 0; i < squares.length; i++) {
    // Add initial colors to squares
    squares[i].style.backgroundColor = colors[i]

    // Add click listeners to squares
    squares[i].addEventListener('click', function() {
        // Grab color of clicked square 
        const clickedColor = this.style.backgroundColor

        //and compare color to picked color
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = 'Correct!'
            changeColors(clickedColor)
            
        } else {
            this.style.backgroundColor = "#232323"
            messageDisplay.textContent = 'Try again!'      

        }
    })
}

function changeColors(color) {
    // loop through all squares
    for(let i = 0; i < squares.length; i++) {
        // change color to match given color
        squares[i].style.backgroundColor = color
    }
}

function pickColor() {
    const random = Math.floor(Math.random() * colors.length)
    return colors[random]
}