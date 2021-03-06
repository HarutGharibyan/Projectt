import mongoose from 'mongoose';

const Laptop = mongoose.model('Laptop', {
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  price: Number,
  weight: Number,
  brand: String,
  color: String,
  img: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'File',
    required: true,
  },
});

export default Laptop;
