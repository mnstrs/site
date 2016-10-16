// lettering effect.

var words       = ['code', 'design', 'create']
  ,index        = 0
  ,frame        = 0
  ,goingback    = false
  ,wordsIndex   = 0
  ,typed        = document.querySelector('#typed')
  ,home         = document.querySelector('#home')

function mainloop(){
    // request animation frame
    animation(mainloop)
    frame++

    var modulo = goingback ? 5 : 10

    if (!(frame % modulo)) {
        index += goingback ? -1 : 1

        if (index <= words[wordsIndex].length)
            typed.innerHTML = words[wordsIndex].substr(0, index)
        else
            goingback = true

        if (index == 0) {
            goingback = false
            wordsIndex++
            wordsIndex %= words.length
        }
    }
}
// check if has the typed effect
if (typeof(typed) != 'undefined' && typed != null)
    mainloop()
