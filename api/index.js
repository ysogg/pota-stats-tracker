import { renderStatsCard } from "../src/card/stats.js"


async function getStats(callsign) {
  let resp = await fetch("https://api.pota.app/profile/" + callsign);
  let data = await resp.json();
  console.log(data);
  return data;
}

export default async (req, res) => {
  const {
    callsign,
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
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  
  const stats = await getStats(callsign);

  return res.send(
    renderStatsCard(stats, {
      view: view,
      card_width: card_width,
      card_height: card_height,
      showTiers: showTiers,
      showBadges: showBadges,
      showRecognition: showRecognition,
      showRecentActivator: showRecentActivator,
      showRecentHunter: showRecentHunter,
      badgeOne: badgeOne,
      badgeTwo: badgeTwo,
      badgeThree: badgeThree,
    }),
  );
}
