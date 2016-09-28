<<<<<<< HEAD

module.exports = {
  bars: function() {
    
    for($i = 0; $i < 25; $i++ ){
      var x = Math.floor((Math.random() * 25) + 1);
      var v = document.createElement('i');
      v.classList.add('bar');
      v.classList.add('b'+x);
      document.querySelector('.bars').appendChild(v);
    }

  }
};
=======
for($i = 0; $i < 20; $i++ ){
  var x = Math.floor((Math.random() * 20) + 1);
  var v = document.createElement('i');
  v.classList.add('bar');
  v.classList.add('b'+x);
  document.querySelector('.bars').appendChild(v);
}
>>>>>>> c22b5c37e8073a9a4f82b8d581078cc686101b95
