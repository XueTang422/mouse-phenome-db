import React from "react";
import Sidebar from "./Components/Sidebar.js";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const HomePage1 = () =>{
    return(
        <Router>
            <Sidebar />
        </Router>

    )
}

export default HomePage1;
