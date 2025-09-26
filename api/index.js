import { renderStatsCard } from "../src/card/stats.js"


async function getStats(callsign) {
  let resp = await fetch("https://api.pota.app/profile/" + callsign);
  let data = await resp.json();
  //console.log(data);
  return data;
}

export default async (req, res) => {
  const {
    callsign,
  } = req.query;
  res.setHeader("Content-Type", "image/svg+xml");
  
  const stats = await getStats(callsign);

  return res.send(
    renderStatsCard(stats, {

    }),
  );
}
