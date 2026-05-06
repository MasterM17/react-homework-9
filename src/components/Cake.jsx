import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake, restockCakes } from "../actions/CakeActions";

export const Cake = () => {
  const [cakeNum, setCakeNum] = useState(0);
  const [resNum, setResNum] = useState(0);
  const dispatch = useDispatch();
  const cakes = useSelector((state) => state.CakeReducer.cakes);
  const error = useSelector((state) => state.CakeReducer.error);

  const onBuy = (e) => {
    e.preventDefault();
    if (cakeNum > 0) {
      dispatch(buyCake(Number(cakeNum))); // mi pravi konkatonacija pa morav da stavam Number()
      setCakeNum(0);
    }
  };

  const onRestock = (e) => {
    e.preventDefault();
    if (resNum > 0) {
      dispatch(restockCakes(Number(resNum)));
      setResNum(0);
    }
  };
  return (
    <div id="cake">
      <h2>Cakes: {cakes}</h2>
      {error && <h2>Cakes: {error}</h2>}
      <form>
        <label>Set number of Cakes to buy</label> <br />
        <input
          id="cake-input"
          type="number"
          value={cakeNum}
          onChange={(e) => setCakeNum(e.target.value)}
        />
        <button type="button" onClick={onBuy}>
          Buy cake
        </button>{" "}
        <br />
        <label>Set number to restock Cakes</label> <br />
        <input
          type="number"
          id="cake-restock-input"
          value={resNum}
          onChange={(e) => setResNum(e.target.value)}
        />
        <button type="button" onClick={onRestock}>
          {" "}
          Restock Cake
        </button>
      </form>
    </div>
  );
};
