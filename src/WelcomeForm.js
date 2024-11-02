import { useState } from "react";

function WelcomeForm() {
  const [age, setAge] = useState("");
  const [name, setName] = useState("");
  const [origine, setOrigine] = useState("");
  const [submite, setSubmitted] = useState("");

  const handleSubmite = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <div>
      <form onSubmit={handleSubmite}>
        <input
          type="text"
          value={name}
          placeholder="Entrer votre nom"
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          value={age}
          placeholder="Entrer votre age"
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          value={origine}
          placeholder="Entrer votre origine"
          onChange={(e) => setOrigine(e.target.value)}
        />
        <button type="submit"> Envoyer</button>
        {submite && (
          <p>
            Bonjour {name}, vous êtes originaire de {origine} et vous avez {age}{" "}
            ans !
          </p>
        )}
      </form>
    </div>
  );
}

export default WelcomeForm;
