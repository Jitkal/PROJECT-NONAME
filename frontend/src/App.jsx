import './App.css'
import Navbar from "./components/Navbar.jsx";
import ToDoLists from "./pages/ToDoLists.jsx";

function App() {

  return (
    <div className="w-full h-full flex flex-col mx-auto">
        <div className='px-32'>
            <Navbar/>
            <ToDoLists/>
        </div>
    </div>
  )
}

export default App
