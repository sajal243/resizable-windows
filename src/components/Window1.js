import React from "react";
import "../App.css";
import ResizableBox from "./ResizableBox";

function App() {
    return (

       <>
        <div className="main-container">

            <div className="upper" >
                <ResizableBox id={1} />
                <ResizableBox id={2} />
            </div>
            <div className="lower">
                <ResizableBox id={3} />
            </div>
            
        </div>
       </> 
     
    );
  }

export default App;