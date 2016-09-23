for($i = 0; $i < 20; $i++ ){
  var x = Math.floor((Math.random() * 20) + 1);
  var v = document.createElement('i');
  v.classList.add('bar');
  v.classList.add('b'+x);
  document.querySelector('.bars').appendChild(v);
}
