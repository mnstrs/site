
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
