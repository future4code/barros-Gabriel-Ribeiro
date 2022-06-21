import foto from './foto.jpg';
import './App.css';

function App() {

  const clicouBotao = () => {
    alert("Boa Noite!")
  }

  return (
    <div className="App">
      <header className="App-header">
        <h2>
          Olá, eu me chamo Gabriel Ribeiro.
        </h2>
        <img src={foto} className="App-logo" alt="foto" />
        <p>E esse é o meu primeiro site feito no react.</p>
        <button onClick={clicouBotao}>Aperte esse botão</button>
      </header>
    </div>
  );
}

export default App;