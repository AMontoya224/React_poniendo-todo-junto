import './App.css';
import PersonCard from './Componentes/PersonCard/PersonCard';



function App() {
  return (
    <div className="App">
      <PersonCard firstName="Alex" lastName="Lopez" age={28} hairColor="Brown"/>
      <PersonCard firstName="Ana" lastName="Garcia" age={25} hairColor="Red"/>
      <PersonCard firstName="Manuel" lastName="Angulo" age={21} hairColor="Brown"/>
      <PersonCard firstName="Luis Fernando" lastName="Cruz" age={35} hairColor="Black"/>
    </div>
  );
}

export default App;
