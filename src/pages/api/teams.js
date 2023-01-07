// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import clientPromise from "./db/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("legalexbox");
  if (req.method === "POST") {
    // Process a POST request
    try {
      const insertTeamMember = await db.collection("teams").insert(req.body);
      res.json({ status: 200, data: insertTeamMember });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  } else {
    try {
      const allTeams = await db.collection("teams").find({}).toArray();
      res.json({ status: 200, data: allTeams });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  }

  // res.status(200).json({ name: 'John Doe', id: req.query.id })
}
