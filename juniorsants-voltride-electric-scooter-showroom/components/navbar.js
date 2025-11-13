class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        .navbar {
          background-color: white;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        }
        .nav-link:hover {
          color: #3b82f6;
        }
        .search-input {
          transition: all 0.2s ease;
        }
        .search-input:focus {
          outline: 2px solid #3b82f6;
        }
      </style>
      <nav class="navbar border-b border-gray-200 py-4">
        <div class="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          <div class="flex items-center mb-4 md:mb-0">
              <a href="#" class="text-2xl font-bold text-primary mr-8">Casas Bahia</a>
<div class="hidden md:flex space-x-6">
              <a href="#" class="nav-link text-gray-700 font-medium">Home</a>
              <a href="#" class="nav-link text-gray-700 font-medium">Produtos</a>
              <a href="#" class="nav-link text-gray-700 font-medium">Ofertas</a>
              <a href="#" class="nav-link text-gray-700 font-medium">Contato</a>
            </div>
          </div>
          
          <div class="w-full md:w-auto flex items-center space-x-4">
            <div class="relative flex-1 md:w-64">
              <input type="text" placeholder="Buscar produtos..." class="search-input w-full border border-gray-300 rounded-lg py-2 pl-10 pr-4 focus:border-primary">
              <i data-feather="search" class="absolute left-3 top-2.5 text-gray-400 w-5 h-5"></i>
            </div>
            
            <div class="flex space-x-4">
              <a href="#" class="text-gray-700 hover:text-primary">
                <i data-feather="user" class="w-6 h-6"></i>
              </a>
              <a href="#" class="text-gray-700 hover:text-primary relative">
                <i data-feather="shopping-cart" class="w-6 h-6"></i>
                <span class="absolute -top-2 -right-2 bg-primary text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
              </a>
            </div>
          </div>
        </div>
      </nav>
    `;
  }
}

customElements.define('custom-navbar', CustomNavbar);