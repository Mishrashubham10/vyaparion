'use client';

import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useCallback,
} from 'react';

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
  return ctx;
};

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  /**
   * Lazy initialization to read from localStorage
   * (prevents setState inside useEffect)
   */
  const [user, setUser] = useState<User | null>(() => {
    if (typeof window === 'undefined') return null;

    try {
      const stored = localStorage.getItem('vt_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });

  const login = useCallback(
    async (email: string, _password: string): Promise<boolean> => {
      const u: User = {
        id: crypto.randomUUID(),
        name: email.split('@')[0],
        email,
      };

      setUser(u);
      localStorage.setItem('vt_user', JSON.stringify(u));

      return true;
    },
    [],
  );

  const signup = useCallback(
    async (
      name: string,
      email: string,
      _password: string,
    ): Promise<boolean> => {
      const u: User = {
        id: crypto.randomUUID(),
        name,
        email,
      };

      setUser(u);
      localStorage.setItem('vt_user', JSON.stringify(u));

      return true;
    },
    [],
  );

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('vt_user');
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        signup,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};