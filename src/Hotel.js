import { useState } from 'react';

function Hotel() {
    const [fullName, setFullName] = useState("");
    const [mail, setMail] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [nights, setNights] = useState(1); 
    const [startDate, setStartDate] = useState(new Date().toISOString().slice(0, 10)); // Valeur par défaut
    const [isChecked, setIsChecked] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessages, setErrorMessages] = useState([]);

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmit = (event) => {
        event.preventDefault();
        const errors = [];

        if (fullName.length < 5) {
            errors.push("Votre prénom doit avoir au moins 5 caractères");
        }

        if (!regexEmail.test(mail)) {
            errors.push("Votre adresse mail n'est pas sous un format conventionnel");
        }

        if (phoneNumber.length !== 10 || !phoneNumber.startsWith("0")) { // Correction ici
            errors.push("Votre numéro n'est pas sous un format conventionnel");
        }

        if (new Date(startDate) <= new Date()) {
            errors.push("Vous devez ajouter une date dans le futur");
        }

        if (nights < 1) { // Correction ici
            errors.push("Vous devez ajouter au moins une nuit");
        }

        if (errors.length === 0) {
            setSubmitted(true);
            setErrorMessages([]);
        } else {
            setErrorMessages(errors);
            setSubmitted(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Formulaire de révision</h1>
                <span>Nom complet</span>
                <input type='text' value={fullName} onChange={(e) => setFullName(e.target.value)} />

                <span>Adresse mail</span>
                <input type='email' value={mail} onChange={(e) => setMail(e.target.value)} />

                <span>Numéro de téléphone</span>
                <input type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />

                <span>Nuits</span>
                <input type='number' min="1" value={nights} onChange={(e) => setNights(e.target.value)} />

                <span>Date de début</span>
                <input type='date' value={startDate} onChange={(e) => setStartDate(e.target.value)} />

                <span>Accepter les termes du contrat</span>
                <input type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(!isChecked)} />

                <button type='submit'>Création du profil</button>

                {errorMessages.length > 0 && 
                (
                    <div style={{ color: 'red' }}>  
                        {errorMessages.map((error, index) => <p key={index}>{error}</p>)}
                    </div>
                )}

                {submitted && (
                    <p>Félicitations, votre réservation a été effectuée avec succès ! Nom : {fullName} Email : {mail} Téléphone : {phoneNumber} Nuits : {nights} Date de début : {startDate}</p>
                )}
            </form>
        </div>
    );
}

export default Hotel;
