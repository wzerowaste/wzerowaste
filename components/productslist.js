class ProductsList extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `

        <h1 id="prodotti" class="title" style="margin: 2rem">Tutti i prodotti WOW</h1>

  <div class="container--main">
      <img class="container--bg-jumbotron" src="/img/bg-03.jpg" alt="bg-03" />

      <div class="container--right">
        <div class="card--row">
          <div class="card" id="card-1">
            <h2 class="card--title">Wax 0 Waste</h2>
            <img class="card--img" src="../img/wax0waste/wax0waste-01.jpg" alt="img"/>
            <p>
              Pellicola per alimenti ecologica prodotta a mano in Italia a
              impatto zero
            </p>

            <a class="button" href="wax0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-2">
            <h2 class="card--title">Wrap 0 Waste</h2>
            <img class="card--img" src="../img/wrap0waste/wrap0waste-01.jpg" alt="img"/>

            <p>Fascia per capelli modellabile (hair wrap)</p>

            <a class="button" href="wrap0waste.html"> Vedi prodotti </a>
          </div>

          <div class="card" id="card-3">

            <h2 class="card--title">Wash 0 Waste</h2>
            <img class="card--img" src="../img/wash0waste/wash0waste-01.jpg" alt="img"/>

            <p>Spugnette levatrucco ecologiche realizzate a mano</p>
            <a class="button" href="wash0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-4">

            <h2 class="card--title">Wire 0 Waste</h2>
            <img class="card--img" src="../img/wire0waste/wire0waste-01.jpg" alt="img"/>

            <p>
              Oggettistica in filo di metallo (rame e alluminio) per decorare
              l'orto e il giardino
            </p>
            <a class="button" href="wire0waste.html"> Vedi prodotti </a>
          </div>

          <div class="card" id="card-5">

            <h2 class="card--title">Warm 0 Waste</h2>
            <img class="card--img" src="../img/warm0waste/warm0waste-01.jpg" alt="img"/>

            <p>Torcette accendifuoco in tessuto cerato</p>
            <a class="button" href="warm0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-6">
            <h2 class="card--title">Work 0 Waste</h2>
            <img class="card--img" src="../img/work0waste/work0waste-01.jpg" alt="img"/>

            <p>
              Prodotti per la pausa pranzo e il benessere nel luogo di lavoro
            </p>
            <a class="button" href="work0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-8">
            <h2 class="card--title">Wall 0 Waste</h2>
            <img class="card--img" src="../img/wall0waste/wall0waste-01.jpg" alt="img"/>

            <p>Magneti per frigorifero in tessuto cerato</p>
            <a class="button" href="wall0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-9">
            <h2 class="card--title">World 0 Waste</h2>
            <img class="card--img" src="../img/world0waste/world0waste-01.jpg" alt="img"/>

            <p>Prodotti a impatto zero per la casa e il giardino</p>
            <a class="button" href="world0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-10">
            <h2 class="card--title">Wild 0 Waste</h2>
            <img class="card--img" src="../img/wild0waste/wild0waste-04.jpg" alt="img"/>

            <p>"Terra di Brianza" e kit per autoproduzioni veg 100%</p>
            <a class="button" href="wild0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-11">
            <h2 class="card--title">Wood 0 Waste</h2>
            <img class="card--img" src="../img/wood0waste/wood0waste-01.jpg" alt="img"/>

            <p>
              Stampo in legno per realizzare vasetti biodegradabili per orto e
              giardino
            </p>
            <a class="button" href="wood0waste.html"> Vedi prodotti </a>
          </div>
          <div class="card" id="card-12">
            <h2 class="card--title">Wellness 0 Waste (Wow Pet)</h2>
          <img class="card--img" src="../img/wellness0waste/wellness0waste-01.jpg" alt="img"/>

            <p>Per il benessere dei nostri animali</p>
            <!-- <p>
              Abbeveratoio animali in tessuto WOW cerato a mano per alimenti,
              lavabile e compostabile
            </p> -->
            <a class="button" href="wellness0waste.html"> Vedi prodotti </a>
          </div>
        </div>
      </div>
    </div>
    `;
  }
}

customElements.define("productslist-component", ProductsList);
