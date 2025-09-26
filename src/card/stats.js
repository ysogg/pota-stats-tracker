



const statsCard = (statsobj, options ={}) => {
  const {
    id,
    callsign,
    other_callsigns,
    name,
    stats,
  } = statsobj;

  const STATS = {};

  STATS.callsign = {
    value: callsign,
    id: "callsign",
  };

  STATS.activatorActivations = {
    value: stats.activator.activations,
    id: "activatorActivations",
  };

  STATS.activatorParks = {
    value: stats.activator.parks,
    id: "activatorParks",
  }

  STATS.activatorQSOs = {
    value: stats.activator.qsos,
    id: "activatorQSOs",
  }

  //const statItems = Object.keys(STATS).map((key, index) => 
    //createTextNode({
      //value: STATS[key].value,
      //id: STATS[id].id,
      //bold: text_bold,
    //})
  //)

  return `
    <svg width="300" height="130" xmlns="http://www.w3.org/2000/svg" role="img">
    <style>
      .header {
        font: 600 18px 'Segoe UI', Ubuntu, Sans-Serif;
        fill: none;
      }
    </style>
    <title id="title">${STATS.callsign.value}</title>
      <rect width="200" height="100" x="10" y="10" rx="20" ry="20" fill="none" />
      <g><text x="10" y="20">${STATS.callsign.value}</text></g>
      <g><text x="10" y="35">Activator:</text></g>
      <g><text x="15" y="50">${STATS.activatorActivations.value}</text></g>
      <g><text x="15" y="65">${STATS.activatorParks.value}</text></g>
      <g><text x="15" y="80">${STATS.activatorQSOs.value}</text></g>
    </svg>
  `
}

module.exports = { statsCard }
