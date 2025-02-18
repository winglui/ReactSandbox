import { useAtom, useAtomValue } from "jotai";
import { counterAtom, doubleCounterAtom } from "./atoms";

export const Counter = () => {
  const setCount = useAtom(counterAtom)[1];
  const doubleAtom = useAtomValue(doubleCounterAtom);
  return (
    <div>
      <button onClick={() => setCount((prev: number) => prev + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prev: number) => prev - 1)}>
        Decrement
      </button>
      {doubleAtom}
    </div>
  );
};
