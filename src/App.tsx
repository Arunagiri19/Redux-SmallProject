import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './components/Login'
import Review from './components/Review'



function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/review' element={<Review />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
