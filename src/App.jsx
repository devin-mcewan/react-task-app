import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import InputContainer from "./components/TaskCreator/TaskCreator";
import { UserProvider } from "./components/UserContext";

function App() {
  return (
    <div className="app-container">
      <UserProvider>
        <Navbar />
        <Footer />
      </UserProvider>
    </div>
  );
}

export default App;
