import "./App.css";
import DetailsComponent from "./Components/DetailsComponent";
import GraphComponent from "./Components/GraphComponent";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <GraphComponent />
      <DetailsComponent />
    </>
  );
}

export default App;
