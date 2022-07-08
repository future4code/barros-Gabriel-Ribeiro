import React, { useState } from 'react';
import Post from './components/Post/Post';
import { Formulario, MainContainer, MyForm } from './style';


function App() {
/*return(
  <div className='MainContainer'>
           <Post
            nomeUsuario={<b>Paulinha</b>}
            fotoUsuario={'https://picsum.photos/50/50'}
            fotoPost={'https://picsum.photos/200/150'}
          />
            <Post
            nomeUsuario={<b>Paulão</b>}
            fotoUsuario={'https://cdn.pixabay.com/photo/2015/07/20/07/02/man-852427_960_720.jpg'}
            fotoPost={'https://randomwordgenerator.com/img/picture-generator/54e4dc474f50ac14f1dc8460962e33791c3ad6e04e507749742c78d69e4dc5_640.jpg'}
          />
            <Post
            nomeUsuario={<b>Paulette</b>}
            fotoUsuario={'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg'}
            fotoPost={'https://randomwordgenerator.com/img/picture-generator/54e2d64a4e50ac14f1dc8460962e33791c3ad6e04e50744172297cd6974cc4_640.jpg'}
          />
  </div>
)*/

const [arrayPosts,setArrayPosts] = useState([
  {nomeUsuario:"Paulinha",fotoUsuario:'https://picsum.photos/50/50',fotoPost:'https://picsum.photos/200/150'},
  {nomeUsuario:"Paulão",fotoUsuario:'https://cdn.pixabay.com/photo/2015/07/20/07/02/man-852427_960_720.jpg',fotoPost:'https://randomwordgenerator.com/img/picture-generator/54e4dc474f50ac14f1dc8460962e33791c3ad6e04e507749742c78d69e4dc5_640.jpg'},
  {nomeUsuario:"Paulette",fotoUsuario:'https://cdn.pixabay.com/photo/2017/05/13/12/40/fashion-2309519_960_720.jpg',fotoPost:'https://randomwordgenerator.com/img/picture-generator/54e2d64a4e50ac14f1dc8460962e33791c3ad6e04e50744172297cd6974cc4_640.jpg'},
])

const [inputName, setInputName]=useState("");
const [inputProfile, setInputProfile]=useState("");
const [inputPost, setInputPost]=useState("");

const PostMap = arrayPosts.map((item)=>
    {return (
             <Post
                   nomeUsuario={item.nomeUsuario} 
                   fotoUsuario={item.fotoUsuario} 
                   fotoPost={item.fotoPost}/>
            )})

  const mudaNome=(event)=>{
    setInputName(event.target.value)
    console.log();
    console.log(inputName);
  }
  const mudaProfile=(event)=>{
    setInputProfile(event.target.value)
    console.log(inputProfile);
  }
  const mudaPost=(event)=>{
    setInputPost(event.target.value)
    console.log(inputPost);
  }
  const adiconar=(e)=>{
    e.preventDefault() 
    const itensAtualizados=[...arrayPosts,{nomeUsuario:inputName,fotoUsuario:inputProfile,fotoPost:inputPost}]
    setArrayPosts(itensAtualizados)
    console.log("botão precionado!");
    setInputName("")
    setInputProfile("")
    setInputPost("")
  }

return (
  <MainContainer>
    <Formulario action=''>
                <input type='text' required placeholder='Nome' value={inputName} onChange={mudaNome}></input>
                <input type='text' required placeholder='Foto Perfil' value={inputProfile} onChange={mudaProfile}></input>
                <input type='text' required placeholder='Foto Post' value={inputPost} onChange={mudaPost}></input>
                <button onClick={adiconar}>Adicionar</button>
  </Formulario>
    {PostMap}
  </MainContainer>
)
}


export default App;
