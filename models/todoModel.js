import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  username: String,
  todo: String,
  isDone: Boolean,
  hasAttachment: Boolean
});


export const Todos = mongoose.model('Todos', todoSchema);

