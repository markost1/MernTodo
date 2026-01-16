import { Route, Routes } from "react-router-dom"
import CreatePage from "./pages/CreatePage"
import HomePage from "./pages/HomePage"
import NoteDetail from "./pages/NoteDetail"
import UpdatePage from "./pages/UpdatePage"
import Header from "./components/Header"
import Footer from "./components/Footer"
// import toast from "react-hot-toast"


function App() {
  return (
    <div>
      
       {/* <button onClick={()=>{
          toast.success('Successfully toasted yeeeeaaaaah!')
        }}>Click me</button> */}
        <Header />

      <Routes>
       
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage/>}/>
        <Route path="/update/:id" element={<UpdatePage/>} />
        <Route path="/note/:id" element={<NoteDetail/>}/>
       
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App