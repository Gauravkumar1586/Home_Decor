import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import GalleryContext from "./GalleryContext";

const ContextData=(props)=>{
const [first ,setfirst]=useState("gaurav");
const [cart,setcart]=useState(0)
return(


    <GalleryContext.Provider value={{first,cart,setcart}}>
        {props.children}
      </GalleryContext.Provider>

)
}
export default ContextData;