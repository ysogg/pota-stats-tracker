import { Card } from "../components/Card.js"
import { formatAwards, formatTiers } from "./cardUtils.js"

const DEFAULT_WIDTH = 467;
const DEFAULT_HEIGHT = 170;

//rejig this to only be called once and just create the text node properly
//if showTiers is true then we want to adjust by a little offset as well so before it gets called
//define offset somewhere and pass it in as a parameter
const createTextNode = ({
  name,
  activations,
  activatorParks,
  hunterParks,
  activatorQSOs,
  hunterQSOs,
  attemptedActivations,
  attemptedParks,
  attemptedQSOs,
  offset,
  view = "default",
}) => {
  if (view == "default") {
    return `
      <text x="0" y="42">test</text>
    `;
  } else {
    let header = `
        <g> 
          <text x="145" y="45">Activator</text>
          <text x="285" y="45">Hunter</text>
        </g>
      `;
    
    //stagger not set up currently but there so I remember
    return `
      ${header}
      <g class="stagger" style="animation-delay: $({0 + 3) * 150y}ms" transform="translate(25,0)"> 
        <line x1= "0" y1="51" x2="310" y2="51" style="stroke:gray;stroke-width:1" />
        <text x="0" y="72">Activations</text>
        <text x="120" y="72">${activations} / ${attemptedActivations}</text>
        <text x="260" y="72">---</text>

        <line x1="0" y1="81" x2="310" y2="81" style="stroke:gray;stroke-width:1" />
        <text x="0" y="102">Parks</text>
        <text x="120" y="102">${activatorParks} / ${attemptedParks}</text>
        <text x="260" y="102">${hunterParks}</text>
        
        <line x1="0" y1="111" x2="310" y2="111" style="stroke:gray;stroke-width:1" />
        <text x="0" y="132">QSOs</text>
        <text x="120" y="132">${activatorQSOs} / ${attemptedQSOs}</text>
        <text x="260" y="132">${hunterQSOs}</text>
      </g>
    `;
  }
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
  const {
    view,
    card_width,
    card_height,
    showTiers,
    showBadges,
    showRecognition,
    showRecentActivator,
    showRecentHunter,
    badgeOne,
    badgeTwo,
    badgeThree,
  } = options;

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


  //let awards = formatAwards({awards: stats.awards, view: view});
  let tiers = formatTiers({awards: stats.awards, view: view});

  const cssStyles = getStyles();

  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  if (view == "simple") {
    width = 400;
    height = 150;
  }

  const card = new Card({
    width: width,
    height: height,
    title: callsign,
    //awards: awards,
  });

  card.setCSS(cssStyles);

  return card.render(`
    <svg x="0" y="0">
      ${createTextNode({
          activations: stats.activator.activations, 
          attemptedActivations: stats.attempts.activations,
          activatorParks: stats.activator.parks,
          attemptedParks: stats.attempts.parks,
          hunterParks: stats.hunter.parks,
          activatorQSOs: stats.activator.qsos,
          attemptedQSOs: stats.attempts.qsos,
          hunterQSOs: stats.hunter.qsos,
          view: view,
        })}

        ${tiers}
    </svg>
    `);
}

export { renderStatsCard };
export default renderStatsCard;
