import { useState } from "react";
import { register } from "../services/api";
import { useNavigate, Link } from "react-router-dom";

function RegisterForm() {
    //etat pour stocker les valeur du form
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    //etat pour stocker les messages d'erreur
    const [message, setMessage] = useState('');
    //etat pour savoir si on est en train d'envoyer une requeste
    const [loading, setLoading] = useState(false);
    //hook pour naviguer vers une autre page
    const navigate = useNavigate();

    //la function utilisé quand on soumet le formulaire
    async function handleSubmit(event) {
        //empeche le rechargement de la page quand on soumet le form
        event.preventDefault();
        //Je change le status du state loading
        setLoading(true);
        setMessage('');
        try {
            //on appelant notre service api
            const result = await register(email, password);
            //on affiche un message de succes
            setMessage('super frero, inscription réussit, éclate toi avec les injections sql')
            //faire une redirection vers login
            setTimeout(()=>{
                navigate('/login');
            }, 3000)
        } catch (error) {
            console.error('erreur', error);
            setMessage(error.message);
        }finally{
            setLoading(false);
        }
    }

    return (
        <div>
            <h2>Inscription</h2>

            {/*formulaire avec la logique de submit*/}
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        id="email" 
                        value={email} 
                        onChange={(e)=>setEmail(e.target.value)} 
                        required 
                        disabled={loading}
                    />
                </div>
                <div>
                    <label htmlFor="password">MDP:</label>
                    <input 
                        type="password"
                        id="password"
                        value={password} 
                        onChange={(e)=>{setPassword(e.target.value)}}
                        required
                        disabled={loading}
                    />
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? 'Chargement' : 'sinscrire'}
                </button>
            </form>

            {/* afficher les message de succes et d'erreurs */}
            {message}

            <div>deja un compte ? <Link to={'/login'}>Se connecter</Link></div>
        </div>
    )
}

export default RegisterForm;

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