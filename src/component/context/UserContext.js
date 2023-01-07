import { createContext, useContext, useEffect, useState } from "react";

import {getAuth, onAuthStateChanged} from "firebase/auth"
import { fbAuth } from "./config";
import { useRouter } from "next/router";

export const UserContext = createContext({
    user: "",
    setUser: () => {},
    loadingUser: true,
    error: null,
  });
  
  export default function UserContextComp({ children }) {
    const [user, setUser] = useState(null);
    const [loadingUser, setLoadingUser] = useState(true); // Helpful, to update the UI accordingly.
    const [error, setError] = useState(null);
    const router = useRouter();
    const auth = getAuth();
  
    useEffect(() => {
      setLoadingUser(true);
      const unsubscriber = onAuthStateChanged(fbAuth, async (user) => {
        try {
          if (user) {
            // User is signed in.
            const { uid, displayName, email, photoURL, emailVerified } = user;
            setUser(user)
          } else {
            setUser(null);
            setLoadingUser(false);
            router.push("/login")
          }
        } catch (error) {
          // Most probably a connection error. Handle appropriately.
          setError(error);
          setLoadingUser(false);
          try {
            await getAuth().signOut();
          } catch (err) {
            return err
          }
        } finally {
          setLoadingUser(false);
        }
      });
      // Unsubscribe auth listener on unmount
      return () => unsubscriber();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [auth]);
  
    return (
      <UserContext.Provider value={{ user, setUser, loadingUser, error }}>
        {children}
      </UserContext.Provider>
    );
  }
  
  // Custom hook that shorthands the context!
  export const useUser = () => {
    const context = useContext(UserContext);
    if (context === undefined) {
      throw new Error("useUser must be used within a UserContextProvider");
    }
    return context;
  };