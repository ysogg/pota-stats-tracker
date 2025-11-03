function exponential_cdf(x) {
  return 1 - 2 ** -x;
}

function calcRank({
  activations,
  activatorQSOs,
  hunterQSOs,
  activatorParks,
  hunterParks,
}) {
  const ACTIVATIONS_MEDIAN = 6, ACTIVATIONS_WEIGHT = 5;
  const ACTIVATOR_QSOS_MEDIAN = 181, ACTIVATOR_QSOS_WEIGHT = 2;
  const HUNTER_QSOS_MEDIAN = 289, HUNTER_QSOS_WEIGHT = 1;
  const ACTIVATOR_PARKS_MEDIAN = 4, ACTIVATOR_PARKS_WEIGHT = 3;
  const HUNTER_PARKS_MEDIAN = 222, HUNTER_PARKS_WEIGHT = 1;

  const TOTAL_WEIGHT = 
    ACTIVATIONS_WEIGHT +
    ACTIVATOR_QSOS_WEIGHT +
    HUNTER_QSOS_WEIGHT +
    ACTIVATOR_PARKS_WEIGHT +
    HUNTER_PARKS_WEIGHT;
    
  const THRESHOLDS = [1, 12.5, 25, 37.5, 50, 62.5, 75, 87.5, 100];
  const LEVELS = ["S", "A+", "A", "A-", "B+", "B", "B-", "C+", "C"];

  const rank =
    1 - (
      ACTIVATIONS_WEIGHT * exponential_cdf(activations / ACTIVATIONS_MEDIAN) +
      ACTIVATOR_QSOS_WEIGHT * exponential_cdf(activatorQSOs / ACTIVATOR_QSOS_MEDIAN) +
      HUNTER_QSOS_WEIGHT * exponential_cdf(hunterQSOs / HUNTER_QSOS_MEDIAN) +
      ACTIVATOR_PARKS_WEIGHT * exponential_cdf(activatorParks / ACTIVATOR_PARKS_MEDIAN) +
      HUNTER_PARKS_WEIGHT * exponential_cdf(hunterParks / HUNTER_PARKS_MEDIAN)) /
      TOTAL_WEIGHT;
    

  const level = LEVELS[THRESHOLDS.findIndex((t) => rank * 100 <= t)];

  return { level, percentile: rank * 100 };
}

export { calcRank };
export default calcRank;
