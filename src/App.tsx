import { Routes, Route } from "react-router-dom";
import GamesList from "./pages/GamesList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Routes>
        <Route path="/" element={<GamesList />} />
      </Routes>
    </div>
  );
}

export default App;
