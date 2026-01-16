import { useState } from "react"
import {useNavigate } from "react-router-dom";
import axios from 'axios';
import toast from "react-hot-toast";




const CreatePage = () => {

  const [formData,setFormData] = useState({})
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const handleChange = (e)=>{
    setFormData({
      ...formData,
      [e.target.id] : e.target.value
    })
    
  }
  console.log(formData);
  

  const handleSubmit =async (e)=>{
    e.preventDefault();

    if(!formData.title.trim() || !formData.content.trim()){
      toast.error("All fields are required")
    }
    setLoading(true)
  
    try {
      const response =await axios.post("http://localhost:3000/api/notes",formData)
      toast.success("Note created successfullu")
      console.log(response);
      
      setLoading(false)
      navigate('/')
      
    } catch (error) {
      console.log(error);
      setLoading(false)
      
    }
  }


  return (
<section className="w-full min-h-[calc(100vh-5rem)] md:min-h-[calc(100vh-10rem)] bg-white md:bg-gray-50 flex flex-col md:items-center md:justify-center">
  {/* Kontejner koji je sada FLEX i centriran */}
  <div className="w-full max-w-7xl md:px-4 flex justify-center">
    
    <form onSubmit={handleSubmit} className="w-full max-w-xl flex flex-col min-h-[calc(100vh-4rem)] p-6 bg-white md:min-h-fit md:p-8 md:rounded-3xl md:shadow-lg md:border md:border-gray-100 md:my-10">
      <h2 className="text-xl font-bold mb-6 text-gray-800">Create Note</h2>
      
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
            placeholder="Unesite naslov..."
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
            placeholder="Vaš sadržaj ovde..."
          />
        </div>
        <div className="mt-auto pt-6 md:pt-2">
        <button className="w-full bg-indigo-600 text-white font-bold py-4 rounded-xl hover:bg-indigo-700 transition-all active:scale-95 shadow-md shadow-indigo-200">
          {loading ? 'Loading...' : 'Save Note'}
        </button>
        </div>
      </div>
    </form>
    
  </div>
</section>

  )
}

export default CreatePage