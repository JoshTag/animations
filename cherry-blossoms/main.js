
function fallingPetals() {
  let petal = document.querySelectorAll('.petal');
  
  if (!petal[0].animate) {
    return false;
  }

  for (let i = 0, length = petal.length; i < length; ++i) {
    let block = petal[i];
    block.innerHTML = '<div class="rotate"><img src="petal.svg" class="skewing"/></div>';
    let scale = Math.random() * .8 + .2;
    let animationAdd = block.animate([
      { transform: `translate3d(${i/length*100}vw,0,0) scale(${scale})`, opacity: scale },
      { transform: `translate3d(${i/length*100 + 15}vw,100vh,0) scale(${scale})`, opacity: 1 }
    ], {
      duration: Math.random() * 20000 + 4000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });
    
    console.log(scale, animationAdd, (i/length*100))
  }
}

fallingPetals();

