import React from 'react'
import {Route, Switch, BrowserRouter} from 'react-router-dom'
import Home from './pages/home'
import Header from './components/header'
import Erro from './components/erro'

export const Routes = () => {
    return (
        <BrowserRouter>
            <Header></Header>
            <Switch>
                <Route exact path='/' component={Home}></Route>
                <Route path='*' component={Erro}></Route>
            </Switch>
        </BrowserRouter>
    )
}