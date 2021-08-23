class World0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

   <div class="container" id="section-9">
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
                src="img/world0waste/world0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-04.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-05.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-06.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-07.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-08.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-09.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-10.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-11.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-12.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/world0waste/world0waste-13.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">World 0 Waste</h1>
        <p>Prodotti a impatto zero per la casa e il giardino</p>

        <p>Grembiule Multitasche</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1027497253/grembiule-multitasche-grembiule-da"
        >
          <span
            >Compralo su
            <span style="text-decoration: underline">Etsy</span></span
          >
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Borsa a km 0</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1013527148/borsa-km-0-con-manici-colorati-borsa"
        >
          <span
            >Compralo su
            <span style="text-decoration: underline">Etsy</span></span
          >
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Bombe di semi</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1014039412/bombe-di-semi-rallegriamo-il-mondo-citta"
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

customElements.define("world0waste-component", World0Waste);
