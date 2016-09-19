for($i = 0; $i < 25; $i++ ){
  var x = Math.floor((Math.random() * 25) + 1);
  var v = document.createElement('i');
  v.classList.add('bar');
  v.classList.add('b'+x);
  document.querySelector('.bars').appendChild(v);
}



// var
//   typed     = document.querySelector('#typed'),
//   words     = ["code", "design", "create"],
//   rnd       = Math.floor((Math.random() * 3) + 1),
//   txt       = words[rnd],w,v,t;
//
//
// for (var i = 0; i < txt.length; i++) {
//   t = document.createTextNode(txt[i]);
//   v = document.createElement('span');
//   v.appendChild(t);
//   typed.appendChild(v);
// }
//

/*
var w = document.createTextNode(ar[d]);
var s = document.createElement('span');
var n = s.appendChild(w);
typed.appendChild(n);
*/

var words = ["code", "design", "create"],
    typed = document.querySelector('#typed'),
    nu    = words.length;
    ar    = [],
    wr    = [];


var lettering = function(words){
  for (i = 0; i < words.length; i++) {
    let w = words[i];
    for (l = 0; l < w.length; l++){
      ar.push(w[l]);
    }
    ar.push("-");
  }
  return ar;
}

var wrap = function(ar){
  let cnt;
  for (i = 0; i < ar.length; i++) {
    let l = ar[i];
    if(l !== "-"){
      console.log(l);
      cnt++;
    }else{
      console.log(cnt);
      cnt = 0;
    }
  }
}


wrap(lettering(words));
