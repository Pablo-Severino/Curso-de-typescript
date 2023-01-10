import React, { useContext } from 'react'
import { UsuarioLogadoContext } from '../../../shared/contexts';

interface IButtonLogin {
  type?: "button" | "submit" | "reset";
  onClick: () => void;
  children?: React.ReactNode
}

export const ButtonLogin: React.FC<IButtonLogin> = ({type, onClick, children}) => {

  const { nomeDoUsuario } = useContext(UsuarioLogadoContext);

  return (
    <button type={type} onClick={onClick}>
      {nomeDoUsuario} {children}
    </button>
  )
}
