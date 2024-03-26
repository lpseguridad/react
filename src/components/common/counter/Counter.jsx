import { useState } from "react";

const Counter = () => {
  const [contador, setContador] = useState(1);

  const sumar = () => {
    setContador(contador + 1);
  };
  const restar = () => {
    setContador(contador - 1);
  };

  return (
    <div>
      <button onClick={restar}>Restar</button>
      <h4>{contador}</h4>
      <button onClick={sumar}>Sumar</button>
    </div>
  );
};

export default Counter;
