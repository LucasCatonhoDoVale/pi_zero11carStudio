// Função para direcionar para o WhatsApp
function enviarMensagem() {
  var numeroTelefone = "5511964165018";
  var mensagem = "Olá, gostaria de fazer um orçamento"; // Mensagem pré-definida
  var url = "https://wa.me/" + numeroTelefone + "?text=" + encodeURIComponent(mensagem);
  window.open(url, '_blank');
}

// Menu Hamburguer
class MenuMobile {
  constructor(menuMobile, navlist, navLinks) {
      this.menuMobile = document.querySelector(menuMobile);
      this.navlist = document.querySelector(navlist);
      this.navLinks = document.querySelectorAll(navLinks);
      this.activeClass = "active";
  }

  addClickEvent() {
      this.menuMobile.addEventListener("click", () => {
          this.toggleMenu();
      });
  }

  toggleMenu() {
      this.navlist.classList.toggle(this.activeClass);
      this.navLinks.forEach(link => {
          link.style.opacity = this.navlist.classList.contains(this.activeClass) ? '1' : '0';
      });
  }

  init() {
      if (this.menuMobile) {
          this.addClickEvent();
      }
      return this;
  }
}

const mobileNavBar = new MenuMobile(
  ".menuMobile", 
  "#nav-list", 
  "#nav-list li"
);
mobileNavBar.init();


//carosel dos Produtos
const carosel = document.querySelector(".Carosel");
const slider = carosel.querySelector(".slider");
const produto = slider.querySelector(".produto"); // Supondo que cada item seja .card
const andar = produto.offsetWidth; // Agora é a largura de 1 card

let isDragging = false;
let startX;
let scrollLeft;
let timeoutId;
let cardPerView = Math.round(carosel.offsetWidth / andar);

// DRAG
const dragStart = (e) => {
    isDragging = true;
    startX = e.pageX - carosel.offsetLeft;
    scrollLeft = carosel.scrollLeft;
};

const dragging = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - carosel.offsetLeft;
    const walk = (x - startX) * 3; // Sensibilidade
    carosel.scrollLeft = scrollLeft - walk;
};

const dragEnd = () => {
    isDragging = false;
};

// AUTO SCROLL ATÉ O FINAL (rápido)
const autoPlay = () => {
    if (window.innerWidth < 800) return;

    let nextPosition = 0;

    timeoutId = setInterval(() => {
        nextPosition += andar * 2; // Anda mais rápido
        if (nextPosition + carosel.clientWidth >= carosel.scrollWidth) {
            nextPosition = carosel.scrollWidth - carosel.clientWidth; // Vai até o fim
            carosel.scrollLeft = nextPosition;
            clearInterval(timeoutId); // Parar autoplay no final (ou comente esta linha para reiniciar)
        } else {
            carosel.scrollLeft = nextPosition;
        }
    }, 1200); // Frequência mais rápida
};

autoPlay();

// EVENTOS
carosel.addEventListener("mousedown", dragStart);
carosel.addEventListener("mousemove", dragging);
carosel.addEventListener("mouseup", dragEnd);
carosel.addEventListener("mouseleave", dragEnd);
