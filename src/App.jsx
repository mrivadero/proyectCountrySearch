import './App.css';
import Header1 from './Components/Header1/Header1'
import Form from './Components/Form/Form'
import Paragraph from './Components/Paragraph/Paragraph'
import GroupBy from './Components/GroupBy/GroupBy';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header1/>
        <Paragraph/>
        <Form/>
        <GroupBy/>
      </header>
    </div>
  );
}

export default App;
