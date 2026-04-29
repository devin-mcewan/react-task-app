import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import InputContainer from "./components/TaskCreator/TaskCreator";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="app-container">
        <Navbar />
        <Footer />
      </div>
    </UserProvider>
  );
}

export default App;
