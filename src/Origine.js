import React, { useState } from "react";

function Origine() {
  const [origine, setOrigine] = useState("");
  const [submit, setSubmit] = useState("");

  const handleChange = (event) => {
    setOrigine(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setSubmit(origine); // Enregistre l'origine soumise
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {" "}
        {/* Ajoute onSubmit ici */}
        <input
          type="text"
          value={origine}
          placeholder="Entre ton origine"
          onChange={handleChange}
        />
        <button type="submit">Ajoute ton origine</button>
      </form>
      {submit && <p>Votre origine est : {submit}</p>}{" "}
    </div>
  );
}

export default Origine;
