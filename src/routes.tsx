import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
            </Switch>
        </BrowserRouter>
    )
}