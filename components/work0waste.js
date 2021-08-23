class Work0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

   <div class="container" id="section-6">
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
                src="img/work0waste/work0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-04.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-05.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-06.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-07.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-08.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/work0waste/work0waste-09.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">Work 0 Waste</h1>
        <p>Prodotti per la pausa pranzo e il benessere nel luogo di lavoro</p>

        <p>Cornice per piante aeree</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1028013373/cornice-per-piante-aeree"
        >
          <span>
            Compralo su
            <span style="text-decoration: underline">Etsy</span>
          </span>
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Borsetta da polso</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1028437255/borsetta-giapponese-knot-bag-borsetta-da"
        >
          <span>
            Compralo su
            <span style="text-decoration: underline">Etsy</span>
          </span>
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Busta per alimenti ecologica</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/626450818/w0w-sandwichpellicola-ecologica-per"
        >
          <span>
            Compralo su
            <span style="text-decoration: underline">Etsy</span>
          </span>
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>

        <p>Cera di soia aromatizzata</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1030683791/cera-di-soia-aromatizzata-e-non-per"
        >
          <span>
            Compralo su
            <span style="text-decoration: underline">Etsy</span>
          </span>
          <img src="/img/icon/icon-window.svg" class="button--buy-icon" />
        </a>
      </div>
    </div>
    `;
  }
}

customElements.define("work0waste-component", Work0Waste);
