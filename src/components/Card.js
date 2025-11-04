class Card {
  constructor({
    width = 100,
    height = 100,
    title,
  }) {
    this.width = width;
    this.height = height;
    this.title = title;
    this.paddingX = 25;
    this.paddingY = 35;

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
        <title id="title">${this.title}'s POTA Stats</title>
        <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
          }
          ${this.css}
        </style>
        <rect
          width="${this.width - 1}"
          height="99%"
          x="0.5"
          y="0.5"
          rx="4.5"
          ry="4.5"
          stroke="black"
          fill="white"
        />

        
        <g transform="translate(${this.paddingX}, ${this.paddingY})">
          <text x="0" y="0" class="header">${this.title}'s POTA Stats</text>
        </g>

        <g transform="translate(${this.paddingX}, 35)">
          ${body}
        </g>
      </svg>
    `;
  }
}

export { Card };
export default Card;
