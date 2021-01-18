import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import store from "./redux/redux-store";
import {HashRouter, Route, Switch} from "react-router-dom";
import UsersContainer from "./components/Users/UsersContainer";
import Navbar from "./components/Nav/Navbar";

function App() {
    return (
        <div className="App">
            <Navbar/>
            <div className='contentContainer'>
                <Switch>
                    <Route exact render={() =>
                        <div>Home Page</div>
                    } path='/'/>

                    <Route render={() =>
                        <UsersContainer/>
                    } path='/users'/>

                    <Route render={() => <div>404 page not found</div>} path='*'/>
                </Switch>
            </div>
        </div>
    );
}

const AppContainer = () => {
    return <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
};

export default AppContainer;
