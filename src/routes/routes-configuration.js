import React, { Suspense } from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const conditionRoute = ({ props, result, authUser, rest, Component }) => {
    const { location } = props;
    if (!authUser && result.item.role.indexOf("GUEST") === -1) {
        return (
            <Redirect
                from={location.pathname}
                to={{
                    pathname: "/login",
                    state: { from: location.pathname },
                }}
            />
        );
    }

    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...rest.item} {...props} />
        </Suspense>
    );
};

const RouteConfiguration = ({ component: Component, authUser, ...rest }) => {
    const result = { ...rest };
    return (
        <div style={result.item.style}>
            <Route
                {...rest}
                render={props =>
                    conditionRoute({ props, result, authUser, rest, Component })
                }
            />
        </div>
    );
};

RouteConfiguration.defaultProps = { location: false, authUser: false };

RouteConfiguration.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func])
        .isRequired,
    authUser: PropTypes.oneOfType([
        PropTypes.bool.isRequired,
        PropTypes.shape({
            role: PropTypes.string,
            token: PropTypes.string,
        }).isRequired,
    ]),
    location: PropTypes.oneOfType([
        PropTypes.shape({
            pathname: PropTypes.string,
        }),
        PropTypes.bool,
    ]),
};

export default RouteConfiguration;
