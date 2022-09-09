import React from "react";
import {Cabecalho, MyImagem} from "../style"
import Logo from "./logoHeader.png"

const Header=()=>{
    return (<Cabecalho>
        <MyImagem backImage={Logo}/>
    </Cabecalho>)
}

export default Header;