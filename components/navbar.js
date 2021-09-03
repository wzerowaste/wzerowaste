class Navbar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    
        <!--Navbar-->
        <div class="navbar">
            <a style="color: white; text-decoration: none" href="index.html" class="navbar--logo">
                  <img class="logo--navbar" src="/img/wow-logo-small-invert.png" alt="logo" />

                <p style="display: flex;margin: 0">WOW</p>
            </a>

            <div id="lang" style="margin-top: .5rem;margin-right: 1rem;">
                Scegli linguaggio:
                <div id="google_translate_element"></div>
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
