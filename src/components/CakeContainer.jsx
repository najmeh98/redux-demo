import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function CakeContainer() {
  // 1. accepts a function as its parameter: selector function
  // 2. useSelector hooks return whatever returns by selector function
  const state = useSelector((state) => state);

  // returns a reference to the dispatch function in redux store
  const dispatch = useDispatch();
  const [value, setvalue] = useState("");
  return (
    <div>
      <h2>Cake Number:{state.numOfCakes}</h2>

      <input type="" value={value} onChange={(e) => setvalue(e.target.value)} />

      <button onClick={() => dispatch({ type: "BUY_CAKE", payload: value })}>
        buy cake
      </button>
    </div>
  );
}
