import React from "react";
import { Route, Switch } from "react-router-dom";
import Homepage from "./Homepage";
import Navbar from "./Navbar";
import ProjectIndex from "./ProjectIndex";

function App(): JSX.Element {
    return (
        <>
            <Navbar/>
            <main>
                <Route>
                    <Switch>
                        <Route exact path="/"><Homepage/></Route>
                        <Route exact path="/home"><Homepage/></Route>
                        <Route exact path="/projects"><ProjectIndex/></Route>
                    </Switch>
                </Route>
            </main>
        </>
    );
}

export default App;
