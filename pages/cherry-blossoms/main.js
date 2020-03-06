
function fallingPetals() {
  let petal = document.querySelectorAll('.petal');

  if (!petal[0].animate) {
    alert("Your browser does not support animation")
    return null;
  }

  petal.forEach(p => {
    p.innerHTML = '<div class="rotate"><img src="petal.svg" class="skewing"/></div>';
    let scale = Math.random() * .8 + .4;
    let i = Math.floor(Math.random() * Math.floor(petal.length))

    p.animate([
      { transform: `translate3d(${i/petal.length*100}vw, 0, 0) scale(${scale})`},
      { transform: `translate3d(${i/petal.length*100 + 15}vw, 100vh, 0) scale(${scale})`}
    ], {
      duration: Math.random() * 20000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });
  })
}

fallingPetals();

