import {combineReducers} from "redux";
import {AUTH} from "./Global/Auth/Auth.Reducer";
import {ALERT_DIALOG} from "./Global/AlertDialog/AlertDialog.Reducer";

export const RootReducer: any = combineReducers({
    ALERT_DIALOG,
    AUTH: AUTH,
});