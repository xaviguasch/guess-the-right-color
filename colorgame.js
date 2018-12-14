const colors = [
    "rgb(255, 0, 0)", 
    "rgb(255, 255, 0)",
    "rgb(0, 255, 0)",
    "rgb(0, 255, 255)",
    "rgb(0, 0, 255)",
    "rgb(255, 0, 255)"
]

const squares = document.querySelectorAll(".square")
const pickedColor = colors[3]
const colorDisplay = document.getElementById("colorDisplay")

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
            console.log('we got a winner');      
        } else {
            console.log('wrong');         
        }
    })
}