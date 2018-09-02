import mongoose, { Schema } from 'mongoose'

const commentSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      default: Date.now
    }
  }
)

 export default commentSchema