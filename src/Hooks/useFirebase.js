import { useEffect, useState } from "react"
import initializeFirebase from "../Pages/Login/Firebase/firebase.init"
import { getAuth, signInWithPopup, updateProfile, GoogleAuthProvider, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";

initializeFirebase()

const useFirebase = () => {
    const googleProvider = new GoogleAuthProvider();
    const [user, setUser] = useState({})
    const auth = getAuth();
    const [isLoading, setIsLoading] = useState(true)
    const [authError, setAuthError] = useState('');

    // Google Sign in 
    const userGoogleSign = (location, history) => {
        setIsLoading(true)
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user
                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');
                saveUserDetails(user.email, user.displayName, 'PUT')
                setUser(user)
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
            }).finally(() => setIsLoading(false));
    }

    //Register a New User 
    const registerUser = (email, password, displayName, location, history) => {
        setIsLoading(true)
        createUserWithEmailAndPassword(auth, email, password, displayName)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                setUser(user)
                updateUser(displayName)
                // send data in database
                saveUserDetails(email, displayName, 'POST')

                const destination = location?.state?.from || '/';
                history.replace(destination);
                setAuthError('');

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;

            }).finally(() => setIsLoading(false));
    };
    // display use Name 
    const updateUser = (displayName) => {
        updateProfile(auth.currentUser, {
            displayName
        })
            .then(() => {
            })
            .catch((error) => {
            });
    }

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

    // save User Details in my database 
    const saveUserDetails = (email, displayName, method) =>{
        const user = {email, displayName}
        fetch('https://fast-fjord-39007.herokuapp.com/users',{
            method: method,
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(user)
        }).then( req => req.json()).then( data => console.log(data ))
    }

    return {
        user,
        registerUser,
        logOutUser,
        logInUser,
        isLoading,
        userGoogleSign
    }
}

export default useFirebase