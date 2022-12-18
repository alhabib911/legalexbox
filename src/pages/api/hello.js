// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  console.log("result",req.query)
  res.status(200).json({ name: 'John Doe', id: req.query.id })
}
