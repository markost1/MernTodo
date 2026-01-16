import express from 'express'
import Note from '../models/Note.js'

export const showNotes = async (req,res) =>{
   try {
    const allNotes = await Note.find({}).sort({updatedAt:-1})
    res.status(200).json(allNotes );
   } catch (error) {
    console.error("Error in get all notes",error);
    res.status(500).json({message:"Internal server Error"})
    
   }
}

export const showNote = async(req,res) => {
    try {
        const note = await Note.findById(req.params.id)
        if(!note){
            return res.status(404).json({message:"File not found"})
        }
        res.status(200).json(note)
    } catch (error) {
        res.status(500).json({message:"Internal server error"})
        console.error("Error in showNote controller", error)
    }
}

export const createNotes = async(req,res) => {
   
    try {
        const {title,content} = req.body;
        
        if(!title || !content){
         return res.status(400).json({message:"All fields are required"})
        }

        const newNote = new Note({title,content})
        await newNote.save();

         res.status(201).json({message:"Note is successfully created"})

    } catch (error) {
        res.status(500).json({message:"Internal server error"})
    }
    
}

export const updateNote = async(req,res) => {
    try {
        const{title,content} = req.body
        const updatedNote = await Note.findByIdAndUpdate(req.params.id,
            {title,content},
            {new:true})

        if(!updatedNote) return res.status(404).json({message:"Note not found"})
        
         res.status(201).json({message:"Note is succesfully updated"})
        
    } catch (error) {
         res.status(500).json({message:"Internal server Error"})
    }

    
}

export const deleteNote = async(req,res)=>{
   
   try {
   const deletedNote = await Note.findByIdAndDelete(req.params.id)

   if(!deletedNote){
     return res.status(404).json({message:"Note not found"})
   }

   res.status(200).json({message:"Note is succesfully deleted"})
   } catch (error) {
    res.status(500).json({message:"Internal server Error"})
    console.error("error in deleteNote controller")
   }
}