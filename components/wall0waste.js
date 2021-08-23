class Wall0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

   <div class="container" id="section-8">
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
                src="img/wall0waste/wall0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wall0waste/wall0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wall0waste/wall0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wall0waste/wall0waste-04.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">Wall 0 Waste</h1>
        <p>
          Magneti per frigorifero a forma di camicia e di vestitino in colori
          vari. Impermeabili e resistenti, sono realizzati in tessuto cerato,con
          la tecnica Origami. Altezza cm 7-8
        </p>

        <p>Regalo papà</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/755789714/3-calamite-per-frigorifero-in-tessuto"
        >
          <span
            >Compralo su
            <span style="text-decoration: underline">Etsy</span></span
          >
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Regalo mamma</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/755791994/3-calamite-per-frigorifero-in-tessuto"
        >
          <span
            >Compralo su
            <span style="text-decoration: underline">Etsy</span></span
          >
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Confezione multipla</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/757497578/calamite-per-frigorifero-in-tessuto"
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

customElements.define("wall0waste-component", Wall0Waste);
