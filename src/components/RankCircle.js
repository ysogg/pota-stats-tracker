import { calcRank } from "./calcRank.js"

class Rank {
  constructor({
    stats,
    metric,
    width = 300,
    height = 100,
    paddingX = 25,
    paddingY = 35,
    colour,
  }) {
    this.stats = stats;
    this.metric = metric;
    this.width = width;
    this.height = height;
    this.paddingX = paddingX;
    this.paddingY = paddingY;
    this.colour = colour;

    this.css = "";
  }

  setCSS(value) {
    this.css = value;
  }

  #calcCircleProgress(value) {
    const radius = 40;
    const c = Math.PI * (radius * 2);

    if (value < 0) {
      value = 0;
    }
    if (value > 100) {
      value = 100;
    }

    return ((100 - value) / 100) * c;
  }

  render() {
    const rank = calcRank({
      activations: this.stats.activator.activations,
      activatorQSOs: this.stats.activator.qsos,
      hunterQSOs: this.stats.hunter.qsos,
      activatorParks: this.stats.activator.parks,
      hunterParks: this.stats.hunter.parks,
    });
    const progress = 100 - rank.percentile;

    return `
      <svg
        width="${this.width}"
        height="${this.height}"
        viewBox="0 0 ${this.width} ${this.height}"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <style>
          .outerCircle {
            stroke: ${this.colour};
            fill: none;
            stroke-width: 6;
            opacity: 0.2;
          }
          .innerCircle {
            stroke: ${this.colour};
            fill: none;
            stroke-dasharray: 250;
            stroke-width: 6;
            stroke-linecap: round;
            opacity: 0.8;
            transform-origin: 10px 8px;
            transform: rotate(-90deg);
            //animation: rankAnimation 1s forwards ease-in-out;
            stroke-dashoffset: ${this.#calcCircleProgress(progress)};
          }
          ${this.css}
        </style>


        <g transform="translate(${this.paddingX}, ${this.paddingY})">
          <circle class="outerCircle" cx="10" cy="8" r="40"/>
          <circle class="innerCircle" cx="10" cy="8" r="40"/>
          <g class="rank">
            ${rank.level}
          </g>
        </g>
      </svg>
    `;
  }
}

export { Rank };
export default Rank;
