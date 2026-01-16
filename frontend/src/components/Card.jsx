import { Link } from "react-router"
import { formatDate } from "../../lib/utils.js"
import { SquarePen, Trash } from 'lucide-react';
import toast from "react-hot-toast";
import axios from 'axios'


function Card({note,setNotes}) {
 
const handleDelete = async (id) => {
  try {
    console.log("Deleting ID:", id);
    await axios.delete(`/api/notes/${id}`);

    setNotes(prev => prev.filter(note => note._id !== id));
    toast.success("Note is succefully deleted")
  } catch (error) {
    console.log(error.response?.status, error.response?.data || error.message);
  }
};
  return (
    
    <div className="bg-white rounded-lg shadow-md overflow-hidden relative min-h-[220px] hover:shadow-lg transition">
       <Link to={`/note/${note._id}`}>
        <div className="p-4">
              <h2 className="text-lg  text-indigo-900 font-semibold line-clamp-2">{note.title}</h2>
              <h3 className="text-lg  text-indigo-600 font-semibold line-clamp-2">{note.content}</h3>
              
              
       </div>
       </Link>
    
       <div className="p-4 flex justify-between">
        <span>{formatDate(new Date(note.updatedAt)) }</span>
        <div className="flex items-center  gap-3">

        <Link to={`/update/${note._id}`}>
          <button className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition">
            <SquarePen className="w-5 h-5" />
          </button>
        </Link>

          <button onClick={()=>handleDelete(note._id)} className="flex items-center justify-center w-9 h-9 rounded-md hover:bg-gray-100 transition">
           <Trash className="w-5 h-5" />
          </button>

        </div>
       </div>
    </div>
    
  )
}

export default Card