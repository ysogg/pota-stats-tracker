import { Card } from "../components/Card.js"



const renderStatsCard = (statsobj, options ={}) => {
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

  const card = new Card({
    title: callsign,
  });

  return card.render(`
    <svg x="0" y="0">
      <g>
        <text x="20" y="30">${STATS.callsign.value}</text>
        <text x="20" y="45">Activator:</text>
        <text x="25" y="60">${STATS.activatorActivations.value}</text>
        <text x="25" y="75">${STATS.activatorParks.value}</text>
        <text x="25" y="90">${STATS.activatorQSOs.value}</text>
      </g>
    </svg>
    `);
}

export { renderStatsCard };
export default renderStatsCard;
