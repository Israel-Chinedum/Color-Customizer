// GET DOM ELEMENTS
let color_customizer = document.querySelector('.color-customizer')
let red_fluid = document.querySelector('#red-fluid')
let blue_fluid = document.querySelector('#blue-fluid')
let green_fluid = document.querySelector('#green-fluid')
let red_tube = document.querySelector('#red-tube')
let blue_tube = document.querySelector('#blue-tube')
let green_tube = document.querySelector('#green-tube')
let colorDetail = document.querySelector('.color-detail')
let body = document.querySelector('body')

// SET DEFAULT COLOR VALUES
let red = 0
let green = 0
let blue = 0


// CREATE FUNCTION TO EDIT COLORS
function EditColor(e){


// CONFIRM WHERE ON THE TUBE WAS CLICKED
    let length = (e.offsetX / this.offsetWidth) * 100

    
// CONFIRM WHICH TUBE IS BEING CLICKED AND EDIT ITS VALUE
    switch(this){
        case red_tube:
            red_fluid.style.width = `${length}%`
           colorDetail.children[0].children[0].innerHTML = `${Math.round(length)}%`
           red = length
            break;
        case green_tube:
            green_fluid.style.width = `${length}%`
            colorDetail.children[1].children[0].innerHTML = `${Math.round(length)}%`
            green = length
            break;
        case blue_tube:
            blue_fluid.style.width = `${length}%`
            colorDetail.children[2].children[0].innerHTML = `${Math.round(length)}%`
            blue = length

    }

// SET BODY BACKGROUND
    body.style.backgroundColor = `rgb(${red}% ${green}% ${blue}%)`
}


// LISTEN FOR CLICK EVENTS FROM THE USER
red_tube.addEventListener('click', EditColor)
green_tube.addEventListener('click', EditColor)
blue_tube.addEventListener('click', EditColor)

red_tube.addEventListener('mousedown', ()=>{
    red_tube.addEventListener('mousemove', EditColor)
})

green_tube.addEventListener('mousedown', ()=>{
    green_tube.addEventListener('mousemove', EditColor)
  })

blue_tube.addEventListener('mousedown', ()=>{
    blue_tube.addEventListener('mousemove', EditColor)
  })
  
window.addEventListener('mouseup', ()=>{

    red_tube.removeEventListener('mousemove', EditColor)
    
    green_tube.removeEventListener('mousemove', EditColor)

    blue_tube.removeEventListener('mousemove', EditColor)
    
  })
