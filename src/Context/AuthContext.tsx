import React, { useContext, useEffect, useState } from 'react';
import { auth } from '../firebase';
import firebase from 'firebase'

type IContextProps = {
  children: React.ReactNode
}

type IAuthContext = {
  signUp: (email: string, password: string) => Promise<firebase.auth.UserCredential>
}

const AuthContext = React.createContext<Partial<IAuthContext>>({});

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<IContextProps> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<firebase.User | null>();
  const [loading, setLoading] = useState(true);

  const signUp = (email: string, password: string) => {
    return auth.createUserWithEmailAndPassword(email, password)
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: firebase.User | null) => {
      setCurrentUser(user)
      setLoading(false);
    });

    return unsubscribe;
  }, [])

  const value = {
    currentUser,
    signUp
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  )
}
