import {Schema, model} from 'mongoose';

const noteSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
  },
  content: {
    type: String,
    default: '',
    trim: true,
  },
  tag: {
    type: String,
    enum: ['Work', 'Personal', 'Meeting', 'Shopping', 'Ideas', 'Travel', 'Finance', 'Health', 'Important', 'ToDo'],
    default: 'ToDo',
  }
}, {
  timestamps: true,
});

export const Note = model('Note', noteSchema);
