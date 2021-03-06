import mongoose from 'mongoose';
import Laptop from '../../models/laptop.js';

export async function getOneService(id) {
  const geted = await Laptop.findById(id).populate('img');
  return geted;
}
export async function getAllService() {
  const geted = await Laptop.find().populate('img');
  return geted;
}

export async function createService(body) {
  const created = new Laptop({
    _id: mongoose.Types.ObjectId(),
    ...body,
  });
  await created.save();
  return getOneService(created._id);
}

export async function updateService(body, id) {
  const updated = await Laptop.updateOne({ _id: id }, body);
  return updated;
}

export async function removeService(id) {
  const removed = await Laptop.remove({ _id: id });
  return removed;
}
