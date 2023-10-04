import { Route, Routes } from 'react-router-dom';
import './App.scss';
import MainPage from './pages/MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <header className="app-header container"></header>
      <main className="app-main container">
        <Routes>
          <Route path="/" element={<MainPage />}></Route>
        </Routes>
      </main>
    </div>
  );
}

export default App;
