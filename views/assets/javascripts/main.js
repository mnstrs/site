(function(){

  // requesting requestAnimationFrame // if browser not support get a setTimeout out
  var animation =  window.requestAnimationFrame
                || window.webkitRequestAnimationFrame
                || window.mozRequestAnimationFrame
                || window.msRequestAnimationFrame
                || window.oRequestAnimationFrame
                || function(callback){ window.setTimeout(callback, 1000/60) }
  // lettering effect.
  ,words        = ['code', 'design', 'create']
  ,index        = 0
  ,frame        = 0
  ,goingback    = false
  ,wordsIndex   = 0
  ,typed        = document.querySelector('#typed')

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

  // Detect css transform
  var cssTransform = (function(){
      var prefixes = 'transform webkitTransform mozTransform oTransform msTransform'.split(' ')
        , el = document.createElement('div')
        , cssTransform
        , i = 0
      while( cssTransform === undefined ){
          cssTransform = document.createElement('div').style[prefixes[i]] != undefined ? prefixes[i] : undefined
          i++
       }
       return cssTransform
   })()

   var sections   = document.querySelectorAll('.section')
      ,wrapper    = document.querySelector('#wrap')
      ,menu       = document.querySelector('#menu')
      ,count      = sections.length
      ,section    = []
      ,lastY      = -1
   // Pre calculate sizes to get better perfs
   function props(){

       lastY = -1 // Force a recalculation
       wHeight = window.innerHeight

       var i = 0
       for (i =0; i<count; i++){
           section[i] = section[i] || { el: sections[i] }
           // Reinit
          // section[i].el.style.display = 'block'
           section[i].height = section[i].el.offsetHeight
           section[i].start = section[i-1] ? section[i-1].stop : 0
           section[i].stop = section[i-1] ? section[i-1].stop + section[i].height : section[i].height
           section[i].isScroll = section[i].el.className.indexOf('stick') < 0

           // If it's sticked but higher than the screen...
           if (section[i].height - wHeight > 0) section[i].gap = section[i].height - wHeight

           // Let's find a index
           section[i].el.style.zIndex = !section[i].isScroll ? 10 - i : 100 - i
       }

       console.log(section[i-1].stop)
       wrapper.style.height = section[i-1].stop + "px"

       return section
   }
   window.onresize = props

   function setTop(m, t){
       if (cssTransform)
           m.el.style[cssTransform] = "translate3d(0, "+ t +"px,0)"
       else
           m.el.style["top"] = t
   }

   function loop(){
       // Avoid calculations if not needed
       if (lastY == window.pageYOffset) {
           animation(loop)
           return false
       } else{
         lastY = window.pageYOffset
       }

       var i = 0
       for (i =0; i<count; i++){
           // Is it visible right now?

           if (lastY >= section[i].start - wHeight && lastY <= section[i].stop){
              // section[i].el.style.display = "block"
               if (
                   // Is it scrolling?
                   (section[i].isScroll) ||
                   // Or is it stick, but higher than window?
                   (!section[i].isScroll && section[i].gap && lastY >= section[i].start)
               )
                    setTop(section[i], section[i].start - lastY)
                    if(lastY >= section[1].start)
                        menu.style.position = 'fixed'
                    else
                        menu.style.position = 'relative'

           }
       }
       animation(loop)
   }

   // Let's go
   props()
   loop()

})();
