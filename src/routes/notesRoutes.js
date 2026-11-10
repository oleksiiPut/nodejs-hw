import { Router } from 'express';
import {getHome, getNoteById, getAllNotes, createNote, deleteNote, updateNote} from '../controllers/notesController.js';

const router = Router();

router.get('/', getHome);

router.get('/notes', getAllNotes);

router.get('/notes/:noteId', getNoteById);

router.post('/notes', createNote);

router.delete('/notes/:noteId', deleteNote);

router.patch('/notes/:noteId', updateNote);

export default router;
