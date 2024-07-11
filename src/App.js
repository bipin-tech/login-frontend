import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginSignup from './Components/LoginSignup'; // Make sure the path is correct

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginSignup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;