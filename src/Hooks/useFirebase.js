import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase()

const useFirebase = () => {
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true)

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
    const logInUser = (email, password,history, location) => {
        console.log(email, password,history,location)
        setIsLoading(true)
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                // console.log(history, location)
                const destination = location?.state?.form || "/home"
                history.push(destination)
               
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(()=> setIsLoading(false));
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
        logInUser
    }
}

export default useFirebase