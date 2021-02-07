import {Dispatcher} from "../../../../Utils/Core/Dispatcher/Dispatcher";
import {actionTypes} from "../../../../Utils/Core/Actions/Global/Toast/Toast.Actions";

export class ToastProvider {
    public static Show({open, type, message, duration, verticalAlign, horizontalAlign,}: Partial<{ open: boolean, type: 'error' | 'success' | 'warning' | 'info' | 'general', message: string, duration: any, verticalAlign: 'top' | 'bottom', horizontalAlign: 'center' | 'left' | 'right' }>) {
        Dispatcher.dispatch({
            type: actionTypes.SET_TOAST,
            payload: {
                open,
                type,
                message,
                duration,
                verticalAlign,
                horizontalAlign,
            }
        })
    }

    public static hide(): void {
        this.Show({open: false});
    }
}