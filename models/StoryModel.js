import mongoose, { Schema } from 'mongoose'
import commentSchema from './commentSchema'

const storySchema = new Schema(
  {
    author: {
      type: String,
      required: true
    },
    story: {
      type: String,
      required: true
    },
    image: {
      type: String
    },
    date: {
      type: Date,
      default: Date.now
    },
    comments: [commentSchema]
  }
)

export default mongoose.model('Story', storySchema)