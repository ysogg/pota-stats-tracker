class Card {
  constructor({
    width = 100,
    height = 100,
    title,
  }) {
    this.width = width;
    this.height = height;
    this.title = title;

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
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title id="title">${this.title}</title>
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
          rx="3"
          ry="3"
          stroke="black"
          fill="white"
        />

        <text x="20" y="30" class="header">${this.title}</text>

        <g>
          ${body}
        </g>
      </svg>
    `;
  }
}

export { Card };
export default Card;
