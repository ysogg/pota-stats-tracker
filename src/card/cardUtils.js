const badge = `
        <path d="M45.41,11.16l.86,2.61a3.75,3.75,0,0,0,1.5,2L50,17.21a3.85,3.85,0,0,1,1.43,4.62l-.84,2.09a3.83,3.83,0,0,0,0,2.88l.83,2a3.83,3.83,0,0,1-1.32,4.58L48.13,34.8a3.86,3.86,0,0,0-1.46,2.08L46,39.32a3.84,3.84,0,0,1-4,2.78l-2.1-.18a3.88,3.88,0,0,0-2.74.84l-2,1.63a3.83,3.83,0,0,1-4.85,0L28.54,43a3.85,3.85,0,0,0-2.45-.88H23a3.83,3.83,0,0,1-3.74-3l-.55-2.35a3.82,3.82,0,0,0-1.58-2.31L15.3,33.19a3.84,3.84,0,0,1-1.45-4.48l.86-2.36a3.86,3.86,0,0,0,0-2.66l-.77-2.06a3.86,3.86,0,0,1,1.51-4.58l2-1.31a3.87,3.87,0,0,0,1.61-2.19l.61-2.18a3.85,3.85,0,0,1,4-2.79l1.93.17a3.88,3.88,0,0,0,2.74-.84l1.83-1.48a3.84,3.84,0,0,1,4.87,0L36.7,7.81a3.82,3.82,0,0,0,2.75.88l2-.15A3.84,3.84,0,0,1,45.41,11.16Z"/>`;

const displayTiers = (activator, hunter, view = "default") => {
  if (view == "default") {
    return `
      <g fill="blue" stroke="black" stroke-width="3" transform="scale(0.4), translate(150, 45)">${badge}</g>
      <g fill="blue" stroke="black" stroke-width="3" transform="scale(0.4), translate(150, 95)">${badge}</g>
    `;
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


export { 
  formatAwards, 
  formatTiers 
};
