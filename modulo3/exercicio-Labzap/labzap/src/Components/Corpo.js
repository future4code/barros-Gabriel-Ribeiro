import React from "react";
import {Divisor,Espaço} from "../style"

export default function Corpo(){
    return(
        <Divisor>
          <Espaço><span><b>Remetente:</b></span><input></input>
          <span><b>Mensagem:</b></span><input></input></Espaço>
        </Divisor>
    )
}