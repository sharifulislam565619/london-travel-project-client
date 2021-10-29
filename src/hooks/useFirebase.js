import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup, signOut } from "firebase/auth";
import { useEffect, useState } from 'react';
import initializationAuth from '../components/Firebase/firebase.confic';


initializationAuth()
const googleProvider = new GoogleAuthProvider();

const useFirebase = () => {
    const [user, setUser] = useState([]);
    const [error, setError] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    console.log(user)



    const auth = getAuth();
    const googleSignIn = () => {
        return signInWithPopup(auth, googleProvider)

    }

    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {

                setUser(user)


            } else {
                setUser({})
            }
            setIsLoading(false)
        });

    }, [])

    const logOut = () => {
        signOut(auth).then(() => {
            setUser({})
        }).catch((error) => {
            setError(error.message)
        })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return {
        user, googleSignIn, error, logOut, setError, setUser, isLoading, setIsLoading
    }
};

export default useFirebase;