 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaitlistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;