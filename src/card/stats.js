const statsCard = (stats, options ={}) => {
  return `
    <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg" role="img">
    <style>
      .header {
        fill: "blue"
      }
    </style>
      <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="blue" />
    </svg>
  `
}

module.exports = { statsCard }
