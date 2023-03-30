
import './App.css';
import ButtonAnt from './components/ButtonAnt';
import ImageAnt from './components/ImageAnt';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ImageAnt LinkImmagine="https://placedog.net/500"  AltImmagine="img" />
       <ButtonAnt name="Cliccami!"/>
       <ButtonAnt name="Mangiami!"/>
      </header>
    </div>
  );
}

export default App;
