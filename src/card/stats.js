import { Card } from "../components/Card.js"

const createTextNode = ({
  index,
  name,
  activatorValue,
  attemptValue,
  hunterValue,
}) => {
  const delay = (index + 3) * 150;

  return `
    <g class="stagger" style="animation-delay: ${delay}ms" transform="translate(25,0)">
      <text x="0" y="${45 + (index+1) * 20}">${name}</text>
      <text x="110" y="${45 + (index+1) * 20}">${activatorValue} / ${attemptValue}</text>
      <text x="250" y="${45 + (index+1) * 20}">${hunterValue}</text>
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

  STATS.activatorQSOs = {
    value: stats.activator.qsos,
    id: "activatorQSOs",
  };

  STATS.activationAttempts = {
    value: stats.attempts.activations,
    id: "activationAttempts",
  }

  STATS.parkAttempts = {
    value: stats.attempts.parks,
    id: "parkAttempts",
  }

  STATS.qsoAttempts = {
    value: stats.attempts.qsos,
    id: "qsoAttempts",
  }

   STATS.hunterParks = {
    value: stats.hunter.parks,
    id: "hunterParks",
  };

  STATS.hunterQSOs = {
    value: stats.activator.qsos,
    id: "activatorQSOs",
  };

  const cssStyles = getStyles();

  const card = new Card({
    width: 467,
    height: 170,
    title: callsign,
  });

  card.setCSS(cssStyles);

  return card.render(`
    <svg x="0" y="0">
      <g> 
        <text x="135" y="45">Activator</text>
        <text x="275" y="45">Hunter</text>
      </g>
        ${createTextNode({index: 0, name: "Activations", activatorValue: STATS.activatorActivations.value, attemptValue: STATS.activationAttempts.value, hunterValue: "---"})}
        ${createTextNode({index: 1, name: "Parks", activatorValue: STATS.activatorParks.value, attemptValue: STATS.parkAttempts.value, hunterValue: STATS.hunterParks.value})}
        ${createTextNode({index: 2, name: "QSOs", activatorValue: STATS.activatorQSOs.value, attemptValue: STATS.qsoAttempts.value, hunterValue: STATS.hunterQSOs.value})}
    </svg>
    `);
}

export { renderStatsCard };
export default renderStatsCard;
