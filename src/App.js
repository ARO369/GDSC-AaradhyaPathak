import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home } from "./components/Home";
import { Events } from "./components/Events";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Socials } from "./components/Socials";

// All JSX components
function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Events />
      <Contact />
      <Socials />
      <Footer />
    </div>
  );
}

export default App;
