import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UserInput from './components/UserInput'
import './index.css'

function App() {
  

  return (
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='/userInput' element={<UserInput/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
