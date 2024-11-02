import "./App.css";
import Greeting from "./Greeting";

// Utilisation des props name et message du fichier Greeting.js
function App() {
  return (
    <div>
      <Greeting message="Bonjour" name="Smaïl" />
      <Greeting message="Bonjour" name="Alice" />
    </div>
  );
}

export default App;
