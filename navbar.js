class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    
        <!--Navbar-->
        <div class="navbar">
            <div class="navbar--logo">
                W Zero Waste
            </div>
            <div class="navbar--menu">
                <a href="index.html#prodotti">
                    Prodotti
                </a>
                <a href="events.html">
                    Eventi
                </a>
                <a href="index.html#linkutili">
                    Link Utili
                </a>
            </div>
    
            <div
                id="navbar--menu-burger"
                onClick="toggleDropdownMenu()"
                class="navbar--menu-burger">
            </div>
    
    
            <div id="navbar--menu-dropdown" 
                class="navbar--menu-dropdown navbar--menu-is-visible">
                    <a href="index.html#prodotti">
                        Prodotti
                    </a>
                    <a href="events.html">
                        Eventi
                    </a>
                    <a href="index.html#linkutili">
                        Link Utili
                    </a>
                    
            </div>
    
        </div>
    <!--End Navbar-->
    `;
  }
}

customElements.define("navbar-component", Navbar);
