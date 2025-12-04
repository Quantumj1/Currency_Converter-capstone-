import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import UserInput from './components/UserInput'
import './index.css'

function App() {
  

  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage/>}/>
          <Route path='' element={<UserInput/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App
