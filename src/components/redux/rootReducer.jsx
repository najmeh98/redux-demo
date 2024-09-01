import { combineReducers } from "redux";
import cakeRedux from "./cake/cakeRedux";
import milkReducer from "./milk/milkReducer";
import userReducer from "./user/uerReducer";

export const rootReducer = combineReducers({
  cake: cakeRedux,
  milk: milkReducer,
  users: userReducer,
});
