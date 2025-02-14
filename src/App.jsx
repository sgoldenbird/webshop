import { Link } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";

function App() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Sidebar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
