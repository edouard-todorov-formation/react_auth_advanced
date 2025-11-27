import { useState } from "react";

import { register } from "../services/api";

// function RegisterForm() {
//     //etat pour stocker les valeurs du form
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     //etat pour stocker les messages erreurs 
//     const [message, setMessage] = useState("");
//     //etat pour savoir si on est en train d'envoyer une request
//     const [loading, setLoading] = useState(false);

//     //la function utilisé quan don soumet un formulaire
//     async function handleSubmit(event) {
//         //empeche le rechargement de la page
//         event.preventDefault();
//         //je change le status du state loading
//         setLoading(true);
        
//         try {
//             const response = await register(email, password);
//             setMessage("Inscription réussie !");
//         } catch (error) {
//             setMessage("Erreur lors de l'inscription");
//         }
        
//         setLoading(false);
//     }

//     return (
//         <div>
//             <h2>Inscription</h2>

//             {/* afficher le message */}
//             {message && <p>{message}</p>}

//             {/* formulaire avec la logique de submit */}
//             <form onSubmit={handleSubmit}>
//                 <div>
//                     <label>Email:</label>
//                     <input 
//                         type="email" 
//                         value={email} 
//                         onChange={(e) => setEmail(e.target.value)}
//                     />
//                 </div>

//                 <div>
//                     <label>Mot de passe:</label>
//                     <input 
//                         type="password" 
//                         value={password} 
//                         onChange={(e) => setPassword(e.target.value)}
//                     />
//                 </div>

//                 <button type="submit" disabled={loading}>
//                     {loading ? "Chargement..." : "S'inscrire"}
//                 </button>
//             </form>
//         </div>
//     );
// }

// export default RegisterForm;


// import { useState } from "react";

// import { register } from "../services/api";

function RegisterForm() {
    //etat pour stocker les valeurs du form
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //etat pour stocker les messages erreurs 
    const [message, setMessage] = useState("");
    //etat pour savoir si on est en train d'envoyer une request
    const [loadind, setLoading] = useState("false");

    //la function utilisé quan don soumet un formulaire
    async function handleSubmit(event) {
        //empeche le rechargement de la page
        event.preventDefault();
        //je change le status du state loading
        setLoading(true);
        
        alert("je suis en train de soumettre mon form");
    }

    return (
        <div>
            <h2>Inscription</h2>

            {/* formulaire ave cla logique de submit */}
            <form onSubmit={handleSubmit}>
                {loading ? "chargement" :"s'inscrire"}
            </form>
        </div>
    )
}

export default RegisterForm;