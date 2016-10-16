 // requesting requestAnimationFrame // if browser not support get a setTimeout out
const animation =  window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.msRequestAnimationFrame
                || window.oRequestAnimationFrame
                || function(callback){ window.setTimeout(callback, 1000/60) }
