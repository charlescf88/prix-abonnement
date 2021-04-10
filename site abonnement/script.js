let button = document.getElementById('dark-mode')

button.addEventListener("change",function(){
    var x = document.getElementById('first-block');
    if (x.innerHTML === "<span>$</span>199.99") {
      x.innerHTML = "<span>$</span>19.99";
    } else {
      x.innerHTML = "<span>$</span>199.99";
    }
    var y =document.getElementById('second-block');
    if (y.innerHTML === "<span>$</span>249.99") {
        y.innerHTML = "<span>$</span>29.99";
      } else {
        y.innerHTML = "<span>$</span>249.99";
      }
      var z =document.getElementById('third-block');
      if (z.innerHTML === "<span>$</span>349.99") {
          z.innerHTML = "<span>$</span>39.99";
        } else {
          z.innerHTML = "<span>$</span>349.99";
        }
})