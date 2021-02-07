import {RouterProvider} from "../../Vendor/Service/Providers/Core/Router/RouterProvider";
import {withStore} from "../../Vendor/Service/Providers/Core/GlobalData/GlobalDataProvider";
import {Store} from "../../Vendor/Utils/Data/Store";
import {AuthProvider} from "../../Vendor/Service/Providers/Auth/AuthProvider";
import {HTTPRequestProvider} from "../../Vendor/Service/Providers/Core/HttpRequest/HttpRequestProvider";
import {AlertDialogProvider} from "../../Vendor/Service/Providers/Core/AlertDialog/AlertDialogProvider";
import {ToastProvider} from "../../Vendor/Service/Providers/Core/Toast/ToastProvider";

/**
 * @interface of the Service Providers
 * @includes all the inherited types and properties
 *
 * You can register your types and properties here for type checking
 */
interface IServices {
    CORE: {
        /**
         * You can register your core services types here
         */

        ROUTER: {
            Link: typeof RouterProvider.Link,
            Route: typeof RouterProvider.Route,
            BrowserRouter: typeof RouterProvider.BrowserRouter,
            HashRouter: typeof RouterProvider.HashRouter,
            Switch: typeof RouterProvider.Switch,
            withRouter: typeof RouterProvider.withRouter,
            CommonRoute: typeof RouterProvider.CommonRoute,
            PublicRoute: typeof RouterProvider.PublicRoute,
            PrivateRoute: typeof RouterProvider.PrivateRoute,
            RouteMatched: typeof RouterProvider.RouteMatched,
        },
        ALERT_DIALOG: typeof AlertDialogProvider,
        TOAST: typeof ToastProvider,
        GLOBAL_DATA: {
            STORE: typeof Store,
            WITH_STORE: typeof withStore,

            STORES: Array<any>,
        },
    },

    /**
     * Other Service Provider Types
     */
    AUTH: typeof AuthProvider,
    HTTP_REQUEST: typeof HTTPRequestProvider,
}


const Services: IServices = {
    /**
     * You can register your service providers here
     */

    CORE: {
        ROUTER: RouterProvider,
        ALERT_DIALOG: AlertDialogProvider,
        TOAST: ToastProvider,
        GLOBAL_DATA: {
            STORE: Store,
            WITH_STORE: withStore,

            STORES: [],
        }
    },
    AUTH: AuthProvider,
    HTTP_REQUEST: HTTPRequestProvider,
};

export {Services as SERVICES};