for($i = 0; $i < 25; $i++ ){
  var x = Math.floor((Math.random() * 25) + 1);
  var v = document.createElement('i');
  v.classList.add('bar');
  v.classList.add('b'+x);
  document.querySelector('.bars').appendChild(v);
}


var words = ["code", "design", "create"];
var index = 0;
var frame = 0;
var goingback = false;
var wordsIndex = 0;

function mainloop() {
  requestAnimationFrame(mainloop);

  frame++;

  var modulo = goingback ? 5 : 10

  console.log(modulo);

  if (!(frame%modulo )) {

    index+= goingback ? -1 : 1;

    if (index<=words[wordsIndex].length) {
      document.querySelector("#typed").innerHTML = words[wordsIndex].substr(0,index);
    } else {
      goingback = true;
    }

    if (index==0) {
      goingback = false;
      wordsIndex++;
      wordsIndex%=words.length;
    }
  }

}
mainloop()
