import { Link } from "react-router";

export default function Header() {



  return (
    <header className='bg-blue-600 text-white'>
       <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4">
         <div className="flex items-center justify-between h-14 md:h-20">
            <Link to="/">
               <h1 className="text-2xl font-bold text-indigo-600">
                  MernTODO
             </h1>
            </Link>
            
            <div >
            <Link to="/create">
               <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition">
                Create Note
                </button>
            </Link>
               
            </div>
           </div> 
         </div> 
        </nav>

    </header>
  )
}
