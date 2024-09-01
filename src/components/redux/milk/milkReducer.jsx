import { BUY_MILK } from "./milkTypes";

const initialState = {
  numberOfMilks: 10,
};

export default function milkReducer(state = initialState, action) {
  switch (action.type) {
    case BUY_MILK: {
      return {
        ...state,
        numberOfMilks: state.numberOfMilks - action.payload,
      };
    }
    default:
      return state;
  }
}
