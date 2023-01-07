import clientPromise from "./db/db";

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db("legalexbox");
  if (req.method === "POST") {
    // Process a POST request
    try {
      const insertAdmin = await db.collection("admins").insert(req.body);
      res.json({ status: 200, data: insertAdmin });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  } else if (req.method === "DELETE") {
    try {
      const deleteAdmin = await db
        .collection("admins")
        .deleteOne({ email: req.body });
      res.json({ status: 200, data: deleteAdmin });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  } else {
    try {
      const allAdminsList = await db.collection("admins").find({}).toArray();
      res.json({ status: 200, data: allAdminsList });
    } catch (error) {
      res.json({ status: 400, data: error });
    }
  }
}
