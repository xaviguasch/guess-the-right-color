let numSquares = 6
let colors = generateRandomColors(numSquares)

const squares = document.querySelectorAll(".square")
let pickedColor = pickColor()
const colorDisplay = document.getElementById("colorDisplay")
const messageDisplay = document.querySelector("#message")

const h1 = document.querySelector("h1")
const resetButton = document.querySelector("#reset")
const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")

easyBtn.addEventListener('click', function() {
    hardBtn.classList.remove("selected")
    easyBtn.classList.add("selected")  
    numSquares = 3
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor

    for(let i = 0; i < squares.length; i ++) {
        if (colors[i]) {
            squares[i].style.background = colors[i]
        } else {
            squares[i].style.display = "none"
        }
    }

})
hardBtn.addEventListener('click', function() {
    easyBtn.classList.remove("selected")
    hardBtn.classList.add("selected")
    numSquares = 6 
    colors = generateRandomColors(numSquares)
    pickedColor = pickColor()
    colorDisplay.textContent = pickedColor
    
    for(let i = 0; i < squares.length; i ++) {
        squares[i].style.background = colors[i]
        squares[i].style.display = "block"

    }})

resetButton.addEventListener('click', function() {
    // generate all new colors
    colors = generateRandomColors(numSquares)
    // pick a new random color from array
    pickedColor = pickColor()

    // change colorDisplay to match picked Color
    colorDisplay.textContent = pickedColor

    // change colors of squares 
    for(let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i]
    }

    h1.style.backgroundColor = "#232323"
    
})

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
            resetButton.textContent = 'Play Again?'
            changeColors(clickedColor)
            h1.style.backgroundColor = clickedColor
            
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

function generateRandomColors(num) {
    // make an array
    const arr = []

    // repeat num times
    for(let i = 0; i < num; i++) {
        // get random color and push into array
        arr.push(randomColor())
    }

    // return that array
    return arr
}

function randomColor() {
    // pick a "red" from 0 -255
    const r = Math.floor(Math.random() * 256)
    // pick a "green" from 0 -255
    const g = Math.floor(Math.random() * 256)
    // pick a "blue" from 0 -255
    const b = Math.floor(Math.random() * 256)

    return `rgb(${r}, ${g}, ${b})`



}