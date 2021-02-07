import React from "react";
import {Route, Redirect} from 'react-router-dom';
import {AuthProvider} from "../../Auth/AuthProvider";
import {ROUTE_PATHS} from "../../../../../Routes/RoutePaths";

export const CommonRoute: any = ({component: Component, ...rest}: any) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                return <Component {...props} />;
            }}
        />
    )
};

export const PublicRoute: any = ({component: Component, ...rest}: any) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const Auth: any = new AuthProvider();
                return !Auth.check() ?
                    <Component {...props} /> :
                    <Redirect to={ROUTE_PATHS.PRIVATE.ROOT}/>;
            }}
        />
    )
};

export const PrivateRoute: any = ({component: Component, ...rest}: any) => {
    return (
        <Route
            {...rest}
            render={(props) => {
                const Auth: any = new AuthProvider();
                return Auth.check() ?
                    <Component {...props} /> :
                    <Redirect to={ROUTE_PATHS.PUBLIC.LOGIN}/>;
            }}
        />
    )
};