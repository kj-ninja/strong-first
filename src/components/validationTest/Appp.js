import React from "react";
import Login from "./Login";
import Test from "./Test";

import { Switch, Route } from "react-router-dom";

class App extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path={["/login", "/"]}>
                    <Login />
                </Route>
                <Route exact path="/test">
                    <Test />
                </Route>
            </Switch>
        );
    }
}

export default App;