import clientPromise from "./db/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("legalexbox");
  if (req.method === "POST") {
    // Process a POST request
    try {
      const insertReview = await db.collection("reviews").insert(req.body);
      res.json({ status: 200, data: insertReview });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  } else {
    try {
      const allReviews = await db.collection("reviews").find({}).toArray();
      res.json({ status: 200, data: allReviews });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  }

  // res.status(200).json({ name: 'John Doe', id: req.query.id })
}