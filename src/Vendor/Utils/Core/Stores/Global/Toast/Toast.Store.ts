import {StoreProvider} from "../../../../../Service/Providers/Core/Store/StoreProvider";
import {Dispatcher} from "../../../Dispatcher/Dispatcher";
import {actionTypes} from "../../../Actions/Global/Toast/Toast.Actions";

class ToastStore extends StoreProvider {
    constructor() {
        super();

        this.state = {
            open: false,
            verticalAlign: '',
            horizontalAlign: '',
            duration: '',
            message: '',
            type: '',
        };
    }

    public registerDispatcher(): void {
        Dispatcher.register((action: any) => {
            switch (action.type) {
                case actionTypes.SET_TOAST:
                    this.state = {
                        ...this.state,
                        ...action.payload,
                    };

                    this.emitChange();
                    break;
                default:
                    break
            }
        });
    }
}

const Store = new ToastStore();
export {Store as ToastStore}