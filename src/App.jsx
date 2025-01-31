import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {MyRoutes} from "./routers/routes";
function App() {
  return (<div>
      <header className="header">
      <h1 className="title" >🎬Best Films </h1>
    </header>
    <MyRoutes/>
  </div>
  )
}

export default App;
