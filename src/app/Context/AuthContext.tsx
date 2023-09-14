"use client";

import { useContext, createContext, useState, useEffect } from "react";
import {
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "@/app/firebase/config";
import { useRouter } from "next/navigation";

const AuthContext = createContext({});
export const AuthContextProvider = ({ children }: any) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>();

  const googleSignIn = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider);
    router.push("/profile");
  };
  const signout = () => {
    signOut(auth);
  };
  const signinWithEmail = (email: string, password: string) => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const loginWithEmail = (email:string,password:string)=>{
    signInWithEmailAndPassword(auth,email,password)
  }

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSub();
  }, [user]);
  return (
    <AuthContext.Provider
      value={{ user, googleSignIn, signout, signinWithEmail,loginWithEmail }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};
