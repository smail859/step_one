import "./App.css";
import Greeting from "./Greeting";
import Age from "./Age";
import Origine from "./Origine";
import WelcomeForm from "./WelcomeForm";

// Utilisation des props name et message du fichier Greeting.js
function App() {
  return (
    <div>
      <Greeting message="Bonjour" name="Smaïl" />
      <Age />
      <Origine />
      <WelcomeForm />
    </div>
  );
}

export default App;
