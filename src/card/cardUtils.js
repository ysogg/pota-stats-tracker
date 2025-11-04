const star = `<polygon id="primary" points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polygon>`
const activatorIcon = `<path d="M3.41 2.476a.75.75 0 01-.013 1.06A6.235 6.235 0 001.5 8c0 1.67.68 3.276 1.897 4.463a.75.75 0 01-1.048 1.074A7.735 7.735 0 010 8c0-2.08.847-4.072 2.35-5.537a.75.75 0 011.06.013zM12.59 2.476a.75.75 0 011.06-.013A7.735 7.735 0 0116 8c0 2.08-.847 4.072-2.35 5.537a.75.75 0 01-1.047-1.074A6.234 6.234 0 0014.5 8c0-1.67-.68-3.276-1.897-4.463a.75.75 0 01-.013-1.06zM7 8a1 1 0 011-1h.01a1 1 0 010 2H8a1 1 0 01-1-1z"/>

<path d="M5.864 6.046a.75.75 0 10-1.028-1.092c-.42.395-.756.867-.987 1.39a4.1 4.1 0 000 3.307c.23.523.567.994.987 1.39a.75.75 0 001.028-1.093 2.774 2.774 0 01-.642-.902 2.6 2.6 0 010-2.098c.147-.334.365-.641.642-.902zM11.164 4.96a.75.75 0 10-1.028 1.092c.277.26.495.567.642.902a2.601 2.601 0 010 2.098 2.775 2.775 0 01-.642.902.75.75 0 101.028 1.092c.42-.395.756-.866.986-1.39a4.1 4.1 0 000-3.307 4.273 4.273 0 00-.986-1.39z"/>`

const hunterIcon = `<line id="secondary-upstroke" x1="11.95" y1="12" x2="12.05" y2="12" style="fill: none; stroke: rgb(44, 169, 188); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><path id="primary" d="M21,12a9,9,0,1,1-9-9A9,9,0,0,1,21,12Zm-4,0a5,5,0,1,0-5,5A5,5,0,0,0,17,12Z" style="fill: none; stroke: rgb(0, 0, 0); stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></path>`

const displayTiers = (activator, hunter, view) => {
  if (view == "multi") {
      return `
      <g stroke="black" stroke-width="1" transform="scale(1), translate(1,25)">${activatorIcon}</g>
      <g fill="#f76157" stroke="black" stroke-width="3" transform="scale(0.9), translate(-2, 52)">${hunterIcon}</g>
    `;
  } else if (view == "simple") {
    return ``;
  } else {
    return ``;
  }
}



const formatTiers = ({
  awards,
  view,
}) => {
  //TODO
  //just lookup oject names in reverse order until one contains activator
  //make sure to skip if contains shift or new years
  let activatorTier = "test"
  let hunterTier = "test"


  return displayTiers(activatorTier, hunterTier, view);
}





const formatAwards = ({
  awards, 
  view,
}) => {
  if (view == "simple") {
    return ``;
  } else {
    // DEFAULT VIEW //
    return `
     <g>
      <circle r="5" cx="360" cy="51" fill="#B3B6C7"><title>test</title></circle>
      <circle r="5" cx="380" cy="51" fill="#B3B6C7"><title>test</title></circle>
      <circle r="5" cx="400" cy="51" fill="#B3B6C7"><title>test</title></circle>
      <circle r="5" cx="420" cy="51" fill="#B3B6C7"><title>test</title></circle>
     </g>
    `;
  }

}

const clamp = (val, min, max) => {
  return Math.min(Math.max(val, min), max);
}

export { 
  formatAwards, 
  formatTiers,
  clamp
};
