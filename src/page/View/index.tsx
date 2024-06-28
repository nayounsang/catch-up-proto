import { useState } from "react"
import AppBar from "./Component/AppBar";

export default function View(){
    const [isOpen,setIsOpen] = useState(true);
    return(
        <>
        <AppBar isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}