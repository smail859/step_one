import { useState } from 'react';

function Form_revision() {
    const [userName, setUsername] = useState("");
    const [confirmPassword, setConfirmPassword] = useState(""); 
    const [number, setNumber] = useState("")
    const [mail, setMail] = useState("");
    const [password, setPassword] = useState("");
    const [submitted, setSubmitted] = useState(false); 
    const [errorMessages, setErrorMessages] = useState([]); 
    const [isChecked, setIsChecked] = useState(false);

    const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    
    const handleSubmit = (event) => {
        event.preventDefault()
        

        const errors = []

        if (password.length < 6 ) {
            errors.push("Le mot de passe doit contenire au moins 6 caractères")
        } else if (password !== confirmPassword) {
            errors.push("Les mot de passes doivent etre identiques")
        }

        if (!regexEmail.test(mail)) { /*Utiliser .test() pour tester une regex */
            errors.push("L'adresse mail n'est pas au bont format")
        }

        if (number.length < 10 || !number.startsWith('0')) {
            errors.push("Le numéros n'ets pas dans un format conventionnel")
        }

        if (errors.length ===  0) {
            setSubmitted(true)
            setErrorMessages([])
        } else {
            setErrorMessages(errors)

        }

    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Formulaire de révision</h1>
                <span>Nom d'utilisateur</span>

                <input type='text' value={userName} onChange={(e) => setUsername(e.target.value)}/>
                <span>Adresse mail</span>

                <input type='email' value={mail} onChange={(e) => setMail(e.target.value)}/>
                <span>Numéro de telephone</span>

                <input type='number' value={number} onChange={(e) => setNumber(e.target.value)}/>
                <span>Le mot de passe</span>

                <input type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
                <span>Confirmer le mot de passe</span>

                <input type='password' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/>
                <span>Accepter les termes du contrat</span>

                <input type='checkbox' checked={isChecked} onChange={(e) => setIsChecked(!isChecked)}/>
                <button type='submit'>Création du profil</button>

                {errorMessages.length > 0 && (<div style={{color : 'red'}} > {errorMessages.map((error, index) => <p key={index}>{error}</p>)} </div>)}
                {submitted && (
                    <p>Félicitations, votre compte a été créé avec succès ! Bienvenue, {userName} {mail}</p>
                )}
            </form>
                
        </div>

    );

}

export default Form_revision;