import React, { useState } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Landing from "./Homepage";
import Projects from "./Projects";
import ProjectList from "./ProjectList";
import CaseStudy from "./CaseStudy";

function App(): JSX.Element {
    const location = useLocation();
    const [ page, setPage ] = useState(0);
    
    if (location.pathname == "/") document.body.onkeyup = function(e){
        e.code == "Space" && setPage(page + 1 < 33 ? page + 1 : 0);
    };

    return (
        <>
            <main className="h-full overflow-hidden relative">
                <Route>
                    <Switch>
                        <Route exact path="/"><Landing /></Route>
                        <Route exact path="/home"><Landing /></Route>
                        <Route exact path="/projects"><Projects/></Route>
                        <Route exact path="/projects/:id" component={ProjectList} />
                        <Route path="/projects/:id/:proj_id" component={CaseStudy} />
                        <Route exact path="/blog" component={() => { 
                            window.location.href = "https://blog.thecodeblog.net"; 
                            return null;
                        }} />
                    </Switch>
                </Route>
            </main>
        </>
    );
}

export default App;
