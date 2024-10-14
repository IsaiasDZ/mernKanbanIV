
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import NavBar from './components/navBar';
import Kanban from './screens/kanban';
import Clima from "./screens/Clima";

function App() {
  return (
    <Router>
    <div className="App " >
    <NavBar/>
      <Routes>
       
        <Route path="/" element={<Kanban/>} />
        <Route path="/clima" element={<Clima/>}/>
      </Routes>
    </div>
    </Router>

  );
}

export default App;
