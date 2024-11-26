import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import RegisterPage from "./pages/RegisterPage";
import CatFactsPage from "./pages/CatFactsPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<RegisterPage />} />
          <Route path="/cat-facts" element={<CatFactsPage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
