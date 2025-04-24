
import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import SearchPage from './pages/SearchPage';

const App: React.FC = () => {
  return (
    <div className="App">
      <SearchPage />
      <ToastContainer />
    </div>
  );
};

export default App;
