import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Landing from "./Homepage";
import Navbar from "./Navbar";

function App(): JSX.Element {
    const [ page, setPage ] = useState(0);

    
    document.body.onkeyup = function(e){
        if(e.code == "Space") {
            setPage(page + 1);
        }
    };

    return (
        <>
            <Navbar page={page} setPage={setPage}/>
            <main>
                <Route>
                    <Switch>
                        <Route exact path="/"><Landing page={page} setPage={setPage}/></Route>
                        <Route exact path="/home"><Landing page={page} setPage={setPage}/></Route>
                    </Switch>
                </Route>
            </main>
        </>
    );
}

export default App;
