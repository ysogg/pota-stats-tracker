class Rank {
  constructor({
    width = 300,
    height = 100,
    paddingX = 25,
    paddingY = 35,
    rank,
    metric,
    percentage,
    colour,
  }) {
    this.width = width;
    this.height = height;
    this.paddingX = paddingX;
    this.paddingY = paddingY;
    this.rank = rank;
    this.metric = metric;
    this.percentage = percentage;
    this.colour = colour;

    this.css = "";
  }

  setCSS(value) {
    this.css = value;
  }


  render(body) {
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
            stroke-dashoffset: ${this.percentage};
          }
          ${this.css}
        </style>


        <g transform="translate(${this.paddingX}, ${this.paddingY})">
          <circle class="outerCircle" cx="10" cy="8" r="40"/>
          <circle class="innerCircle" cx="10" cy="8" r="40"/>
          <g class="rank">
            ${this.rank}
          </g>
        </g>
      </svg>
    `;
  }
}

export { Rank };
export default Rank;
