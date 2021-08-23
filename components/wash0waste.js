class Wash0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

   <div class="container" id="section-3">
      <img
        class="container--bg"
        src="/img/bg-02.jpg"
        alt="bg-02"
        style="opacity: 0.2"
      />

      <div class="container--left">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wash0waste/wash0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wash0waste/wash0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wash0waste/wash0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wash0waste/wash0waste-04.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>
      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">Wash 0 Waste</h1>
        <p>
          La confezione contiene 5 pezzi, lavati con detergente biodegradabile e
          pronti all' uso. Le spugnette levatrucco Wash Zero Waste, sono
          realizzate a mano in Italia, lavabili e riutilizzabili a lungo, sono
          ideali anche in viaggio, grazie al pratico sacchetto in omaggio!
        </p>
        <p>
          CONSIGLI -Usare per la detersione viso, con latte detergente o acqua
          micellare. -Lavare con acqua tiepida e sapone neutro. -Una volta alla
          settimana lavare in lavatrice a 40° utilizzando il pratico sacchetto
          in dotazione.
        </p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/928221706/dischetti-struccantispugnette-levatrucco"
        >
          <span
            >Compralo su
            <span style="text-decoration: underline">Etsy</span></span
          >
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define("wash0waste-component", Wash0Waste);
