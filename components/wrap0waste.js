class Wrap0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <div class="container" id="section-2">
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
                src="img/wrap0waste/wrap0waste-00.jpg"
              />
            </div>

            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-04.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-05.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wrap0waste/wrap0waste-06.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">Wrap 0 Waste</h1>
        <p>
          Nastro di tessuto riciclato e non, di vari colori e materiali,
          accessorio indispensabile per la ragazza trendy ed ecosostenibile!
          Ideale per il freddo per o semplicemente per esaltare la tua
          femminilità! Utilizzabile anche come cintura. Realizzato
          artigianalmente con cuciture interne e filo di alluminio.
        </p>
        <p>
          Misure: cm 100x20 cm 80x15 Colori vari anche con misure e tessuti a
          richiesta.
        </p>

        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/996894766/fascia-per-capelli-modellabile-hair-wrap"
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

customElements.define("wrap0waste-component", Wrap0Waste);
