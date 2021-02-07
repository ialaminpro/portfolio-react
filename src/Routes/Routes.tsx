import React, {lazy, Suspense} from 'react';
// import ReactSplash from '../Screens/Global/ReactSplash/ReactSplash';
import {APP} from "../App/Init/App.Init";
// import Dashboard from "../Screens/Private/Dashboard/Dashboard";

const Routes = () => {
    const ROUTES = APP.ROUTES;
    const RouterProvider: any = APP.SERVICES.CORE.ROUTER;
    const Router = RouterProvider.BrowserRouter,
        Switch = RouterProvider.Switch,
        Route = RouterProvider.Route,
        RouteMatched = RouterProvider.RouteMatched,
        CommonRoute = RouterProvider.CommonRoute,
        PublicRoute = RouterProvider.PublicRoute,
        PrivateRoute = RouterProvider.PrivateRoute;

    return (
        <Router>
            <Switch>
                {/* <CommonRoute exact path={ROUTES.GLOBAL.ROOT} component={Dashboard}/>
                <CommonRoute exact path={ROUTES.GLOBAL.REACT_SPLASH} component={ReactSplash}/> */}

                {/* 404 */}
                {/* <CommonRoute exact path={"*"} component={ReactSplash}/> */}
            </Switch>
        </Router>
    );
};

export default Routes;
