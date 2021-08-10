import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useEffect,
} from "react";

import { useRouter } from "next/router";

import { firebase, auth } from "services/firebase";

type User = {
  name: string;
  email: string;
  avatar: string;
};

type AuthContextType = {
  user: User | undefined;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
};

type AuthProviderProps = {
  children: ReactNode;
};

const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps): JSX.Element {
  const router = useRouter();

  const [user, setUser] = useState<User>();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const { displayName: name, email, photoURL: avatar } = user;

        setUser({ name, email, avatar });
      } else {
        setUser(undefined);
        router.push("/");
      }
    });

    return () => unsubscribe();
  }, [router]);

  async function signIn(): Promise<void> {
    const provider = new firebase.auth.GoogleAuthProvider();

    try {
      const result = await auth.signInWithPopup(provider);

      const { displayName: name, email, photoURL: avatar } = result.user;

      setUser({ name, email, avatar });
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Deu pau no servidor :(", error);
    }
  }

  async function signOut(): Promise<void> {
    await auth.signOut();
    setUser(undefined);
  }

  const contextValue: AuthContextType = { user, signIn, signOut };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth(): AuthContextType {
  return useContext(AuthContext);
}
