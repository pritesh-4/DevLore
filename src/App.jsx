import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Quizsetup from "./pages/Quizsetup";
import Quiz from "./pages/Quiz";
import Result from "./pages/Result";
import Dashboard from "./pages/Dashboard";
import {Route, Routes} from "react-router-dom"

const App = () => {
  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/quizsetup" element={<Quizsetup/>}/>
        <Route path="/quiz" element={<Quiz/>}/>
        <Route path="/result" element={<Result/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
    <Footer/>
    </>
  )
}

export default App;