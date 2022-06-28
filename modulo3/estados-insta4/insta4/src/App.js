import React from 'react';
import Post from './components/Post/Post';
import './style.css'


function App() {
return(
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
)

}


export default App;
