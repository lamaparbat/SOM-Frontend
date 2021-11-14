import { Route, Routes } from 'react-router-dom';
import Navbar from "./Navbar";
import Welcome from "./welcome/Welcome";
import Homepage from "./homepage/Homepage";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Welcome/>} />
        <Route path="/Homepage" element={<Homepage />} />
      </Routes>
    </div>
  );
}

export default App;
