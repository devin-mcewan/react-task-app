import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import InputContainer from "./components/TaskCreator/TaskCreator";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Footer />
    </div>
  );
}

export default App;
