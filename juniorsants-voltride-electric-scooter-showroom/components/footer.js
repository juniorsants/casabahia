class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .footer {
          background-color: #1f2937;
          color: #f3f4f6;
        }
        .footer-link:hover {
          color: #3b82f6;
        }
        .payment-icon {
          filter: brightness(0) invert(1);
          opacity: 0.8;
        }
      </style>
      <footer class="footer py-12 mt-12">
        <div class="container mx-auto px-4">
          <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 class="text-lg font-bold mb-4">Casas Bahia</h3>
<p class="text-gray-400 mb-4">A melhor seleção de bicicletas elétricas e scooters do mercado.</p>
              <div class="flex space-x-4">
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="facebook" class="w-5 h-5"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="instagram" class="w-5 h-5"></i>
                </a>
                <a href="#" class="text-gray-400 hover:text-white">
                  <i data-feather="twitter" class="w-5 h-5"></i>
                </a>
              </div>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Informações</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400">Sobre nós</a></li>
                <li><a href="#" class="footer-link text-gray-400">Termos e condições</a></li>
                <li><a href="#" class="footer-link text-gray-400">Política de privacidade</a></li>
                <li><a href="#" class="footer-link text-gray-400">Trocas e devoluções</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Atendimento</h4>
              <ul class="space-y-2">
                <li><a href="#" class="footer-link text-gray-400">Central de ajuda</a></li>
                <li><a href="#" class="footer-link text-gray-400">Fale conosco</a></li>
                <li><a href="#" class="footer-link text-gray-400">Perguntas frequentes</a></li>
                <li><a href="#" class="footer-link text-gray-400">Lojas físicas</a></li>
              </ul>
            </div>
            
            <div>
              <h4 class="font-bold mb-4">Formas de pagamento</h4>
              <div class="grid grid-cols-3 gap-2">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/visa-logo-1.png" alt="Visa" class="payment-icon h-8">
                <img src="https://logodownload.org/wp-content/uploads/2014/04/mastercard-logo-3.png" alt="Mastercard" class="payment-icon h-8">
                <img src="https://logodownload.org/wp-content/uploads/2016/10/hipercard-logo.png" alt="Hipercard" class="payment-icon h-8">
                <img src="https://logodownload.org/wp-content/uploads/2016/10/elo-logo-1.png" alt="Elo" class="payment-icon h-8">
                <img src="https://logodownload.org/wp-content/uploads/2017/04/boleto-logo-1.png" alt="Boleto" class="payment-icon h-8">
                <img src="https://logodownload.org/wp-content/uploads/2019/08/pix-logo-bc-1.png" alt="Pix" class="payment-icon h-8">
              </div>
            </div>
          </div>
          
          <div class="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>© 2023 Casas Bahia. Todos os direitos reservados.</p>
</div>
        </div>
      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);