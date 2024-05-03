import "./App.css";
import { Route, Routes } from "react-router-dom";
import AuthPage from "./components/AuthPage";
import Quizpage from "./components/Quizpage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <Routes>
      <Route path="/" Component={AuthPage} />
      <Route path="/quiz" Component={Quizpage} />
      <Route path="/result" Component={ResultPage} />
    </Routes>
  );
}

export default App;
