//recuperation de l'url de l'api dans .env
const API_URL = import.meta.env.VITE_API_URL;

//logique d'instruction
export async function register(email, password) {
    //faire la request POST sur la route api/auth/register
    const response = await fetch(`${API_URL}/api/auth/register`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        //passer les data au body
        body: JSON.stringify({email, password}),
    });

    //parse la response json
    const data = await response.json();

    //petite gestion d'erreur
    if(!response.ok){
        throw new Error(data.Error || "inscription echoué");
    }

    return data;
}

//logique de connexion
export async function login(email, password) {
    //faire la request POST sur la route api/auth/login
    const response = await fetch(`${API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        //passer les data au body
        body: JSON/stringify({email, password}),
    });

    //traitement et parse de la response
    const data = await response.json();

        //petite gestion d'erreur
    if(!response.ok){
        throw new Error(data.Error || "connexion echoué");
    }

    return data;
}

export async function getProfil(token) {
    //prepare la requet Get sur la route api/auth/profil
    const response = await fetch(`${API_URL}/api/auth/profil`, {
        method: "GET",
        headers: {
            "Content-Type" : "application/json",
            //passer le token dans le format attendus par l'api
            "Authorization" : `Bearer ${token}`
        },
    });

    const data = await response.json();

    if(!response.ok) {
        throw new Error(data.error || "erreur lors de la récuperation du profil")
    }

    return data;
}