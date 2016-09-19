
var words = ["code", "design", "create"],
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
  let cnt = 0; let l;
  for (i = 0; i < ar.length; i++) {
    l = ar[i];
    if(l !== "-"){
      console.log("now" + cnt)
      print(l);
      cnt++;
    }else{
      backspace(cnt);
      cnt = 0;
    }
  }
}

var print = function(e){
  console.log(e);
}

var backspace = function(cnt){
  var i;
  for (i = 0; i < 10 + cnt; i++) {
    console.log('.');
  }
}

wrap(lettering(words));
