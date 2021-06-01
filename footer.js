class Footer extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

        <!--Go To Top-->
        
        <img onclick="goToTop()" id="button--go-up" src="img/icon/icon-arrowup.svg" />
        
        <!--Footer-->
            <div class="container" >
                <img
                class="container--bg"
                src="/img/bg-01.jpg"
                alt="bg-01"
            >
                <div class="container--left">
                    <h1 class="title" style="font-size: 5rem">
                        W Zero Waste
                    </h1>
                </div>

                <div style="z-index: 3">
                    <a style="color: #852231" href="cookie-policy.html">Cookies</a>
                    <hr />
                    <a style="color: #852231" href="privacy-policy.html">Privacy</a>
                </div>

                <div class="container--social" style="z-index: 3; margin-left: 1rem;">
                    <a href="https://www.instagram.com/selenacreativejewelry/" target="_blank">
                        <img class="social--img" src="/img/icon/icon-insta.svg" />
                    </a>
                    <a href="https://www.facebook.com/selenacreativejewelry" target="_blank">
                        <img class="social--img" style="width: 43px" src="/img/icon/icon-face.svg" />
                    </a>
                    <a  href="http://www.etsy.com/it/shop/WaxZeroWaste" target="_blank">
                        <img class="social--img" src="/img/icon/icon-etsy.svg" />

                    </a>
                </div>
            </div>

            <!--End Footer-->
    `;
  }
}

customElements.define('footer-component', Footer);