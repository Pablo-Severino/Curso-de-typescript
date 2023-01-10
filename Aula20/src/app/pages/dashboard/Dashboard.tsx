import { useCallback, useState } from "react";


export const Dashboard = () => {
  const [lista, setLista] = useState<string[]>(['Teste1', 'Teste2', 'Teste3', 'Teste4']);

  const handleInputkeyDown: React.KeyboardEventHandler<HTMLInputElement> = useCallback((e) => {
    if (e.key === 'Enter') {
      if (e.currentTarget.value.trim().length === 0) return;

      const value = e.currentTarget.value;

      e.currentTarget.value = '';

      setLista((oldLista) => {
        if (oldLista.includes(value)) return oldLista;

        return [...oldLista, value];
      });
    }
  }, []);

  return (
    <div>
      <p>Dashboard</p>

      <input onKeyDown={handleInputkeyDown} />

      <ul>
        {lista.map((value) => {
          return <li key={value}>{value}</li>
        })}
      </ul>

    </div>
  );
}