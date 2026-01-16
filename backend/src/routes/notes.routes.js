import express from 'express'
import { createNotes, deleteNote, showNote, showNotes, updateNote } from '../controllers/notes.controllers.js'

const router = express.Router()

router.get('/', showNotes)

router.get("/:id",showNote)

router.post('/',createNotes)


router.put("/:id",updateNote)

router.delete("/:id",deleteNote)


export default router;