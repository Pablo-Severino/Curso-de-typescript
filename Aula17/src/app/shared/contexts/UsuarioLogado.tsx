import { createContext } from "react";

interface IUsuarioLogadoProvider {
  children: React.ReactNode
}

interface IUsuarioLogadoContextData {
  nomeDoUsuario: string;
}

export const UsuarioLogadoContext = createContext<IUsuarioLogadoContextData>({} as IUsuarioLogadoContextData);

export const UsuarioLogadoProvider: React.FC<IUsuarioLogadoProvider> = ({ children }) => {
  return (
    <UsuarioLogadoContext.Provider value={{ nomeDoUsuario: 'Banana' }}>
      {children}
    </UsuarioLogadoContext.Provider>
  );
};