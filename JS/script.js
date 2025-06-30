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
