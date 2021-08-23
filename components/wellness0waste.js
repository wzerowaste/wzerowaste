class Wellness0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

  <div class="container" id="section-12">
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
                src="img/wellness0waste/wellness0waste-01.jpg"
              />
            </div>
            <!-- <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-02.jpg"
              />
            </div> -->
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-04.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-05.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-06.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-07.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wellness0waste/wellness0waste-08.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">
          Wellness 0 Waste (WOW Pet)
        </h1>
        <p>
          Abbeveratoio animali in tessuto WOW cerato a mano per alimenti,
          lavabile e compostabile.
        </p>

        <p>Ecociotola da viaggio per cani</p>
        <a
          target="_blank"
          class="button--buy"
          style="margin: 0"
          href="https://www.etsy.com/it/listing/1032725841/w0w-ecociotola-da-viaggio-per-cani"
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

customElements.define("wellness0waste-component", Wellness0Waste);
