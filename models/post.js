const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const PostSchema = new mongoose.Schema({
  'title': {
    type: String,
    required: true,
  },
  'image': {
    type: String,
    default: 'https://images.unsplash.com/photo-1586769852388-153870393504',
  },
   'cloudinary_id': {
    type: String,
    required: true
  },
   'date': {
    type: Date,
    default: Date.now
  },
  'body': {
    type: String,
    required: true,
  },
  'tags': [
     {
      type: String,
     }
  ]
})






const Post = mongoose.model('Post', PostSchema)
module.exports = Post