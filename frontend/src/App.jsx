import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import ToDoLists from "./pages/ToDoLists.jsx";

function App() {

  return (
    <div className="w-full h-full flex flex-col mx-auto">
        <div className='px-32'>
            <BrowserRouter>
                <Navbar/>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/todo" element={<ToDoLists />} />
                </Routes>
            </BrowserRouter>
        </div>
    </div>
  )
}

export default App
