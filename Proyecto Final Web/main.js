const ArrayImg = [
    "./images/Iphone/primera.png",
    "./images/Iphone/segunda.png",
    "./images/Iphone/tercera.png",
    "./images/Iphone/cuarta.png",
    "./images/Iphone/quinta.png",
    "./images/Iphone/sexta.png",
    "./images/Iphone/septima.png",
  ];

  const range = document.getElementById("range");
  const img = document.getElementById("img");

  img.setAttribute("src", ArrayImg[3]);

  range.addEventListener("input", (e) => {
    let value = e.target.value;
    img.setAttribute("src", ArrayImg[value]);
  });

  function cambiarImagen14(imagen14) {
    document.getElementById("img14").src = imagen14;
  }

  function cambiarImagen13(imagen13) {
    document.getElementById("img13").src = imagen13;
  }

  function cambiarImagen12(imagen12) {
    document.getElementById("img12").src = imagen12;
  }

  function cambiarImagen11(imagen11) {
    document.getElementById("img11").src = imagen11;
  }

  function cambiarImagen8(imagen8) {
    document.getElementById("img8").src = imagen8;
  }



