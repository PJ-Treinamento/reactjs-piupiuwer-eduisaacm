import React from 'react';
import {Switch} from 'react-router-dom';

import Feed from '../pages/feed/index';
import Login from "../pages/login/index";
import Route from './Route';
import Redirection from './redirect';



const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={ Login } />
            <Route 
                path="/feed"   
                component={ Feed } 
                isPrivate
            />

            <Route component={ Redirection } />
        </Switch>
    )
}

export default Routes;