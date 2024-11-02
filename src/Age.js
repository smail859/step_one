import { useState } from "react";

function Age() {
  // Créer un état pour stocker l'âge
  const [age, setAge] = useState("");
  const [submittedAge, setSubmittedAge] = useState(""); // État pour l'âge soumis

  // Fonction pour gérer le changement d'input
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
    setSubmittedAge(age); // Stocke l'âge soumis
  };

  return (
    <div>
      <input
        type="number" // Spécifie que c'est un champ pour les nombres
        placeholder="Entrez votre âge" // Attribut placeholder valide
        value={age} // Associe l'état à l'input
        onChange={handleChange} // Met à jour l'état à chaque changement
      />
      <button type="submit" onClick={handleSubmit}>
        {/* Le type submit ici permet d'envoyer le formulaire */}
        Ajoute ton age
      </button>
      <p>{submittedAge && <p>Votre age est : {submittedAge} ans </p>}</p>
    </div>
  );
}

export default Age;
