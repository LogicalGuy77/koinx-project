import "./App.css";
import DetailsComponent from "./Components/DetailsComponent";
import DevFooter from "./Components/DevFooter";
import GraphComponent from "./Components/GraphComponent";
import Navbar from "./Components/Navbar";
import YouMayLike from "./Components/YouMayLike";

function App() {
  return (
    <>
      <Navbar />
      <GraphComponent />
      <DetailsComponent />
      <YouMayLike />
      <DevFooter />
    </>
  );
}

export default App;
