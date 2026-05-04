import { BUY_CAKE, RESTOCK_CAKES } from "../constants/CakeConstants";

const initialState = {
  cakes: 10,
  error: "",
  //? da se dodade varijabla koga koga ke se klikne
  //? za povekje torti nego sto ima
  //? da se prikaze poraka za greska, primer klik na buy 3 cakes a ima samo 2
  // ? poraka: Not Enough Cakes only 2 cakes left
};

const CakeReducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return state.cakes < action.payload
        ? { ...state, error: `Not enough cakes only ${state.cakes} left` }
        : { ...state, cakes: state.cakes - action.payload, error: "" };
    case RESTOCK_CAKES:
      return {
        ...state,
        cakes: state.cakes + action.payload,
        error: "",
      };

    default:
      return state;
  }
};

export default CakeReducer;
