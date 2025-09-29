import { Card } from "../components/Card.js"

const createTextNode = ({
  index,
  name,
  activatorValue,
  hunterValue,
}) => {
  const delay = (index + 3) * 150;

  return `
    <g class="stagger" style="animation-delay: ${delay}ms" transform="translate(25,0)">
      <text x="0" y="${45 + index * 20}">${name}</text>
      <text x="100" y="${45 + index * 20}">${activatorValue}</text>
      <text x="200" y="${45 + index * 20}">${hunterValue}</text>
    </g>
  `;
}

const getStyles =() => {
  return `
    .stagger {
      opacity: 100;
      animation: fadeInAnimation 0.3s ease-in-out forwards;
    }
  `;
}

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
  };

  STATS.hunterParks = {
    value: stats.hunter.parks,
    id: "hunterParks",
  };

  STATS.activatorQSOs = {
    value: stats.activator.qsos,
    id: "activatorQSOs",
  };

  STATS.hunterQSOs = {
    value: stats.activator.qsos,
    id: "activatorQSOs",
  };
/*
  for (let i = 0; i < 3; i++) {
    switch(i) {
      case 0:
        createTextNode(index: 0, name: "Activations", activatorValue: STATS.activatorActivations, hunterValue: STATS.hunterActivations);
        break;
      case 1:
        createTextNode(index: 1, name: "Parks", activatorValue: STATS.activatorParks, hunterValue: STATS.hunterParks);
        break;
      case 2:
        createTextNode(index: 2, name: "QSOs", activatorValue: STATS.activatorQSOs, hunterValue: STATS.hunterQSOs);
        break;
    }
  }
*/

  const cssStyles = getStyles();

  const card = new Card({
    width: 467,
    height: 170,
    title: callsign,
  });

  card.setCSS(cssStyles);

  return card.render(`
    <svg x="0" y="0">
        ${createTextNode({index: 0, name: "Activations", activatorValue: STATS.activatorActivations.value, hunterValue: "---"})}
        ${createTextNode({index: 1, name: "Parks", activatorValue: STATS.activatorParks.value, hunterValue: STATS.hunterParks.value})}
        ${createTextNode({index: 2, name: "QSOs", activatorValue: STATS.activatorQSOs.value, hunterValue: STATS.hunterQSOs.value})}
    </svg>
    `);
}

export { renderStatsCard };
export default renderStatsCard;
