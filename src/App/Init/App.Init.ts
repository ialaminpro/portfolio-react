import {CONFIGS} from "./Configs.Init";
import {SERVICES} from "./Services.Init";
import {MIDDLEWARES} from "./Middlewares.Init";
import {FUNCTIONS} from "./Functions.Init";
import {UTILS} from "./UTILS";
import {ROUTE_PATHS} from "../../Routes/RoutePaths";
import {EXCEPTIONS} from "./Exceptions.Init";

interface IApp {
    CONFIG: typeof CONFIGS,
    SERVICES: typeof SERVICES,
    FUNCTIONS: typeof FUNCTIONS,
    MIDDLEWARE: typeof MIDDLEWARES,
    UTILS: typeof UTILS,
    EXCEPTIONS: typeof EXCEPTIONS,
    ROUTES: typeof ROUTE_PATHS,
}

const App: IApp = {
    /**
     * Config Providers and Objects
     */
    CONFIG: CONFIGS,

    /**
     * Service Providers and Objects
     */
    SERVICES: SERVICES,

    /**
     * Function Providers and Objects
     */
    FUNCTIONS: FUNCTIONS,

    /**
     * Middleware Providers and Objects
     */
    MIDDLEWARE: MIDDLEWARES,

    /**
     * Util Service Providers and Objects
     */
    UTILS: UTILS,

    /**
     * Exception Providers and Objects
     */
    EXCEPTIONS: EXCEPTIONS,

    /**
     * Route Paths Object
     */
    ROUTES: ROUTE_PATHS,
};

export {App as APP};