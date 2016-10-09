var words = ["code", "design", "create"]
var index = 0
var frame = 0
var goingback = false
var wordsIndex = 0
var typed = document.querySelector("#typed")
var home = document.querySelector("#home")
var doc = document.documentElement
var menu = document.querySelector('#menu')

var height = window.innerHeight
|| doc.clientHeight
|| document.body.clientHeight


let elements = document.querySelectorAll('section.section')
let count = elements.length
var indice = []
var lastPosition = -1
var wHeight = window.innerHeight
var wrap = document.querySelector('#wrap')
// getting sizes
function sizes(){
    lastPosition = -1 // Force a recalculation
    wHeight = window.innerHeight
    var i = 0
    for (i =0; i<count; i++){

        indice[i] = indice[i] || { el: elements[i] }
        // Reini

        indice[i].el.style.display = "block"
        indice[i].height = indice[i].el.offsetHeight
        indice[i].start = indice[i-1] ? indice[i-1].stop : 0
        indice[i].stop = indice[i-1] ? indice[i-1].stop + indice[i].height : indice[i].height
        indice[i].isScroll = indice[i].el.className.indexOf("stick") < 0

        // If it's sticked but higher than the screen...
        if (indice[i].height - wHeight > 0) indice[i].gap = indice[i].height - wHeight

        // Let's find a index
        indice[i].el.style.zIndex = !indice[i].isScroll ? 10 - i : 100 - i

    }
    wrap.style.height = indice[i-1].stop + "px"
}

sizes()

console.log(indice)

// lettering effect.
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

// if has typed element,runs lettering effect
if (typeof(typed) != 'undefined' && typed != null){
  mainloop()
}
