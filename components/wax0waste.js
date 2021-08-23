class Wax0Waste extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

    <div class="container" id="section-1">
      <img
        class="container--bg"
        src="/img/bg-02.jpg"
        alt="bg-02"
        style="opacity: 0.2"
      />

      <!-- Swiper -->
      <div class="container--left">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wax0waste/wax0waste-01.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wax0waste/wax0waste-02.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wax0waste/wax0waste-03.jpg"
              />
            </div>
            <div class="swiper-slide">
              <img
                class="container--img"
                src="img/wax0waste/wax0waste-04.jpg"
              />
            </div>
          </div>

          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
          <div class="swiper-pagination"></div>
        </div>
      </div>

      <div class="container--right">
        <h1 class="title" style="font-size: 3rem">Wax 0 Waste</h1>
        <p>
          Wax Zero Waste è un tessuto cerato dal delicato aroma di cocco e
          miele, gradevole al tatto, malleabile, adesivo, riutilizzabile fino a
          12 mesi e piu', perfetto sostituto della pellicola di plastica.
        </p>
        <p>Può essere utilizzato per:</p>
        <ul>
          <li>preservare formaggi, verdure e frutta in frigorifero</li>
          <li>coperchio per ciotole o piatti</li>
          <li>proteggere spuntini in ufficio</li>
          <li>custodire la merenda per la scuola</li>
          <li>preservare il pane</li>
          <li>contenitore per salatini, patatine per i tuoi party</li>
          <li>carta regalo riutilizzabile.</li>
        </ul>

        <p>
          Possibilità di realizzare pellicola o sacco anche con cera di soia per
          chi desidera un prodotto vegetale, bio, nel rispetto degli esseri
          viventi.
        </p>
        <label for="confezionesingola">Confezione singola:</label>
        <select
          class="button--buy"
          name="confezionesingola"
          onchange="handleSelect(this)"
        >
          <option disabled>CERA D'API</option>
          <option
            value="https://www.etsy.com/it/listing/638709685/tessuto-cerato-per-alimentifatto-in"
          >
            Taglia S (20cm x 20cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/623799464/pellicola-ecologica-sostituto-dell"
          >
            Taglia M (25cm x 25cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/637636803/pellicola-ecologica-per"
          >
            Taglia L (30cm x 30cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/637640383/extra-largepellicola-per-la-protezione"
          >
            Taglia XL (30cm x 40cm)
          </option>

          <option
            value="https://www.etsy.com/it/listing/647318243/pellicola-ecologica-per-alimenti-fatto"
          >
            Taglia Jumbo (40cm x 50cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/626453612/sacco-formaggipellicola-ecologica-per"
          >
            Sacco Piccolo (18cm x 28cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/644009275/sacco-cerato-grandepellicola-ecologica"
          >
            Sacco Grande (23cm x 38cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/626069848/sacco-panepellicola-ecologica-per"
          >
            Sacco Pane (23cm x 38cm)
          </option>
          <option disabled>CERA DI SOIA</option>
          <option
            value="https://www.etsy.com/it/listing/997951766/100-vegsacco-piccolopellicola-ecologica"
          >
            Sacco Piccolo (18cm x 28cm)
          </option>
          <option
            value="https://www.etsy.com/it/listing/997950310/100-vegsacco-gandecera-di-soiapellicola"
          >
            Sacco Grande (23cm x 38cm)
          </option>
        </select>

        <label for="confezionemultipla">Confezione multipla:</label>
        <select
          class="button--buy"
          name="confezionemultipla"
          onchange="handleSelect(this)"
        >
          <option disabled>CERA D'API</option>
          <option
            value="https://www.etsy.com/it/listing/628532092/pausa-pranzo-tre-misurepellicola"
          >
            Pausa Pranzo - 1 sacco 35cm x 35cm + 1 taglia M + 1 taglia S
          </option>
          <option
            value="https://www.etsy.com/it/listing/650976049/confezione-11sacco-e-30x30tessuto-cotone"
          >
            2 pezzi - 1 Taglia L + 1 Sacco Piccolo
          </option>
          <option
            value="https://www.etsy.com/it/listing/895767752/due-pezzi-tessuto-cerato-adesivofatto-a"
          >
            2 pezzi - Jumbo (40x50)
          </option>
          <option
            value="https://www.etsy.com/it/listing/877822790/confezione-multiplapellicola-cerata"
          >
            3 pezzi - S, M, L
          </option>
          <option
            value="https://www.etsy.com/it/listing/623806234/confezione-multipla4-pezzipellicola"
          >
            4 pezzi - S, M, L, XL
          </option>
          <option
            value="https://www.etsy.com/it/listing/654243861/confezione-5-pezzistoffa-ecologica-per"
          >
            5 pezzi - Taglia M
          </option>
          <option
            value="https://www.etsy.com/it/listing/631591840/confezione-multipla5-pezzi-pellicola"
          >
            5 pezzi - Taglia L
          </option>
          <option disabled>CERA DI SOIA</option>
          <option
            value="https://www.etsy.com/it/listing/649232407/100-vegsacchi-2-misurepellicola"
          >
            Confezione 2 Sacchi (Grande e Piccolo)
          </option>
        </select>
      </div>
    </div>
    `;
  }
}

customElements.define("wax0waste-component", Wax0Waste);
