import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './Game';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Game />} />
        </Routes>
      </BrowserRouter>      
    </div>
  );
}

export default App;
