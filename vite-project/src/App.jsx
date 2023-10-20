import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Home from './pages/Home'
import Settings from './pages/Settings'
import Header from './components/Header'


function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Login />}></Route>
          <Route path='/home' element={ <Home />}></Route>
          <Route path='/settings' element={<Settings />}></Route>
        </Routes>
      </BrowserRouter>
    </>    
  )
}

export default App
