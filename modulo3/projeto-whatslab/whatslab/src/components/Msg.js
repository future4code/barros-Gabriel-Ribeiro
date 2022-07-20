import React from 'react'
import { Mensagens } from '../style'

function Msgs(props){
    return(
        <Mensagens>
        <div>
          <p><b>{props.nomeUsuario}:</b></p> 
          <p>{props.userMsg}</p>
        </div>
        </Mensagens>
      )
      }

export default Msgs
