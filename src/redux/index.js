import { createStore } from "redux";
import  {reducer}  from "./reducers/reducers";

export const counterStore = () => {
    const store = createStore(reducer);
    return store;
}