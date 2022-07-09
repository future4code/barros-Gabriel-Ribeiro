import React from 'react';
import { useState } from 'react';
import  Msgs  from './components/Msg';
import { Formulario, MainContainer, FormMsg } from './style';


function App() {
  const [arrayMsg,setArrayMsg] = useState ([
    {nomeUsuario:"Aviso",userMsg:'Olá, bem vinde ao chat do Gabcentro'},
    {nomeUsuario:"Fixada",userMsg:'Qual é galera, aquela praia vai rolar ou não?'}    
  ])

  const [inputName, setInputName]=useState("");
  const [inputMsg, setInputMsg]=useState("");

  const msgMap = arrayMsg.map((item)=>
    {return (
      <Msgs nomeUsuario={item.nomeUsuario} 
           userMsg={item.userMsg}/>
    )})

  const insereNome=(event)=>{
    setInputName(event.target.value)
  }
  const insereMsg=(event)=>{
    setInputMsg(event.target.value)
  }

  const enviar=(e)=>{
    e.preventDefault() 
    const msgAtualizado=[...arrayMsg,{nomeUsuario:inputName,userMsg:inputMsg}]
    setArrayMsg(msgAtualizado)
    console.log("Mensagem enviada.")
    setInputName("")
    setInputMsg("")
  }

  return (
    <MainContainer>
      {msgMap}
      <Formulario action=''>
        <input type='text' required placeholder='Nome' value={inputName} onChange={insereNome}></input>
        <FormMsg>
        <input type='text' required placeholder='Mensagem' value={inputMsg} onChange={insereMsg}></input>
        </FormMsg>
        <button onClick={enviar}>Enviar</button>
      </Formulario>
    </MainContainer>
  );
}

export default App;
