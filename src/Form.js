import { useState } from 'react';

function Form() {
    const [userName, setUsername] = useState("smail");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [mail, setMail] = useState("smail@gmail.com");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const [errorMessage, setErrorMessage] = useState(""); 

    // Regex pour vérifier le format d'un email
    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    const handleSubmitted = (event) => { 
        event.preventDefault();
        verifPassword(); // Vérifie les mots de passe
        verifUserName(); // Vérifie le nom d'utilisateur
        veriEmail(); // Vérifie l'email
        
        // Si aucune erreur, soumets le formulaire
        if (!errorMessage) {
            setSubmitted(true);
            // Réinitialiser les champs
            setUsername("");
            setMail("");
            setPassword("");
            setConfirmPassword("");
            setErrorMessage(""); // Réinitialise les messages d'erreur
        }
    };

    const verifPassword = () => {
        if (password !== confirmPassword) {
            setErrorMessage("Vous devez indiquer deux mots de passe identiques");
        } else {
            setErrorMessage("");
        }
    }

    const verifUserName = () => {
        if (userName.length < 10) {
            setErrorMessage("Vous devez indiquer un nom d'utilisateur avec au moins 10 lettres");
        } else {
            setErrorMessage("");
        }   
    }

    const veriEmail = () => {
        if (!regexEmail.test(mail)) { // Utilise .test() pour vérifier le format
            setErrorMessage("Votre adresse mail n'est pas valide");
        } else {
            setErrorMessage("");
        }   
    }

    return (
        <div>
            <h1>Ton premier formulaire</h1>
            <form onSubmit={handleSubmitted}>
                <input 
                    type="text" 
                    placeholder="Entrez votre nom d'utilisateur" 
                    value={userName} 
                    onChange={(e) => {
                        setUsername(e.target.value);
                        verifUserName(); // Vérifie à chaque changement
                    }} 
                />
                <input 
                    type="email" 
                    placeholder="Entrez votre adresse mail" 
                    value={mail} 
                    onChange={(e) => {
                        setMail(e.target.value);
                        veriEmail(); // Vérifie l'email à chaque changement
                    }} 
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
                    onChange={(e) => {
                        setConfirmPassword(e.target.value); 
                        verifPassword(); // Vérifie à chaque changement
                    }} 
                />
                <input type="file" />
                <button type="submit">Création du profil</button>
                
                {submitted && !errorMessage && <p>Félicitation, votre profil est bien créé {userName}</p>}
                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
            </form>
        </div>
    );
}

export default Form;
