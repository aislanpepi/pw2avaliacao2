import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import App from "./App";
import Create from "./components/Create/Create";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component = { App }  path="/" />
           <Route path="/create" component = { Create } />
       </BrowserRouter>
   )
}

export default Routes;