import express from 'express'
import notesRoutes from './routes/notes.routes.js'
import { connectDB } from './config/db.js';
import 'dotenv/config'
import cors from 'cors';
import rateLimiter from './middleware/rateLimiter.js';


const app = express();
const Port = process.env.PORT || 3000;


app.use(cors())
app.use(express.json())
app.use(rateLimiter)

app.use('/api/notes',notesRoutes)



connectDB().then(()=>{
  app.listen(3000,()=>{
    console.log('Server listening on port:',Port);
    
})  
})


