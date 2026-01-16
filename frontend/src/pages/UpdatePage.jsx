import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import toast from "react-hot-toast";


function UpdatePage() {

    const {id} = useParams()
    const [formData,setFormData] = useState({})
    const [note,setNote] = useState({})

    const navigate = useNavigate();

    console.log(id);
    


      useEffect(()=>{
        const fetchNote = async ()=>{
            try {
                const res = await axios(`http://localhost:3000/api/notes/${id}`)
                console.log(res.data);
                setNote(res.data)

                
            } catch (error) {
                console.log('Error in fetching note',error);
                
            }
        }

        fetchNote()
    },[id])

   const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
    
  }
  console.log(formData);
  

    const handleSubmit = async(e) =>{
        e.preventDefault()
        try {
            const res = await axios.put(`http://localhost:3000/api/notes/${id}`,formData)
            console.log('Note updated:', res.data);
            navigate('/')
            toast.success("Note is successfully updated")
            
        } catch (error) {
            console.log('Error in fetching data',error);
            
        }

    }

    const loading =  false;

  

  return (
<section className="w-full min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-10rem)] bg-white md:bg-gray-50 flex flex-col md:items-center md:justify-center" >
  {/* Kontejner koji je sada FLEX i centriran */}
  <div className="w-full max-w-7xl md:px-4 flex justify-center">
    
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col min-h-[calc(100vh-4rem)] p-6 bg-white md:min-h-fit md:p-8 md:rounded-3xl md:shadow-lg md:border md:border-gray-100 md:my-10">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Update Note</h2>
      
      <div className="flex flex-col gap-4">
        {/* Title  */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="title" className="text-sm font-medium text-gray-700 ml-1">Title:</label>
          <input 
            onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition" 
            type="text" 
            id="title" 
            name="title" 
            placeholder="Title here..."
            defaultValue={note.title}
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-1.5">
          <label htmlFor="content" className="text-sm font-medium text-gray-700 ml-1">Content:</label>
          <textarea 
          onChange={handleChange}
            className="w-full px-4 py-2.5 rounded-xl border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition min-h-[150px]" 
            id="content" 
            name="content" 
            placeholder="Your content here..."
            defaultValue={note.content}
          />
        </div>
        <div className="mt-auto pt-6 md:pt-2">
        <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-md shadow-indigo-200">
          {loading ? 'Loading...' : 'Update Note'}
        </button>
        </div>
      </div>
    </form>
    
  </div>
</section>

  )
}

export default UpdatePage