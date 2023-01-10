import { createContext, useCallback, useEffect, useState } from "react";

interface IUsuarioLogadoProvider {
  children: React.ReactNode
}

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
  logout: () => void;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProvider> = ({ children }) => {
  
  const [nome, setNome] = useState('');

  useEffect(() => {
    setTimeout(() => {
      console.log('Nome', nome);
      setNome('Pablo');
      console.log('Nome', nome);
    }, 1000)
  });

  const handleLogout = useCallback(() => {
    console.log("Logout executou");
  }, [])

  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: nome, logout:  handleLogout}}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};