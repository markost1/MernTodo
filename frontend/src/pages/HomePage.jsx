import { useEffect, useState } from "react"
import Card from "../components/Card"
import axios from "axios";
import Footer from "../components/Footer";



function HomePage() {

  const [notes,setNotes] = useState([]);

  useEffect(()=>{
    const fetchNote = async ()=>{
      try {
        const res = await axios("http://localhost:3000/api/notes")
        console.log(res.data);
        setNotes(res.data)
        
      } catch (error) {
        console.log("Error fetching notes",error);
        
      }
     
    }
      fetchNote()

  },[])


  return (
  <>
  
  <section className="py-7 min-h-screen" style={{ minHeight: "calc(100vh - 150px)" }}>
     <div className="max-w-7xl mx-auto px-2 py-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-6 py-4">
         {notes.length > 0 ?(notes.map((note)=>(
            <Card key={note._id} note={note} setNotes={setNotes} />
         ))) : ( <p className="text-gray-500">No notes yet.</p>) 
         
         }
          
         
       </div>
       
    </div>
  </section>
 
  </>
  )
}

export default HomePage