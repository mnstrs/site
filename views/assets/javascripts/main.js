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


/* / on scroll effcts
var latestKnownScrollY = 0,
	ticking = false;

function onScroll() {
	latestKnownScrollY = window.scrollY;
	requestTick();
}

function requestTick() {
	if(!ticking) {
		requestAnimationFrame(update);
	}
	ticking = true;
}

function update() {
	ticking = false;
	var currentScrollY = latestKnownScrollY;
  console.log(currentScrollY)
}

window.addEventListener('scroll', onScroll, false);

*/
