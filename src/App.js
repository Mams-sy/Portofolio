import Navbar from "./Components/Navbar/Navbar";
import Presentation from "./Components/Presentation/Presentation";
import Propos from "./Components/Propos/Propos";
import Compétences from "./Components/Compétences/Compétences";
import Projets from "./Components/Projets/Projets";
import Contact from "./Components/Contact/Contact";

function App() {
  return (
    <div>
      <Navbar />
      <Presentation />
      <Propos />
      <Compétences />
      <Projets />
      <Contact />
    </div>
  );
}

export default App;
