import React, {useState} from 'react'
import { PostContainer,PostHeader,PostFooter,PostPhoto } from '../../style'

import {IconeComContador} from '../IconeComContador/IconeComContador'
import iconeCoracaoBranco from '../../img/favorite-white.svg'
import iconeCoracaoPreto from '../../img/favorite.svg'
import iconeMarcar from '../../img/bookmark_border_black_24dp.svg'
import iconeMarcarCheio from '../../img/bookmark_black_24dp.svg'
import iconeComentario from '../../img/comment_icon.svg'
import {SecaoComentario} from '../SecaoComentario/SecaoComentario'



function Post(props){

  const [numeroCurtidas, setnumeroCurtidas] = useState (0)
  const [curtido, setCurtido] = useState(false)
  const [comentando, setComentando] = useState(false)
  const [marcar, setMarcar] = useState(false)
  const [numeroComentarios, setNumeroComentarios] = useState(0)
  const [respostaUsuario, setRespostaUsuario] = useState("")

  const handleRespostaUsuario = (event) => {
    setRespostaUsuario(event.target.value)  
  }

  const onClickCurtida = () => {
    console.log('Curtiu!')
    setCurtido(!curtido)
    if(!curtido){
      setnumeroCurtidas(numeroCurtidas+1)
    } else {
      setnumeroCurtidas(numeroCurtidas-1)
    }
  }
  
  const onClickComentario = () => {
    setComentando(!comentando)
    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} 
      resposta={respostaUsuario} onChangeComentario={handleRespostaUsuario}/>
    }
  }

  const onClickMarcar = () => {
    setMarcar(!marcar)
  }
  
  const aoEnviarComentario = () => {
    setComentando(false)
    setNumeroComentarios(numeroComentarios + 1)
    console.log(respostaUsuario)
  }

  let iconeMarca
    if(marcar) {
      iconeMarca = iconeMarcarCheio
    } else {
      iconeMarca = iconeMarcar
    }

  let iconeCurtida

    if(curtido) {
      iconeCurtida = iconeCoracaoPreto
    } else {
      iconeCurtida = iconeCoracaoBranco
    }

    let componenteComentario

    if(comentando) {
      componenteComentario = <SecaoComentario aoEnviar={aoEnviarComentario} onChangeComentario={handleRespostaUsuario}/>
    }

  return(
    <PostContainer>
      <PostHeader>
        <img src={props.fotoUsuario} alt=""/>
        <p>{props.nomeUsuario}</p>
      </PostHeader>

      
      <PostPhoto> <img src={props.fotoPost} alt=""/> </PostPhoto>

      <PostFooter>
        <IconeComContador
          icone={iconeCurtida}
          onClickIcone={onClickCurtida}
          valorContador={numeroCurtidas}
        />
        <IconeComContador
          icone={iconeMarca}
          onClickIcone={onClickMarcar}
        />

        <IconeComContador
          icone={iconeComentario}
          onClickIcone={onClickComentario}
          valorContador={numeroComentarios}
        />
      </PostFooter>
      {componenteComentario}
    </PostContainer>
  )
  }


export default Post