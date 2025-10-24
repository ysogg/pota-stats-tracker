import { renderStatsCard } from "../src/card/stats.js"

const parseArray = (str) => {
  return !str ? [] : str.split(",");
};

const parseBool = (bool) => {
  if (!bool) return false
  return bool.toLowerCase() === "true" ? true : false;
}

async function getStats(callsign) {
  let resp = await fetch("https://api.pota.app/profile/" + callsign);
  let data = await resp.json();
  //console.log(data);
  return data;
}

export default async (req, res) => {
  const {
    callsign,
    view,
    hide,
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
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  
  const stats = await getStats(callsign);

  return res.send(
    renderStatsCard(stats, {
      view: view || "default",
      hide: parseArray(hide),
      card_width: card_width,
      card_height: card_height,
      show_tiers: parseBool(show_tiers),
      show_badges: show_badges,
      show_recognition: show_recognition,
      show_recentActivator: show_recentActivator,
      show_recentHunter: show_recentHunter,
      badge_one: badge_one,
      badge_two: badge_two,
      badge_three: badge_three,
    }),
  );
}
