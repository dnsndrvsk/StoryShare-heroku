import express from 'express'
import models from '../models'

const api = express.Router()


api.get("/getitem", async (req,res) => {
  const { id } = req.query
  try {
    const item = await models.Story.findById({ _id: id })
    return res.json(item)
  } catch (err) {
    res.status(404)
       .send({ error: 'There is no such document!' })
  }
})

api.post("/postcomment", async (req,res) => {
  const { comment, id } = req.body.data

  try {
    await models.Story.update(
      { _id: id },
      {
        $push: { 'comments': comment }
      }
    )
    const item = await models.Story.findById({_id: id})
    return res.json(item)
  } catch (err) {
    return res.status(500).json(err)
  }
})

api.get("/getitems", async (req,res) => {
  try {
    const items = await models.Story.find().sort({ date: -1 })
    return res.json(items)
  } catch (err) {
    return res.status(500).json(err)
  }
})

api.post("/postdata", async (req,res) => {
  const { author, story, image } = req.body.data
  
  try {
    const model = new models.Story({ author, story, image })
    await model.save()
    res.json(model)
  } catch (err) {
    return res.status(500).json(err)
  }
})

export default api