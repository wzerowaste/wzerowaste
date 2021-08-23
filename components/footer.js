class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
    
      <!--Go To Top-->
        
        <img onclick="goToTop()" id="button--go-up" src="img/icon/icon-arrowup.svg" />

       <p class="container--p">
      Ho sempre creato gioelli ma... La passione per il giardinaggio ed un
      viaggio in Australia mi hanno avvicinato ulteriormente al mondo della
      sostenibilità e permacoltura. Impatto zero, riciclo creativo, zero sprechi
      e autoproduzione sono tematiche che ho approfondito e che mi hanno
      permesso di realizzare prodotti per la mia casa e il mio giardino. La
      realizzazione di un orto sinergico mi ha fatto sperimentare nuovi metodi e
      antiche conoscenze sulla cura del suolo. Questo e il mio mondo!
    </p>

        
        
        <!--Footer-->
            <div class="container" >
                <img
                class="container--bg"
                src="/img/bg-01.jpg"
            >

            <img class="logo" style="z-index: 3" src="/img/wow-logo-small.png" alt="logo" />

               

                <div class="container--social" style="z-index: 3; margin-left: 1rem;">
                    <a href="https://www.instagram.com/selenacreativejewelry/" target="_blank">
                        <img class="social--img" src="/img/icon/icon-insta.svg" />
                    </a>
                    <a href="https://www.facebook.com/selenacreativejewelry" target="_blank">
                        <img class="social--img" style="width: 32px" src="/img/icon/icon-face.svg" />
                    </a>
                    <a  href="http://www.etsy.com/it/shop/WaxZeroWaste" target="_blank">
                        <img class="social--img" src="/img/icon/icon-etsy.svg" />

                    </a>
                        <a href="mailto:wax0waste@gmail.com" target="_blank">
                        <img class="social--img" src="/img/icon/icon-mail.svg" />
                        </a>
                </div>

                 <div style="z-index: 3">
                    <a style="color: #852231" href="cookie-policy.html">Cookies</a>
                    <hr style="opacity:0"/>
                    <a style="color: #852231" href="privacy-policy.html">Privacy</a>
                </div>
            </div>

            <!--End Footer-->
    `;
  }
}

customElements.define("footer-component", Footer);
