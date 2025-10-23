import { Card } from "../components/Card.js"
import { formatAwards, formatTiers } from "./cardUtils.js"

const DEFAULT_WIDTH = 467;
const DEFAULT_HEIGHT = 170;
const DEFAULT_PADDING = 22;


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
    let header = `
      <g class="row" style="font-size: 12px" transform="translate(${offset}, 0)">
        <text x="100" y="12.5">Activations</text>
        <text x="203" y="12.5">Parks</text>
        <text x="306" y="12.5">QSOs</text>
      </g>
      <g>
        <line x1="0" y1="17" x2="400" y2="17" style="stroke:gray;stroke-width:1" />
      </g>
    `;
    return `
      ${header}
      <g class="row" transform="translate(${offset}, 25)">
        <text x="0" y="12.5">Activator</text>
        <text x="100" y="12.5">${activations} / ${attemptedActivations}</text>
        <text x="203" y="12.5">${activatorParks} / ${attemptedParks}</text>
        <text x="306" y="12.5">${activatorQSOs} / ${attemptedQSOs}</text>
      </g>
     
      <g class="row" transform="translate(${offset}, 50)">
        <text x="0" y="12.5">Hunter</text>
        <text x="100" y="12.5">N/A</text>
        <text x="203" y="12.5">${hunterParks}</text>
        <text x="306" y="12.5">${hunterQSOs}</text>
      </g>
      `;
  } else {
    let header = `
        <g class="row" style="font-size: 12px" transform="translate(0, 0)"> 
          <text x="120" y="12.5">Activator</text>
          <text x="260" y="12.5">Hunter</text>
          <line x1="0" y1="17" x2="310" y2="17" style="stroke:gray;stroke-width:1" />
        </g>
      `;
    
    return `
      ${header}
      <g class="row" transform="translate(0,20)"> 
          <text x="0" y="12.5">Activations</text>
          <text x="120" y="12.5">${activations} / ${attemptedActivations}</text>
          <text x="260" y="12.5">---</text>
        </g>
      <g class="row" transform="translate(0,40)">
        <line x1="0" y1="-2" x2="310" y2="-2" style="stroke:gray;stroke-width:1" />
        <text x="0" y="12.5">Parks</text>
        <text x="120" y="12.5">${activatorParks} / ${attemptedParks}</text>
        <text x="260" y="12.5">${hunterParks}</text>
      </g>
      <g class="row" transform="translate(0,60)">
        <line x1="0" y1="-2" x2="310" y2="-2" style="stroke:gray;stroke-width:1" />
        <text x="0" y="12.5">QSOs</text>
        <text x="120" y="12.5">${activatorQSOs} / ${attemptedQSOs}</text>
        <text x="260" y="12.5">${hunterQSOs}</text>
      </g>
    `;
  }
}

const getStyles =() => {
  return `
    .row {
      font: 600 14px 'Segoe UI', Ubuntu, "Helvetica Neue", Sans-Serif;
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


  //let awards = formatAwards({awards: stats.awards, view: view});
  let tiers = formatTiers({awards: stats.awards, view: view});

  const cssStyles = getStyles();

  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  let padding = DEFAULT_PADDING;
  if (view == "simple") {
    width = 380;
    height = 150;
    padding = 0;
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
          offset: padding,
        })}

        ${tiers}
    </svg>
    `);
}

export { renderStatsCard };
export default renderStatsCard;
