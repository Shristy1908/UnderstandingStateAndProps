import "./styles.css";
import { useState } from "react";
import Component from "./Component";

export default function App() {
  const [count, setCount] = useState(0);

  function increaseCounter() {
    setCount(count + 1);
  }

  function decreaseCounter() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
  return (
    <>
      <button onClick={() => increaseCounter()}>Increace</button>
      <button onClick={() => decreaseCounter()}>decrease</button>
      <Component count={count} />
    </>
  );
}
