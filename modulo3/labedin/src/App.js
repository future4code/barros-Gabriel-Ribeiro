import React from 'react';
import './App.css';
import CardPequeno from './CardPequeno/CardPequeno';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fsdu9-1.fna.fbcdn.net/v/t1.6435-1/38144347_1941117415909212_2335077919589662720_n.jpg?stp=dst-jpg_p160x160&_nc_cat=101&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeGqrbr-uNnKR3JlCp7rV24imbVRwBRL2QeZtVHAFEvZB0x-l9uYe59O8RNCAY6krNwHmbWhl4Bne77j50IEpwKS&_nc_ohc=fXsmeOgxFMEAX_hplgM&_nc_ht=scontent.fsdu9-1.fna&oh=00_AT8nYH48-qRySIUtLI-t9fqOU6zL0WIizgg7i-G0GXYz4Q&oe=62DB2DD7" 
          nome="Gabriel Ribeiro" 
          descricao="Olá, meu nome é Gabriel Ribeiro. Sou um designer gráfico que decidiu se aventurar pela programação, buscando a união dos dois. Se você também compartilha essa visão, pode falar comigo!"
        />
        
        <ImagemButton 
          imagem="https://cdn-icons-png.flaticon.com/512/271/271210.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno
          imagem="https://cdn-icons-png.flaticon.com/512/561/561188.png"
          nome="Email: "
          descricao=" Bielzinho.Hot94@hotmail.com"
          />

        <CardPequeno
          imagem="http://cdn.onlinewebfonts.com/svg/img_413790.png"
          nome="Endereço: "
          descricao=" Rua do Jacarandá Amarelo, Travessa 20, Casa Nº0"
          />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQH5ASzpQvJgPQ/company-logo_200_200/0/1644865844244?e=1663804800&v=beta&t=JSUAfwyGWfqazp3FLgf6kFiU4VHd1pylUiZT47twZWY" 
          nome="Adency" 
          descricao="Web & Motion Designer" 
        />
        
        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQGUvxstGw0ZoQ/company-logo_100_100/0/1650292432656?e=1663804800&v=beta&t=T61nSPMqQm3lry2OV5tpgB0jj6h0chZVXc6spHEdgiI" 
          nome="IT.S Tecnologia" 
          descricao="UX & UI | Designer Gráfico" 
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C4E0BAQFGmFIzyzsPoA/company-logo_100_100/0/1636582537924?e=1663804800&v=beta&t=S-8-9GWtiqP2nAaH8sPdr3mSX5PhxiNIxRvnh1obVPQ" 
          nome="Slideworks" 
          descricao="Estagiário de design gráfico" 
        />

        <CardGrande 
          imagem="https://media-exp1.licdn.com/dms/image/C560BAQFoYzb379YDfg/company-logo_100_100/0/1630030373240?e=1663804800&v=beta&t=GmmFcExS9VkCR-RgU8iM7TdmGOGYYCgjwhtgA1V1n6M" 
          nome="A2E UFF" 
          descricao="Voluntário em Design gráfico" 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
