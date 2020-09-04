import React from 'react';
import { Switch, Route } from 'react-router-dom';
import routes from './routes';
import { AuthRoute } from "../Auth/Auth";
import NavbarSmall from '../NavbarSmall/NavbarSmall';
import Notfound from '../Pages/Notfound/Notfound';

export default function Router(props) {

    return (
        <Switch>
            {routes.reduce((reducedRoutes, route) => {
                // console.log(route)
                if(route.privileged) {
                    reducedRoutes.push(
                        <AuthRoute 
                            key={route.path} 
                            path={route.path} 
                            exact={route.exact} 
                            component={route.component} 
                        />                            
                    )
                } else {
                    reducedRoutes.push(
                        <Route
                            key={route.path}
                            path={route.path}
                            exact={route.exact}
                            component={route.component}
                        />
                    )
                }    
                return reducedRoutes;            
            }, [])}
            <Route render={() => 
            <div>
            <NavbarSmall />
            <Notfound />
            </div>
        } />
        </Switch>
    )
}
