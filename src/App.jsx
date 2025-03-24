import DashboardPage2 from "./components/DashboardPage2"
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ReportsGeneratePage from "./components/ReportsGeneratePage";

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage2 />} />
        <Route path="/reports-generate-page" element={<ReportsGeneratePage />} />
      </Routes>
    </Router>
  )
}

export default App
