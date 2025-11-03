import { Card } from "../components/Card.js"
import { Rank } from "../components/RankCircle.js"
import { formatTiers } from "./cardUtils.js"

const DEFAULT_WIDTH = 467;
const DEFAULT_HEIGHT = 170;
const ICON_PADDING = 22;
const DEFAULT_PADDING = 0;


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
  view,
}) => {
  if (view == "multi") {
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
  } else if (view == "simple") {
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
  } else {
    //probably better to switch this one to the mapping to rows approach so hiding specific rows is easier
      return `
        <g class="row" transform="translate(${offset}, 15)">
          <text x="0" y="12.5">Total QSOs:</text>
          <text x="150" y="12.5">${activatorQSOs + hunterQSOs}"</text>
        </g>
        <g class="row" transform="translate(${offset}, 40)">
          <text x="0" y="12.5">Activations:</text>
          <text x="150" y="12.5">${activations} / ${attemptedActivations}</text>
        </g>
        <g class="row" transform="translate(${offset}, 65)">
          <text x="0" y="12.5">Activator QSOs:</text>
          <text x="150" y="12.5">${activatorQSOs}</text>
        </g>
        <g class="row" transform="translate(${offset}, 90)">
            <text x="0" y="12.5">Hunter QSOs:</text>
            <text x="150" y="12.5">${hunterQSOs}</text>
        </g>
        <g class="row" transform="translate(${offset}, 90)">
            <text x="0" y="12.5">Hunter QSOs:</text>
            <text x="150" y="12.5">${hunterQSOs}</text>
        </g>
      `;
    }
}

const createDefaultTextNode = ({
  value,
  label,
  index,
  offset,
}) => {
  return `
    <g class="row" transform="translate(${offset}, ${15 + (index * 25)})">
      <text x="0" y="12.5">${label}:</text>
      <text x="150" y="12.5">${value}</text>
    </g>
  `;
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
    hide = [],
    card_width,
    card_height,
    show_tiers,
    show_badges,
    show_recognition,
    show_recentActivator,
    show_recentHunter,
    badge_one,
    badge_two,
    badge_three,
  } = options;

  const STATS = {};
  STATS.totalQSOs = {
    value: stats.activator.qsos + stats.hunter.qsos,
    label: "Total QSOs",
    id: "totalQSOs",
  }
  STATS.activations = {
    value: stats.activator.activations +" / "+stats.attempts.activations,
    label: "Activations",
    id: "activations",
  }
  STATS.activatorQSOs = {
    value: stats.activator.qsos,
    label: "Activator QSOs",
    id: "activatorQSOs",
  }
  STATS.hunterQSOs = {
    value: stats.hunter.qsos,
    label: "Hunter QSOs",
    id: "hunterQSOs",
  }
  STATS.activatorParks = {
    value: stats.activator.parks,
    label: "Activator Parks",
    id: "activatorParks",
  }
  STATS.hunterParks = {
    value: stats.hunter.parks,
    label: "Hunter Parks",
    id: "hunterParks",
  }

  const cssStyles = getStyles();
  
  let width = DEFAULT_WIDTH;
  let height = DEFAULT_HEIGHT;
  let padding = DEFAULT_PADDING;
  if (view == "simple") {
    width = 380;
    height = 150;
  }

  let tiers = ``;
  if (show_tiers === true && view != "simple") {
      tiers = formatTiers({awards: stats.awards, view: view});
      padding = ICON_PADDING;
  }

  const card = new Card({
    width: width,
    height: height,
    title: callsign,
  });

  card.setCSS(cssStyles);

  const mapStats = () => {
    const rows = Object.keys(STATS)
      .filter((key) => !hide.includes(key))
      .map((key, index) => {
        const stats = STATS[key];

        // create the text nodes, and pass index so that we can calculate the line spacing
        return createDefaultTextNode({
          //icon: stats.icon,
          //showIcons: show_icons,
          value: stats.value,
          label: stats.label,
          index,
          offset: padding,
        });
      });
    return rows;
  }
  
  let content = view == "default" ? 
    mapStats() : 
    createTextNode({
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
    }); 


  if (view == "default") {
    const rank = new Rank({
      stats: stats,
      metric: "All",
      width: width,
      paddingX: 280,
      paddingY: 48,
      rank: "A",
      colour: "black",
    });

    return card.render(`
      <svg x="0" y="0">
        ${rank.render()};
        ${content}
        ${tiers}
      </svg>
      `);
  } else if (view == "multi") {
    const leftRank = new Rank({});
    const midRank = new Rank({});
    const rightRank = new Rank({});

    return card.render(`
      <svg x="0" y="0">
        ${content}
        ${tiers}
      </svg>
      `);
  } else {
    return card.render(`
      <svg x="0" y="0">
        ${content}
        ${tiers}
      </svg>
    `);
  }
}

export { renderStatsCard };
export default renderStatsCard;
