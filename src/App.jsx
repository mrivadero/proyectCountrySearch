import './App.css';
import Header1 from './Components/Header1/Header1'
import Form from './Components/Form/Form'
import Paragraph from './Components/Paragraph/Paragraph'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header1/>
        <Paragraph/>
        <Form/>
      </header>
    </div>
  );
}

export default App;
