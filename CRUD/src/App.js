import Create from './Components/Create';
import {Routes,Route} from 'react-router-dom';
import Read from './Components/Read';
import Edit from './Components/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element = {<Create />} />
        <Route path='/read' element={<Read />} />
        <Route path='/edit/:id' element={<Edit />} />
      </Routes>
    </div>
  );
}
export default App;
