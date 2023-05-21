/* -----------------------------------------------------> Banner */

let imgIndex = 0;
const time = 2500;
const totalImagens = document.querySelectorAll(".carousel-item").length;

document.querySelectorAll("span[data-circulo]").forEach((item) => {
  item.addEventListener("click", (event) => {
    let indice = event.target.getAttribute("data-circulo");
    imgIndex = parseInt(indice);
    atualizaCarousel();
    resetCarousel();
  });
});

let carouselContinuo = setInterval(() => {
  imgIndex++;
  if (imgIndex > totalImagens - 1) imgIndex = 0;
  atualizaCarousel();
}, time);

function resetCarousel() {
  clearInterval(carouselContinuo);
  carouselContinuo = setInterval(() => {
    imgIndex++;
    if (imgIndex > totalImagens - 1) imgIndex = 0;
    atualizaCarousel();
  }, time);
}

function trocaImagem(n) {
  imgIndex += parseInt(n);
  if (imgIndex > totalImagens - 1) imgIndex = 0;
  if (imgIndex < 0) imgIndex = totalImagens - 1;
  atualizaCarousel();
  resetCarousel();
}

function atualizaCarousel() {
  let imagemAtiva = document.querySelector(".carousel-item.visivel");
  let circuloAtivo = document.querySelector(".circulo.ativo");

  imagemAtiva.classList.remove("visivel");
  circuloAtivo.classList.remove("ativo");

  document.querySelectorAll(".carousel-item")[imgIndex].classList.add("visivel");
  document.querySelectorAll(".circulo")[imgIndex].classList.add("ativo");
}

/* -----------------------------------------------------> PIX Contribuir */

function copyToClipboard() {
  const textToCopy = "amorem4patas.doe@gmail.com";

  const tempTextarea = document.createElement('textarea');

  tempTextarea.value = textToCopy;

  document.body.appendChild(tempTextarea);

  tempTextarea.select();

  document.execCommand('copy');

  document.body.removeChild(tempTextarea);
}

