import Home from "./pages/Home";
import Assessment from "./pages/Assessment";
import Learning from "./pages/Learning";
import Dashboard from "./pages/Dashboard";
import "./styles/global.css";
import ProblemSolving from "./pages/ProblemSolving";

function App() {
  return (
    <>
      <Home />
      <ProblemSolving />
      <Assessment />
      <Learning />
      <Dashboard />
    </>
  );
}

export default App;