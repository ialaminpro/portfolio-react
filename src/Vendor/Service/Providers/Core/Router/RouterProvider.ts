import {Link, Route, BrowserRouter, HashRouter, Switch, withRouter} from 'react-router-dom';
import RouteMatched from '../../../../Functions/Core/RouteMatched';
import {CommonRoute, PublicRoute, PrivateRoute} from "./Router";

interface IRouterProvider {
    Route: typeof Route,
    BrowserRouter: typeof BrowserRouter,
    HashRouter: typeof HashRouter,
    Switch: typeof Switch,
    Link: typeof Link,
    withRouter: typeof withRouter,
    CommonRoute: typeof CommonRoute,
    PublicRoute: typeof PublicRoute,
    PrivateRoute: typeof PrivateRoute,
    RouteMatched: typeof RouteMatched,
}

export const RouterProvider: IRouterProvider = {
    Link,
    Route,
    BrowserRouter,
    HashRouter,
    Switch,
    withRouter,
    CommonRoute,
    PublicRoute,
    PrivateRoute,
    RouteMatched,
};