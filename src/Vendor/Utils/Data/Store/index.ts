import {createStore} from "redux";
import {RootReducer} from "../Reducers/Root.Reducer";

export const Store: any = createStore(RootReducer);