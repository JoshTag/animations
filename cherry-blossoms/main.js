
function fallingPetals() {
  let petal = document.querySelectorAll('.petal');

  petal.forEach(p => {
    p.innerHTML = '<div class="rotate"><img src="petal.svg" class="skewing"/></div>';
    let scale = Math.random() * .8 + .2;
    let i = Math.floor(Math.random() * Math.floor(petal.length))
    
    p.animate([
      { transform: `translate3d(${i/petal.length*100}vw,0,0) scale(${scale})`, opacity: scale },
      { transform: `translate3d(${i/petal.length*100 + 25}vw,100vh,0) scale(${scale})`, opacity: 1 }
    ], {
      duration: Math.random() * 25000 + 3000,
      iterations: Infinity,
      delay: -(Math.random() * 5000)
    });
  })
}

fallingPetals();

