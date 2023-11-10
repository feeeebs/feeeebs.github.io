import React, { useContext, useEffect, useState } from 'react'
import { auth } from '../firebase'
import { onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, sendPasswordResetEmail, updatePassword, sendEmailVerification, verifyBeforeUpdateEmail } from 'firebase/auth'

const AuthContext = React.createContext()

export function useAuth() {
    return useContext(AuthContext)
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading] = useState(true)

    // sign up function - returns a promise which returns inside of Signup.js
    function signup(auth, email, password) {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    function login(auth, email, password) {
        return signInWithEmailAndPassword(auth, email, password)
    }

    function verifyEmail(auth) {
        return sendEmailVerification(auth.currentUser)
    }

    function logout(auth) {
        return signOut(auth)
    }

    function resetPassword(auth, email) {
        return sendPasswordResetEmail(auth, email)
    }

    async function updateUserEmail(currentUser, newEmail) {
        return verifyBeforeUpdateEmail(currentUser, newEmail)
    }

    function updateUserPassword(currentUser, newPassword) {
        return updatePassword(currentUser, newPassword)
    }

    // set user to current user -- only runs once since it is inside useEffect w/ empty array
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user)
            setLoading(false)
        })


        // unsubscribes from the listener when the event triggers
        return unsubscribe
    }, [])

    
    const value = {
        currentUser,
        login,
        signup,
        verifyEmail,
        logout,
        resetPassword,
        updateUserEmail,
        updateUserPassword
    }

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
  )
}
