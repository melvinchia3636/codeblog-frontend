import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./Homepage";
import Projects from "./Projects";
import Navbar from "./Navbar";
import ProjectList from "./ProjectList";

function App(): JSX.Element {
    const location = useLocation();
    const [ page, setPage ] = useState(0);
    
    if (location.pathname == "/") document.body.onkeyup = function(e){
        setPage(e.code == "Space" && page + 1 < 33 ? page + 1 : 0);
    };

    return (
        <>
            <Navbar page={page} setPage={setPage}/>
            <main className="h-full">
                <Route>
                    <Switch>
                        <Route exact path="/"><Landing page={page} setPage={setPage}/></Route>
                        <Route exact path="/home"><Landing page={page} setPage={setPage}/></Route>
                        <Route exact path="/projects"><Projects/></Route>
                        <Route path="/projects/:id" component={ProjectList} />
                    </Switch>
                </Route>
            </main>
        </>
    );
}

export default App;
