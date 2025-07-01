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


//carosel dos Produtos e comentarios
//consts para o Produto
// Carrossel de Produtos
const carosel = document.querySelector(".Carosel");
const arrowBts = document.querySelectorAll("#Produtos i");
const firstCarWidth = carosel.querySelector(".slider").offsetWidth;

// Carrossel de Depoimentos
const dp = document.querySelector(".CaroselDp");
const arrowBtsDp = document.querySelectorAll("#Depoimentos i");
const firstCarWidthDp = dp.querySelector(".sliderDp").offsetWidth;

// Função genérica para drag
const enableDrag = (element) => {
    let isDragging = false;
    let startX;
    let startScrollLeft;

    const dragStart = (e) => {
        isDragging = true;
        element.classList.add("dragging");
        startX = e.pageX;
        startScrollLeft = element.scrollLeft;
    };

    const dragging = (e) => {
        if (!isDragging) return;
        element.scrollLeft = startScrollLeft - (e.pageX - startX);
    };

    const dragStop = () => {
        isDragging = false;
        element.classList.remove("dragging");
    };

    element.addEventListener("mousedown", dragStart);
    element.addEventListener("mousemove", dragging);
    document.addEventListener("mouseup", dragStop);
};

// Setas dos carrosseis
arrowBts.forEach(btn => {
    btn.addEventListener("click", () => {
        carosel.scrollLeft += btn.id === "left" ? -firstCarWidth : firstCarWidth;
    });
});

arrowBtsDp.forEach(btn => {
    btn.addEventListener("click", () => {
        dp.scrollLeft += btn.id === "left" ? -firstCarWidthDp : firstCarWidthDp;
    });
});

// Ativar drag individualmente
enableDrag(carosel);
enableDrag(dp);
