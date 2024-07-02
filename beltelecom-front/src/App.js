import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './component/header/header';
import Footer from './component/footer/footer';
import First from './component/rates/rates';
import Users from './component/users/users';
import Branches from './component/branches/branches';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/rates" element={<First/>}/>
          <Route path="/users" element={<Users/>}/>
          <Route path="/branches" element={<Branches/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
