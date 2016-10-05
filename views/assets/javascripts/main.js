var words = ["code", "design", "create"]
var index = 0
var frame = 0
var goingback = false
var wordsIndex = 0
var typed = document.querySelector("#typed")
var doc = document.documentElement

// lettering for home.
function mainloop(){
    requestAnimationFrame(mainloop)
    frame++
    var modulo = goingback ? 5 : 10

    if (!(frame % modulo)) {
        index += goingback ? -1 : 1
        if (index <= words[wordsIndex].length) {
            typed.innerHTML = words[wordsIndex].substr(0, index)
        } else {
            goingback = true
        }
        if (index == 0) {
            goingback = false
            wordsIndex++
            wordsIndex %= words.length
        }
    }
}

if (typeof(typed) != 'undefined' && typed != null){
  mainloop()
}

// transforming section nodeList on an array
  // getting sections
let sections = document.querySelectorAll("section.section")
let sectionPosY = []

for(let s = 0; s < sections.length; s++){
  let yPos = sections[s].getBoundingClientRect()
  let obj = {section: sections[s].id, y:  Math.floor(yPos.top)}
  sectionPosY.push(obj)
}

var positions = sectionPosY.map(function(position){
  return position.y
})

console.log(positions)


// get curent scroll position on scroll lol
let latestKnownScrollY = 0,
	ticking = false

function onScroll() {
	latestKnownScrollY = window.scrollY
	requestTick()
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update)
	}
	ticking = true
}

function update() {
	ticking = false
	var currentScrollY = latestKnownScrollY
  console.log(currentScrollY)

  if ( currentScrollY >= 200 &&  currentScrollY <= 205) {
      var menu = document.querySelector('#menu')
      menu.classList.add('fixed');
  }
}

window.addEventListener('scroll', onScroll, false)
