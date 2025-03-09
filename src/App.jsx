 import { BrowserRouter, Route, Routes } from 'react-router-dom';
import WaitlistPage from './pages/WaitlistPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WaitlistPage />} />
        {/* Add more routes here as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;