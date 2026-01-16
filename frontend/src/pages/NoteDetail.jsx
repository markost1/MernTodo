import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router"


function NoteDetail() {

  const {id} = useParams();

  console.log(id);

  const [formData,setFormData] = useState({})

  useEffect(()=>{
      const fetchData = async()=>{
        try {
          const res = await axios(`http://localhost:3000/api/notes/${id}`)
          console.log(res.data);
          setFormData(res.data)
          
        } catch (error) {
          console.log(error);
          
        }
      }

      fetchData();
  },[id])
  



  return (
    <section className="py-7 min-h-screen" style={{ minHeight: "calc(100vh - 150px)" }}>
     <div className="max-w-7xl mx-auto px-6 py-5">
     <h1 className="text-2xl  text-indigo-900 font-semibold py-5">{formData.title}</h1>
     <p className="text-xl  text-indigo-800 font-semibold ">{formData.content}</p>
     </div>
     </section>
  )
}

export default NoteDetail