import { useCallback, useMemo, useRef, useState } from "react"
import { InputLogin } from "./components/inputLogin";

export const Login = () => {
  const inputPasswordRef = useRef<HTMLInputElement>(null);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailLength = useMemo(() => {
    return email.length * 1000
  }, [email.length]);

  const handleEntrar = useCallback(() => {
    console.log(email);
    console.log(password);
  }, [email, password]);

  return (
    <div>
      <form>
        <p>Quantidade de caracteres no email: {emailLength}</p>
        <InputLogin
          type="email"
          label="Email"
          value={email}
          onChange={newValue => setEmail(newValue)}
          onPressEnter={() => inputPasswordRef.current?.focus()}
        />
        
        <InputLogin
        type="password"
          label="Senha"
          value={password}
          onChange={newValue => setPassword(newValue)}
        />
        {/* <label>
          <span>Senha</span>
          <input
            type="password"
            value={password}
            ref={inputPasswordRef}
            onChange={e => setPassword(e.target.value)}
          />
        </label> */}
        <button type="button" onClick={handleEntrar}>
          Entrar
        </button>
      </form>
    </div>
  )
}
