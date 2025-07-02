import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header.js";
import Body from "./components/Body.js";





const Footer = () =>{

      return (
            <div className="Footer">
                  <div> </div>
            </div>
      )
}








         
 const AppLayout = () =>{// this is our App component , just a JS function 
                        // consider this as a big div container and we will return a div from here
    return ( <div className="app">
      <Header/>
      <Body/>
      </div>)


 };
 
 
 const root = ReactDOM.createRoot(document.getElementById("root"));
                   root.render(<AppLayout/>)
                  
  