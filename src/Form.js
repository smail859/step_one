import { useState } from 'react';

function Form() {
    const [userName, setUsername] = useState("");
    const [submittedUserName, setSubmittedUserName] = useState(""); // Nouvelle variable d'état pour le nom d'utilisateur soumis
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const [errorMessages, setErrorMessages] = useState([]); 

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmitted = (event) => { 
        event.preventDefault();
        const errors = [];

        verifUserName(errors);
        veriEmail(errors);
        verifPassword(errors);

        if (errors.length === 0) {
            setSubmitted(true);
            setSubmittedUserName(userName); // Met à jour le nom d'utilisateur soumis
            setUsername(""); // Vide le champ de nom d'utilisateur
            setMail("");
            setPassword("");
            setConfirmPassword("");
            setErrorMessages([]);
        } else {
            setErrorMessages(errors);
        }
    };

    const verifPassword = (errors) => {
        if (!password || !confirmPassword) {
            errors.push("Les mots de passe ne peuvent pas être vides");
        } else if (password !== confirmPassword) {
            errors.push("Vous devez indiquer deux mots de passe identiques");
        }
    };

    const verifUserName = (errors) => {
        if (userName === "") {
            errors.push("Le nom d'utilisateur est requis");
        } else if (userName.length < 10) {
            errors.push("Vous devez indiquer un nom d'utilisateur avec au moins 10 lettres");
        }   
    };

    const veriEmail = (errors) => {
        if (!regexEmail.test(mail)) { 
            errors.push("Votre adresse mail n'est pas valide");
        }   
    };

    return (
        <div>
            <h1>Ton premier formulaire</h1>
            <form onSubmit={handleSubmitted}>
                <input 
                    type="text" 
                    placeholder="Entrez votre nom d'utilisateur" 
                    value={userName} 
                    onChange={(e) => setUsername(e.target.value)} 
                />
                <input 
                    type="email" 
                    placeholder="Entrez votre adresse mail" 
                    value={mail} 
                    onChange={(e) => setMail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Entrez votre mot de passe" 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Confirmer le mot de passe" 
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)} 
                />
                <input type="file" />
                <button type="submit">Création du profil</button>
                
                {/* Affiche le message de succès avec le nom d'utilisateur soumis */}
                {/* 
                    Si "submitted" est vrai (true) ET "errorMessage" est faux (false), 
                    alors on affiche le message suivant : 
                    <p>Félicitation, votre profil est bien créé {userName}</p> 
                */}

                {submitted && errorMessages.length === 0 ? (
                    <p>Félicitation, votre profil est bien créé : {submittedUserName}</p>
                ) : null}
                {/* Equivalent */}
                {submitted && errorMessages.length === 0 && <p>Félicitation, votre profil est bien créé {submittedUserName}</p>}

                {/* Affiche les messages d'erreur */}
                {errorMessages.length > 0 && errorMessages.map((msg, index) => <p key={index} style={{ color: 'red' }}>{msg}</p>)}
            </form>
        </div>
    );
}

export default Form;
