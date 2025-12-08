import mongoose from 'mongoose';

const songSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true
    },
    author: {
      type: String,
      required: true,
      trim: true
    },
    duration: {
      type: Number,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    img: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);

const Song = mongoose.model('Song', songSchema);

export default Song;
