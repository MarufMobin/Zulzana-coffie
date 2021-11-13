import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');
    
    //Register a New User 
    const registerUser = (email, password) => {
        setIsLoading(true)
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            }).finally(()=> setIsLoading(false));
    };

    // Sign in User 
    const logInUser = (email, password, location, history) => {
        setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
            })
            .catch((error) => {
                setAuthError(error.message);
            })
            .finally(() => setIsLoading(false));
    }
    



    // user State Management 
    useEffect(() => {
        setIsLoading(true)
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                setUser({})
            }
             setIsLoading(false)
        });

        return () => unsubscribe
    }, [user?.email])

    // User Sing Out 
    const logOutUser = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            setUser({})
        }).catch((error) => {
            // An error happened.
        });
    }


    return {
        user,
        registerUser,
        logOutUser,
        logInUser,
        isLoading
    }
}

export default useFirebase