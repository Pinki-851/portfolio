import { combineReducers } from "redux";
import CardReducer from "./reducer/CardReducer";
import { createStore } from "redux";

const RootReducer = combineReducers({ cardReducer: CardReducer });
const Store = createStore(RootReducer);

export default Store;
