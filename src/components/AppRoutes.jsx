import React from 'react'
import {Route, Switch} from 'react-router-dom'
import Users from '../pages/Users'

const AppRoutes = () => {
    return (
        <Switch>
            <Route path='/users' component={Users}/>
        </Switch>
    )
}

export default AppRoutes
