import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import CatFactsPage from "./pages/CatFactsPage";
import TestCookiePage from './pages/TestCookiePage';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/cat-facts" element={<CatFactsPage />} />
          <Route path='/test-cookie' element={<TestCookiePage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
