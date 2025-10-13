const displayTiers = (activator, hunter, view = "default") => {
  if (view == "default") {
    return `
      <g><text x="50" y="50">TEST</text></g>
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
