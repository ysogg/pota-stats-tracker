import { statsCard } from "../src/card/stats.js"




export default async (req, res) => {
  const {} = req.query;
  res.setHeader("Content-Type", "image/svg+xml");

  const stats = ""; //fetch stats

  return res.send(
    statsCard(stats, {

    }),
  );
}
