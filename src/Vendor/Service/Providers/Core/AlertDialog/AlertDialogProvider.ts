import {Store} from "../../../../Utils/Data/Store";
import {IAlertPayload} from "../../../../Interfaces/Global/AlertDialog/AlertDialog";
import {SET_ALERT} from "../../../../Utils/Data/Actions/Global/AlertDialog/AlertDialog.Action";


export class AlertDialogProvider {
    /**
     * Set an alert dialog statically using it's accepted options
     * @param props {object}
     * @constructor
     */
    public static Show(props: Partial<IAlertPayload>): void {
        Store.dispatch(SET_ALERT(props));
    }

    /**
     * Hide the alert dialog
     * @constructor
     */
    public static Hide(): void {
        Store.dispatch(SET_ALERT({show: false}));
    }
}