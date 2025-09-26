class Card {
  constructor({
    title,
  }) {
    this.title = title;
  }

  render(body) {
    return `
      <svg
        width="300"
        height="130"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
      >
        <title id="title">${this.title}</title>
        <style>
          .header {
            font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
          }
        </style>
        <rect
          width="200"
          height="100"
          x="10"
          y="10"
          rx="20"
          ry="20"
          stroke="black"
          fill="white"
        />
        <g>
          ${body}
        </g>
      </svg>
    `;
  }
}

export { Card };
export default Card;
