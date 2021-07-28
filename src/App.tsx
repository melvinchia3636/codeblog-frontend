import React from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Homepage";
import Navbar from "./Navbar";
import ProjectIndex from "./ProjectIndex";

function App(): JSX.Element {
    return (
        <>
            <main>
                <Navbar/>
                <Route>
                    <Switch>
                        <Route exact path="/"><Landing/></Route>
                        <Route exact path="/home"><Landing/></Route>
                        <Route exact path="/projects"><ProjectIndex/></Route>
                    </Switch>
                </Route>
            </main>
        </>
    );
}

export default App;
