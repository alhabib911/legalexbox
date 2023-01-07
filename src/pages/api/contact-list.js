import clientPromise from "./db/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("legalexbox");
  if (req.method === "POST") {
    // Process a POST request
    try {
      const insertContact = await db.collection("contact-lists").insert(req.body);
      res.json({ status: 200, data: insertContact });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  } else {
    try {
      const allContactLists = await db.collection("contact-lists").find({}).toArray();
      res.json({ status: 200, data: allContactLists });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  }

  // res.status(200).json({ name: 'John Doe', id: req.query.id })
}