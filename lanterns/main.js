const animateLanterns = () => {
  let container = document.querySelector(".lantern-container");

  for (i = 0; i < 150; i++) {    
    let lantern = document.createElement("div");
    lantern.classList.add("lanterns");
    container.append(lantern);

    let lanterImgContainer = document.createElement("div")
    lantern.append(lanterImgContainer)

    let lanternImg = document.createElement("img");
    lanternImg.classList.add("lantern-img");
    lanternImg.setAttribute("src", "./assets/lantern.svg");
    lanterImgContainer.append(lanternImg);

    let scale = Math.random() * .3 + .5;
    let start = Math.floor(Math.random() * (55 - 40) + 40);
    let end = Math.floor(Math.random() * (115 - -15) + -15);
    console.log(scale)

    lantern.animate([
      { transform: `translate3d(${start}vw, 65vh, 0) scale(${scale})`},
      { transform: `translate3d(${end}vw, -10vh, 0) scale(${scale})`}
    ],{
      duration: Math.random() * 60000 + 40000,
      iterations: Infinity,
      delay: -(Math.random() * 80000),
    });

    let rotate = Math.floor(Math.random() * (10000 - 4000) + 4000)

    lanterImgContainer.animate([
      { transform: `rotate(0deg)`},
      { transform: `rotate(-5deg)`},
      { transform: `rotate(0deg)`},
      { transform: `rotate(5deg)`},
      { transform: `rotate(0deg)`}
    ],{
      duration: rotate,
      iterations: Infinity,
      direction: `alternate`,
    })
  }
};

animateLanterns();
